<script>
  import "../../app.css";
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import pym from 'pym.js';
  import { format } from "d3-format";
  import { csvParse } from "d3-dsv";

  import { assets } from "$app/paths";
  import Cards from "$lib/layout/Cards.svelte"
  import Card from "$lib/layout/partial/Card.svelte"
  import MapStatic from '$lib/chart/MapStatic.svelte';
  import BarChart from "$lib/chart/BarChart.svelte";
  import ProfileChart from "$lib/chart/ProfileChart.svelte";
  import NumBlock from "$lib/chart/NumBlock.svelte";
  import { datasets } from "$lib/config";

  const charts = {
    "BarChart": BarChart,
    "ProfileChart": ProfileChart,
    "NumBlock": NumBlock
  }

  let name;
  let tables;
  let geojson;

  onMount(() => {
    let props = {};
    let searchParams = new URLSearchParams($page.url.hash.slice(3));
    for (let pair of searchParams.entries()) {
      if (pair[0] == 'name') {
        props[pair[0]] = atob(pair[1]);
      } else if (['tabs','poly'].includes(pair[0])) {
        props[pair[0]] = JSON.parse(atob(pair[1]));
      }
    }
    name = props.name;
    geojson = props.poly;
    tables = makeTables(props.tabs, name);

    const pymChild = new pym.Child({ id: 'profile', polling: 500 });
  });

  function makeTables(tabs, name) {
    let tables = [];
    
    for (const tab of tabs) {
      let rows = datasets[tab.key].rows;
      let vals = tab.vals;
      let data = [];
      let comp = "England and Wales";
      for (let i = 0; i < vals.length; i ++) {
        data.push({
          group: i % 2 == 0 ? name : comp,
          category: rows[Math.floor(i / 2)].label,
          value: vals[i]
        });
      }
      tables.push({meta: datasets[tab.key], data});
    }
    return tables;
  }

  function dataURL(tables) {
    // Create CSV string
    let str = "table,category,area,value,unit\n";
    for (const tab of tables) {
      let label = tab.meta.label;
      let unit = tab.meta.unit;
      for (const row of tab.data) {
        str += `"${label}","${row.category}","${row.group}",${row.value},"${unit}"\n`;
      }
    }
    return "data:text/csv;charset=utf-8," + encodeURI(str);
  }
</script>

{#if name && tables && geojson}
<h1>{name}</h1>
<Cards>
  <Card title="Area map">
    <div style:height="230px" style:width="100%">
      <MapStatic {geojson}/>
    </div>
  </Card>
  {#each tables as tab}
  <Card title={tab.meta.label}>
    <svelte:component this={charts[tab.meta.chart]} data={tab.data} suffix={tab.meta.unit} format={format(tab.meta.format)}/>
  </Card>
  {/each}
</Cards>
<span class="footnote">Source: Census 2011 data. Office for National Statistics | <a href="{dataURL(tables)}" download="{name}.csv">Download the data</a> | <a href="{assets}" target="_blank">Build your own profile</a></span>
{/if}

<style>
  h1 {
    font-size: 1.8rem;
    margin: 0 0 -12px  0;
    font-weight: bold;
  }
  .footnote {
    margin-bottom: -20px;
  }
</style>
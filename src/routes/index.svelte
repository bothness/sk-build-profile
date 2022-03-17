<script context="module">
  import { csvParse, autoType } from "d3-dsv";

  const places_url = "https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/csv/lists/places_2021.csv";
  const data_ew_url = "https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/json/place/K04000001.json";

  export async function load({ fetch }) {
    let places_raw = await fetch(places_url);
    let str = await places_raw.text();
    let places = csvParse(str, autoType);
    places.sort((a, b) => a.name.localeCompare(b.name));

    let data_ew_raw = await fetch(data_ew_url);
    let data_ew = await data_ew_raw.json();

    return {
      props: { places, data_ew }
    }
  }
</script>
<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { assets } from "$app/paths";
  import simplify from '@turf/simplify';
	import { round } from '@turf/helpers';
  import pym from 'pym.js';
  import { datasets } from "$lib/config";

  import Titleblock from "$lib/layout/Titleblock.svelte";
	import Headline from "$lib/layout/partial/Headline.svelte";
	import Subhead from "$lib/layout/partial/Subhead.svelte";
	import Content from "$lib/layout/Content.svelte";
  import Icon from "$lib/ui/Icon.svelte";

  export let places;
  export let data_ew;

  let pymParent;

  let data;
  let dataset_keys = Object.keys(datasets);
  let selected_keys = ["population", "agemed"];
  let name;
  let tables;
  let polygon;
  let selected = places[0];
  let query;

  function roundAll(arr, decimals) {
		let newarr = [];
		arr.forEach(d => {
			if (typeof d == "number") {
				newarr.push(round(d, decimals));
			} else if (Array.isArray(d)) {
				newarr.push(roundAll(d, decimals));
			} else {
				newarr.push(d);
			}
		});
		return newarr;
	}

  async function getData(id) {
    let res = await fetch(`https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/json/place/${id}.json`);
    return await res.json();
  }

  async function getBoundary(id) {
    let res = await fetch(`https://raw.githubusercontent.com/bothness/geo-bounds/main/output/${id}.geojson`);
    let feature = await res.json();
    let geojson = feature.geometry;

    let simple;
    let length = 5000;
    let precision = 5;
    while (length >= 5000 && precision >= 2) {
      simple = simplify(geojson, {highQuality: true, tolerance: Math.pow(10, -precision)});
      simple.coordinates = roundAll(simple.coordinates, precision);
      length = JSON.stringify(simple).length;
      precision -= 1;
    }
    return simple;
  }

  function makeTables(data) {
    let arr = [];
    dataset_keys.filter(d => selected_keys.includes(d)).forEach(key => {
      let vals = [];
      let table = datasets[key].table;
      let rows = datasets[key].rows;
      let measure = datasets[key].unit == "%" ? "perc" : "value";

      for (const row of rows) {
        vals.push(data.data[table][measure]["2001"][row.key]);
        vals.push(data_ew.data[table][measure]["2001"][row.key]);
      }

      arr.push({key, vals});
    });
    return arr;
  }

  function updateProfile() {
    tables = makeTables(data);
    query = `#/?name=${btoa(name)}&tabs=${btoa(JSON.stringify(tables))}&poly=${btoa(JSON.stringify(polygon))}`;
    if (!pymParent) {
      pymParent = new pym.Parent("profile", assets + '/profile/' + query, { name: "profile", id: "iframe" });
    } else {
      window.open(assets + '/profile/' + query, "profile");
    }
  }

  async function updateData(id) {
    data = await getData(id);
    name = data.name;
    polygon = await getBoundary(id);
    updateProfile();
  }

  function makeEmbed(query) {
    let url = `${assets}/profile/${query}`;
    return `<div id="profile"></div>
<script src="http://cdn.ons.gov.uk/vendor/pym/1.3.2/pym.min.js"><\/script>
<script>var pymParent = new pym.Parent("profile", "${url}", {name: "profile"});<\/script>`;
  }

  function toggle(key) {
    if (selected_keys.includes(key)) {
      selected_keys = selected_keys.filter(d => d != key);
    } else {
      selected_keys = [...selected_keys, key];
    }
    updateProfile(selected.code);
  }

  onMount(() => updateData(selected.code));
</script>

<svelte:head>
  <title>Embeddable profile demo</title>
  <meta property="og:title" content="Embeddable profile demo" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Titleblock
  mode="page"
	breadcrumb="{[
    {label: 'Home', url: `${assets}/`},
    {label: 'Embeddable profile demo'}
  ]}">
	<Headline>Embeddable profile demo</Headline>
	<Subhead>
    Select an area and one ore more topics to see an embedded profile.<br/>
    <select class="select" bind:value={selected} on:change={() => updateData(selected.code)}>
      {#each places as place}
      <option value={place}>{place.name}</option>
      {/each}
    </select>
    <div class="margin-top--2">
      {#each dataset_keys as key}
      <button class="btn" class:btn-selected={selected_keys.includes(key)} on:click={() => toggle(key)}>
        {datasets[key].label}
        {#if selected_keys.includes(key)}<Icon name="close"/>{/if}
      </button>
      {/each}
    </div>
  </Subhead>
</Titleblock>

<Content>
  <div id="profile" class="margin-top--3"/>

  {#if query}
  <p style:margin-bottom={0}>Embed code</p>
  
  <textarea>{makeEmbed(query)}</textarea>
  {/if}
</Content>

<style>
  #profile {
    width: 100%;
    border: 1px solid #aaa;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  .select {
    font-size: 1rem;
    padding: 6px 0;
  }
  .btn {
    margin: 4px 4px 0 0;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 0.9rem;
    padding: 3px 6px;
    vertical-align: baseline;
  }
  .btn-selected {
    background-color: black;
    color: white;
  }
</style>
<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import pym from 'pym.js';
  import { Map, MapSource, MapLayer } from '@onsvisual/svelte-maps';

  let props = {};

  onMount(() => {
    for (let pair of $page.url.searchParams.entries()) {
      if (pair[0] == 'name') {
        props[pair[0]] = pair[1];
      } else if (['tabs','poly','bbox'].includes(pair[0])) {
        props[pair[0]] = JSON.parse(atob(pair[1]));
      }
    }
    const pymChild = new pym.Child({ id: 'profile', polling: 500 });
  });
</script>

{#if props.name}
<h1>{props.name}</h1>
{/if}

{#if props.bbox && props.poly}
<div style:height="300px">
<Map
  style="https://bothness.github.io/ons-basemaps/data/style-esri-greyscale.json"
  location={{bounds: props.bbox}}
  interactive={false}>
	<MapSource
    id="simplified"
    type="geojson"
    data={props.poly}>
		<MapLayer
      id="simplified"
      type="line"
      paint="{{"line-color": "crimson", "line-width": 2}}"/>
	</MapSource>
</Map>
</div>
{/if}

{#if props.tabs}
{#each props.tabs as tab}
<h3>{tab.key}</h3>
<ul>
{#each Object.keys(tab.vals) as key}
  <li>{key}: {tab.vals[key].toLocaleString()}</li>
{/each}
</ul>
{/each}
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
<script context="module">
  import { csvParse, autoType } from "d3-dsv";

  const url = "https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/csv/lists/places_2021.csv";

  export async function load({ fetch }) {
    let res = await fetch(url);
    let str = await res.text();
    let places = csvParse(str, autoType);
    places.sort((a, b) => a.name.localeCompare(b.name));

    return {
      props: { places }
    }
  }
</script>
<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { assets } from "$app/paths";
  import wellknown from 'wellknown';
  import simplify from '@turf/simplify';
	import { round } from '@turf/helpers';
  import pym from 'pym.js';

  export let places;

  let pymParent;

  let data;
  let name;
  let tables;
  let polygon;
  let bounds;
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
    let query = `PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>
SELECT ?geometry
WHERE {
  <http://statistics.data.gov.uk/id/statistical-geography/${id}/geometry> geosparql:asWKT ?geometry
}
LIMIT 1`;
    let res = await fetch("https://pmd3-production-drafter-onsgeo.publishmydata.com/v1/sparql/live?query=" + encodeURIComponent(query));
    let str = await res.text();
    let row = str.split("\n")[1];
    let wkt = row.replaceAll("\"", "");
    let geojson = wellknown.parse(wkt);

    let simple;
    let length = 5000;
    let precision = 5;
    while (length >= 5000 && precision >= 2) {
      simple = simplify(geojson, {highQuality: true, tolerance: Math.pow(10, -precision)});
      simple.coordinates = roundAll(simple.coordinates, precision);
      length = JSON.stringify(simple).length;
      console.log(simple, length);
      precision -= 1;
    }

    return simple;
  }
  async function makeTables(data) {
    const tabs = ['population', 'density', 'agemed', 'age10yr', 'ethnicity'];
    let arr = [];
    tabs.forEach(key => {
      arr.push({
        key,
        vals: data.data[key].value['2011']
      });
    });
    console.log(arr);
    return arr;
  }
  async function updateData(id) {
    data = await getData(id);
    name = data.name;
    polygon = await getBoundary(id);
    bounds = data.bounds;
    tables = await makeTables(data);
    query = `?name=${name}&tabs=${btoa(JSON.stringify(tables))}&poly=${btoa(JSON.stringify(polygon))}&bbox=${btoa(JSON.stringify(bounds))}`;
    if (!pymParent) {
      pymParent = new pym.Parent("profile", assets + '/profile/' + query, { name: "profile", id: "iframe" });
    } else {
      window.open(assets + '/profile/' + query, "profile");
    }
  }

  onMount(() => updateData(selected.code));
</script>

<select bind:value={selected} on:change={() => updateData(selected.code)}>
  {#each places as place}
  <option value={place}>{place.name}</option>
  {/each}
</select>

{#if query}
<p><textarea>/profile/{query}</textarea></p>
{/if}

<div id="profile"/>

<style>
  #profile {
    width: 600px;
    border: 1px solid grey;
  }
  textarea {
    width: 600px;
    height: 100px;
  }
</style>
<template>
  <div class="card">
    <img class="trail-image" :src="trail.imgSmallMed" alt="image here" />
    <h1 class="name">{{trail.name}}</h1>
    <span class="difficulty">{{trail.difficulty}}</span>
    <span class="stars">{{trail.stars}}</span>
    <p class="summary">{{trail.summary}}</p>
    <a class="directions" :href="url + lat + ',' + long + '&destination='+ trail.latitude + ',' + trail.longitude">
      Driving Directions</a>
  </div>
</template>

<script>
export default {
  props: ['trail', 'lat', 'long'],
  data () {
    return {
      url: "https://www.google.com/maps/dir/?api=1&origin="
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid gray;
    min-width: 150px;
    max-width: 330px;
    margin: 10px;
  }

  .trail-image {
    max-width: 330px;
    min-width: 150px;
    max-height: 250px;
  }

  .name {
    margin: 10px;
    text-align: left;
  }

  .difficulty {
    float: left;
    margin-left: 10px;
  }

  .stars {
    float: right;
    margin-right: 10px;
  }

  .summary {
    text-align: left;
    margin: 10px;
    margin-top: 40px;
    color: black;
  }

  .directions {
    text-align: left;
    text-decoration: none;
    color: green;
    font-weight: 600;
    float: left;
    margin-left: 10px;
  }
</style>


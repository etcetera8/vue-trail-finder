<template>
  <div class="card">
    <img class="trail-image" :src="trail.imgSmallMed" alt="image here" />
    <h1 class="name">{{trail.name}}</h1>
    <div class="rating-wrapper">
      <span class="difficulty"><img :src="renderBlaze(trail.difficulty)"></span>
      <span class="stars">{{trail.stars}}</span>
    </div>
    <p class="summary">{{trail.summary}}</p>
    <a class="directions" :href="url + lat + ',' + long + '&destination='+ trail.latitude + ',' + trail.longitude">
      Driving Directions</a>
  </div>
</template>

<script>
import green from '../../static/green.svg';
import blueGreen from '../../static/blueGreen.svg';
import blue from '../../static/blue.svg';
import blueBlk from '../../static/blueBlk.svg'
;import black from '../../static/black.svg';
import dblBlk from '../../static/dblBlk.svg';

export default {
  props: ['trail', 'lat', 'long'],
  data () {
    return {
      url: "https://www.google.com/maps/dir/?api=1&origin=",
      renderBlaze(diff) {
        switch (diff) {
          case "green":
            return green
            break;
          case "greenBlue":
            return blueGreen
            break;
          case "blue":
            return blue
            break;
          case "blueBlack":
            return blueBlk
            break;
          case "dblack":
            return dblBlk
            break;

        }
      }
    }
}
}
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    min-width: 150px;
    max-width: 330px;
    min-height: 450px;  
    max-height: 500px;
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

  .rating-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .difficulty {
    margin-left: 10px;
  }

  .stars {
    margin-right: 10px;
  }

  .summary {
    text-align: left;
    margin: 10px;
    margin-top: 10px;
    color: black;
    flex-grow: 1;
  }

  .directions {
    text-align: left;
    text-decoration: none;
    color: green;
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>


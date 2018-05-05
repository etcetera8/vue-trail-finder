<template>

  <main>
   
      <p class="instructions">
        Enable location throught the browser.<br>
        Select a preferred difficulty.<br>
        Select a distance from you.<br>
        Ride.
      </p>
    
    <form class="input-form">
      <label>Difficulty
        <select v-model="difficulty">
          <option value="green">Easy</option>
          <option value="greenBlue">Beginner</option>
          <option value="blue">Intermediate</option>
          <option value="blueBlack">Advanced</option>
          <option value="dblack">Expert</option>
        </select>
      </label>
      <label>Distance(in miles)
        <input v-model="distance" type='number' min="1" max="150">
      </label>
    <button v-on:click="(e, lat, long, difficulty) => userQuery(e, this.lat, this.long, this.distance, this.difficulty)">Find Trails</button>
    </form>

    <div class="trail-display">
      <TrailCard v-for="trail in trails[difficulty]" v-bind:trail="trail"/>
    </div>
  </main>
</template>

<script>
import { getTrails } from '../../api';
import { cleanTrails } from '../../cleaner';

import TrailCard from './TrailCard';
export default {
  components : {
    'TrailCard': TrailCard
  },
  data () {
    return {
        trails: {
          green: [],
          greenBlue: [],
          blue: [],
          blueBlack: [],
          dblack: []
        },
        lat: 0,
        long: 0,
        distance: 50,
        difficulty: 'blue',
        error: false
      }
  },

  created () {
    this.getLocation()
  },

  methods: {
    getLocation () {
      let lat = 0;
      let long = 0;

      const success = (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat, this.lat)
        this.lat = lat;
        this.long = long;       
      }

      const error = () => {
        console.log('location error');
      }
      
      navigator.geolocation.getCurrentPosition(success, error)
    },

    async userQuery (e, lat, long, distance, difficulty) {
      e.preventDefault();
      console.log(difficulty)
      if (this.trails[difficulty].length === 0) {
        const trails = await getTrails(lat, long, distance);
        const trailsArray = cleanTrails(trails.trails, difficulty);
        this.trails.green = trailsArray.easy;
        this.trails.greenBlue = trailsArray.beginner;
        this.trails.blue = trailsArray.intermediate;
        this.trails.blueBlack = trailsArray.advanced;
        this.trails.dblack = trailsArray.expert;
      }
    },
  }
}
</script>

<style>
  .trail-display {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .instructions {
    text-align: left;
    display:inline-block;
  }

  .input-form {
    display: inline-block;
  }

  input, select, label {
    display: block;
  }
</style>



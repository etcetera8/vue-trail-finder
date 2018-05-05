<template>

  <main>
    <form>
      <label>Difficulty</label>
      <select v-model="difficulty">
        <option value="green">Easy</option>
        <option value="greenBlue">Beginner</option>
        <option value="blue">Intermediate</option>
        <option value="blueBlack">Advanced</option>
        <option value="dblack">Expert</option>
      </select>
      <label>Distance(in miles)</label>
      <input v-model="distance" type='number' min="1" max="150">
    <button v-on:click="(e, lat, long, difficulty) => userQuery(e, this.lat, this.long, this.distance, this.difficulty)">Find Trails</button>
    </form>
    <div class="trail-display">
      <TrailCard v-for="trail in trails" v-bind:trail="trail"/>
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
      trails: [],
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
      const trails = await getTrails(lat, long, distance);
      this.trails = cleanTrails(trails.trails, difficulty); 
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
</style>



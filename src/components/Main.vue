<template>

  <main>
    <form>
      <label>Difficulty</label>
      <select>
        <option>Easy</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Expert</option>
      </select>
      <label>Distance(in miles)</label>
      <input type='number' min="1" max="150">
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

      const success = async (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        const trails = await getTrails(lat, long, 50);
        this.trails = cleanTrails(trails.trails);        
      }

      const error = () => {
        console.log('location error');
      }
      
      navigator.geolocation.getCurrentPosition(success, error)
    },

    userQuery () {
      console.log('im the user query')
    },
  }
}
</script>

<style>
  .trail-display {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid black;
  }
</style>



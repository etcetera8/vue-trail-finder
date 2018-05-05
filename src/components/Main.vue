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
      trails: [{
        ascent:2704,
        difficulty:"blue",
        id:845269,
        imgSmallMed:"https://cdn-files.apstatic.com/mtb/7013659_smallMed_1474417646.jpg",
        latitude:39.3868,
        length:23.6,
        location:"Pine, Colorado",
        longitude:-105.2747,
        name:"Buffalo Creek Big Loop - IMBA EPIC",
        stars:4.6,
        summary:"A nice tour of some of the best of Buffalo Creek - mostly smooth singletrack with some climbing.",
        url:"https://www.mtbproject.com/trail/845269/buffalo-creek-big-loop-imba-epic"}],
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
        //const trails = await getTrails(lat, long, 50);
        //this.trails = cleanTrails(trails.trails);        
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



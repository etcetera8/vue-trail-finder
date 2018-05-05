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
  </main>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    difficulty: 'beginner',
    distance: 25
  }),
  
  created: () => {
    let lat = 0;
    let long = 0;

    const success = (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat, long)
    }

    const error = () => {
      console.log('location error');
    }
    let coords = navigator.geolocation.getCurrentPosition(success, error)
    console.log(coords)
  },
  methods: {
    userQuery: () => {
      console.log('im the user query')
    }
  }
}
</script>

<style>

</style>



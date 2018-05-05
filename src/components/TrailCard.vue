<template>
  <div class="card">
    <img :src="trail.imgSmallMed" alt="image here" />
    <h1>{{trail.name}}</h1>
    <span>{{trail.difficulty}}</span>
    <span>{{trail.stars}}</span>
    <p>{{trail.summary}}</p>
  </div>
</template>

<script>
export default {
  props: ['trail'],
}
</script>

<style>
  .card {
    border: 1px solid gray;
    min-width: 150px;
    max-width: 250px;
  }
</style>


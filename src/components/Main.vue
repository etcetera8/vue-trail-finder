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
  })
}
</script>

<style>

</style>



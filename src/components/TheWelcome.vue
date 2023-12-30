<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="intro">
    <h1>Throughout the years...</h1>
    <p>Bruce is my best friend. Explore the different years of his life here.</p>
  </div>

  <div class="timeline">
    <RouterLink class="timeline-link" to="/timeline/2019">2019 - College Living.</RouterLink>
    <RouterLink class="timeline-link" to="/timeline/2020">2020 - Back to Grand Rapids.</RouterLink>
    <RouterLink class="timeline-link" to="/timeline/2021">2021 - Not a puppy anymore!</RouterLink>
    <RouterLink class="timeline-link" to="/timeline/2022">2022 - Bruce learned to high-five.</RouterLink>
    <RouterLink class="timeline-link" to="/timeline/2023">2023 - New apartment, big city dog!</RouterLink>
  </div>
</template>

<style scoped>
.intro {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.6rem;
  margin: 0;
}

p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.timeline-link {
  display: inline-block;
  font-size: 1.1rem;
  margin: 10px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-color: #4caf4fa8;
  transition: transform 0.3s ease;
}

.timeline-link:hover {
  background-color: #998c8c;
}
</style>


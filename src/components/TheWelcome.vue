<script setup lang="ts">
</script>

<template>
  <div class="intro">
    <p>Bruce is my best friend. Explore the different years of his life here.</p>
    
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


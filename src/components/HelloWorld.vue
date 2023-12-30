<script setup lang="ts">
</script>

<template>
  <div class="homepage">
    <h2>Key Moments in Bruce's Life</h2>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

p {
  font-size: 1.2rem;
}

.homepage h2,
.homepage p {
  text-align: center;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .homepage h2,
  .homepage p {
    text-align: left;
  }
}
</style>

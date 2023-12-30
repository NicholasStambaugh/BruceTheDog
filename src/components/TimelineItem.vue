<script setup lang="ts">
import { ref } from 'vue'

const date = ref('')
const event = ref('')
const year = ref(0) // Define year as a ref

const selectPicture = (year: number) => {
  date.value = year.toString();
  event.value = `Clicked on ${year}!`;
}
</script>

<template>
  <div class="timeline-item" @click="() => selectPicture(year)">
    <div class="date">
      <slot name="date" :date="date"></slot>
    </div>
    <div class="event">
      <slot name="event" :event="event"></slot>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.date {
  font-weight: bold;
}

.event {
  text-align: right;
}
</style>

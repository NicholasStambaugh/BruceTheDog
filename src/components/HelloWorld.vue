<script setup lang="ts">
</script>

<template>
  <div class="homepage">
    <h2>The Life of Bruce...</h2>
  </div>
</template>

<style scoped>
.bruce-photo {
  max-width: 100%; /* Ensure the image does not exceed its container width */
  border-radius: 8px; /* Add rounded corners for a modern look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  margin-bottom: 20px; /* Provide some spacing at the bottom */
}

.img {
  max-width: 100%; /* Ensure the image does not exceed its container width */
  border-radius: 8px; /* Add rounded corners for a modern look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  margin-bottom: 20px; /* Provide some spacing at the bottom */
}

h2 {
  font-weight: 500;
  font-size: 3.3rem;
  position: relative;
  top: -10px;
  color: #ffffff; /* Choose your desired text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle text shadow */
  margin-bottom: 20px; /* Provide some spacing at the bottom */
  padding: 10px; /* Add padding for better readability */
  background: linear-gradient(45deg, #34db93, #e74c3c); /* Use a gradient background */
  display: inline-block; /* Display as an inline block for padding to take effect */
  border-radius: 8px; /* Add rounded corners for a modern look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  transition: background 0.3s ease; /* Add a smooth transition for background color */
}

h2:hover {
  background: linear-gradient(45deg, #e74c3c, #34db93); /* Change background on hover */
  color: #fff; /* Change text color on hover */
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

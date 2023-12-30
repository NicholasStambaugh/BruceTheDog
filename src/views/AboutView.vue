<template>
  <div class="about">
    <div class="about-content">
      <h4>I created this page so that Bruce will always be remembered as long as my github is up and running.</h4>
      <a href="https://www.nickstambaugh.com">nickstambaugh.com</a>
    </div>
  </div>
</template>

<style>
.about {
  text-align: center;
}

.about-content {
  @media (min-width: 1024px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

h4 {
  color: #333; /* Maintain the same color */
}

a {/* Maintain the same color */
  text-decoration: none;
  margin-top: 10px; /* Adjust as needed for spacing */
}

a:hover {
  text-decoration: underline;
}
</style>



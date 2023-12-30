<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="" />

      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  text-align: center;
  padding: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 1rem;
  margin-top: 1rem;
}

nav a.router-link-exact-active,
nav a.router-link-exact-active:hover,
nav a {
  color: var(--color-text);
  text-decoration: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    text-align: left;
    display: flex;
    place-items: center;
    padding: 20px 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    margin-top: 0;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border: 0;
  }
}
</style>

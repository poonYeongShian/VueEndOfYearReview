<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import PageHome from './components/PageHome.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg"> -->

    <div class="container">
      <!-- <HelloWorld msg="You did it!" /> -->
      <PageHome></PageHome>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>


  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
@import "assets/style.css";
</style>

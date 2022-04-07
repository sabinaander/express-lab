<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <button><RouterLink to="/">Home</RouterLink></button>
        <button><RouterLink to="/admin">Admin</RouterLink></button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <div class="wrapper" >
      <nav>
        <RouterLink to="/" class="button">Home</RouterLink>
        <RouterLink to="/admin" class="button">Admin</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="less">
@import "@/assets/base.less";
</style>
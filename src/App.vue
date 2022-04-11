<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

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
  <Footer/>
</template>

<style lang="less">
@import "@/assets/base.less";
</style>
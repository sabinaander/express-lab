<script setup lang="ts">
import type { Animal } from "@/views/HomeView.vue";
import { defineProps, ref } from "vue";

interface Props {
  animals: Animal[];
}

const { animals } = defineProps<Props>();
</script>

<template>
  <h2>All animals available:</h2>
  <ul>
    <li v-for="animal in animals">
      <h3>{{ animal.name }}</h3>
      <p>id: {{ animal.id }}</p>
      <p>dangerous: {{ animal.dangerous }}</p>
      <p>fur-type: {{ animal.fur }}</p>
      <button class="iconButton">
        <RouterLink :to="`/animal/${animal.id}/edit`"> Edit </RouterLink>
      </button>
    </li>
  </ul>
</template>


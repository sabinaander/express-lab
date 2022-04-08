<script setup lang="ts">
import type { Animal } from "@/views/HomeView.vue";
import { defineProps, ref } from "vue";
import { useRoute } from "vue-router";

interface Props {
  animals: Animal[];
}
const { animals } = defineProps<Props>();
const route = useRoute();

const isAdmin = route.path.includes("/admin");
</script>

<template>
  <h2>All animals available:</h2>
  <ul class="gridBox">
    <li v-for="animal in animals" class="smallAnimalCard">
      <h3>{{ animal.name }}</h3>
      <div class="rowList">
        <img src="@/assets/animals/1.png" />
        <!-- <img src="src\assets\animals\${1.png}`"> -->
        <div class="columnList">
          <p>id: {{ animal.id }}</p>
          <p>dangerous: {{ animal.dangerous }}</p>
          <p>fur-type: {{ animal.fur }}</p>
          <RouterLink
            :to="`/animal/${animal.id}/edit`"
            class="button"
            v-if="isAdmin"
          >
            Edit
          </RouterLink>
        </div>
      </div>
    </li>
  </ul>
</template>

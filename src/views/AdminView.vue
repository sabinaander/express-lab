<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import AddAnimalForm from "../components/AddAnimalForm.vue";
import AnimalList from "../components/AnimalList.vue";

export interface Animal {
  id: string;
  name: string;
  dangerous: boolean;
  fur: string;
}

export default defineComponent({
  setup() {
    const animals = ref<Animal[]>([]);
    async function fetchData() {
      const result = await fetch("http://localhost:5000/animals");
      animals.value = await result.json();
    }
    onMounted(() => {
      fetchData();
    });
    return { animals, fetchData };
  },
  components: { AddAnimalForm, AnimalList },
});
</script>

<template>
  <div class="content">
    <h1 class="paddedContainer">Admin Side</h1>
    <img class="dividerImg" src="@/assets/woman.jpg" />

    <div class="paddedContainer">
      <AddAnimalForm @animalCreated="fetchData" />
    </div>
    <AnimalList :animals="animals" />
  </div>
</template>

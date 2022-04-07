<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
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
      const result = await fetch("http://localhost:9999/animals");
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
<h1>ADMIN SIDE</h1>
<AddAnimalForm @animalCreated="fetchData" />
<AnimalList :animals="animals" />
</template>
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
<div class="content">
<h1>Admin Side</h1>
<img class="dividerImg" src="src\assets\woman.jpg" />
<AddAnimalForm @animalCreated="fetchData" />
<AnimalList :animals="animals" />
</div>
</template>

<style scoped lang="less">

h1{
    margin-top: 1rem;
}
</style>
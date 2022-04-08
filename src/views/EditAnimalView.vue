<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import AddAnimalForm from "../components/AddAnimalForm.vue";
import AnimalList from "../components/AnimalList.vue";
import EditAnimalForm from "../components/EditAnimalForm.vue";

export interface Animal {
  id: string;
  name: string;
  dangerous: boolean;
  fur: string;
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const animal = ref<Animal>();
    async function fetchData() {
      const result = await fetch(
        `http://localhost:9999/animal/${route.params.id}/`
      );
      animal.value = await result.json();
    }
    onMounted(() => {
      fetchData();
    });
    return { animal, fetchData };
  },
  components: { AddAnimalForm, AnimalList, EditAnimalForm },
});
</script>

<template>
  <div class="content">
    <div class="paddedContainer">
      <EditAnimalForm v-if="animal" :animal="animal" />
    </div>
  </div>
</template>

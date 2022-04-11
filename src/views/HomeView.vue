<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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
  components: { AnimalList },
});
</script>

<template>
  <main>
    <div class="content">
      <h1 class="paddedContainer">Welcome to the animal shelter! ✨</h1>
      <img class="dividerImg" src="@/assets/girl.jpg" />
      <div class="paddedContainer">
        <p>
          We believe that every pet deserves a home and to feel loved by that
          special someone 💜
        </p>
        <p>
          Here at the shelter all pets are sparkly, friendly and loves cuddles!
        </p>
      </div>
      <AnimalList :animals="animals" />
    </div>
  </main>
</template>

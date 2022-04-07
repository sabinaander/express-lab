<script setup lang="ts">
import type { Animal } from "@/views/HomeView.vue";
import { reactive } from "vue";

const emit = defineEmits<{ (event: "animalCreated"): void }>();

interface Props {
  animal: Animal;
}

const { animal } = defineProps<Props>();

async function addAnimal() {
  const result = await fetch("http://localhost:9999/animal", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });

  emit("animalCreated");
}
</script>

<template>
  <div class="mainContainer">
    <h1>AnimalDB</h1>
    <div class="formContainer">
      <h2>Edit your animal</h2>
      <form @submit.prevent="addAnimal">
        <div class="input-list">
          <label for="id">ID</label>
          <input
            class="form-control"
            type="number"
            v-model="animal.id"
            name="id"
            required
          />
        </div>
        <div class="input-list">
          <label for="name">Name</label>
          <input
            class="form-control"
            v-model="animal.name"
            name="name"
            required
          />
        </div>
        <div class="input-list">
          <label for="dangerous">Is it dangerous?</label>
          // drop down YES / NO
          <select
            class="form-control"
            v-model="animal.dangerous"
            name="dangerous"
            required
          >
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
        </div>
        <div class="input-list">
          <label for="fur">How's the fur? (if any)</label>
          <input
            class="form-control"
            v-model="animal.fur"
            name="fur"
            required
          />
        </div>
        <button type="submit">Save edit</button>

        <button type="button">Delete</button>
      </form>
    </div>
  </div>
</template>

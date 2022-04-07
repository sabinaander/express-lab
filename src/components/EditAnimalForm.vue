<script setup lang="ts">
import type { Animal } from "@/views/HomeView.vue";

const emit = defineEmits<{ (event: "animalCreated" | "animalDeleted"): void }>();

interface Props {
  animal: Animal;
}

const { animal } = defineProps<Props>();

async function editAnimal() {
  const result = await fetch(`http://localhost:9999/animal/${animal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });

  emit("animalCreated");
}

async function deleteAnimal() {

  const result = await fetch(`http://localhost:9999/animal/${animal.id}`, {
      
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  emit("animalDeleted");
}

</script>

<template>
  <div class="mainContainer">
    <h1>Edit Animal</h1>
    <div class="formContainer">
      <h2>Edit your animal</h2>
      <form @submit.prevent="editAnimal">
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
            <option value="yes">YES</option>
            <option value="no">NO</option>
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

        <button type="button" @click="deleteAnimal" >Delete</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits<{ (event: "animalCreated"): void }>();

const animal = reactive({
  id: "",
  name: "",
  dangerous: false,
  fur: "",
});

async function addAnimal() {
  const result = await fetch("http://localhost:9999/animal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });

  animal.id = "";
  animal.name = "";
  animal.dangerous = false;
  animal.fur = "";

  emit("animalCreated");
}
</script>

<template>
  <div class="mainContainer">
    <div class="formContainer">
      <h2>Add a new animal</h2>
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
        <button type="submit">Add animal</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits<{ (event: "animalCreated"): void }>();

const animal = reactive({
  name: "",
  dangerous: "",
  fur: "",
});

async function addAnimal() {
  const result = await fetch("http://localhost:5000/animal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  });

  // empty form on submit
  animal.name = "";
  animal.dangerous = "";
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
        <button type="submit">Add animal</button>
      </form>
    </div>
  </div>
</template>

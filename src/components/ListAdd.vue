<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const title = ref("");
const isEditing = ref(false);

const store = useStore();

const addList = () => {
  store.addList(title.value);
  title.value = "";
};

const classList = computed(() => {
  const classList = [];
  if (isEditing.value) {
    classList.push("active");
  }
  if (title.value.length) {
    classList.push("addable");
  }
  return classList;
});
</script>

<template>
  <form :class="classList" class="addlist" @submit.prevent="addList">
    <input
      type="text"
      v-model="title"
      class="text-input"
      placeholder="Add new list"
      @focusin="isEditing = true"
      @focusout="isEditing = false"
    />
    <button
      type="submit"
      :class="classList"
      class="add-button"
      v-if="isEditing || title.length"
    >
      Add
    </button>
  </form>
</template>

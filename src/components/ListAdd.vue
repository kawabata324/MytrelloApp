<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const title = ref("");
const isEditing = ref(false);
const isForm = ref(false);

const store = useStore();

const addList = () => {
  store.addList(title.value);
  title.value = "";
  isForm.value = false
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
  <div>
    <div class="flex items-center justify-center border border-dashed	mt-3" @click="isForm = !isForm" v-show="!isForm">
      <i class="fas fa-plus"></i>
      Add List
    </div>
    <form v-show="isForm" :class="classList" class="addlist flex m-5 mx-auto align-middle" @submit.prevent="addList">
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
        class="add-button p-3 ml-2 rounded-md bg-gray-400"
        v-if="isEditing || title.length"
      >
        Add
      </button>
    </form>
  </div>
</template>

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
  isForm.value = false;
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

const cancel = () => {
  isForm.value = false;
};
</script>

<template>
  <div>
    <div
      class="flex items-center justify-center border border-dashed mt-3"
      @click="isForm = !isForm"
      v-show="!isForm"
    >
      <i class="fas fa-plus"></i>
      Add List
    </div>
    <form
      v-show="isForm"
      :class="classList"
      class="flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"
    >
      <div class="flex flex-col justify-center items-start mx-3">
        <label id="title" class="mt-10 text-slate-400">ListTitle</label>
        <input
          type="text"
          for="title"
          v-model="title"
          class="text-input mt-2 py-3 px-4 w-full"
          placeholder="Add new list"
          @focusin="isEditing = true"
          @focusout="isEditing = false"
        />
      </div>

      <div class="flex m-8 justify-between w-10/12">
        <button
          @click.prevent="cancel"
          class="p-2 rounded-md bg-gray-400 text-white"
        >
          Cancel
        </button>
        <button
          @click.prevent="addList"
          type="submit"
          class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

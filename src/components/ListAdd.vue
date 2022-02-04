<script setup>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "../store/index";

const title = ref("");
const isEditing = ref(false);
const isForm = ref(false);
const errorMessage = ref("");
const titleInput = ref(null);

const store = useStore();

const openAddListForm = () => {
  isForm.value = !isForm.value;
};

const addList = () => {
  if (title.value) {
    store.addList(title.value);
    title.value = "";
    isForm.value = false;
  } else {
    errorMessage.value = "リストタイトルが空です";
  }
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
onUpdated(() => {
  titleInput.value.focus();
});
</script>

<template>
  <div class="relative w-64">
    <div
      class="flex items-center justify-center border border-dashed bg-gray-600 gap-2 opacity-50"
      @click="openAddListForm"
      v-show="!isForm"
    >
      <i class="fas fa-plus"></i>
      Add List
    </div>
    <form
      v-show="isForm"
      :class="classList"
      class="flex flex-col items-center ml-4 w-72 bg-gray-700 rounded-md border"
    >
      <div class="flex flex-col justify-center items-start mx-3">
        <label
          id="title"
          class="mt-2 text-white text-lg flex gap-2 items-center"
          ><i class="fas fa-signature"></i>
          <p>ListTitle</p></label
        >
        <p class="text-red-500">{{ errorMessage }}</p>
        <input
          type="text"
          for="title"
          ref="titleInput"
          v-model="title"
          class="text-input mt-1 py-3 px-4 w-full text-black"
          placeholder="Add new list"
          @keydown.enter="addList"
          @focusin="isEditing = true"
          @focusout="isEditing = false"
        />
      </div>

      <div class="flex my-3 justify-between w-10/12">
        <button
          @click.prevent="cancel"
          class="p-2 rounded-md bg-gray-400 text-white"
        >
          Cancel
        </button>
        <button
          @click.prevent="addList"
          type="submit"
          class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "../store/index";
import List from "../api/utils/list";

const title = ref("");
const isEditing = ref(false);
const isForm = ref(false);
const errorMessage = ref("");
const titleInput = ref(null);
const listApiId = ref("");

const store = useStore();

const openAddListForm = () => {
  isForm.value = !isForm.value;
};

const addList = (event) => {
  if (event.keyCode) {
    //日本語入力中のEnterを無視する
    if (event.keyCode !== 13) return;
  }

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

const createList = async () => {
  const res = await List.listCreate(title.value);
  listApiId.value = res.data.id;
  console.log(res.data.id)
  console.log(listApiId.value)
};

const listDelete = async () => {
  console.log(listApiId.value)
  if (listApiId.value !== null){
    const res = await List.removeList(listApiId.value);
    console.log(res);
  }
};
</script>

<template>
  <div class="relative w-64">
    <!-- Todo 全ての移行が終わったらコメントを外す -->
    <!-- <button
      class="mt-8 bg-blue-900 w-full py-2 rounded-md"
      @click.prevent="createList"
    >
      listCreate
    </button>
    <button
      class="mt-8 bg-red-900 w-full py-2 rounded-md"
      @click.prevent="listDelete"
    >
      listDelete
    </button> -->
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

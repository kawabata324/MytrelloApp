<script setup>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "../store/index";

const props = defineProps({
  listIndex: { type: Number, required: true },
});
const body = ref("");
const isEditing = ref(false);
const isOpenForm = ref(false);
const errorMessage = ref("");
const cardTitleInput = ref(null);

const store = useStore();

const addCardToList = (event) => {
  // 日本語入力中のEnterキー操作は無効にする
  if (event.keyCode) {
    if (event.keyCode !== 13) return;
  }

  if (body.value !== "") {
    store.addCardToList(body.value, props.listIndex);
    body.value = "";
    errorMessage.value = "";
    isOpenForm.value = false;
  } else {
    errorMessage.value = "タイトルには必ず文字を入れてください";
  }
};

const cancel = () => {
  body.value = "";
  errorMessage.value = false;
  isOpenForm.value = false;
};

const classList = computed(() => {
  const classList = [];
  if (isEditing.value) {
    classList.push("active");
  }
  if (body.value.length) {
    classList.push("addable");
  }
  return classList;
});

onUpdated(() => {
  cardTitleInput.value.focus();
});
</script>
<template>
  <div class="relative" @click="isOpenForm = !isOpenForm">
    <span class="text-sm font-medium leading-none text-white">+</span>
    Add Card
  </div>
  <form
    v-show="isOpenForm"
    :class="classList"
    class="flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"
  >
    <div class="flex flex-col justify-center items-start w-full p-3">
      <label id="title" class="mt-2 text-white text-lg flex gap-2 items-center"
        ><i class="fas fa-signature"></i>
        <p>CardTitle</p></label
      >
      <input
        type="text"
        v-model="body"
        ref="cardTitleInput"
        class="text-input mt-1 py-3 px-4 text-black w-full"
        @keydown.enter="addCardToList"
        @focusin="isEditing = true"
        @focusout="isEditing = false"
        for="title"
      />
      <p class="text-red-500" v-show="errorMessage">{{ errorMessage }}</p>
    </div>
    <div class="flex m-3 justify-between w-10/12">
      <button
        @click.prevent="cancel"
        class="p-2 rounded-md bg-gray-400 text-white"
      >
        Cancel
      </button>
      <button
        @click.prevent="addCardToList"
        type="submit"
        class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"
      >
        Add
      </button>
    </div>
  </form>
</template>

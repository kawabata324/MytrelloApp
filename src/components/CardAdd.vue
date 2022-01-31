<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const props = defineProps({
  listIndex: { type: Number, required: true },
});
const body = ref("");
const contents = ref("")
const isEditing = ref(false);
const isOpenForm = ref(false);

const store = useStore();

const addCardToList = () => {
  store.addCardToList(body.value,contents.value, props.listIndex);
  body.value = "";
  contents.value = ""
  isOpenForm.value = false;
};

const cancel = ()=>{
  body.value = ''
  contents.value = ''
  isOpenForm.value = false
}

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
</script>
<template>
  <div @click="isOpenForm = !isOpenForm">
    <span class="text-sm font-medium leading-none text-white">+</span>
    Add item
  </div>
  <form
    v-show="isOpenForm"
    :class="classList"
    class="flex flex-col items-center fixed top-0 right-0  w-72 z-50 bg-gray-700 rounded-md border"
  >
  <div class="flex flex-col justify-center items-start mx-3">
    <label id="title" class="mt-10">CardTitle</label>
      <input
        type="text"
        v-model="body"
        class="text-input mt-2 py-3 px-4 w-full"
        @focusin="isEditing = true"
        @focusout="isEditing = false"
        for="title"
      />
  </div>
    <div class="flex flex-col justify-center items-start mx-3">
      <label id="title" class="mt-10">Contents</label>
      <textarea
        type="text"
        v-model="contents"
        class="text-input w-full mt-2 h-96"
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
        @click.prevent="addCardToList"
        type="submit"
        class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white"
      >
        Add
      </button>
    </div>
  </form>
</template>

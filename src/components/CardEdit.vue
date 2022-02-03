<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const isEditing = ref(false);
const newBody = ref("");
const newContents = ref("");

const store = useStore();

const props = defineProps({
  openEditRef: { type: Boolean },
  listIndex: { type: Number, required: true },
  cardIndex: { type: Number, required: true },
});
const emit = defineEmits();

const isOpenForm = computed({
  get: () => props.openEditRef,
  set: (e) => emit("update:openEditRef", e),
});

const bodyComputed = computed({
  get: () => {
    const body = store.lists[props.listIndex].cards[props.cardIndex].body;
    newBody.value = body;
    return body;
  },
  set: (newValue) => {
    newBody.value = newValue;
  },
});

const contentsComputed = computed({
  get: () => {
    const contents =
      store.lists[props.listIndex].cards[props.cardIndex].contents;
    newContents.value = contents;
    return contents;
  },
  set: (newValue) => {
    newContents.value = newValue;
  },
});

const editCard = () => {
  store.editCard(
    props.listIndex,
    props.cardIndex,
    newBody.value,
    newContents.value
  );
  isOpenForm.value = false;
  newBody.value = "";
  newContents.value = "";
};

const cancel = () => {
  isOpenForm.value = false;
  newBody.value = "";
  newContents.value = "";
};
</script>
<template>
  <form
    v-show="isOpenForm"
    class="flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"
  >
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <label id="title" class="mt-10">CardTitle</label>
      <input
        type="text"
        v-model="bodyComputed"
        class="text-input mt-2 py-3 px-4 w-full text-black"
        @focusin="isEditing = true"
        @focusout="isEditing = false"
        for="title"
      />
    </div>
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <label id="title" class="mt-10">Contents</label>
      <textarea
        type="text"
        v-model="contentsComputed"
        class="text-input w-full mt-2 h-96 font-light text-black leading-relaxed tracking-wider px-2"
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
        type="submit"
        @click.prevent="editCard"
        class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white"
      >
        Edit
      </button>
    </div>
  </form>
</template>

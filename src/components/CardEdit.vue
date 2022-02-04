<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const newBody = ref("");
const newContents = ref("");
const newDeadline = ref("");
const errorMessage = ref("");

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

const dateComputed = computed({
  get: () => {
    const deadLine = store.lists[props.listIndex].cards[props.cardIndex].date;
    newDeadline.value = deadLine;
    if (deadLine !== undefined) {
      return deadLine;
    } else {
      return null;
    }
  },
  set: (newValue) => {
    newDeadline.value = newValue;
  },
});

const editCard = () => {
  if (newBody.value !== "") {
    store.editCard(
      props.listIndex,
      props.cardIndex,
      newBody.value,
      newContents.value,
      newDeadline.value
    );
    isOpenForm.value = false;
  } else {
    errorMessage.value = "CardTitleを空にすることはできません";
  }
};

const cancel = () => {
  isOpenForm.value = false;
};

const listName = computed(() => {
  return store.searchListFromListIndex(props.listIndex).title;
});
</script>
<template>
  <form
    v-show="isOpenForm"
    class="flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"
  >
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <label id="title" class="mt-10 text-white text-lg flex gap-2 items-center"
        ><i class="fas fa-signature"></i>
        <p>CardTitle</p></label
      >
      <p class="text-red-500">{{ errorMessage }}</p>
      <input
        type="text"
        v-model="bodyComputed"
        class="text-input mt-2 py-3 px-4 w-full text-black"
        @focusin="isEditing = true"
        @focusout="isEditing = false"
        for="title"
      />
      <div class="mt-4">
        <p>リスト:{{ listName }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <label id="date" class="mt-1 text-white text-lg flex gap-2 items-center"
        ><i class="fas fa-align-right"></i>
        <p>DeadLine</p></label
      >
      <input
        type="date"
        form="date"
        v-model="dateComputed"
        class="text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"
      />
    </div>
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <label
        id="contents"
        class="mt-2 text-white text-lg flex gap-2 items-center"
        ><i class="fas fa-align-right"></i>
        <p>Contents</p></label
      >
      <textarea
        type="text"
        v-model="contentsComputed"
        class="text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"
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
        class="add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"
      >
        Edit
      </button>
    </div>
  </form>
</template>

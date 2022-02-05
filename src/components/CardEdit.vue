<script setup>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "../store/index";

const newBody = ref("");
const newContents = ref("");
const newDeadline = ref("");
const newDone = ref(false);
const errorMessage = ref("");
const moreOptionRef = ref(false);
const titleInput = ref(null);

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

const doneComputed = computed({
  get: () => {
    const done = store.lists[props.listIndex].cards[props.cardIndex].done;
    newDone.value = done;
    if (done !== undefined) {
      return done;
    } else {
      return false;
    }
  },
  set: (newValue) => {
    newDone.value = newValue;
  },
});

const editCard = (event) => {
  if (event.keyCode) {
    //日本語入力中のEnterを無視する
    if (event.keyCode !== 13) return;
  }
  if (newBody.value !== "") {
    store.editCard(
      props.listIndex,
      props.cardIndex,
      newBody.value,
      newContents.value,
      newDeadline.value,
      newDone.value
    );
    isOpenForm.value = false;
  } else {
    errorMessage.value = "CardTitleを空にすることはできません";
  }
};

const cancel = () => {
  isOpenForm.value = false;
};

const computedMoreOption = computed(() => {
  return moreOptionRef.value;
});

const listName = computed(() => {
  const limitCharacter = 10;
  const title = store.searchListFromListIndex(props.listIndex).title;
  if (title.length > limitCharacter) {
    return `${title.substring(0, limitCharacter)}...`;
  }
  return title;
});

onUpdated(() => {
  titleInput.value.focus();
});
</script>
<template>
  <form
    v-show="isOpenForm"
    class="flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"
  >
    <div class="flex flex-col justify-center items-start mx-3 w-full p-3">
      <div class="mt-4">
        <p>リスト:{{ listName }}</p>
      </div>
      <label id="title" class="mt-3 text-white text-lg flex gap-2 items-center"
        ><i class="fas fa-signature"></i>
        <p>CardTitle</p></label
      >
      <p class="text-red-500">{{ errorMessage }}</p>
      <input
        type="text"
        ref="titleInput"
        v-model="bodyComputed"
        class="text-input mt-2 py-3 px-4 w-full text-black"
        @keydown.enter="editCard"
        @focusin="isEditing = true"
        @focusout="isEditing = false"
        for="title"
      />
    </div>
    <div
      class="text-gray-900 flex items-center gap-2"
      @click="moreOptionRef = !moreOptionRef"
    >
      <p class="text-xl">More Option</p>
      <i v-show="computedMoreOption === false" class="fas fa-chevron-down"></i>
    </div>
    <div
      class="flex flex-col justify-center items-start mx-3 w-full p-3"
      v-show="moreOptionRef"
    >
      <div class="w-full">
        <label id="date" class="mt-1 text-white text-lg flex gap-2 items-center"
          ><i class="fas fa-clock"></i>
          <p>DeadLine</p></label
        >
        <input
          type="date"
          for="date"
          v-model="dateComputed"
          @keydown.enter="editCard"
          class="text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"
        />
      </div>
      <div class="w-full">
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
      <div class="w-full">
        <label id="done" class="mt-1 text-white text-lg flex gap-2 items-center"
          ><i class="fas fa-check-circle"></i>
          <p>Done</p></label
        >
        <select
          for="done"
          v-model="doneComputed"
          @keydown.enter="editCard"
          class="text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"
        >
          <option :value="false">In progress</option>
          <option :value="true">Done</option>
        </select>
      </div>
    </div>
    <div class="flex m-4 justify-between w-10/12">
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

<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const props = defineProps({
  listIndex: { type: Number, required: true },
});
const body = ref("");
const isEditing = ref(false);

const store = useStore();

const addCardToList = () => {
  store.addCardToList(body.value, props.listIndex);
  body.value = "";
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
</script>
<template>
  <form :class="classList" class="addcard" @submit.prevent="addCardToList">
    <input
      type="text"
      v-model="body"
      class="text-input"
      placeholder="Add new card"
      @focusin="isEditing = true"
      @focusout="isEditing = false"
    />
    <button
      type="submit"
      class="add-button"
      v-if="isEditing || body.length > 0"
    >
      Add
    </button>
  </form>
</template>

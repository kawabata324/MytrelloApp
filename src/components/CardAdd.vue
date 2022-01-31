<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";

const props = defineProps({
  listIndex: { type: Number, required: true },
});
const body = ref("");
const isEditing = ref(false);
const isOpenForm = ref(false)

const store = useStore();

const addCardToList = () => {
  store.addCardToList(body.value, props.listIndex);
  body.value = "";
  isOpenForm.value = false
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
  <div  @click="isOpenForm = true">
    <span class="text-sm font-medium leading-none text-white">+</span>
    Add item
  </div>
  <form v-show="isOpenForm" :class="classList" @submit.prevent="addCardToList">
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
      class="add-button p-3"
      v-if="isEditing || body.length > 0"
    >
      Add
    </button>
  </form>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "../store/index";
import CardEdit from "./CardEdit.vue";

const props = defineProps({
  body: { type: String, required: true },
  contents: { type: String },
  listIndex: { type: Number, required: true },
  cardIndex: { type: Number, required: true },
});

const store = useStore();

const cutContents = computed(() => {
  const characterLimit = 10;
  if (props.contents) {
    if (props.contents.length > characterLimit) {
      return `${props.contents.substring(0, characterLimit)}...`;
    }
    return props.contents;
  }
});

const removeCardFromList = () => {
  if (confirm("本当にこのカードを削除しますか？")) {
    store.removeCardFromList(props.cardIndex, props.listIndex);
  }
};

const openEditRef = ref(false);
</script>
<template>
  <CardEdit
    v-model:openEditRef="openEditRef"
    :listIndex="props.listIndex"
    :cardIndex="props.cardIndex"
  />
  <div class="bg-gray-800 rounded-md w-64 my-2 py-6 px-3">
    <p>#{{ cardIndex }}</p>
    <div class="flex items-center text-white">
      <div class="body" >
        <p class="text-blue-500 hover:cursor-pointer" @click="openEditRef = !openEditRef">{{ props.body }}</p>
        <a class="text-sm">{{ cutContents }}</a>
      </div>
      <div
        @click="removeCardFromList"
        class="bg-gray-800 shadow sm:rounded-lg flex justify-between items-center p-2 w-32"
      >
        <i class="fas fa-trash bg-black text-red-500 w-1"></i>
        <p class="text-sm">Delete</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.original-border {
  border-bottom: 0.3px;
}
</style>

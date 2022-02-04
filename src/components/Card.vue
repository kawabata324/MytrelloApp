<script setup>
import { computed, ref } from "vue";
import { useStore } from "../store/index";
import CardEdit from "./CardEdit.vue";

const props = defineProps({
  id: { type: Number },
  body: { type: String, required: true },
  contents: { type: String },
  date: { type: String },
  listIndex: { type: Number, required: true },
  cardIndex: { type: Number, required: true },
});

const store = useStore();

const cutBody = computed(() => {
  const characterLimit = 10;
  if (props.body.length > characterLimit) {
    return `${props.body.substring(0, characterLimit)}...`;
  }
  return props.body;
});

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
  <div class="bg-gray-800 rounded-md w-64 my-2 py-3 px-3">
    <div class="flex justify-between items-center">
      <p>#{{ props.id }}</p>
      <div class="flex gap-1 items-center">
        <i class="fas fa-clock text-white" v-show="props.date"></i>
        <p>{{ props.date }}</p>
      </div>
    </div>
    <div class="flex items-center text-white mt-2">
      <div class="body">
        <p
          class="text-blue-500 hover:cursor-pointer text-2xl"
          @click="openEditRef = true"
        >
          {{ cutBody }}
        </p>
        <a class="text-sm">{{ cutContents }}</a>
      </div>
      <div
        @click="removeCardFromList"
        class="shadow rounded-xl w-6 h-6 bg-gray-900 flex items-center justify-center p-4"
      >
        <i class="fas fa-trash rounded-full text-red-500"></i>
      </div>
    </div>
  </div>
</template>
<style scoped>
.original-border {
  border-bottom: 0.3px;
}
</style>

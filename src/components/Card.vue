<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "../store/index";

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
      return (`${props.contents.substring(0, characterLimit)}...`);
    }
    return props.contents;
  }
});

const removeCardFromList = () => {
  if (confirm("本当にこのカードを削除しますか？")) {
    store.removeCardFromList(props.cardIndex, props.listIndex);
  }
};
</script>
<template>
  <div class="bg-gray-800 rounded-md w-64 my-2 py-6 px-3">
    <p>#{{ cardIndex }}</p>
    <div class="flex items-center text-white">
      <div class="body">
        {{ props.body }}
        <p class="text-sm">{{ cutContents }}</p>
      </div>
      <div
        @click="removeCardFromList"
        class="bg-gray-800 shadow sm:rounded-lg flex justify-between items-center p-2 w-40 border-width"
      >
        <i class="fas fa-trash bg-black text-red-500 w-1"></i>
        <p class="text-sm">Delete</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.border-width {
  border-width: 0.3px;
}
</style>

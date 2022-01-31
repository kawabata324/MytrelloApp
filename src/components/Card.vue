<script setup>
import { useStore } from "../store/index";

const props = defineProps({
  body: { type: String, required: true },
  listIndex: { type: Number, required: true },
  cardIndex: { type: Number, required: true },
});

const store = useStore();

const removeCardFromList = () => {
  if (confirm("本当にこのカードを削除しますか？")) {
    store.removeCardFromList(props.cardIndex, props.listIndex)
  }
};
</script>
<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">✖️</button>
    <div class="body">
      {{ props.body }}
    </div>
  </div>
</template>

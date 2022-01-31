<script setup>
import { useStore } from "../store/index";
import CardAdd from "./CardAdd.vue";
import Card from "./Card.vue";
import { computed } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  title: { type: String, required: true },
  listIndex: { type: Number, required: true },
  cards: { type: Array },
});

const emit = defineEmits();

const store = useStore();

const removeList = () => {
  if (confirm("本当にこのリストを削除しますか？")) {
    store.removeList(props.listIndex);
  }
};

const totalCardList = computed(() => {
  return props.cards.length;
});

const cards = computed({
  get: () => props.cards,
  set: (newValue) => {
    emit("update:cards", newValue);
  },
});
</script>

<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ props.title }}</p>
      <p class="list-counter">total:{{ totalCardList }}</p>
      <div class="deletelist" @click="removeList">✖️</div>
    </div>
    <draggable v-model="cards" item-key="id" group="cards">
      <template #item="{ element, index }">
        <Card
          :body="element.body"
          :cardIndex="index"
          :listIndex="props.listIndex"
        />
      </template>
    </draggable>

    <CardAdd :listIndex="props.listIndex" />
  </div>
</template>

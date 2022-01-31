<script setup>
import ListAdd from "./ListAdd.vue";
import List from "./List.vue";
import { useStore } from "../store";
import { computed, watch } from "vue";
import draggable from "vuedraggable";

const store = useStore();

const totalCardCounts = computed(() => {
  return store.totalCardCounts;
});

watch(store.lists, () => {
  store.updateLists(store.lists);
});
const movingList = () => {
  store.updateLists(store.lists);
};
</script>

<template>
  <div>
    <header>My Trello</header>
    <main>
      <p class="info-line text-white">All: {{ totalCardCounts }} tasks</p>
      <div>
        <draggable
          v-model="store.lists"
          item-key="id"
          class="list-index"
          @end="movingList"
        >
          <template #item="{ element, index }">
            <div>
              <List
                :title="element.title"
                :listIndex="index"
                v-model:cards="element.cards"
              />
              <ListAdd v-show="index === store.lists.length - 1" />
            </div>
          </template>
        </draggable>
        <ListAdd v-show="store.lists.length === 0" />
      </div>
    </main>
  </div>
</template>

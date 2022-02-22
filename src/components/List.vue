<script setup>
import { useStore } from "../store/index";
import CardAdd from "./CardAdd.vue";
import Card from "./Card.vue";
import { computed, ref } from "vue";
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

const editTitleRef = ref(false);

const cutTitle = computed({
  get: () => {
    const characterLimit = 10;
    if (props.title.length > characterLimit) {
      return `${props.title.substring(0, characterLimit)}...`;
    }
    return props.title;
  },
  set: (newListTitle) => {
    store.lists[props.listIndex].title = newListTitle;
  },
});

const changeListTitle = (e) => {
  if(e.keyCode !== 13) return;
  editTitleRef.value = false
};
</script>

<template>
  <div class="list bg-black list-border-width border-white">
    <div class="w-72 flex justify-start gap-2 items-center">
      <p
        class="text-lg font-bold p-15"
        v-show="!editTitleRef"
        @click="editTitleRef = !editTitleRef"
      >
        {{ cutTitle }}
      </p>
      <input
        v-show="editTitleRef"
        v-model="cutTitle"
        class="font-sm bg-black border-blue-500"
        @keydown.enter="changeListTitle"
      />
      <span
        class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"
      >
        <span class="text-sm font-medium leading-none text-white">{{
          totalCardList
        }}</span>
      </span>
      <div class="deletelist" @click="removeList">✖️</div>
    </div>
    <draggable v-model="cards" item-key="id" group="cards">
      <template #item="{ element, index }">
        <div>
          <Card
            :id="element.id"
            :body="element.body"
            :contents="element.contents"
            :date="element.date"
            :done="element.done"
            :cardIndex="index"
            :listIndex="props.listIndex"
          />
        </div>
      </template>
    </draggable>

    <CardAdd :listIndex="props.listIndex" />
  </div>
</template>

<style scoped>
.list-border-width {
  border-width: 0.5px;
}
</style>

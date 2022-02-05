<script setup>
import { computed, ref, onMounted, onBeforeUpdate } from "vue";
import { useStore } from "../store/index";
import CardEdit from "./CardEdit.vue";
import BaseTooltip from "./common/BaseTooltip.vue";

const props = defineProps({
  id: { type: Number },
  body: { type: String, required: true },
  contents: { type: String },
  date: { type: String },
  done: { type: Boolean, default: false },
  listIndex: { type: Number, required: true },
  cardIndex: { type: Number, required: true },
});

const store = useStore();

const cutBody = computed(() => {
  const characterLimit = 20;
  if (props.body.length > characterLimit) {
    return `${props.body.substring(0, characterLimit)}...`;
  }
  return props.body;
});

const cutContents = computed(() => {
  const characterLimit = 15;
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
const showDelTooltipRef = ref(false);
const showDoneTooltipRef = ref(false);
const finishCard = ref(false);
const cardColor = ref("");

const clickDoneCard = () => {
  finishCard.value = !finishCard.value;
  if (finishCard.value) {
    cardColor.value = "bg-green-800";
  } else if (!finishCard.value) {
    cardColor.value = "bg-gray-800";
  }
  //localhostで保存されている値を保存する
  store.editCard(
    props.listIndex,
    props.cardIndex,
    props.body,
    props.contents,
    props.date,
    finishCard.value
  );
};
onMounted(() => {
  finishCard.value = props.done;
  if (finishCard.value) {
    cardColor.value = "bg-green-800";
  } else if (!finishCard.value) {
    cardColor.value = "bg-gray-800";
  }
});
onBeforeUpdate(() => {
  finishCard.value = props.done;
  if (finishCard.value) {
    cardColor.value = "bg-green-800";
  } else if (!finishCard.value) {
    cardColor.value = "bg-gray-800";
  }
});
</script>
<template>
  <CardEdit
    v-model:openEditRef="openEditRef"
    :listIndex="props.listIndex"
    :cardIndex="props.cardIndex"
  />
  <div class="rounded-md w-64 my-2 py-3 px-3" :class="cardColor">
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
          class="text-blue-600 hover:cursor-pointer text-lg"
          @click="openEditRef = true"
        >
          {{ cutBody }}
        </p>
        <a class="text-xs">{{ cutContents }}</a>
      </div>
      <div class="flex gap-2">
        <div
          @click="clickDoneCard"
          class="shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"
        >
          <div
            class="relative"
            @mouseenter="showDoneTooltipRef = true"
            @mouseleave="showDoneTooltipRef = false"
          >
            <i class="fas fa-check-circle bg-green-500 rounded-md"></i>
            <BaseTooltip :showTooltip="showDoneTooltipRef" tooltipText="Done" />
          </div>
        </div>
        <div
          @click="removeCardFromList"
          class="shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"
        >
          <div
            class="relative"
            @mouseenter="showDelTooltipRef = true"
            @mouseleave="showDelTooltipRef = false"
          >
            <i class="fas fa-trash rounded-full text-red-500"></i>
            <BaseTooltip
              :showTooltip="showDelTooltipRef"
              tooltipText="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.original-border {
  border-bottom: 0.3px;
}
</style>

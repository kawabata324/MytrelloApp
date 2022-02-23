<script setup>
import ListAdd from "./ListAdd.vue";
import List from "./List.vue";
import { useStore } from "../store";
import { computed, watch, onMounted } from "vue";
import draggable from "vuedraggable";
import Auth from "../api/auth/register";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";

const store = useStore();
const router = useRouter();

const totalCardCounts = computed(() => {
  return store.totalCardCounts;
});

watch(store.lists, () => {
  store.updateLists(store.lists);
});

const movingList = () => {
  store.updateLists(store.lists);
};
onMounted(async () => {
  if (
    (localStorage.getItem("client") !== null) &
    (localStorage.getItem("access-token") !== null) &
    (localStorage.getItem("uid") !== null)
  ) {
    try {
      await Auth.validated();
    } catch {
      router.push("/login");
    }
  } else {
    notify({
      type: "error",
      title: "認証失敗",
      text: "認証に失敗しました。再度ログインしてください",
    });
    console.log("認証に失敗");
    router.push("/login");
  }
});
</script>

<template>
  <div>
    <header>KeepMakingEfforts</header>
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
            <div class="flex gap-1">
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

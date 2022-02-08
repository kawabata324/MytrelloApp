<script setup>
import { reactive } from "vue";
import Client from "../api/client";

const user = reactive({
  name: "",
  email: "",
  password: "",
});

const registerUser = () => {
  Client.post("/v1/auth", {
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
<template>
  <div
    class="min-h-full flex flex-col items-center gap-10 py-12 px-4 sm:px-6 lg:px-8 max-h-full"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="flex items-center justify-center gap-2">
          <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h1 class="text-2xl font-bold">Keep Making Effort</h1>
        </div>
      </div>
    </div>

    <form
      class="bg-black opacity-90 form-height w-2/3 shadow-md flex flex-col gap-10 items-center p-10 border border-gray-800"
    >
      <div>
        <h3 class="text-gray-300 mt-3 text-lg">アカウントを作成</h3>
      </div>
      <input
        type="text"
        class="border shadow-lg border-gray-300 w-full px-5 py-2 text-black"
        placeholder="名前を入力"
        v-model="user.name"
      />
      <input
        type="email"
        class="border shadow-lg border-gray-300 w-full px-5 py-2 text-black"
        placeholder="メールアドレスを入力"
        v-model="user.email"
      />
      <input
        type="password"
        class="border shadow-lg border-gray-300 w-full px-5 py-2 text-black"
        placeholder="パスワードを入力"
        v-model="user.password"
      />
      <button class="bg-blue-500 w-full p-2" @submit.prevent="registerUser">
        登録
      </button>
    </form>
  </div>
</template>
<style scoped></style>

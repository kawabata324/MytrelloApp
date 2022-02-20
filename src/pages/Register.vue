<script setup>
import { reactive } from "vue";
import Client from "../api/client";

const user = reactive({
  email: "",
  password: "",
  name: ""
});

console.log(user.email)

const registerUser = async () => {
  await Client.post("/v1/auth", {
    email: user.email,
    password: user.password,
    name: user.name
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
      class="bg-black opacity-90 form-height w-1/2 shadow-md flex flex-col gap-10 items-center p-10 border border-gray-800"
    >
      <div>
        <h3 class="text-gray-300 mt-3 text-lg">アカウントを作成</h3>
      </div>
      <input
        type="text"
        name="name"
        class="border shadow-lg border-gray-300 w-full px-5 py-2 text-black lg:w-1/3"
        placeholder="名前を入力"
        v-model="user.name"
      />
      <input
        type="email"
        name="email"
        class="border shadow-lg border-gray-300 w-full px-5 py-2 text-black lg:w-1/3"
        placeholder="メールアドレスを入力"
        v-model="user.email"
      />
      <input
        type="password"
        name="password"
        class="border shadow-lg border-gray-300 w-full lg:w-1/3 px-5 py-2 text-black"
        placeholder="パスワードを入力"
        v-model="user.password"
      />
      <button class="bg-blue-500 w-full p-2 lg:w-1/3" @click.prevent="registerUser">
        登録
      </button>
    </form>
  </div>
</template>
<style scoped></style>

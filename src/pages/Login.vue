<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import Auth from "../api/auth/register";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
import Header from "../components/common/Header.vue"

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const computedUserPassword = computed({
  get: () => user.password,
  set: (value) => (user.password = value),
});

const computedUserEmail = computed({
  get: () => user.email,
  set: (value) => (user.email = value),
});

const loginUser = async () => {
  try {
    await Auth.loginUser(user);
    router.push("/");
    notify({
      type: "success",
      title: "ログイン成功",
      text: "ログインに成功しました。",
    });
  } catch {
    notify({
      type: "error",
      title: "ログイン失敗",
      text: "ログインに失敗しました。パスワードかメールアドレスが間違っている可能性があります",
    });
  }
};
</script>

<template>
  <Header/>
  <div class="mt-20">
    <div class="">
      <h1 class="text-2xl font-bold text-center">Keep Making Effort</h1>
    </div>

    <form
      class="bg-black opacity-90 shadow-md w-96 p-10 border border-gray-800 rounded-md mx-auto mt-10"
    >
      <div>
        <h3 class="text-gray-300 pb-8 text-2xl font-bold text-center">
          Login Your Account
        </h3>
      </div>
      <div class="flex flex-col gap-3">
        <BaseInput
          labelName="Email"
          inputId="email"
          inputType="email"
          inputName="email"
          inputPlaceholder="Email"
          v-model:value="user.email"
        />
        <BaseInput
          labelName="Password"
          inputId="password"
          inputType="password"
          inputName="password"
          inputPlaceholder="Password"
          v-model:value="computedUserPassword"
        />
      </div>
      <button
        class="mt-8 bg-blue-900 w-full py-2 rounded-md"
        @click.prevent="loginUser"
      >
        Login
      </button>
      <div class="flex flex-col items-center pt-8 gap-2">
        <p>or</p>
        <router-link to="/register" class="bg-blue-900 w-full rounded-md py-2 text-center">
          register
        </router-link>
      </div>
    </form>
  </div>
</template>
<style scoped></style>

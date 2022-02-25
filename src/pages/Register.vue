<script setup>
import { computed, reactive } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import Auth from "../api/auth/register";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
import Test from "../api/test/test";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  name: "",
});

const computedUserName = computed({
  get: () => user.name,
  set: (value) => (user.name = value),
});

const computedUserPassword = computed({
  get: () => user.password,
  set: (value) => (user.password = value),
});

const computedUserEmail = computed({
  get: () => user.email,
  set: (value) => (user.email = value),
});

const registerUser = async () => {
  if (user.name && user.email && user.password) {
    try {
      await Auth.registerUser(user);
      router.push("/");
      notify({
        type: "success",
        title: "登録成功",
        text: "登録に成功しました。",
      });
    } catch {
      notify({
        type: "error",
        title: "登録失敗",
        text: "登録に失敗しました。パスワードが短すぎるか、メールアドレスが既に登録されている可能性があります",
      });
    }
  } else {
    notify({
      type: "error",
      title: "登録失敗",
      text: "登録に失敗しました。パスワードが短すぎるか、メールアドレスが既に登録されている可能性があります",
    });
  }
};

const testAPI = () => {
  const res = Test.test();
  console.log(res)
};
</script>

<template>
  <div class="mt-20">
    <h1 class="text-2xl font-bold text-center">Keep Making Effort</h1>
    <form
      class="bg-black opacity-90 shadow-md w-96 p-10 border border-gray-800 rounded-md mx-auto mt-10"
    >
      <div>
        <h3 class="text-gray-300 pb-8 text-2xl font-bold text-center">
          Register Your Account
        </h3>
      </div>
      <div class="flex flex-col gap-3">
        <BaseInput
          labelName="Name"
          inputId="name"
          inputType="text"
          inputName="name"
          inputPlaceholder="Name"
          v-model:value="computedUserName"
        />
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
        @click.prevent="registerUser"
      >
        Create Account
      </button>
    </form>

    <button
      class="mt-8 bg-green-900 w-full py-2 rounded-md"
      @click.prevent="testAPI"
    >
      Test
    </button>
  </div>
</template>
<style scoped></style>

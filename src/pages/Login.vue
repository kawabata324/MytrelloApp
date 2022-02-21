<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import Auth from "../api/auth/register";
import { useRouter } from "vue-router";

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
  try{
    await Auth.loginUser(user);
    router.push("/");
  }
  catch{
    //Todo alertに変更する
    console.log('パスワードかメールアドレスが違います')
  }
};
</script>

<template>
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
    </form>
  </div>
</template>
<style scoped></style>

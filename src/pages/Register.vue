<script setup>
import { computed, reactive } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import Auth from "../api/auth/register";

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
  await Auth.registerUser(user);
}
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
  </div>
</template>
<style scoped></style>

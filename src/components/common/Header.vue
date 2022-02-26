<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import Auth from "../../api/auth/register"
import { useRouter } from 'vue-router';
import { notify } from "@kyvg/vue3-notification";

const router = useRouter()
const isLogin = ref(false);

const logoutUser = async () => {
  const res = await Auth.logoutUser();
  console.log(res);
  router.push("/login");
  isLogin.value = false
  notify({
    type: "success",
    title: "ログアウトしました",
    text: "ログアウトしました。",
  });
};

onMounted(async () => {
  if (
    (localStorage.getItem("client") !== null) &
    (localStorage.getItem("access-token") !== null) &
    (localStorage.getItem("uid") !== null)
  ) {
    try {
      await Auth.validated();
      isLogin.value = true;
    } catch {
      isLogin.value = false;
    }
  } else {
    isLogin.value = false;
  }
});
</script>
<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-3xl m-3">Keep My Efforts</h1>
      <div class="flex gap-3 items-center">
        <button
          class="my-2 p-2 bg-blue-900 rounded-md text-sm"
          @click="logoutUser"
          v-show="isLogin"
        >
          Logout
        </button>
        <button
          class="my-2 p-2 bg-blue-900 rounded-md text-sm"
          v-show="!isLogin"
        >
          Login
        </button>
        <Icon icon="bxs:user-detail" class="w-16 h-12" v-show="isLogin"></Icon>
      </div>
    </div>
  </div>
</template>

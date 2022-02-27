<script setup>
import { onMounted, reactive } from "vue";

const time = reactive({
  hours: "",
  minutes: "",
  seconds: "",
});

onMounted(() => {
  setInterval(() => setTime(), 1000);
});

const setTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  time.hours = String(hours).padStart(2, '0')
  time.minutes = String(minutes).padStart(2, '0')
};
</script>

<template>
  <div class="flex justify-end m-2">
    <div class="flex">
      <p>{{ time.hours }}</p>
      <p>:</p>
      <p>{{ time.minutes }}</p>
    </div>
  </div>
</template>

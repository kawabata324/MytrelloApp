<script setup>
import Footer from "./components/common/Footer.vue"
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <notifications position="bottom right" />
    <Footer class="fixed bottom-0 right-0"/>
  </div>
</template>

<style></style>

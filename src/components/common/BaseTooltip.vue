<script setup>
const props = defineProps({
  showTooltip: { type: Boolean },
  tooltipText: { type: String },
});
</script>
<template>
  <div
    class="p-1 absolute mt-1  bg-gray-600 opacity-70 text-xs rounded-md tracking-wider"
    v-show="props.showTooltip"
  >
    <p class="horizon">{{ props.tooltipText }}</p>
  </div>
</template>
<style scoped></style>

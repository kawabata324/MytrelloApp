<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  labelName: { type: String },
  inputType: { type: String },
  inputName: { type: String },
  inputId: { type: String },
  inputPlaceholder: { type: String },
  value: { type: String },
});

const emit = defineEmits(["update:value"]);

const valueComputed = computed({
  get: () => props.value,
  set: (value) => emit("update:value", value),
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <label :for="props.inputId" class="text-white">{{ props.labelName }}</label>
    <input
      :id="props.inputId"
      :type="props.inputType"
      :name="props.inputName"
      class="border shadow-lg border-gray-300 px-5 py-2 text-black rounded-lg"
      :placeholder="props.inputPlaceholder"
      v-model="valueComputed"
    />
  </div>
</template>

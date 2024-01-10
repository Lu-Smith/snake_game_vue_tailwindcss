<template>
    <div class="text-center">
      <div @click="toggleMode" :class="mode ? 'text-green-600' : 'text-red-600'">
        <span v-if="mode" class="material-symbols-outlined text-lightColor text-4xl">emoji_objects</span>
        <span v-else class="material-symbols-outlined text-darkColor text-4xl">nightlight</span>
        <span class="material-symbols-outlined text-4xl">toggle_{{ mode ? 'off' : 'on' }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps(['mode']);
  const emits = defineEmits();
  
  const toggleMode = () => {
    emits('update:mode', !props.mode);
  };
  </script>
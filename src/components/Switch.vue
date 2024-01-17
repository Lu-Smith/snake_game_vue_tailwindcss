<template>
    <div class="text-center">
      <div 
      @click="toggleMode" 
      :class="mode ? 'text-linksColor border-linksColor' : 'text-red-600 border-addColor'"
      class="border-l-8 border-r-8 inline-block w-full">
        <span v-if="mode" class="material-symbols-outlined text-linksColor text-4xl">emoji_objects</span>
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
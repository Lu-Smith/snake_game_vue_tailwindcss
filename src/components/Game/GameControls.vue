<template>
  <div class="flex flex-row justify-center items-center gap-6">
    <button @click="handleStartGame" :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
    <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{ mode: boolean }>();
const emits = defineEmits(['startGame']);

const handleStartGame = () => {
  emits('startGame');
};
</script>
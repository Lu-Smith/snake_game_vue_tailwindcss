<template>
  <div class="flex flex-row justify-center items-center gap-6">
    <button @click="handleStartGame" :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
    <button @click="handleStartGame" :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
  </div>
</template>

<script lang="ts" setup>
const { mode } = defineProps(['mode']);
const emits = defineEmits(['startGame']);
const handleStartGame = () => {
  emits('startGame');
};
</script>
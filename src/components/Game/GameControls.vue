<template>
  <div class="flex flex-row justify-center items-center gap-6">
    <button 
    @click="handleStartGame"
    v-if="!gameRunning || gamePaused"
    class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base transition-all duration-300 ease-in-out" 
    :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200' : 'bg-red-600 text-textColor hover:bg-red-400'"
    >Start</button>
    <button 
    @click="handlePauseGame" 
    v-if="gameRunning && !gamePaused"
    class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base transition-all duration-300 ease-in-out"
    :class="mode ? 'bg-addColor text-textColor hover:bg-linksColor' : 'bg-bgColor text-textColor hover:bg-addColor'"
    >Pause</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(['mode', 'gameRunning', 'gamePaused']);
const emits = defineEmits(['startGame', 'pauseGame']);
const handleStartGame = () => {
  emits('startGame');
};
const handlePauseGame = () => {
  emits('pauseGame');
};
</script>
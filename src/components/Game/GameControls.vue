<template>
  <div class="flex justify-between items-center">
    <div>
      <h2 
      class="font-semibold text-focusColor md:text-base text-sm"
      :class="mode ? 'text-slate-900' : 'text-textColor'" >Level {{ level }} - 
      <span v-if="level === 1 || level === 2" class="text-textColor font-bold">Snail Speed</span>
      <span v-if="level === 1 || level === 2" class="text-textColor font-bold">Swift Sloth</span>
      <span v-if="level === 3" class="text-textColor font-bold">Turtle Speed</span>
      <span v-if="level === 4" class="text-textColor font-bold">Walking Speed</span>
      <span v-if="level === 5" class="text-textColor font-bold">Jogging Speed</span>
      <span v-if="level === 6" class="text-textColor font-bold">Speedy Snicker</span>
      <span v-if="level === 7" class="text-textColor font-bold">Fox Speed</span>
      <span v-if="level === 8" class="text-textColor font-bold">Cheetah Speed</span>
      <span v-if="level === 9" class="text-focusColor font-bold">Lighting Speed</span>
      <span v-if="level === 10" class="text-focusColor font-bold">You are Flash</span>
    </h2>
    </div>
    <div class="flex flex-row justify-center items-center gap-6">
      <button 
      @click="handleStartGame"
      v-if="!gameRunning"
      class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base transition-all duration-300 ease-in-out" 
      :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200' : 'bg-focusColor text-textColor hover:bg-red-400'"
      >Start</button>
      <button 
      @click="handlePauseGame" 
      v-if="gameRunning && !gamePaused"
      class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base transition-all duration-300 ease-in-out"
      :class="mode ? 'bg-addColor text-textColor hover:bg-linksColor' : 'bg-bgColor text-textColor hover:bg-addColor'"
      >Pause</button>
      <button 
      @click="handleRestartGame" 
      v-if="gamePaused"
      class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base transition-all duration-300 ease-in-out"
      :class="mode ? 'bg-addColor text-textColor hover:bg-linksColor' : 'bg-bgColor text-textColor hover:bg-addColor'"
      >Restart</button>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
defineProps(['mode', 'gameRunning', 'gamePaused', 'level']);
const emits = defineEmits(['startGame', 'pauseGame', 'restartGame']);
const handleStartGame = () => {
  emits('startGame');
};
const handlePauseGame = () => {
  emits('pauseGame');
};
const handleRestartGame = () => {
  emits('restartGame');
};
</script>
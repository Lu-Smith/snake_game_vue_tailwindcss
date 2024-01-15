<template>
  <div class="flex flex-row justify-center items-center gap-6">
    <button 
    @click="handleStartGame"
    class="px-4 py-2 font-semibold rounded-lg shadow-sm" 
    :class="mode ? 'bg-red-400 text-bgColor' : 'bg-red-600 text-textColor'"
    >Start</button>
    <button 
    class="px-4 py-2 font-semibold rounded-lg shadow-sm"
    @click="handleStartGame" 
    :class="mode ? 'bg-addColor text-textColor' : 'bg-bgColor text-textColor'"
    >Restart</button>
  </div>
</template>

<script lang="ts" setup>
const { mode } = defineProps(['mode']);
const emits = defineEmits(['startGame']);
const handleStartGame = () => {
  emits('startGame');
};
</script>
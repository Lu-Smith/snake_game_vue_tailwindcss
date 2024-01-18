<template>
    <div v-if="gameRunning || (score !== 0 && !gameRunning)" class="flex flex-row justify-center items-center p-2">
      <h3 :class="mode ? 'text-bgColor' : 'text-textColor'" class="font-semibold text-xl">
        You {{ gameRunning ? 'ate' : 'lost, try again... You ate' }}
      </h3>
      <div class="flex flex-row justify-center items-center p-2">
        <span class="text-focusColor" :class="gameRunning ? 'text-4xl' : 'text-2xl'">{{ score }}</span>
        <img src="../../assets/smallApple.png" alt="apple" :class="gameRunning ? 'h-[40px] w-[40px]' : 'h-[30px] w-[30px]'">
      </div>
      <h3 v-if="!gameRunning" :class="mode ? 'text-bgColor' : 'text-textColor'" class="font-semibold text-base">.</h3>
    </div>
  </template>

<script lang="ts" setup>
defineProps(['score', 'mode', 'gameRunning', 'initialSnake', 'snake'])
    
</script>
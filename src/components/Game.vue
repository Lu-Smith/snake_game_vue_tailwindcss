<template>
    <div class="flex flex-row justify-center items-center gap-6">
      <button :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
      <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
    </div>
    <div class="w-full h-full mt-4 bg-red-200 flex justify-center items-center">
      <canvas
        :class="mode ? 'bg-green-200' : 'bg-slate-800'"
        ref="gameCanvas"
        :style="{ height: canvasHeight, width: canvasWidth }"
      ></canvas>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  defineProps(['mode']);
  
  const canvasWidth = ref<string>('100%');
  const canvasHeight = '500px';
  
  onMounted(() => {
    const canvas = ref<HTMLCanvasElement | null>(null);
    const context = canvas.value?.getContext('2d');
  
    if (context) {
      context.fillStyle = 'green';
      context.fillRect(10, 10, 50, 50);
    }
  });
  
  // Update canvasWidth on window resize
  window.addEventListener('resize', () => {
    canvasWidth.value = window.innerWidth > 786 ? '60%' : '100%';
  });
  </script>
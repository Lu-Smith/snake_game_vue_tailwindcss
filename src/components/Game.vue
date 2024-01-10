<template>
    <div class="flex flex-row justify-center items-center gap-6">
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
    </div>
    <div 
    
    class="w-full h-full mt-4">
        <canvas :class="mode ? 'bg-green-200' : 'bg-red-200'"  ref="gameCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div> 
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

defineProps(['mode']);

const canvasWidth = '80%';
const canvasHeight = '80%';

onMounted(() => {
const canvas = ref<HTMLCanvasElement | null>(null);
const context = canvas.value?.getContext('2d');

if (context) {
    context.fillStyle = 'green';
    context.fillRect(10, 10, 50, 50);
  }
});
</script>
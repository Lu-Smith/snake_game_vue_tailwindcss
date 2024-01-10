<template>
     <div class="w-full h-full mt-4 bg-red-200 flex justify-center items-center">
      <canvas
        :class="mode ? 'bg-green-200' : 'bg-slate-800'"
        ref="gameCanvas"
        :style="{ height: canvasHeight, width: canvasWidth }"
      ></canvas>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRefs } from 'vue';

const props = defineProps<{
  mode: boolean;
  fruit: HTMLImageElement;
}>();


const { canvasWidth, canvasHeight, gameCanvas, fruitImageLoaded } = toRefs({
    canvasWidth: ref<string>('100%'),
    canvasHeight: '500px',
    gameCanvas: ref<HTMLCanvasElement | null>(null),
    fruitImageLoaded: ref<boolean>(false),
});

const emits = defineEmits(['gameCanvas', 'fruitImageLoaded']);

onMounted(() => {
    props.fruit.onload = () => {
      fruitImageLoaded.value = true;
      emits('fruitImageLoaded', fruitImageLoaded.value);
    };

    // Handle image load error
    props.fruit.onerror = () => {
      console.error('Error loading the fruit image.');
    };
});

window.addEventListener('resize', () => {
    canvasWidth.value = window.innerWidth > 786 ? '60%' : '100%';
});

// Emit gameCanvas after it's ready
emits('gameCanvas', gameCanvas.value);

</script>
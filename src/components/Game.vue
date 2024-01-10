<template>
    <div class="flex flex-row justify-center items-center gap-6">
      <button 
      @click="startGame"
      :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
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
    import { ref, onMounted, toRefs } from 'vue';
    import Apple from '../assets/smallApple.png';

    defineProps(['mode']);

    const { canvasWidth, canvasHeight, gameCanvas, fruitImageLoaded } = toRefs({
    canvasWidth: ref<string>('100%'),
    canvasHeight: '500px',
    gameCanvas: ref<HTMLCanvasElement | null>(null),
    fruitImageLoaded: ref<boolean>(false),
    });

    //apple
    const initialApple = ref([60, 20]);
    const apple = ref(initialApple);
    const fruit = new Image();
    fruit.src = Apple;

    //snake
    const initialSnake = ref([[4,15], [4,15]]);
    const snake = ref(initialSnake);

    onMounted(() => {
    fruit.onload = () => {
        fruitImageLoaded.value = true;
    };

    // Handle image load error
    fruit.onerror = () => {
        console.error('Error loading the fruit image.');
    };
    });

    window.addEventListener('resize', () => {
    canvasWidth.value = window.innerWidth > 786 ? '60%' : '100%';
    });

    const startGame = () => {
    const context = gameCanvas.value?.getContext('2d');

    if (context && fruitImageLoaded.value) {
        //apple
        context.drawImage(fruit, apple.value[0], apple.value[1], 18, 10);
        //snake
        context.arc(30, 20, 5.5, 0, 2 * Math.PI, false);
        context.fillStyle = "#c1e205";
        context.fill();
    }
    };
</script>
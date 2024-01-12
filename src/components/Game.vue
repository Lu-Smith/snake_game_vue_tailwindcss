<template>
    <GameControls :mode="mode" @startGame="startGame"/>
    <div class="w-full h-full mt-4 bg-red-200 flex justify-center items-center">
    <canvas
      :class="mode ? 'bg-green-200' : 'bg-slate-800'"
      ref="gameCanvas"
      :style="{ height: canvasHeight, width: canvasWidth }"
    ></canvas>
  </div>
  </template>
  
  <script lang="ts" setup>
    import { ref, onMounted, toRefs} from 'vue';
    import Apple from '../assets/smallApple.png';
    import GameControls from './Game/GameControls.vue';

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
    const initialSnake = ref([[100,65], [106,65]]);
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
        const originalWidth = 60; // original width of the apple
        const aspectRatio = fruit.width / originalWidth;
        let newWidth;
        let newHeight;
        if (window.innerWidth > 786) {
            newWidth = 10;
            newHeight = 12 / aspectRatio;;
        } else {
            newWidth = 14;
            newHeight = 8 / aspectRatio;
        }

        context.drawImage(fruit, apple.value[0], apple.value[1], newWidth, newHeight);
        
         // snake - head
         drawSnakeHead(context, snake.value[0][0], snake.value[0][1], 8);

        // snake - body
        context.beginPath();
        context.arc(snake.value[1][0], snake.value[1][1], 5.5, 0, 2 * Math.PI, false);
        context.fillStyle = "#ff5959";
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#000';
        context.stroke();

        function drawSnakeHead(context: CanvasRenderingContext2D, x:number, y:number, radius:number) {
        // Head
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = "#c1e205";
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#000';
        context.stroke();

        // Eyes
        context.beginPath();
        context.arc(x - 3, y + 2, 1.5, 0, 2 * Math.PI, false); // Left eye
        context.fillStyle = "#000";
        context.fill();

        context.beginPath();
        context.arc(x - 3, y - 2, 1.5, 0, 2 * Math.PI, false); // Right eye
        context.fillStyle = "#000";
        context.fill();
      }
        }
    };
</script>
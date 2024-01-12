<template>
    <GameControls :mode="mode" @startGame="startGame" />
    <div class="w-full h-full mt-4 bg-red-200 flex justify-center items-center">
        <canvas
        :class="mode ? 'bg-green-200' : 'bg-slate-800'"
        ref="gameCanvas"
        :style="{ height: canvasHeight, width: canvasWidth }"
        ></canvas>
    </div>
    <Score :score="score"/>
  </template>
  
  <script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import Apple from '../assets/smallApple.png';
    import GameControls from './Game/GameControls.vue';
    import Score from './Game/Score.vue';
    import { drawSnakeHead } from '../utils/drawSnakeHeadUtils';

    defineProps(['mode']);

    //canvas
    const canvasWidth = ref<string>('100%');
    const canvasHeight ='500px';
    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const fruitImageLoaded = ref<boolean>(false);

    //score
    const score = ref<number>(0);
   
    //apple
    const initialApple = ref([60, 20]);
    const apple = ref(initialApple);
    const fruit = new Image();
    fruit.src = Apple;

    //snake
    const initialSnake = ref([[100,65], [106,65]]);
    const snake = ref(initialSnake);
    const direction = ref([ 0, -1 ]);


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

    //game logic
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
			case "ArrowLeft":
				direction.value =[ -1, 0 ]
				break
			case "ArrowUp":
				direction.value =[ 0, -1 ]
				break
			case "ArrowRight":
				direction.value =[ 1, 0 ]
				break
			case "ArrowDown":
				direction.value =[ 0, 1 ]
				break
		}
    }

    const startGame = () => {
    const context = gameCanvas.value?.getContext('2d');
    score.value = 0;

    if (context && fruitImageLoaded.value) {
       
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

        //apple
        context.drawImage(fruit, apple.value[0], apple.value[1], newWidth, newHeight);
        
        // snake - head
        drawSnakeHead(context, snake.value[0][0], snake.value[0][1], 6);

        // snake - body
        context.beginPath();
        context.arc(snake.value[1][0], snake.value[1][1], 5.5, 0, 2 * Math.PI, false);
        context.fillStyle = "#ff5959";
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#000';
        context.stroke();

        //playing the game
        window.addEventListener('keydown', handleKeyDown);
    }
    };
</script>
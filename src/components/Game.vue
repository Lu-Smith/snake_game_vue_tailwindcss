<template>
    <GameControls :mode="mode" @startGame="startGame" @pauseGame="pauseGame"  @restartGame="restartGame"
    :gameRunning="gameRunning" :gamePaused="gamePaused" />
    <div class="w-full h-full mt-4 flex justify-center items-center">
        <canvas
        :class="mode ? 'bg-red-100' : 'bg-slate-800'"
        class="border-2 border-red-600"
        ref="gameCanvas"
        :style="{ height: canvasHeight, width: canvasWidth }"
        ></canvas>
    </div>
    <Score :score="score" :mode="mode" :gameRunning="gameRunning"/>
  </template>
  
  <script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import Apple from '../assets/smallApple.png';
    import GameControls from './Game/GameControls.vue';
    import Score from './Game/Score.vue';
    import { drawSnakeHead } from '../utils/drawSnakeHeadUtils';
    import { drawBodyPart } from '../utils/drawSnakeBodyUtils';

    defineProps(['mode']);

    //canvas
    const canvasWidth = ref<string>('100%');
    const canvasHeight ='450px';
    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const fruitImageLoaded = ref<boolean>(false);

    //score
    const score = ref<number>(0);
   
    //apple
    const initialApple = ref([80, 50]);
    const apple = ref(initialApple);
    const fruit = new Image();
    fruit.src = Apple;

    //snake
    const initialSnake = ref([[100,25], [106,85]]);
    const snake = ref(initialSnake);
    const direction = ref([ -1, 0 ]);

    //playing 
    const gameRunning = ref(false);
    const gamePaused = ref(false);
    let gameInterval: undefined | number;

    onMounted(() => {
        fruit.onload = () => {
            fruitImageLoaded.value = true;
        };

        // Handle image load error
        fruit.onerror = () => {
            console.error('Error loading the fruit image.');
        };

        window.addEventListener('resize', () => {
        canvasWidth.value = window.innerWidth > 786 ? '80%' : '100%';
        });

        window.addEventListener('keydown', handleKeyDown);
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
    };

    const updateGame = () => {
    const context = gameCanvas.value?.getContext('2d');

    if (context && fruitImageLoaded.value && gameRunning.value && gameCanvas.value) {
        const newSnake = [...snake.value];
        const newSnakeHead = [
            newSnake[0][0] + direction.value[0], 
            newSnake[0][1] + direction.value[1]
        ];

        if (
        newSnakeHead[0] < 3 ||
        newSnakeHead[0] >= gameCanvas.value.width - 3 ||
        newSnakeHead[1] < 3 ||
        newSnakeHead[1] >= gameCanvas.value.height - 3
        ) {
        gameRunning.value = false;
        return;
        }

        newSnake.unshift(newSnakeHead);

        const head = [
            snake.value[0][0] + direction.value[0] - 4,
            snake.value[0][1] + direction.value[1] - 6,
        ];

        const distanceX = Math.abs(head[0] - apple.value[0]);
        const distanceY = Math.abs(head[1] - apple.value[1]);

        if (distanceX <= 4 && distanceY <= 5) {
            score.value++;
            snake.value.push([0, 0]);
            placeNewApple();

        } else {
            newSnake.pop();
        }
      
        snake.value = newSnake;

        const originalWidth = 60;
        const aspectRatio = fruit.width / originalWidth;
        let newWidth, newHeight;
        if (window.innerWidth > 786) {
        newWidth = 10;
        newHeight = 10 / aspectRatio;
        } else {
        newWidth = 20;
        newHeight = 10 / aspectRatio;
        }

        // Clear the canvas
        context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
  
        // Draw the apple
        context.drawImage(fruit, apple.value[0], apple.value[1], newWidth, newHeight);

        // Draw the snake
        drawSnakeHead(context, snake.value[0][0], snake.value[0][1], 5.5, direction.value);
        // Draw the snkaes'body
        for (let i = 1; i < snake.value.length; i++) {
        const bodyPart = snake.value[i]; 

        // Draw the body part
        const distanceFactor = -5;
        bodyPart[0] = snake.value[i][0] + direction.value[0] * distanceFactor;
        bodyPart[1] = snake.value[i][1] + direction.value[1] * distanceFactor;

            drawBodyPart(
                context,
                bodyPart[0],
                bodyPart[1],
                i % 2 === 0
            );
        }
       
    }};

    const placeNewApple = () => {
    const canvasWidth = gameCanvas.value?.width || 0;
    const canvasHeight = gameCanvas.value?.height || 0;

    // Calculate random coordinates within the canvas boundaries
    const newAppleX = Math.floor(Math.random() * (canvasWidth / 30)) * 30;
    const newAppleY = Math.floor(Math.random() * (canvasHeight / 30)) * 30;

    apple.value = [newAppleX, newAppleY];
    };

    const startGame = () => {
        if (gameInterval !== undefined) {
        clearInterval(gameInterval);
        gameInterval = undefined; 
        }

        score.value = 0;
        snake.value = [[100,25], [106,85]];
        apple.value = [80, 50]; 
        direction.value = [ -1, 0 ];
        gameInterval = setInterval(updateGame, 30);
        gameRunning.value = true;
        console.log('snake.value', snake.value, 'apple.value', apple.value)
    };

    const pauseGame = () => {
        clearInterval(gameInterval);
        gamePaused.value = true;
    };

    const restartGame = () => {
        gamePaused.value = false;
        gameInterval = setInterval(updateGame, 30);
    };
</script>
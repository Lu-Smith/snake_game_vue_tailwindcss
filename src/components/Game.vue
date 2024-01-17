<template>
    <GameControls :mode="mode" @startGame="startGame" />
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
            snake.value[0][0] + direction.value[0] - 8,
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
            const bodyPartX = snake.value[i][0] + direction.value[0] * i * -6;
            const bodyPartY = snake.value[i][1] + direction.value[1] * i * -6;

            if (i % 2 === 0) {
                context.beginPath();
                context.arc(bodyPartX, bodyPartY, 4.5, 0, 2 * Math.PI, false);
                context.fillStyle = "#a3d001";
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = '#000';
                context.stroke();
            } else {
                context.beginPath();
                context.arc(bodyPartX, bodyPartY, 4.5, 0, 2 * Math.PI, false);
                context.fillStyle = "#0d9123";
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = '#000';
                context.stroke();
            }
      
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
        gameRunning.value = true;
        score.value = 0;
        snake.value = initialSnake.value;
        apple.value = initialApple.value;
        direction.value = [-1, 0]
    
        setInterval(updateGame, 30);
    };
</script>
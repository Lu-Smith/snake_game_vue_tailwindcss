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
        canvasWidth.value = window.innerWidth > 786 ? '60%' : '100%';
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

    if (context && fruitImageLoaded.value && gameRunning.value) {
        const newSnake = [...snake.value];
        const newSnakeHead = [
            newSnake[0][0] + direction.value[0], 
            newSnake[0][1] + direction.value[1]
        ];
        newSnake.unshift(newSnakeHead);
        newSnake.pop();
        snake.value = newSnake;

        snakeAteApple();

        const originalWidth = 60;
        const aspectRatio = fruit.width / originalWidth;
        let newWidth, newHeight;
        if (window.innerWidth > 786) {
        newWidth = 10;
        newHeight = 12 / aspectRatio;
        } else {
        newWidth = 14;
        newHeight = 8 / aspectRatio;
        }

        // Clear the canvas
        if(gameCanvas.value) {
            context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
        }

        // Draw the apple
        context.drawImage(fruit, apple.value[0], apple.value[1], newWidth, newHeight);

        // Draw the snake
        drawSnakeHead(context, snake.value[0][0], snake.value[0][1], 6, direction.value);

        // Draw the snkaes'body
        for (let i = 1; i < snake.value.length; i++) {
        const bodyPartX = snake.value[i][0] + direction.value[0] * i * -6;
        const bodyPartY = snake.value[i][1] + direction.value[1] * i * -6;

        context.beginPath();
        context.arc(bodyPartX, bodyPartY, 5.5, 0, 2 * Math.PI, false);
        context.fillStyle = '#ff5959';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#000';
        context.stroke();
        }
    }
    };

    const snakeAteApple = () => {
        const newSnakeHead = [
            snake.value[0][0] + direction.value[0] - 7,
            snake.value[0][1] + direction.value[1] -5,
        ];

        console.log('snake', newSnakeHead);
        console.log('apple', apple.value)

        if (newSnakeHead[0] === apple.value[0] && newSnakeHead[1] === apple.value[1]) {
            score.value++;
            // Place a new apple at a random position
            apple.value = [Math.floor(Math.random() * 20) * 20, Math.floor(Math.random() * 15) * 20];
        }
    };

    const startGame = () => {
        gameRunning.value = true;
        score.value = 0;
        snake.value = initialSnake.value;
        apple.value = initialApple.value;
        direction.value = [-1, 0]
    
        setInterval(updateGame, 100);
};
</script>
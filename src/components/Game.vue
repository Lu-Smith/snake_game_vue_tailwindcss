<template>
    <GameControls 
    :mode="mode"
    :level="level"
    @startGame="startGame" 
    @pauseGame="pauseGame"  
    @restartGame="restartGame"
    :gameRunning="gameRunning" :gamePaused="gamePaused" />
    <div class="w-full h-full mt-4 flex justify-center items-center">
        <canvas
        :class="mode ? 'bg-orange-100' : 'bg-slate-800'"
        class="border-2 border-focusColor"
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
    import { drawMouseEventCanvas} from '../utils/drawMouseEventCanvasUtils';

    const props = defineProps(['mode', 'snakeNumberChoice']);

    const snakeNumberChoice = ref<number>(props.snakeNumberChoice);

    //canvas
    const canvasWidth = ref<string>('100%');
    const canvasHeight ='450px';
    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const fruitImageLoaded = ref<boolean>(false);

    //score
    const score = ref<number>(0);
    const level = ref<number>(1);
   
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
    let intervalTime: number = 30;
    let previousLevel:number = 1;

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
        window.addEventListener("mousedown", handleMouseDown);
    });

    //game logic
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
			case "ArrowLeft":
				direction.value =[-1, 0 ]
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

    const handleMouseDown = (event: MouseEvent) => {
        const canvasRect = gameCanvas.value?.getBoundingClientRect();

        if(gameCanvas.value && canvasRect) {
            const mouseX = event.clientX - canvasRect.left;
            const mouseY = event.clientY - canvasRect.top;  

            if (
            mouseX > 0 
            && mouseX < (canvasRect.right - canvasRect.left)*0.1674
            && mouseY > (canvasRect.bottom - canvasRect.top - (canvasRect.bottom - canvasRect.top)*0.8667) 
            && mouseY < (canvasRect.bottom - canvasRect.top)*0.8667) {
                direction.value =[-1, 0 ]
            } else if (
            mouseX < (canvasRect.right - canvasRect.left) 
            && mouseX > (canvasRect.right - canvasRect.left - (canvasRect.right - canvasRect.left)*0.1674) 
            && mouseY > (canvasRect.bottom - canvasRect.top - (canvasRect.bottom - canvasRect.top)*0.8667) 
            && mouseY < (canvasRect.bottom - canvasRect.top)*0.8667) {
            direction.value =[ 1, 0 ]
            } else if (
            mouseX > 285 
            && mouseX < (canvasRect.right - canvasRect.left - 285) 
            && mouseY > 0 
            && mouseY < 120) {
                direction.value =[ 0, -1 ]
            } else if (
            mouseX > 285 
            && mouseX < (canvasRect.right - canvasRect.left - 285)  
            && mouseY > (canvasRect.bottom - canvasRect.top - 120) 
            && mouseY < (canvasRect.bottom - canvasRect.top) ) {
                direction.value =[ 0, 1 ]
            } 

            console.log('canvasP1', 150/(canvasRect.right - canvasRect.left));
            console.log('canvasP2', 390/(canvasRect.bottom - canvasRect.top));
        }
    };

    const updateGame = () => {
    const context = gameCanvas.value?.getContext('2d');

    if (context && fruitImageLoaded.value && gameRunning.value && gameCanvas.value) {
        intervalTime = 30 - 3 * level.value + 5;

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
            snake.value[0][0] + direction.value[0] - 5,
            snake.value[0][1] + direction.value[1] - 5,
        ];

        const distanceX = Math.abs(head[0] - apple.value[0]);
        const distanceY = Math.abs(head[1] - apple.value[1]);

        if (distanceX <= 5 && distanceY <= 5) {
            score.value++;
            snake.value.push([0, 0]);
            placeNewApple();

            const scoreThresholds = [1, 5, 11, 18, 25, 35, 47, 60, 75, 90];

            for (let i = 0; i < scoreThresholds.length; i++) {
                if (score.value >= scoreThresholds[i]) {
                    level.value = i + 1;
                }
            }

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

        //canvas mouseEvent fields
        drawMouseEventCanvas(context, 0, 20, 50, 110);
        drawMouseEventCanvas(context, gameCanvas.value.width-50, 20, 50, 110);
        drawMouseEventCanvas(context, gameCanvas.value.width/2-55, 0, 110, 40);
        drawMouseEventCanvas(context, gameCanvas.value.width/2-55, gameCanvas.value.height-40, 110, 40);


  
        // Draw the apple
        context.drawImage(fruit, apple.value[0], apple.value[1], newWidth, newHeight);

        // Draw the snake
        drawSnakeHead(context, snake.value[0][0], snake.value[0][1], 5.5, direction.value, snakeNumberChoice.value);
        // Draw the snkaes'body
        for (let i = 1; i < snake.value.length; i++) {
            const bodyPart = snake.value[i]; 

            // Draw the body part
            const distanceFactor = -5;
            const newBodyPartX = bodyPart[0] + direction.value[0] * distanceFactor;
            const newBodyPartY = bodyPart[1] + direction.value[1] * distanceFactor;

            const canvasWidth = gameCanvas.value?.width || 0;
            const canvasHeight = gameCanvas.value?.height || 0;

            bodyPart[0] = Math.max(0, Math.min(newBodyPartX, canvasWidth));
            bodyPart[1] = Math.max(0, Math.min(newBodyPartY, canvasHeight));

            drawBodyPart(context, bodyPart[0], bodyPart[1], snakeNumberChoice.value, i % 2 === 0);
        }
        if (previousLevel !== level.value) {
            // Level has changed, update the interval
            if (gameInterval !== undefined) {
                clearInterval(gameInterval);
            }
            gameInterval = setInterval(updateGame, intervalTime);
            previousLevel = level.value;
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

        level.value = 1;
        score.value = 0;
        snake.value = [[100,25], [106,85]];
        apple.value = [80, 50]; 
        direction.value = [ -1, 0 ];
        gameInterval = setInterval(updateGame, intervalTime);
        gameRunning.value = true;
    };

    const pauseGame = () => {
        clearInterval(gameInterval);
        gamePaused.value = true;
    };

    const restartGame = () => {
        gamePaused.value = false;
        gameInterval = setInterval(updateGame, intervalTime);
    };

</script>
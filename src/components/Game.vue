<template>
    <GameControls :mode="mode" @startGame="startGame"/>
    <Canvas 
    :mode="mode" 
    :fruit="fruit" 
    @fruitImageLoaded="handleFruitImageLoaded"
    @gameCanvas="handleGameCanvas"
    />
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue';
    import GameControls from '../components/Game/GameControls.vue';
    import Canvas from '../components/Game/Canvas.vue';
    import Apple from '../assets/smallApple.png';

    defineProps(['mode']);

    let gameCanvas: HTMLCanvasElement | null = null;
    let fruitImageLoaded = false;

    //apple
      const initialApple = ref([60, 20]);
      const apple = ref(initialApple);
      const fruit = new Image();
      fruit.src = Apple;

      //snake
      const initialSnake = ref([[100,65], [106,65]]);
      const snake = ref(initialSnake);

      const handleGameCanvas = (canvas: HTMLCanvasElement | null) => {
        gameCanvas = canvas;
      };

      const handleFruitImageLoaded = (loaded: boolean) => {
        fruitImageLoaded = loaded;
      };


    const startGame = () => {
      if (gameCanvas && fruitImageLoaded) {
      const context = gameCanvas.getContext('2d');

      if (context && fruitImageLoaded) {
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
      }
    };
</script>
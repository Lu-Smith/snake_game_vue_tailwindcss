<template>
    <div class="flex justify-center items-center flex-col gap-4">
        <div class="w-full h-full mt-4 flex justify-center items-center">
            <canvas
            v-if="snakeNumber === 1"
            :class="mode ? 'bg-red-100' : 'bg-slate-800'"
            class="border-2 border-focusColor"
            ref="snakeCanvas"
            ></canvas>
            <canvas
            v-if="snakeNumber === 2"
            :class="mode ? 'bg-red-100' : 'bg-slate-800'"
            class="border-2 border-focusColor"
            ref="snakeCanvas"
            ></canvas>
        </div>
        <div>
            <button
            @click="snakeChoice"
            class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base 
            transition-all duration-300 ease-in-out border-2 mr-4" 
            :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200 border-focusColor' 
            : 'bg-bgColor text-textColor hover:bg-red-400 border-focusColor'">
            My Snake</button>        
            <button
            @click="nextSnake"
            class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base 
            transition-all duration-300 ease-in-out border-2" 
            :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200 border-focusColor' 
            : 'bg-bgColor text-textColor hover:bg-red-400 border-focusColor'">
            Next</button>
        </div>   
    </div>  
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect  } from 'vue';
import { drawSnakeHead2 } from '../utils/drawSnakeHead2Utils';
import { drawBodyPart2 } from '../utils/drawSnakeBody2Utils';
import { drawSnakeHead1 } from '../utils/drawSnakeHead1Utils.ts';
import { drawBodyPart1 } from '../utils/drawSnakeBody1Utils';
import { drawSnakeHead3 } from '../utils/drawSnakeHead3Utils';
import { drawBodyPart3 } from '../utils/drawSnakeBody3Utils';
import { drawSnakeHead4 } from '../utils/drawSnakeHead4Utils';
import { drawBodyPart4 } from '../utils/drawSnakeBody4Utils';

defineProps(['mode']);

const snakeNumber = ref(1);
const snakeCanvas = ref<HTMLCanvasElement | null>(null);
const snake = ref([[62, 75], [80, 56], [80, 37], [80, 18], [80, 37], [80, 18], [80, 56], [80, 37], [80, 18], [80, 37], [80, 18], [80, 56], [80, 37], [80, 18], [80, 37], [80, 18]]);
const direction = ref([1, 0]);

const snakeChoice = () => {
  // Implement snakeChoice logic if needed
};

const nextSnake = () => {
  snakeNumber.value++;
  console.log(snakeNumber.value);
  drawSnake();
};

const drawSnake = () => {
  const context = snakeCanvas.value?.getContext('2d');

  if (context) {
    if (snakeNumber.value === 1) {
      drawSnakeHead2(context, snake.value[0][0], snake.value[0][1], 10.5);

      for (let i = 1; i < snake.value.length; i++) {
        const bodyPart = snake.value[i];

        // Draw the body part
        const distanceFactor = 12;
        bodyPart[0] = snake.value[i - 1][0] + direction.value[0] * distanceFactor;
        bodyPart[1] = snake.value[i - 1][1] + direction.value[1] * distanceFactor;

        drawBodyPart2(context, bodyPart[0], bodyPart[1], i % 2 === 0);
      }
    } else if (snakeNumber.value === 2) {
      drawSnakeHead1(context, snake.value[0][0], snake.value[0][1], 10.5);

      for (let i = 1; i < snake.value.length; i++) {
        const bodyPart = snake.value[i];

        // Draw the body part
        const distanceFactor = 12;
        bodyPart[0] = snake.value[i - 1][0] + direction.value[0] * distanceFactor;
        bodyPart[1] = snake.value[i - 1][1] + direction.value[1] * distanceFactor;

        drawBodyPart1(context, bodyPart[0], bodyPart[1], i % 2 === 0);
      }
    } else if (snakeNumber.value === 3) {
      drawSnakeHead3(context, snake.value[0][0], snake.value[0][1], 10.5);

      for (let i = 1; i < snake.value.length; i++) {
        const bodyPart = snake.value[i];

        // Draw the body part
        const distanceFactor = 12;
        bodyPart[0] = snake.value[i - 1][0] + direction.value[0] * distanceFactor;
        bodyPart[1] = snake.value[i - 1][1] + direction.value[1] * distanceFactor;

        drawBodyPart3(context, bodyPart[0], bodyPart[1], i % 2 === 0);
      }
    } else if (snakeNumber.value === 4) {
      drawSnakeHead4(context, snake.value[0][0], snake.value[0][1], 10.5);

      for (let i = 1; i < snake.value.length; i++) {
        const bodyPart = snake.value[i];

        // Draw the body part
        const distanceFactor = 12;
        bodyPart[0] = snake.value[i - 1][0] + direction.value[0] * distanceFactor;
        bodyPart[1] = snake.value[i - 1][1] + direction.value[1] * distanceFactor;

        drawBodyPart4(context, bodyPart[0], bodyPart[1], i % 2 === 0);
      }
    }
  }
};

watchEffect(() => {
  drawSnake();
});

onMounted(() => {
  drawSnake();
});
</script>
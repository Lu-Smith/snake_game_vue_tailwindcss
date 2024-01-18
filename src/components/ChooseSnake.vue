<template>
    <div class="flex justify-center items-center flex-col gap-4">
        <div class="w-full h-full mt-4 flex justify-center items-center">
            <canvas
            :class="mode ? 'bg-red-100' : 'bg-slate-800'"
            class="border-2 border-focusColor"
            ref="snakeCanvas"
            ></canvas>
        </div>
        <button
        class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base 
        transition-all duration-300 ease-in-out border-2" 
        :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200 border-focusColor' 
        : 'bg-bgColor text-textColor hover:bg-red-400 border-focusColor'">My Snake</button>
    </div>  
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    defineProps(['mode']);

    const snakeCanvas = ref<HTMLCanvasElement | null>(null);
    const initialSnake = ref([[50,75], [45,85]]);
    const snake = ref(initialSnake);
    const direction = ref([ -1, 0 ]);
    import { drawSnakeHead2 } from '../utils/drawSnakeHead2Utils';

    onMounted(() => {
        const context = snakeCanvas.value?.getContext('2d');

        if(context) {
            drawSnakeHead2(context, snake.value[0][0], snake.value[0][1], 5.5, direction.value);
        }
    });
</script>
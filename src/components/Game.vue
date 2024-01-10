<template>
    <div class="flex flex-row justify-center items-center gap-6">
      <button 
      @click="startGame"
      :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
      <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
    </div>
    <img src="../assets/smallApple.png" alt="apple">
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

    defineProps(['mode']);

    const { canvasWidth, canvasHeight, gameCanvas, fruitImageLoaded } = toRefs({
    canvasWidth: ref<string>('100%'),
    canvasHeight: '500px',
    gameCanvas: ref<HTMLCanvasElement | null>(null),
    fruitImageLoaded: ref<boolean>(false),
    });

    const initialApple = ref([10, 10]);
    const apple = ref(initialApple);
    const fruit = new Image();
    fruit.src = '../assets/smallApple.png';

    onMounted(() => {
    const context = gameCanvas.value?.getContext('2d');

    console.log(fruit.src);

    if (context) {
        // context.fillStyle = 'green';
        // context.fillRect(10, 10, 50, 50);
    }

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
        context.drawImage(fruit, apple.value[0], apple.value[1], 2, 2)
    }
    };
</script>
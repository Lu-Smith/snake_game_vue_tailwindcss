<template>
    <div 
    class="text-center"
    :class="mode ? 'text-slate-800' : 'text-textColor'">
        <h1 class="text-xl md:text-2xl font-semibold mb-4">Welcome to 
            <span class="font-bold transition-all duration-300 ease-in-out" 
            :class="mode ? 'text-addColor hover:text-textColor' : 'text-focusColor hover:text-addColor'">
            Snake Game</span>! 
        </h1>
        <p class="text-xs sm:text-sm md:text-base">Enjoy the classic thrill of maneuvering a snake through the digital realm. 
            Have fun and challenge yourself to grow as long as possible. Best of luck!</p>
    </div>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
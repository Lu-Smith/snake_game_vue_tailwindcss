<template>
    <div 
    class="text-center p-2"
    :class="mode ? 'text-addColor' : 'text-textColor'">
        <h1 class="text-xl md:text-2xl font-semibold mb-4">Welcome to Snake Game! </h1>
        <p class="text-xs sm:text-sm md:text-base">Enjoy the classic thrill of maneuvering a snake through the digital realm. 
            Have fun and challenge yourself to grow as long as possible. Best of luck!</p>
    </div>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
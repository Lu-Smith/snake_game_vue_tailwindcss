<template>
    <div 
    class="text-center"
    :class="mode ? 'text-textColor' : 'text-addColor'">
        <h1 class="text-xl md:text-2xl font-semibold mb-4">Welcome to Snake Game! </h1>
        <p>Enjoy the classic thrill of maneuvering a snake through the digital realm. Have fun and challenge yourself to grow as long as possible. Best of luck!</p>
    </div>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
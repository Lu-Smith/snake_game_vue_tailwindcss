<template>
    <div class="flex flex-row justify-center items-center p-2">
        <h3 
        :class="mode ? 'text-bgColor' : 'text-textColor'"
        class="font-semibold text-2xl">You ate</h3>
        <div class="flex flex-row justify-center items-center p-2">
            <span class="text-4xl text-red-600">{{ score }}</span>
            <img src='../../assets/smallApple.png' alt="apple" class="h-[40px] w-[40px]">
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['score', 'mode'])
    
</script>
<template>
    <div class="flex flex-row justify-center items-center bg-slate-400 p-2">
        <h3 class="font-semibold text-2xl underline">You ate 
            <span class="text-4xl text-linksColor">{{ score }}</span>
        </h3>
        <img src='../../assets/smallApple.png' alt="apple" class="h-[40px] w-[40px]">
    </div>
</template>

<script lang="ts" setup>
defineProps(['score'])
    
</script>
<template>
    <div class="flex flex-row justify-center items-center gap-6">
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
    </div>
    <div :class="mode ? 'text-textColor' : 'text-addColor'">
        <div class="grid grid-rows-4 grid-flow-col gap-4">
            <div v-for="block in blocks" :key="block">😄</div>
        </div>
    </div> 
</template>

<script lang="ts" setup>
defineProps(['mode']);
 const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15, 16]
</script>
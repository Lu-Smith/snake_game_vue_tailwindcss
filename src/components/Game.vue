<template>
    <div class="flex flex-row justify-center items-center gap-6">
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
        <button :class="mode ? 'text-textColor' : 'text-addColor'">Restart</button>
    </div>
    <div :class="mode ? 'text-textColor' : 'text-addColor'">Start</div> 
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
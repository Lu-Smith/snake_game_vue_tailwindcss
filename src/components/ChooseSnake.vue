<template>
    <div class="w-full h-full mt-4 flex justify-center items-center">
        <canvas
        :class="mode ? 'bg-red-100' : 'bg-slate-800'"
        class="border-2 border-focusColor"
        ref="gameCanvas"
        ></canvas>
    </div>
    <button>My Snake</button>
</template>

<script lang="ts" setup>
    defineProps(['mode']);
</script>
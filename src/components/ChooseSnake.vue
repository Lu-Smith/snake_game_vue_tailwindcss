<template>
    <div class="w-full h-full mt-4 flex justify-center items-center">
        <canvas
        :class="mode ? 'bg-red-100' : 'bg-slate-800'"
        class="border-2 border-focusColor"
        ref="gameCanvas"
        ></canvas>
    </div>
    <button
    class="px-4 py-2 font-semibold rounded-lg shadow-sm text-sm md:text-base 
    transition-all duration-300 ease-in-out mt-2 border-2" 
    :class="mode ? 'bg-red-400 text-textColor hover:bg-red-200 border-focusColor' 
    : 'bg-bgColor text-textColor hover:bg-red-400 border-focusColor'">My Snake</button>
</template>

<script lang="ts" setup>
    defineProps(['mode']);
</script>
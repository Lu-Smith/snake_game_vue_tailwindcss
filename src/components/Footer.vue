<template>
    <h3 
    :class="mode ? 'text-slate-800 border-linksColor bg-red-200' : 'text-textColor border-addColor bg-bgColor'"
    class="md:text-sm text-xs p-2 font-semibold text-center border-t-2 fixed bottom-0 w-full">
        Coded by 
        <a 
        href="https://www.lunasmithart.com/"
        target="_blank"
        :class="mode ? 'border-focusColor hover:bg-textColor text-addColor' : 'border-focusColor hover:bg-addColor text-focusColor'"
        class=" border-b-2
        hover:border-none  transition-all duration-300 ease-in-out 
        hover:bg-addColor underline-offset-4 hover:underline-offset-8 rounded hover:p-2">
        Luna Smith</a> -
        <a 
        href="https://github.com/Lu-Smith/snake_game_vue_tailwindcss" 
        target="_blank"
        :class="mode ? 'border-focusColor hover:bg-textColor text-addColor' : 'border-focusColor hover:bg-addColor text-focusColor'"
        class="border-b-2 hover:border-none  transition-all duration-300 ease-in-out 
         underline-offset-4 hover:underline-offset-8 rounded hover:p-2">
        GitHub</a>.
    </h3>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
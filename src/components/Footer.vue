<template>
    <h3 
    :class="mode ? 'text-textColor' : 'text-addColor'"
    class="fixed bottom-4 right-4 w-ful text-sm mt-2 bg-bgColor 
    p-2 rounded font-semibold">
        Coded by 
        <a 
        href="https://www.lunasmithart.com/"
        target="_blank"
        class="text-linksColor border-b-2 border-linksColor 
        hover:border-none hover:text-bgColor transition-all duration-300 ease-in-out 
        hover:bg-addColor underline-offset-4 hover:underline-offset-8 rounded hover:p-2">
        Luna Smith</a> -
        <a 
        href="https://github.com/Lu-Smith/snake_game_vue_tailwindcss" 
        target="_blank"
        class="text-linksColor border-b-2 border-linksColor 
        hover:border-none hover:text-bgColor transition-all duration-300 ease-in-out 
        hover:bg-addColor underline-offset-4 hover:underline-offset-8 rounded hover:p-2">
        GitHub</a>.
    </h3>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
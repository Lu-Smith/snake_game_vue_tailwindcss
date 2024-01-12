<template>
    <div class="w-full h-full mt-4 bg-red-200 flex justify-center items-center">
      <canvas
        :class="mode ? 'bg-green-200' : 'bg-slate-800'"
      ></canvas>
  </div>
</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
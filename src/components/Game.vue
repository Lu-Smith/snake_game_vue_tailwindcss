<template>
    <button :class="mode ? 'text-textColor' : 'text-addColor'">Start</button>
    <div :class="mode ? 'text-textColor' : 'text-addColor'">Start</div>

</template>

<script lang="ts" setup>
defineProps(['mode']);
</script>
<template>
  <div 
  :class="mode ? 'bg-textColor' : 'bg-bgColor'"
  class="flex flex-col justify-center items-center gap-6 w-full h-full p-4">
    <Switch v-model:mode="mode" />
    <div class="w-full h-full p-6">
      <Header :mode="mode"  />
    </div>
    <div class="bg-blue-200 max-w-192 h-full p-6 rounded-lg">
      <Game :mode="mode" />
    </div>
  </div>
  <Footer :mode="mode" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Game from './components/Game.vue';
import Footer from './components/Footer.vue';
import Switch from './components/Switch.vue';

const mode = ref(false);
</script>


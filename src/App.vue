<template>
  <div class="flex flex-col justify-center items-center gap-6 w-full h-full">
    <Switch v-model:mode="mode" />
    <div class="bg-green-200 w-full h-full p-6">
      <Header />
    </div>
    <div class="bg-blue-200 w-full h-full p-6">
      <Game />
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Game from './components/Game.vue';
import Footer from './components/Footer.vue';
import Switch from './components/Switch.vue';

const mode = ref(false);
</script>


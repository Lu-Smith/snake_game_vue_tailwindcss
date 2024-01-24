<template>
  <div 
  :class="mode ? 'bg-gradient-to-t from-textColor to-linksColor' : 'bg-gradient-to-t from-addColor to-bgColor'"
  class="flex flex-col justify-center items-center gap-6 w-full h-full md:p-4 pt-4">
    <div class="w-full h-full">
      <Switch v-model:mode="mode" />
    </div>
    <div class="w-full h-full p-6">
      <Header :mode="mode"  />
    </div>
    <div v-if="!choiceMade">
      <ChooseSnake :mode="mode" @snakeChoice="snakeChoice" @snakeNumber="handleSnakeNumber"/>
    </div>
    <div 
    v-else
    :class="mode ? 'bg-linksColor' : 'bg-addColor'"
    class=" max-w-192 h-full pt-4 pb-4 mb-6 md:p-6 md:rounded-lg ">
      <Game :mode="mode" :snakeNumberChoice="snakeNumberChoice"/>
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
import ChooseSnake from './components/ChooseSnake.vue';

const mode = ref(false);
const choiceMade = ref(false);
const snakeNumberChoice = ref(1);

const handleSnakeNumber = (value: number) => {
  snakeNumberChoice.value = value;
};

const snakeChoice = () => {
  choiceMade.value = true;
};


</script>


<template>
  <div class="flex flex-col justify-center items-center gap-6 w-full h-full">
    <div class="text-center">
            <div 
            @click="darkMode"
            v-if="mode"
            class="text-green-600" >
                <span class="material-symbols-outlined text-lightColor text-4xl">
                emoji_objects
                </span>
                <span class="material-symbols-outlined text-4xl">
                toggle_off
                </span>
            </div>
            <div 
            @click="lightMode"
            v-else
            class="text-red-600">
                <span class="material-symbols-outlined text-darkColor text-4xl">
                nightlight
                </span>
                <span class="material-symbols-outlined text-4xl">
                toggle_on
                </span>
            </div>
        </div>
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

const mode =ref(false);

function lightMode() {
    mode.value = !mode.value
};

function darkMode() {
    mode.value = !mode.value
};
</script>


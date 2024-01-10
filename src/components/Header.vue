<template>
    <div>
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
        <h1>Welcome to Snake Game! </h1>
        <p>Enjoy the classic thrill of maneuvering a snake through the digital realm. Have fun and challenge yourself to grow as long as possible. Best of luck!</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const mode =ref(false);

function lightMode() {
    mode.value = !mode.value
};

function darkMode() {
    mode.value = !mode.value
};
</script>
<template>
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
</template>
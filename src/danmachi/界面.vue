<template>
  <LoadingScreen v-if="isLoading" @loaded="onLoaded" />
  <RouterView v-else />
</template>

<script setup lang="ts">
import LoadingScreen from './components/LoadingScreen.vue';

const isLoading = ref(true);

function onLoaded() {
  isLoading.value = false;
}
</script>

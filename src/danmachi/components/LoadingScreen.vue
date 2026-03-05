<template>
  <Transition name="loading-fade">
    <div v-if="visible" class="loading-screen">
      <div class="loading-bg"></div>

      <div class="magic-circle-wrapper">
        <div class="magic-circle outer"></div>
        <div class="magic-circle inner"></div>
        <div class="magic-circle core"></div>
        <div class="magic-center-dot"></div>
      </div>

      <div class="loading-text">
        <span class="loading-label">{{ displayText }}</span>
        <span class="loading-cursor">|</span>
      </div>

      <div class="loading-hint">Entering the Dungeon...</div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  loaded: [];
}>();

const visible = ref(true);
const displayText = ref('');
const fullText = '正在进入迷宫都市奥拉利奥...';

function typeWriter(text: string, index = 0) {
  if (index <= text.length) {
    displayText.value = text.slice(0, index);
    setTimeout(() => typeWriter(text, index + 1), 80);
  }
}

onMounted(() => {
  typeWriter(fullText);
  setTimeout(() => {
    visible.value = false;
    setTimeout(() => emit('loaded'), 600);
  }, 3500);
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.loading-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, #0f1429 0%, #0a0e1a 70%, #050810 100%);
  z-index: -1;
}

.magic-circle-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
}

.magic-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
}

.magic-circle.outer {
  inset: 0;
  border-color: rgba(212, 175, 55, 0.5);
  border-top-color: rgba(212, 175, 55, 1);
  border-right-color: rgba(212, 175, 55, 0.8);
  animation: magicCircleSpin 3s linear infinite;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.1);
}

.magic-circle.inner {
  inset: 20px;
  border-color: rgba(74, 111, 165, 0.4);
  border-bottom-color: rgba(74, 111, 165, 1);
  border-left-color: rgba(74, 111, 165, 0.7);
  animation: magicCircleSpinReverse 2s linear infinite;
  box-shadow: 0 0 15px rgba(74, 111, 165, 0.2), inset 0 0 15px rgba(74, 111, 165, 0.1);
}

.magic-circle.core {
  inset: 45px;
  border-color: rgba(107, 74, 138, 0.3);
  border-top-color: rgba(107, 74, 138, 1);
  animation: magicCircleSpin 1.5s linear infinite;
  box-shadow: 0 0 12px rgba(107, 74, 138, 0.3), inset 0 0 12px rgba(107, 74, 138, 0.15);
}

.magic-center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #f0d060, #d4af37);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.4);
  animation: pulseGlow 2s ease-in-out infinite;
}

.loading-text {
  font-family: var(--font-title);
  font-size: 1.15rem;
  color: var(--color-gold-light);
  letter-spacing: 0.15em;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.loading-cursor {
  animation: blink 0.8s step-end infinite;
  color: var(--color-gold);
  margin-left: 2px;
}

.loading-hint {
  position: absolute;
  bottom: 3rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--color-text-dim);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  animation: pulseGlow 3s ease-in-out infinite;
}

.loading-fade-leave-active {
  transition: opacity 0.6s ease;
}
.loading-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .magic-circle-wrapper { width: 140px; height: 140px; }
  .magic-circle.inner { inset: 16px; }
  .magic-circle.core { inset: 36px; }
  .loading-text { font-size: 0.95rem; }
  .loading-hint { font-size: 0.7rem; bottom: 2rem; }
}
</style>

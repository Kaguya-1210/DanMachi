<template>
  <button
    class="menu-btn"
    :style="{ animationDelay: `${delay}s` }"
    @click="emit('click')"
  >
    <span class="menu-btn-border"></span>
    <span class="menu-btn-content">
      <span class="menu-btn-icon">{{ icon }}</span>
      <span class="menu-btn-label">{{ label }}</span>
    </span>
    <span class="menu-btn-glow"></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  label: string;
  delay?: number;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.menu-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 85vw;
  height: 58px;
  background: linear-gradient(135deg,
    rgba(15, 20, 41, 0.85) 0%,
    rgba(22, 29, 58, 0.9) 50%,
    rgba(15, 20, 41, 0.85) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-title);
  overflow: hidden;
  transition: all var(--transition-normal);
  animation: slideUp 0.6s ease backwards;
  -webkit-tap-highlight-color: transparent;
}

.menu-btn:hover {
  border-color: rgba(212, 175, 55, 0.7);
  transform: translateY(-2px);
  box-shadow:
    0 4px 20px rgba(212, 175, 55, 0.15),
    0 0 40px rgba(212, 175, 55, 0.08),
    inset 0 1px 0 rgba(212, 175, 55, 0.2);
}

.menu-btn:active {
  transform: translateY(0);
  border-color: rgba(212, 175, 55, 0.9);
}

.menu-btn-border {
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-md);
  background: linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.4) 50%, transparent 100%);
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity var(--transition-normal);
  z-index: 0;
  pointer-events: none;
}

.menu-btn:hover .menu-btn-border {
  opacity: 1;
  animation: borderGlow 2s linear infinite;
}

.menu-btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.menu-btn-icon {
  font-size: 1.1rem;
  color: var(--color-gold);
  transition: transform var(--transition-normal);
  filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
}

.menu-btn:hover .menu-btn-icon {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.8));
}

.menu-btn-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  letter-spacing: 0.15em;
  transition: color var(--transition-normal);
}

.menu-btn:hover .menu-btn-label {
  color: var(--color-gold-light);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
}

.menu-btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
  z-index: 0;
}

.menu-btn:hover .menu-btn-glow {
  opacity: 1;
}

@media (max-width: 768px) {
  .menu-btn { height: 52px; }
  .menu-btn-label { font-size: 0.95rem; }
  .menu-btn-icon { font-size: 1rem; }
}
</style>

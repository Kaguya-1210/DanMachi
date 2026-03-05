<template>
  <div class="home-page">
    <ParticleBackground />
    <div class="bg-overlay"></div>

    <main class="home-content">
      <header class="title-section">
        <div class="title-decoration top">✦ ─── ✦ ─── ✦</div>
        <h1 class="main-title">
          <span class="title-line">在地下城寻求邂逅</span>
          <span class="title-line">是否搞错了什么</span>
        </h1>
        <p class="sub-title">Is It Wrong to Try to Pick Up Girls in a Dungeon?</p>
        <div class="title-decoration bottom">✦ ─── ✦ ─── ✦</div>
      </header>

      <nav class="menu-section">
        <MenuButton
          v-for="(item, index) in menuItems"
          :key="item.id"
          :icon="item.icon"
          :label="item.label"
          :delay="0.3 + index * 0.12"
          @click="handleMenuClick(item.id)"
        />
      </nav>

      <footer class="footer-section">
        <span class="version">dev-v0.0.1</span>
        <span class="divider">|</span>
        <span class="copyright">by W7insvnter & Claude 4.6 Opus</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import ParticleBackground from '../components/ParticleBackground.vue';
import MenuButton from '../components/MenuButton.vue';

const router = useRouter();

const menuItems = [
  { id: 'start', icon: '⚔️', label: '开始游戏' },
  { id: 'load', icon: '📖', label: '读取存档' },
  { id: 'save', icon: '💾', label: '加载存档' },
  { id: 'settings', icon: '⚙️', label: '游戏设置' },
];

const pageMap: Record<string, string> = {
  start: '/character-select',
};

function handleMenuClick(id: string) {
  if (pageMap[id]) {
    router.push(pageMap[id]);
  }
}
</script>

<style scoped>
.home-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 30%, rgba(107, 74, 138, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 80%, rgba(74, 111, 165, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.5) 100%);
  z-index: 1;
  pointer-events: none;
}

.home-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem;
}

.title-section {
  text-align: center;
  animation: fadeIn 1s ease 0.2s backwards;
}

.title-decoration {
  font-size: 0.85rem;
  color: var(--color-gold-dim);
  letter-spacing: 0.5em;
  opacity: 0.6;
}

.title-decoration.top { margin-bottom: 1rem; }
.title-decoration.bottom { margin-top: 1rem; }

.main-title {
  font-family: var(--font-title);
  font-weight: 900;
  line-height: 1.4;
  animation: float 5s ease-in-out infinite;
}

.title-line {
  display: block;
  font-size: 2.8rem;
  background: linear-gradient(135deg, #f0d060 0%, #d4af37 40%, #c4982e 60%, #f0d060 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));
  animation: borderGlow 4s linear infinite;
}

.sub-title {
  margin-top: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.menu-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
}

.footer-section {
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--color-text-dim);
  letter-spacing: 0.1em;
  animation: fadeIn 1s ease 1s backwards;
}

.divider { opacity: 0.3; }

@media (max-width: 768px) {
  .home-content { gap: 1.8rem; padding: 1.5rem; }
  .title-line { font-size: 1.6rem; }
  .sub-title { font-size: 0.7rem; letter-spacing: 0.15em; }
  .title-decoration { font-size: 0.7rem; letter-spacing: 0.3em; }
  .title-decoration.top { margin-bottom: 0.6rem; }
  .title-decoration.bottom { margin-top: 0.6rem; }
  .menu-section { gap: 0.65rem; }
  .footer-section { bottom: 1rem; font-size: 0.65rem; }
}

@media (max-width: 380px) {
  .title-line { font-size: 1.35rem; }
}
</style>

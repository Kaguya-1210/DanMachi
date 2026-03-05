<template>
  <div class="select-page">
    <ParticleBackground />
    <div class="bg-overlay"></div>

    <main class="select-content">
      <button class="back-btn" @click="router.push('/')">
        <span class="back-icon">◁</span>
        <span>返回</span>
      </button>

      <header class="select-header">
        <div class="header-decoration">── ✦ ──</div>
        <h2 class="select-title">选择你的命运</h2>
        <p class="select-subtitle">在奥拉利奥的冒险中，你将以谁的身份踏入地下城？</p>
      </header>

      <div class="character-cards">
        <div
          class="character-card bell"
          :class="{ hovered: hoveredCard === 'bell' }"
          @mouseenter="hoveredCard = 'bell'"
          @mouseleave="hoveredCard = null"
          @click="selectCharacter('bell')"
        >
          <div class="card-glow"></div>
          <div class="card-inner">
            <div class="card-emblem">⚔️</div>
            <h3 class="card-name">贝尔·克朗尼</h3>
            <p class="card-title">「Little Rookie」</p>
            <div class="card-divider"></div>
            <p class="card-desc">
              赫斯缇雅眷族唯一的冒险者。怀揣着英雄梦想的少年，
              在地下城中不断成长，追逐着那道金色的背影。
            </p>
            <div class="card-tags">
              <span class="tag">主角视角</span>
              <span class="tag">剧情完整</span>
            </div>
          </div>
          <div class="card-border"></div>
        </div>

        <div
          class="character-card stranger"
          :class="{ hovered: hoveredCard === 'stranger' }"
          @mouseenter="hoveredCard = 'stranger'"
          @mouseleave="hoveredCard = null"
          @click="selectCharacter('stranger')"
        >
          <div class="card-glow"></div>
          <div class="card-inner">
            <div class="card-emblem">🎭</div>
            <h3 class="card-name">路人A</h3>
            <p class="card-title">「Unknown Adventurer」</p>
            <div class="card-divider"></div>
            <p class="card-desc">
              一个默默无闻的冒险者，初来乍到迷宫都市。
              没有神的眷顾，没有显赫的背景，唯有一腔孤勇。
            </p>
            <div class="card-tags">
              <span class="tag">自由视角</span>
              <span class="tag">开放剧情</span>
            </div>
          </div>
          <div class="card-border"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ParticleBackground from '../components/ParticleBackground.vue';

const router = useRouter();
const hoveredCard = ref<string | null>(null);

function selectCharacter(character: string) {
  console.log(`Selected character: ${character}`);
}
</script>

<style scoped>
.select-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(107, 74, 138, 0.15) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(74, 111, 165, 0.12) 0%, transparent 50%),
    linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.6) 100%);
  z-index: 1;
  pointer-events: none;
}

.select-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.back-btn {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: rgba(15, 20, 41, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  -webkit-tap-highlight-color: transparent;
}

.back-btn:hover {
  border-color: rgba(212, 175, 55, 0.6);
  color: var(--color-gold-light);
  transform: translateX(-2px);
}

.back-icon {
  font-size: 0.9rem;
  transition: transform var(--transition-normal);
}

.back-btn:hover .back-icon {
  transform: translateX(-3px);
}

.select-header {
  text-align: center;
  animation: fadeIn 0.8s ease backwards;
}

.header-decoration {
  font-size: 0.8rem;
  color: var(--color-gold-dim);
  letter-spacing: 0.6em;
  opacity: 0.5;
  margin-bottom: 0.8rem;
}

.select-title {
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #f0d060, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.select-subtitle {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-weight: 300;
  letter-spacing: 0.08em;
}

.character-cards {
  display: flex;
  gap: 1.5rem;
  animation: slideUp 0.8s ease 0.2s backwards;
}

.character-card {
  position: relative;
  width: 300px;
  padding: 2px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  -webkit-tap-highlight-color: transparent;
}

.character-card:hover { transform: translateY(-6px); }
.character-card:active { transform: translateY(-2px); }

.card-inner {
  position: relative;
  z-index: 1;
  padding: 2rem 1.5rem;
  background: linear-gradient(160deg,
    rgba(15, 20, 41, 0.92) 0%,
    rgba(22, 29, 58, 0.95) 50%,
    rgba(15, 20, 41, 0.92) 100%
  );
  border-radius: var(--radius-lg);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.card-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: border-color var(--transition-normal);
  pointer-events: none;
}

.character-card:hover .card-border {
  border-color: rgba(212, 175, 55, 0.5);
}

.card-glow {
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-lg);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
  z-index: 0;
}

.character-card.bell .card-glow {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(240, 208, 96, 0.08), rgba(212, 175, 55, 0.15));
  box-shadow: 0 8px 40px rgba(212, 175, 55, 0.12);
}

.character-card.stranger .card-glow {
  background: linear-gradient(135deg, rgba(74, 111, 165, 0.15), rgba(107, 74, 138, 0.08), rgba(74, 111, 165, 0.15));
  box-shadow: 0 8px 40px rgba(74, 111, 165, 0.12);
}

.character-card:hover .card-glow { opacity: 1; }

.card-emblem {
  font-size: 2.5rem;
  margin-bottom: 0.3rem;
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
  transition: transform var(--transition-normal);
}

.character-card:hover .card-emblem { transform: scale(1.15); }

.card-name {
  font-family: var(--font-title);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.character-card.bell .card-name {
  background: linear-gradient(135deg, #f0d060, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.character-card.stranger .card-name {
  background: linear-gradient(135deg, #7aaddd, #4a6fa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-title {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--color-text-dim);
  letter-spacing: 0.15em;
  font-style: italic;
}

.card-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold-dim), transparent);
  margin: 0.3rem 0;
}

.card-desc {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-weight: 300;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.tag {
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-family: var(--font-body);
  letter-spacing: 0.05em;
}

.character-card.bell .tag {
  background: rgba(212, 175, 55, 0.1);
  color: var(--color-gold);
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.character-card.stranger .tag {
  background: rgba(74, 111, 165, 0.1);
  color: var(--color-accent-blue);
  border: 1px solid rgba(74, 111, 165, 0.2);
}

@media (max-width: 768px) {
  .select-content {
    gap: 1.2rem;
    padding: 1.2rem;
    justify-content: flex-start;
    padding-top: 4rem;
    overflow-y: auto;
  }
  .character-cards { flex-direction: column; gap: 1rem; width: 100%; align-items: center; }
  .character-card { width: 100%; max-width: 340px; }
  .card-inner { padding: 1.5rem 1.2rem; }
  .select-title { font-size: 1.5rem; }
  .select-subtitle { font-size: 0.78rem; }
  .back-btn { top: 1rem; left: 1rem; font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .card-emblem { font-size: 2rem; }
  .card-name { font-size: 1.2rem; }
  .card-desc { font-size: 0.78rem; }
}
</style>

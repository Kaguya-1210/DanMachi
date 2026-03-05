<template>
  <canvas ref="canvasRef" class="particle-bg"></canvas>
</template>

<script setup lang="ts">
import { injectGoogleFonts } from '../utils/fonts';

injectGoogleFonts();

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId: number | null = null;
let particles: Particle[] = [];

class Particle {
  canvas: HTMLCanvasElement;
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedX: number = 0;
  speedY: number = 0;
  opacity: number = 0;
  opacityDir: number = 1;
  opacitySpeed: number = 0;
  color: { r: number; g: number; b: number } = { r: 0, g: 0, b: 0 };

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.3 - 0.2;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.opacityDir = Math.random() > 0.5 ? 1 : -1;
    this.opacitySpeed = Math.random() * 0.005 + 0.002;

    const colors = [
      { r: 212, g: 175, b: 55 },
      { r: 74, g: 111, b: 165 },
      { r: 107, g: 74, b: 138 },
      { r: 240, g: 208, b: 96 },
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity += this.opacityDir * this.opacitySpeed;
    if (this.opacity >= 0.8) this.opacityDir = -1;
    if (this.opacity <= 0.1) this.opacityDir = 1;

    if (this.x < -10 || this.x > this.canvas.width + 10 ||
        this.y < -10 || this.y > this.canvas.height + 10) {
      this.reset();
      this.y = this.canvas.height + 5;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.15})`;
    ctx.fill();
  }
}

function getParticleCount() {
  if (window.innerWidth < 768) return 40;
  return 80;
}

function initCanvas() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  particles = [];
  const count = getParticleCount();
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(canvas));
  }

  function animate() {
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    particles.forEach(p => {
      p.update();
      p.draw(ctx!);
    });
    animationId = requestAnimationFrame(animate);
  }
  animate();
}

onMounted(() => {
  initCanvas();
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>

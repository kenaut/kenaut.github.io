<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { t } from '../i18n'

// 目标：2026-10-24 00:00:00 北京时间（UTC+8），解析为绝对时刻，与访问者时区无关
const TARGET = Date.parse('2026-10-24T00:00:00+08:00')
const OVERLAY_KEY = 'countdown-1024-played'

const now = ref(Date.now())
const showOverlay = ref(false)
const canvas = ref(null)

let timer = null
let raf = null

const isLive = computed(() => now.value >= TARGET)
const totalSeconds = computed(() => Math.floor(Math.max(0, TARGET - now.value) / 1000))

const units = computed(() => [
  { value: Math.floor(totalSeconds.value / 86400), label: t('countdown1024.days') },
  { value: Math.floor(totalSeconds.value / 3600) % 24, label: t('countdown1024.hours') },
  { value: Math.floor(totalSeconds.value / 60) % 60, label: t('countdown1024.minutes') },
  { value: totalSeconds.value % 60, label: t('countdown1024.seconds') },
])

const pad = (n) => String(n).padStart(2, '0')

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function tick() {
  now.value = Date.now()
  if (isLive.value) {
    stopTimer()
    playOverlay()
  }
}

function playOverlay() {
  // 每个浏览器会话只自动播放一次
  try {
    if (sessionStorage.getItem(OVERLAY_KEY)) return
    sessionStorage.setItem(OVERLAY_KEY, '1')
  } catch (e) {
    /* ignore */
  }
  showOverlay.value = true
}

function dismiss() {
  showOverlay.value = false
}

function onKey(e) {
  if (e.key === 'Escape') dismiss()
}

function stopParticles() {
  if (raf) {
    cancelAnimationFrame(raf)
    raf = null
  }
}

function startParticles() {
  const el = canvas.value
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const ctx = el.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const W = el.offsetWidth
  const H = el.offsetHeight
  el.width = W * dpr
  el.height = H * dpr
  ctx.scale(dpr, dpr)

  const styles = getComputedStyle(document.documentElement)
  const accent = styles.getPropertyValue('--accent').trim() || '#2563eb'
  const textColor = styles.getPropertyValue('--text-h').trim() || '#111'

  const particles = []
  const cx = W / 2
  const cy = H / 2
  for (let i = 0; i < 160; i++) {
    const angle = Math.random() * Math.PI * 2
    const speed = 2 + Math.random() * 7
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: 2 + Math.random() * 3,
      life: 1,
      decay: 0.006 + Math.random() * 0.012,
      type: Math.random() < 0.28 ? 'digit' : 'square',
      char: Math.random() < 0.5 ? '0' : '1',
      color: Math.random() < 0.6 ? accent : textColor,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.2,
    })
  }

  function frame() {
    ctx.clearRect(0, 0, W, H)
    let alive = false
    for (const p of particles) {
      if (p.life <= 0) continue
      alive = true
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.06
      p.vx *= 0.985
      p.vy *= 0.985
      p.rot += p.vr
      p.life -= p.decay
      ctx.globalAlpha = Math.max(0, p.life)
      ctx.fillStyle = p.color
      if (p.type === 'square') {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      } else {
        ctx.font = `${10 + p.size * 2}px ui-monospace, Consolas, monospace`
        ctx.fillText(p.char, p.x, p.y)
      }
    }
    ctx.globalAlpha = 1
    if (alive) {
      raf = requestAnimationFrame(frame)
    } else {
      ctx.clearRect(0, 0, W, H)
      raf = null
    }
  }
  raf = requestAnimationFrame(frame)
}

watch(showOverlay, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) {
    nextTick(startParticles)
  } else {
    stopParticles()
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKey)
  if (isLive.value) {
    playOverlay()
  } else {
    timer = setInterval(tick, 1000)
  }
})

onBeforeUnmount(() => {
  stopTimer()
  stopParticles()
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="!isLive" class="countdown" role="timer">
    <div class="countdown-row">
      <span class="countdown-label">// {{ t('countdown1024.title') }}</span>
      <div class="countdown-units">
        <span v-for="u in units" :key="u.label" class="countdown-unit">
          <span class="countdown-num">{{ pad(u.value) }}</span>
          <span class="countdown-unit-label">{{ u.label }}</span>
        </span>
      </div>
    </div>
    <span class="countdown-occasion">{{ t('countdown1024.occasion') }}</span>
  </div>
  <div v-else class="countdown live">
    <span class="countdown-live">🎂 HAPPY BIRTHDAY · 1024 PROGRAMMER DAY</span>
  </div>

  <Teleport to="body">
    <div v-if="showOverlay" class="celebrate" @click="dismiss">
      <canvas ref="canvas" class="celebrate-canvas" aria-hidden="true"></canvas>
      <div class="celebrate-flash" aria-hidden="true"></div>
      <div class="celebrate-content">
        <p class="celebrate-title">🎂 HAPPY BIRTHDAY</p>
        <p class="celebrate-sub">1024 PROGRAMMER DAY</p>
        <p class="celebrate-version">v14.0.0 — ANOTHER YEAR COMPILED SUCCESSFULLY.</p>
        <p class="celebrate-hint">{{ t('countdown1024.dismiss') }}</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 0;
}

.countdown-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
}

.countdown-label {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--accent);
  white-space: nowrap;
}

.countdown-occasion {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 600;
  color: #111;
  background: #fde047;
  padding: 2px 8px;
  border-radius: 4px;
}

.countdown-units {
  display: flex;
  gap: 8px;
}

.countdown-unit {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  border-radius: 8px;
}

.countdown-num {
  font-family: var(--mono);
  font-size: 20px;
  font-weight: 600;
  color: var(--text-h);
  font-variant-numeric: tabular-nums;
  min-width: 2ch;
  text-align: center;
}

.countdown-unit-label {
  font-size: 12px;
  color: var(--text-muted);
}

.countdown-live {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--accent);
}

/* ---- 全屏庆祝 ---- */

.celebrate {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  cursor: pointer;
  animation: celebrate-fade 0.6s ease both;
}

.celebrate-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.celebrate-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 50% 42%, var(--accent), transparent 55%);
  opacity: 0;
  animation: celebrate-flash 0.9s ease-out 0.25s both;
}

.celebrate-content {
  position: relative;
  text-align: center;
  padding: 24px;
}

.celebrate-title {
  font-size: clamp(36px, 8vw, 64px);
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text-h);
  animation: celebrate-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 0.45s both;
}

.celebrate-sub {
  margin-top: 12px;
  font-family: var(--mono);
  font-size: clamp(15px, 3vw, 22px);
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  color: var(--accent);
  animation: celebrate-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 0.8s both;
}

.celebrate-version {
  margin-top: 20px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--text-muted);
  animation: celebrate-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 1.15s both;
}

.celebrate-hint {
  margin-top: 48px;
  font-size: 12px;
  color: var(--text-muted);
  animation:
    celebrate-rise 0.7s ease 2s both,
    celebrate-pulse 2.6s ease-in-out 3s infinite;
}

@keyframes celebrate-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes celebrate-flash {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.28;
  }
  100% {
    opacity: 0;
  }
}

@keyframes celebrate-rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes celebrate-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .celebrate,
  .celebrate-title,
  .celebrate-sub,
  .celebrate-version,
  .celebrate-hint {
    animation: none !important;
    opacity: 1;
  }
}
</style>

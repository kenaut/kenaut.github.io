<script setup>
import { locales, locale, setLocale } from '../i18n'
</script>

<template>
  <label class="lang-switcher-wrap">
    <svg
      class="lang-icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M3 12h18"></path>
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"></path>
    </svg>
    <select
      class="lang-switcher"
      :value="locale"
      @change="setLocale($event.target.value)"
      aria-label="Language"
    >
      <option v-for="l in locales" :key="l.code" :value="l.code">{{ l.label }}</option>
    </select>
  </label>
</template>

<style scoped>
.lang-switcher-wrap {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  cursor: pointer;
}

.lang-icon {
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.lang-switcher {
  font: inherit;
  font-size: 14px;
  color: var(--text-muted);
  background: transparent;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.lang-switcher-wrap:hover .lang-icon,
.lang-switcher-wrap:hover .lang-switcher {
  color: var(--text-h);
}

.lang-switcher option {
  color: var(--text-h);
  background: var(--bg);
}
</style>

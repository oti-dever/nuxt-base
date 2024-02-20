<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

import { enabledThemes } from '../../types/theme'

const { locale, locales } = useI18n()
// const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="navbar bg-base-100 h-[4rem]">
    <div class="navbar-start">
      <div class="dropdown">
        <label class="btn btn-circle btn-ghost" tabindex="0">
          <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </label>
        <ul class="menu dropdown-content menu-sm rounded-box bg-base-100 z-30 mt-3 w-52 p-2 shadow" tabindex="0">
          <li>
            <NuxtLink :to="localePath('/')">
              Links
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <NuxtLink :to="localePath('/')" class="btn btn-ghost text-xl">
        Home
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label class="btn btn-circle btn-ghost" tabindex="0">
          <Icon name="fluent:local-language-zi-24-regular" size="24" />
        </label>
        <ul class="menu dropdown-content rounded-box bg-base-100 z-30 mt-4 w-52 p-2 shadow" tabindex="0">
          <li v-for="l in availableLocales" :key="l.code">
            <a @click="locale = l.code">
              {{ l.name }}
            </a>
          </li>
        </ul>
      </div>
      <AppTheme :themes="enabledThemes" />
    </div>
  </div>
</template>

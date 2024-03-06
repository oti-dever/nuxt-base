<script setup lang="ts">
const props = defineProps<{
  /**
   * 图标大小
   */
  size?: 'lg' | 'md' | 'sm' | 'xs'
  /**
   * 图标类型
   */
  type?: 'ball' | 'bars' | 'dots' | 'infinity' | 'ring' | 'spinner'
}>()

const sizeClass = computed<
  ''
  | 'loading-lg'
  | 'loading-md'
  | 'loading-sm'
  | 'loading-xs'
>(() => {
  return props.size ? `loading-${props.size}` : ''
})

const typeClass = computed<
  'loading-ball'
  | 'loading-bars'
  | 'loading-dots'
  | 'loading-infinity'
  | 'loading-ring'
  | 'loading-spinner'
>(() => {
  return props.type ? `loading-${props.type}` : 'loading-spinner'
})
</script>

<template>
  <span class="loading" :class="[sizeClass, typeClass]">
    <slot />
  </span>
</template>

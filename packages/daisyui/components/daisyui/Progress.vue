<script setup lang="ts">
const props = defineProps<{
  /**
   * 最大值
   */
  maxValue?: number
  /**
   * 进度条类型
   */
  type?: 'accent' | 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  /**
   * 进度值
   */
  value?: number
}>()

const typeClass = computed<
  ''
  | 'progress-accent'
  | 'progress-error'
  | 'progress-info'
  | 'progress-primary'
  | 'progress-secondary'
  | 'progress-success'
  | 'progress-warning'
>(() => {
  return props.type ? `progress-${props.type}` : ''
})
</script>

<template>
  <progress class="progress" :class="typeClass" :value="value" :max="maxValue ?? 100">
    <slot />
  </progress>
</template>

<script setup lang="ts">
const props = defineProps<{
  /**
   * 进度条宽度
   */
  border?: 2 | 4 | 8
  /**
   * 进度条大小
   */
  size?: number
  /**
   * 进度条类型
   */
  type?: 'accent' | 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  /**
   * 进度值
   */
  value?: number
}>()

type TypeClassList = ''
  | 'bg-accent text-accent-content border-accent'
  | 'bg-error text-error-content border-error'
  | 'bg-info text-info-content border-info'
  | 'bg-primary text-primary-content border-primary'
  | 'bg-secondary text-secondary-content border-secondary'
  | 'bg-success text-success-content border-success'
  | 'bg-warning text-warning-content border-warning'

const typeClass = computed<TypeClassList>(() => {
  return props.type ? `bg-${props.type} text-${props.type}-content border-${props.type}` as TypeClassList : ''
})

const borderClass = computed<
  ''
  | 'border-2'
  | 'border-4'
  | 'border-8'
>(() => {
  return props.border ? `border-${props.border}` : ''
})
</script>

<template>
  <div
    class="radial-progress" role="progressbar" :class="[
      typeClass,
      borderClass,
    ]"
    :style="{
      '--value': `${value ?? 0}`,
      '--size': `${size ?? 80}px`,
    }"
  >
    <slot>
      {{ value ?? 0 }} %
    </slot>
  </div>
</template>

<script setup lang="ts">
type ButtonType = 'accent' | 'error' | 'ghost' | 'info' | 'link' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'
type ButtonShapeType = 'block' | 'circle' | 'square'

const props = defineProps<{
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否激活
   */
  isActive?: boolean
  /**
   * 是否是轮廓按钮
   */
  isOutline?: boolean
  /**
   * 按钮形状
   */
  shape?: ButtonShapeType
  /**
   * 按钮类型
   */
  type?: ButtonType
}>()

const typeClass = computed<
  ''
  | 'btn-accent'
  | 'btn-error'
  | 'btn-ghost'
  | 'btn-info'
  | 'btn-link'
  | 'btn-neutral'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-success'
  | 'btn-warning'
>(() => {
  return props.type ? `btn-${props.type}` : ''
})

const shapeClass = computed<
  ''
  | 'btn-block'
  | 'btn-circle'
  | 'btn-square'
>(() => {
  return props.shape ? `btn-${props.shape}` : ''
})
</script>

<template>
  <button
    class="btn" :disabled="disabled" :class="[
      typeClass,
      shapeClass,
      isActive ? 'btn-active' : '',
      isOutline ? 'btn-outline' : '',
    ]"
  >
    <slot />
  </button>
</template>

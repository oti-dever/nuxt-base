<script setup lang="ts">
type AlertType = 'error' | 'info' | 'success' | 'warning'

const props = defineProps<{
  /**
   * 警告内容
   */
  content?: string
  /**
   * 是否含有阴影
   */
  shadow?: boolean
  /**
   * 警告类型
   */
  type?: AlertType
}>()

const typeClass = computed<
  ''
  | 'alert-error'
  | 'alert-info'
  | 'alert-success'
  | 'alert-warning'
>(() => {
  return props.type ? `alert-${props.type}` : ''
})
</script>

<template>
  <div
    role="alert" class="alert" :class="[
      props.shadow ? 'shadow-lg' : '',
      typeClass,
    ]"
  >
    <slot name="icon" />
    <slot>
      <span>{{ props.content }}</span>
    </slot>
    <slot name="close" />
  </div>
</template>

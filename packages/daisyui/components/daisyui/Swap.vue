<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
}>()

const model = defineModel<boolean>()
</script>

<template>
  <label class="swap">
    <input v-model="model" type="checkbox" :disabled="props.disabled">
    <div class="swap-on">
      <slot name="on">
        ON
      </slot>
    </div>
    <div class="swap-off">
      <slot name="off">
        OFF
      </slot>
    </div>
  </label>
</template>

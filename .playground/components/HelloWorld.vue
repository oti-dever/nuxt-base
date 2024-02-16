<script setup lang="ts">
const { baseConfig } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ baseConfig }}</pre>
  </div>
</template>

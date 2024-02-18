<script setup lang="ts">
const { baseConfig } = useAppConfig()
</script>

<template>
  <div class="bg-slate-800 p-2 text-gray-200">
    <h2 class="p-2 text-2xl">
      HelloWorld 组件
    </h2>
    <p class="p-2">
      配置可以被覆盖，当前项目的配置如下：
    </p>
    <pre class="p-2">{{ baseConfig }}</pre>
  </div>
</template>

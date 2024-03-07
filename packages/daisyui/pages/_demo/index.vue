<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <div class="mx-auto flex w-64 items-center justify-center">
    <div class="flex shrink flex-col">
      <DaisyuiButton>{{ t('button') }}</DaisyuiButton>
      <DaisyuiButton type="accent">
        {{ t('button') }}
      </DaisyuiButton>
      <DaisyuiButton type="ghost">
        {{ t('button') }}
      </DaisyuiButton>
      <DaisyuiDropdownButton>
        {{ t('dropdown') }}
        <template #content>
          <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
        </template>
      </DaisyuiDropdownButton>
      <DaisyuiSwap>
        <template #on>
          {{ t('button') }} ON
        </template>
        <template #off>
          {{ t('button') }} OFF
        </template>
      </DaisyuiSwap>
      <DaisyuiAlert type="error" shadow>
        {{ t('button') }}
      </DaisyuiAlert>
      <DaisyuiLoading />
      <DaisyuiProgress />
      <DaisyuiRadialProgress :border="4" :value="32" type="primary" :size="200" />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  button: Button
  dropdown: Dropdown
zh:
  button: 按钮
  dropdown: 下拉
tw:
  button: 按鈕
  dropdown: 下拉
ja:
  button: ボタン
  dropdown: ドロップダウン
</i18n>

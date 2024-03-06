<script setup lang="ts">
import type { VNodeRef } from 'vue'

const dialogRef = ref<VNodeRef | null>(null)
</script>

<template>
  <dialog :ref="dialogRef" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">
        Hello!
      </h3>
      <p class="py-4">
        Press ESC key or click the button below to close
      </p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>

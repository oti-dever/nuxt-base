<template>
  <div class="dropdown">
    <div tabindex="0" class="btn m-1" role="button">
      <slot />
    </div>
    <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <slot name="content" />
    </ul>
  </div>
</template>

<template>
  <div class="layout">
    <app-header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/widgets/header/index.vue'
</script>

<script lang="ts">
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  background-color: var(--color-background-dark);
}
</style> 
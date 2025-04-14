<template>
  <div class="convert">
    <currency-converter />
  </div>
</template>

<script setup lang="ts">
import CurrencyConverter from '@/features/currency-converter/index.vue'
</script>

<style lang="scss" scoped>
.convert {
  padding: var(--spacing-lg);
  max-width: 800px;
  margin: 0 auto;
}
</style> 
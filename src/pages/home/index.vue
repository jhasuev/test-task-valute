<template>
  <div class="home">
    <currency-table />
  </div>
</template>

<script setup lang="ts">
import CurrencyTable from '@/widgets/currency-table/index.vue'
</script>

<style lang="scss" scoped>
.home {
  padding: var(--spacing-lg);
  max-width: 800px;
  margin: 0 auto;
}
</style> 
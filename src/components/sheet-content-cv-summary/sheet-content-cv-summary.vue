<template>
  <sheet-section :title="'Summary'">
    <div class="sheet-content-cv-summary-content">
      <VueShowdown :markdown="content" />
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-summary.ts"></script>

<style lang="scss" scoped>
.sheet-content-cv-summary-content {
  font-size: var(--font-size-sm);
}
</style>

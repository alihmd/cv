<template>
  <sheet-section :title="'Languages'">
    <div class="sheet-content-cv-languages-content">
      <VueShowdown :markdown="content" />
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-languages.ts"></script>

<style lang="scss" scoped>
.sheet-content-cv-languages-content {
  font-size: var(--font-size-sm);
}
</style>

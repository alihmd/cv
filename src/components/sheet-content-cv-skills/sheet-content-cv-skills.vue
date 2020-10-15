<template>
  <sheet-section :title="'Skills & Technologies'">
    <div class="sheet-content-cv-skills-content">
      <VueShowdown :markdown="content" />
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-skills.ts"></script>

<style lang="scss" scoped>
.sheet-content-cv-skills-content {
  font-size: var(--font-size-sm);
}
</style>

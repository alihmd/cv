<template>
  <sheet-section :title="'Profile'">
    <div class="sheet-content-cv-profile-content">
      <VueShowdown :markdown="content" />
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-profile.ts"></script>

<style lang="scss" scoped>
.sheet-content-cv-profile-content {
  font-size: var(--font-size-sm);
}
</style>

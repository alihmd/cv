<template>
  <div class="sheet-content-cv">
    <div class="sheet-content-cv-left">
      <component v-for="(section, index) in $options.filters.config('cvLeftSections')"
                 :key="index"
                 v-bind:is="'sheet-content-cv-' + section" />
    </div>

    <div class="sheet-content-cv-right">
      <component v-for="(section, index) in $options.filters.config('cvRightSections')"
                 :key="index"
                 v-bind:is="'sheet-content-cv-' + section" />
    </div>
  </div>
</template>

<script lang="ts" src="./sheet-content-cv.ts"></script>
<style lang="scss" scoped src="./sheet-content-cv.scss"></style>

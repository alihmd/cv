<template>
  <sheet-section :title="'Cover Letter'">
    <div class="sheet-content-cl">
      <div class="sheet-content-cl-left">
        <div>
          <div>To:</div>
          <div>{{'to' | config}}</div>
        </div>

        <div>
          <div>Position:</div>
          <div>{{'position' | config}}</div>
        </div>
      </div>

      <div class="sheet-content-cl-right">
        <VueShowdown :markdown="content" />
      </div>
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cl.ts"></script>
<style lang="scss" scoped src="./sheet-content-cl.scss"></style>

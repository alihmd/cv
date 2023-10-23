<template>
  <sheet-section :title="'Projects'">
    <div class="sheet-content-cv-projects">
      <div class="sheet-content-cv-projects-item"
           v-for="project in projects"
           :key="project.id">
        <div class="sheet-content-cv-projects-item-left">
          <img v-if="project.logoUrl"
               class="sheet-content-cv-projects-item-logo"
               :src="project.logoUrl" />
          <div class="sheet-content-cv-projects-item-name">{{project.name}}</div>
          <a class="sheet-content-cv-projects-item-link"
              v-for="(url, index) in project.urls"
              :key="url"
              target="_blank"
              :href="'//' + url">{{project.urlTexts[index]}}<br></a>
        </div>
        <div class="sheet-content-cv-projects-item-right">
          <div class="sheet-content-cv-projects-item-content">
            <VueShowdown :markdown="project.content" />
          </div>
        </div>
      </div>
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-projects.ts"></script>
<style lang="scss" scoped src="./sheet-content-cv-projects.scss"></style>

<template>
  <div class="sheet-header">
    <div class="sheet-header-left">
      <img v-if="!pictureHidden"
           :class="{ 'grayscale': grayscalePicture }"
           src="@/assets/pic.png" />
      <div class="sheet-header-name-title">
        <div class="sheet-header-name">{{'name' | config}}</div>
        <div class="sheet-header-title">{{'title' | config}}</div>
      </div>
    </div>

    <div class="sheet-header-right">
      <div>
        <svg-email></svg-email>
        <div>
          <a target="_blank"
             :href="'mailto://' + $options.filters.config('email')">{{'email' | config}}</a>
        </div>
      </div>

      <div>
        <svg-phone></svg-phone>
        <div>
          <span v-for="(p, index) in $options.filters.config('phoneNumbers')"
                :key="p">
            <span v-if="index > 0"> | </span>
            <a :href="'tel:' + p">{{p}}</a>
          </span>
        </div>
      </div>

      <div v-if="$options.filters.config('website')">
        <svg-globe></svg-globe>
        <div>
          <a target="_blank"
             :href="'website' | config">
            {{'website' | config}}
          </a>
        </div>
      </div>

      <div>
        <svg-linkedin></svg-linkedin>
        <div>
          <a target="_blank"
             :href="'https://linkedin.com/in/' + $options.filters.config('linkedInUsername')">
            @{{'linkedInUsername' | config}}
          </a>
        </div>
      </div>

      <div>
        <svg-github></svg-github>
        <div>
          <a target="_blank"
             :href="'https://github.com/' + $options.filters.config('githubUsername')">
            @{{'githubUsername' | config}}
          </a>
        </div>
      </div>

      <div v-if="$options.filters.config('location')">
        <svg-location></svg-location>
        <div>{{'location' | config}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./sheet-header.ts"></script>
<style lang="scss" scoped src="./sheet-header.scss"></style>

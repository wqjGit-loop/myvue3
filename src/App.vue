<template>
  <div id="app">
     <!-- <transition enter-active-class="animate__animated animate__backInRight"  leave-active-class="animate__animated animate__backOutRight"> -->
    <router-view/>
     <!-- </transition> -->
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
export default class App extends Vue {
}
</script>

<style lang="scss">
</style>

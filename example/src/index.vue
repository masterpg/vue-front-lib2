<style scoped lang="sass"></style>

<template>
  <div class="layout vertical center">
    <div>Hello Wold!</div>
    <hello-world-one></hello-world-one>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'app-page',
})
export default class AppPage extends Vue {}
</script>

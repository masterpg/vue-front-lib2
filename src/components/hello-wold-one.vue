<style scoped lang="sass">
@import '../styles/app.variables'

.container
  color: $indigo-12
</style>

<template>
  <div class="container">Hello Wold One {{ msg }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'hello-world-one',
})
export default class HelloWorldOne extends Vue {
  @Prop() private msg!: string
}
</script>

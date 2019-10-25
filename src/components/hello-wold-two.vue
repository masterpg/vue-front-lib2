<style scoped lang="sass">
@import '../styles/lib.variables'

.container
  color: $red-12
</style>

<template>
  <div class="container">Hello Wold Two {{ msg }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'hello-world-two',
})
export default class HelloWorldTwo extends Vue {
  @Prop() private msg!: string
}
</script>

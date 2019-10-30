<style scoped lang="sass">
@import '../styles/lib.variables'

.container
  color: $indigo-12
</style>

<template>
  <div class="container">
    Hello Wold One {{ msg }}
    <q-btn flat rounded color="primary" label="Cancel" />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { BaseComponent } from "./base";

@Component({
  name: 'hello-world-one',
})
export default class HelloWorldOne extends BaseComponent {
  @Prop() private msg!: string
}
</script>

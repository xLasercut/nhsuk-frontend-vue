<template>
  <nhs-button href="/components/button">
    Primary Button
  </nhs-button>

  <nhs-button color="secondary" @click="clickHandler('secondary')">
    Secondary Button
  </nhs-button>

  <nhs-button color="reverse" @click="clickHandler('reverse')">
    Reverse Button
  </nhs-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    function clickHandler(msg: string): void {
      alert(msg)
    }

    return {clickHandler}
  }
})
</script>

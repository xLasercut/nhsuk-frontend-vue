<template>
  <div>
    <nhs-button href="/form/button">
      Primary Button
    </nhs-button>

    <nhs-button color="secondary" @click="clickHandler('secondary')">
      Secondary Button
    </nhs-button>

    <nhs-button color="reverse" @click="clickHandler('reverse')">
      Reverse Button
    </nhs-button>
  </div>
</template>

<script>
  export default {
    methods: {
      clickHandler(msg) {
        alert(msg)
      }
    }
  }
</script>
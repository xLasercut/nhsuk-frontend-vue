<template>
  <nhs-row>
    <nhs-col>
      <nhs-expander title="Code">
        <pre v-highlightjs><code :class="type"><slot></slot></code></pre>
      </nhs-expander>
    </nhs-col>
  </nhs-row>
</template>

<script>
  export default {
    props: ["type"]
  }
</script>

<style lang="scss" scoped>
  @import '../atom-one-light.css';
</style>
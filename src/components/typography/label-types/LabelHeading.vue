<template>
  <h1 class="nhsuk-label-wrapper">
    <label-normal :size="size" v-bind="$attrs">
      <slot></slot>
    </label-normal>
  </h1>
</template>

<script>
  import LabelNormal from './LabelNormal.vue'

  export default {
    components: { LabelNormal },
    props: {
      size: {
        type: String
      }
    }
  }
</script>
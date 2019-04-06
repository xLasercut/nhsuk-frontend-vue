<template>
  <figure :class="`nhsuk-image${extraClasses}`" v-bind="attributes">
    <img class="nhsuk-image__img" :src="src" :alt="alt">
    <figcaption class="nhsuk-image__caption" v-if="isCaption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsImage",
    mixins: [SharedProps],
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },
    computed: {
      isCaption() {
        if (!this.$slots.default) {
          return false
        }
        return true
      }
    }
  }
</script>
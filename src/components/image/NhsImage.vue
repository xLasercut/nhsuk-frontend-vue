<template>
  <figure class="nhsuk-image" v-bind="$attrs">
    <img class="nhsuk-image__img" :src="src" :alt="alt">
    <figcaption class="nhsuk-image__caption" v-if="isCaption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>

  export default {
    name: 'NhsImage',
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
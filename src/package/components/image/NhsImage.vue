<template>
  <figure class="nhsuk-image" v-bind="$attrs">
    <img class="nhsuk-image__img" :src="src" :alt="alt" :sizes="sizes" :srcset="srcset">
    <figcaption class="nhsuk-image__caption" v-if="isCaption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    sizes: {
      type: String,
      default: null
    },
    srcset: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const isCaption = computed(() => {
      return context.slots.default()
    })

    return {isCaption}
  }
})
</script>

<template>
  <figure class="nhsuk-image" v-bind="$attrs">
    <img class="nhsuk-image__img" :src="src" :alt="alt" :sizes="sizes" :srcset="srcset" />
    <figcaption class="nhsuk-image__caption" v-if="isCaption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-image',
  emits: [],
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
      default: (): string => {
        return ''
      }
    },
    srcset: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  },
  setup(props, context) {
    const isCaption = computed((): boolean => {
      return Boolean(context.slots.default)
    })

    return { isCaption }
  }
})
</script>

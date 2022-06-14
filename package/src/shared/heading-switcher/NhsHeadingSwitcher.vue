<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import { NhsHeadingType } from './types'

const HEADING_TYPES: Set<NhsHeadingType> = new Set([1, 2, 3, 4, 5])

export default defineComponent({
  functional: true,
  props: {
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      required: true,
      validator: (val: NhsHeadingType): boolean => {
        return HEADING_TYPES.has(val)
      }
    }
  },
  setup(props, { slots }) {
    return () => {
      if (slots.default) {
        return h(`h${props.headingLevel}`, slots.default())
      }
      return h(`h${props.headingLevel}`)
    }
  }
})
</script>

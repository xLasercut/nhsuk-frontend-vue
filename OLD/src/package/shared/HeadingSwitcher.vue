<script>
import {defineComponent, h} from 'vue'

const LEVELS = [1, 2, 3, 4, 5]

export default defineComponent({
  name: "HeadingSwitcher",
  functional: true,
  props: {
    headingLevel: {
      type: Number,
      required: true,
      validator(val) {
        return LEVELS.includes(val)
      }
    }
  },
  setup(props, context) {
    return () => {
      return h(`h${props.headingLevel}`, context.slots.default())
    }
  }
})
</script>

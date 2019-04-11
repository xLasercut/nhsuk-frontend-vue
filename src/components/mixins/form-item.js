import FormItem from '../form/shared/FormItem.vue'

export default {
  components: {
    FormItem
  },
  props: {
    error: {
      type: Object,
      default() {
        return {}
      }
    },
    hint: {
      type: Object,
      default() {
        return {}
      }
    },
    label: {
      type: Object,
      default() {
        return {}
      }
    },
    attributes: {
      type: Object,
      default() {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  }

}
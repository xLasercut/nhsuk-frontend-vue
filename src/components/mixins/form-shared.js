import NhsLabel from '../typography/NhsLabel.vue'
import NhsHintText from '../typography/NhsHintText.vue'
import NhsErrorText from '../typography/NhsErrorText.vue'

export default {
  components: {
    NhsErrorText,
    NhsLabel,
    NhsHintText
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
    }
  },
  computed: {
    formGroupError() {
      if (this.error.text) {
        return true
      }
      return false
    },
    describedBy() {
      var describedBy = ""
      if (this.hint.text) {
        describedBy += ` ${this.itemId}-hint` 
      }

      if (this.error.text) {
        describedBy += ` ${this.itemId}-error`
      }

      return describedBy
    }
  }
}
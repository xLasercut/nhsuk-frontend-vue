import FormItem from '../shared/FormItem.vue'
import { NhsLabel, NhsErrorText, NhsHintText } from '../../typography'
import FormAria from './form-aria.js'
import VModel from './v-model.js'
import FormValidation from './form-validation.js'

export default {
  components: { FormItem, NhsLabel, NhsErrorText, NhsHintText },
  mixins: [ FormAria, VModel, FormValidation ],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  watch: {
    model(_val) {
      this.validate()
    }
  },
  computed: {
    attributes() {
      var attributes = this.$attrs
      if (this.hint || this.error) {
        var describedby = []

        if (this.hint) {
          describedby.push(this.hintId)
        }

        if (this.error) {
          describedby.push(this.errorId)
        }

        attributes['aria-describedby'] = describedby.join(' ')
      }

      return attributes
    }
  }
}
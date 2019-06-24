import { NhsHintText, NhsErrorText } from '../../typography'
import NhsFieldset from '../../fieldset'
import FormItem from '../shared/FormItem.vue'

import FormValidation from '../mixins/form-validation.js'
import VModel from '../mixins/v-model.js'
import FormAria from '../mixins/form-aria.js'

export default {
  components: { NhsHintText, NhsErrorText, NhsFieldset, FormItem },
  mixins: [ FormValidation, FormAria, VModel ],
  props: {
    hint: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pageHeading: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    model(_val) {
      this.validate()
    }
  },
  computed: {
    attributes() {
      var attributes = {}
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
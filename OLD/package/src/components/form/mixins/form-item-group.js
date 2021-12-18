import { NhsHintText, NhsErrorText } from '../../typography'
import NhsFieldset from '../../fieldset'
import FormItem from '../shared/FormItem.vue'

import FormValidation from './form-validation.js'
import VModel from './v-model.js'
import FormAria from './form-aria.js'

export default {
  components: { NhsHintText, NhsErrorText, NhsFieldset, FormItem },
  mixins: [ FormValidation, FormAria, VModel ],
  props: {
    hint: {
      type: String
    },
    label: {
      type: String
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
    },
    headingSize: {
      type: String
    }
  },
  watch: {
    model() {
      this.validate()
    }
  }
}

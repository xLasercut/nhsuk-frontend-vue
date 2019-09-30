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
      type: String
    },
    hint: {
      type: String
    },
    label: {
      type: String
    }
  },
  watch: {
    model(_val) {
      this.validate()
    }
  },
  methods: {
    focus() {
      this.$refs['form-item'].focus()
    }
  }
}
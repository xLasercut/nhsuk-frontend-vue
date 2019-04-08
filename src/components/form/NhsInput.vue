<template>
  <div :class="formGroupClass">
    <nhs-label :attributes="label.attributes" :page-heading="label.pageHeading" :for="itemId" v-if="label.text">
      <slot name="label" :props="label">{{label.text}}</slot>
    </nhs-label>
    <nhs-hint-text :attributes="hint.attributes" :id="`${itemId}-hint`" v-if="hint.text">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
    <nhs-error-text :attributes="error.attributes" :id="`${itemId}-error`" v-if="error.text">
      <slot name="error" :props="error">{{error.text}}</slot>
    </nhs-error-text>
    <input :class="inputClass" :id="itemId" :name="name" :type="type" :aria-describedby="describedBy" :autocomplete="autocomplete" v-bind="attributes" v-model="model" @blur="$emit('blur')" :disabled="disabled" :maxlength="maxlength">
  </div>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import NhsLabel from '../typography/NhsLabel.vue'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsErrorText from '../typography/NhsErrorText.vue'

  const widths = [2, 3, 4, 5, 10, 20]

  export default {
    name: "NhsInput",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        validator(val) {
          return widths.includes(val)
        }
      },
      name: {
        type: String,
        required: true
      },
      label: {
        type: Object,
        default() {
          return {}
        }
      },
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
      type: {
        type: String,
        default: "text"
      },
      maxlength: {
        type: Number
      },
      autocomplete: {
        type: String,
        default: ""
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mixins: [AddModel, RandomID],
    components: {
      NhsLabel,
      NhsHintText,
      NhsErrorText
    },
    computed: {
      inputClass() {
        var baseClass = "nhsuk-input"

        if (this.width) {
          baseClass += ` nhsuk-input--width-${this.width}`
        }

        if (this.error.text) {
          baseClass += " nhsuk-input--error"
        }

        return baseClass
      },
      formGroupClass() {
        if (this.error.text) {
          return "nhsuk-form-group nhsuk-form-group--error"
        }
        return "nhsuk-form-group"
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
</script>

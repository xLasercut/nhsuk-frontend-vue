<template>
  <nhs-form-group :error="formGroupError">
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
  </nhs-form-group>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import NhsFormGroup from './NhsFormGroup.vue'
  import FormShared from '../mixins/form-shared.js'

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
    mixins: [AddModel, RandomID, FormShared],
    components: {
      NhsFormGroup
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
      }
    }
  }
</script>

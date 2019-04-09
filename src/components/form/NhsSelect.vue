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
    <select :class="selectClass" :id="itemId" :name="name" :aria-describedby="describedBy" v-bind="attributes" :disabled="disabled" v-model="model">
      <slot></slot>
    </select>
  </nhs-form-group>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import FormShared from '../mixins/form-shared.js'
  import NhsFormGroup from './NhsFormGroup.vue'

  export default {
    name: "NhsSelect",
    components: {
      NhsFormGroup
    },
    mixins: [AddModel, RandomID, FormShared],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      selectClass() {
        if (this.error.text) {
          return "nhsuk-select nhsuk-select--error"
        }
        return "nhsuk-select"
      }
    }
  }
</script>
<template>
  <nhs-form-group :error="formGroupError">
    <nhs-label :attributes="label.attributes" :page-heading="label.pageHeading" :for="id" v-if="label.text">
      <slot name="label" :props="label">{{label.text}}</slot>
    </nhs-label>
    <nhs-hint-text :attributes="hint.attributes" :id="`${id}-hint`" v-if="hint.text">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
    <nhs-error-text :attributes="error.attributes" :id="`${id}-error`" v-if="error.text">
      <slot name="error" :props="error">{{error.text}}</slot>
    </nhs-error-text>
    <slot name="form-item" :described="describedBy"></slot>
  </nhs-form-group>
</template>

<script>
  import NhsFormGroup from './NhsFormGroup.vue'
  import NhsLabel from '../typography/NhsLabel.vue'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsErrorText from '../typography/NhsErrorText.vue'

  export default {
    components: {
      NhsErrorText,
      NhsLabel,
      NhsHintText,
      NhsFormGroup
    },
    props: {
      error: {
        type: Object,
        required: true
      },
      hint: {
        type: Object,
        required: true
      },
      label: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
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
        var errorId = `${this.id}-error`
        var hintId = `${this.id}-hint`
        if (this.hint.text && describedBy) {
          describedBy += ` ${hintId}` 
        }
        else {
          describedBy = hintId
        }

        if (this.error.text && describedBy) {
          describedBy += ` ${errorId}`
        }
        else {
          describedBy = errorId
        }

        return describedBy
      }
    }    
  }
</script>
<template>
  <nhs-form-group :error="formgroupError" :attributes="attributes">
    <nhs-fieldset :attributes="fieldset.attributes" :legend="fieldset.legend" :described-by="fieldset.describedBy" v-if="fieldset">
      <nhs-hint-text class="nhsuk-checkboxes__hint" :attributes="hint.attributes" :id="`${id}-hint`" v-if="hint.text">
        <slot name="hint" :props="hint">{{hint.text}}</slot>
      </nhs-hint-text>
      <nhs-error-text :attributes="error.attributes" :id="`${id}-error`" v-if="error.text">
        <slot name="error" :props="error">{{error.text}}</slot>
      </nhs-error-text>
      <slot></slot>
    </nhs-fieldset>

    <nhs-hint-text class="nhsuk-checkboxes__hint" :attributes="hint.attributes" :id="`${id}-hint`" v-if="hint && !fieldset">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
    <nhs-error-text :attributes="error.attributes" :id="`${id}-error`" v-if="error && !fieldset">
      <slot name="error" :props="error">{{error.text}}</slot>
    </nhs-error-text>
    <slot v-if="!fieldset"></slot>

  </nhs-form-group>
</template>

<script>
  import NhsFieldset from '../layout/NhsFieldset.vue'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsErrorText from '../typography/NhsErrorText.vue'
  import NhsFormGroup from './NhsFormGroup.vue'

  export default {
    name: "NhsCheckboxGroup",
    components: {
      NhsFieldset,
      NhsHintText,
      NhsErrorText,
      NhsFormGroup
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      fieldset: {
        type: Object
      },
      hint: {
        type: Object,
        default() {
          return {}
        }
      },
      id: {
        type: String,
        default: "NhsCheckboxGroup"
      },
      error: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      formgroupError() {
        if (this.error && this.error.text) {
          return true
        }
        return false
      }
    }
  }
</script>

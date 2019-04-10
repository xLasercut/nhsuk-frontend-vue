<template>
  <form-group :error="formgroupError" :attributes="attributes">
    <nhs-fieldset :attributes="fieldset.attributes" :legend="fieldset.legend" :described-by="fieldset.describedBy" v-if="fieldset">
      <nhs-hint-text :class="hintClass" :attributes="hint.attributes" :id="`${id}-hint`" v-if="hint.text">
        <slot name="hint" :props="hint">{{hint.text}}</slot>
      </nhs-hint-text>
      <nhs-error-text :attributes="error.attributes" :id="`${id}-error`" v-if="error.text">
        <slot name="error" :props="error">{{error.text}}</slot>
      </nhs-error-text>
      <slot></slot>
    </nhs-fieldset>

    <nhs-hint-text :class="hintClass" :attributes="hint.attributes" :id="`${id}-hint`" v-if="hint && !fieldset">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
    <nhs-error-text :attributes="error.attributes" :id="`${id}-error`" v-if="error && !fieldset">
      <slot name="error" :props="error">{{error.text}}</slot>
    </nhs-error-text>
    <slot v-if="!fieldset"></slot>

  </form-group>
</template>

<script>
  import FormGroup from './FormGroup.vue'
  import NhsFieldset from '../layout/NhsFieldset.vue'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsErrorText from '../typography/NhsErrorText.vue'

  const types = {
    checkbox: "nhsuk-checkboxes__hint",
    radio: "nhsuk-radios__hint"
  }

  export default {
    components: {
      FormGroup,
      NhsFieldset,
      NhsHintText,
      NhsErrorText
    },
    props: {
      attributes: {
        type: Object,
        required: true
      },
      error: {
        type: Object,
        required: true
      },
      fieldset: {
        type: Object
      },
      id: {
        type: String,
        required: true
      },
      hint: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: true,
        validator(val) {
          return val in types
        }
      }
    },
    computed: {
      formgroupError() {
        if (this.error.text) {
          return true
        }
        return false
      },
      hintClass() {
        return types[this.type]
      }
    }
  }
</script>
<template>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" :for="itemId" v-if="label">
      {{label}}
    </label>
    <slot></slot>
    <textarea class="nhsuk-textarea" :id="itemId" :rows="rows" :disabled="disabled" @blur="$emit('blur')"></textarea>
  </div>
</template>

<script>
  import RandomID from '../mixins/random-id.js'

  export default {
    name: "NhsTextarea",
    mixins: [RandomID],
    props: {
      rows: {
        type: String,
        default: "5"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>
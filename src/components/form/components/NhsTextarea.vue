<template>
  <form-item :error="error">
    <nhs-label v-if="label" :for="id">
      <slot name="label" :props="label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text v-if="hint" :id="hintId">
      <slot name="hint" :props="hint">{{hint}}</slot>
    </nhs-hint-text>
    <nhs-error-text v-if="error" :id="errorId">
      <slot name="error" :props="errorMsg">{{errorMsg}}</slot>
    </nhs-error-text>
    <textarea
      :class="classes()" :id="id" :rows="rows" :disabled="disabled" :name="name"
      v-model="model" v-bind="attributes"
      @blur="$emit('blur')" @change="$emit('change')"
    ></textarea>
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item'

  export default {
    name: 'NhsTextarea',
    mixins: [FormItem],
    props: {
      rows: {
        type: Number,
        default: 5
      }
    },
    methods: {
      classes() {
        var classes = [ 'nhsuk-textarea' ]

        if (this.error) {
          classes.push('nhsuk-textarea--error')
        }

        return classes.join(' ')
      }
    }
  }
</script>
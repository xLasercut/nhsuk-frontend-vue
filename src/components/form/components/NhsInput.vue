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
    <input
      :class="classes()" :id="id" :name="name" :type="type"
      v-bind="attributes" v-model="model"
      :disabled="disabled" :maxlength="maxlength"
      @blur="$emit('blur')" @focus="$emit('focus')" @change="$emit('change')"
      :autocomplete="autocomplete"
    >
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item'
  const widths = [2, 3, 4, 5, 10, 20]

  export default {
    name: 'NhsInput',
    mixins: [ FormItem ],
    props: {
      width: {
        type: Number,
        validator(val) {
          return widths.includes(val)
        }
      },
      type: {
        type: String,
        default: 'text'
      },
      maxlength: {
        type: Number
      },
      autocomplete: {
        type: String,
        default: ''
      }
    },
    methods: {
      classes() {
        var classes = [ 'nhsuk-input' ]

        if (this.width) {
          classes.push(`nhsuk-input--width-${this.width}`)
        }

        if (this.error) {
          classes.push('nhsuk-input--error')
        }

        return classes.join(' ')
      }
    }
  }
</script>
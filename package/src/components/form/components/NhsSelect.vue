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
    <select
      :class="classes()" :id="id" :name="name"
      v-bind="$attrs" :aria-describedby="ariaDescribedby"
      :disabled="disabled" v-model="model"
      @blur="$emit('blur')" @change="$emit('change')"
      ref="form-item"
    >
      <slot></slot>
    </select>
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item'

  export default {
    name: 'NhsSelect',
    mixins: [FormItem],
    methods: {
      classes() {
        var classes = [ 'nhsuk-select' ]

        if (this.error) {
          classes.push('nhsuk-select--error')
        }
        return classes.join(" ")
      }
    }
  }
</script>
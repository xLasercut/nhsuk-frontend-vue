<template>
  <form-item :error="error()">
    <slot name="label"></slot>
    <slot name="hint"></slot>
    <slot name="error"></slot>
    <select
      :class="classes()" :id="itemId()" :name="name"
      :aria-describedby="described()" v-bind="attributes"
      :disabled="disabled" v-model="model"
      @blur="$emit('blur')" @change="$emit('change')"
    >
      <slot></slot>
    </select>
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item.js'

  export default {
    name: "NhsSelect",
    mixins: [FormItem],
    methods: {
      classes() {
        var classes = [ "nhsuk-select" ]

        if (this.error()) {
          classes.push("nhsuk-select--error")
        }
        return classes.join(" ")
      }
    }
  }
</script>
<template>
  <form-item :error="error()">
    <slot name="label"></slot>
    <slot name="hint"></slot>
    <slot name="error"></slot>
    <input 
      :class="classes()" :id="itemId()" :name="name" :type="type"
      :aria-describedby="described()"  v-bind="attributes" v-model="model" 
      :disabled="disabled" :maxlength="maxlength"
      @blur="$emit('blur')" @focus="$emit('focus')" @change="$emit('change')"
    >
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item'
  const widths = [2, 3, 4, 5, 10, 20]

  export default {
    name: "NhsInput",
    mixins: [FormItem],
    props: {
      width: {
        type: Number,
        validator(val) {
          return widths.includes(val)
        }
      },
      type: {
        type: String,
        default: "text"
      },
      maxlength: {
        type: Number
      }
    },
    methods: {
      classes() {
        var classes = [ "nhsuk-input" ]

        if (this.width) {
          classes.push(`nhsuk-input--width-${this.width}`)
        }

        if (this.error()) {
          classes.push("nhsuk-input--error")
        }

        return classes.join(" ")
      }
    }
  }
</script>
<template>
  <form-item :error="error()">
    <slot name="label"></slot>
    <slot name="hint"></slot>
    <slot name="error"></slot>
    <textarea
      :class="classes()" :id="itemId()" :rows="rows" :disabled="disabled" :name="name"
      :aria-describedby="described()" v-model="model" v-bind="attributes"
      @blur="$emit('blur')" @change="$emit('change')"
    ></textarea>
  </form-item>
</template>

<script>
  import FormItem from '../mixins/form-item'

  export default {
    name: "NhsTextarea",
    mixins: [FormItem],
    props: {
      rows: {
        type: Number,
        default: 5
      }
    },
    methods: {
      classes() {
        var classes = [ "nhsuk-textarea" ]

        if (this.error()) {
          classes.push("nhsuk-textarea--error")
        }

        return classes.join(" ")
      }
    }
  }
</script>
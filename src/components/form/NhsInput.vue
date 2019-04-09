<template>
  <form-item-container :error="error" :hint="hint" :label="label" :id="itemId">
    <template #hint="hint">
      <slot name="hint" :props="hint.props"></slot>
    </template>
    <template #error="error">
      <slot name="error" :props="error.props"></slot>
    </template>
    <template #label="label">
      <slot name="label" :props="label.props"></slot>
    </template>
    <template #form-item="formitem">
      <input 
        :class="inputClass" :id="itemId" :name="name" :type="type"
        :aria-describedby="formitem.described" v-bind="attributes" v-model="model" 
        :disabled="disabled" :maxlength="maxlength"
        @blur="$emit('blur')" @focus="$emit('focus')"
      >
    </template>
  </form-item-container>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import FormItemContainer from './FormItemContainer.vue'
  

  const widths = [2, 3, 4, 5, 10, 20]

  export default {
    name: "NhsInput",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        validator(val) {
          return widths.includes(val)
        }
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "text"
      },
      maxlength: {
        type: Number
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      error: {
        type: Object,
        default() {
          return {}
        }
      },
      hint: {
        type: Object,
        default() {
          return {}
        }
      },
      label: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mixins: [AddModel, RandomID],
    components: {
      FormItemContainer
    },
    computed: {
      inputClass() {
        var baseClass = "nhsuk-input"

        if (this.width) {
          baseClass += ` nhsuk-input--width-${this.width}`
        }

        if (this.error.text) {
          baseClass += " nhsuk-input--error"
        }

        return baseClass
      }
    }
  }
</script>

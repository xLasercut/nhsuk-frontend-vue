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
      <select :class="selectClass" :id="itemId" :name="name" :aria-describedby="formitem.described" v-bind="attributes" :disabled="disabled" v-model="model">
        <slot></slot>
      </select>
    </template>
  </form-item-container>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import FormItemContainer from './FormItemContainer.vue'

  export default {
    name: "NhsSelect",
    components: {
      FormItemContainer
    },
    mixins: [AddModel, RandomID],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
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
      label: {
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
      }
    },
    computed: {
      selectClass() {
        if (this.error.text) {
          return "nhsuk-select nhsuk-select--error"
        }
        return "nhsuk-select"
      }
    }
  }
</script>
<template>
  <form-item-group :error="error" :hint="hint" :fieldset="fieldset" :id="id" type="checkbox" :attributes="attributes">
    <template #hint="hint">
      <slot name="hint" :props="hint.props"></slot>
    </template>
    <template #error="error">
      <slot name="error" :props="error.props"></slot>
    </template>
    <slot></slot>
  </form-item-group>
</template>

<script>
  import FormItemGroup from './FormItemGroup.vue'

  export default {
    name: "NhsCheckboxGroup",
    components: {
     FormItemGroup
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      fieldset: {
        type: Object
      },
      hint: {
        type: Object,
        default() {
          return {}
        }
      },
      id: {
        type: String,
        default: "NhsCheckboxGroup"
      },
      error: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

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
      <textarea
        :class="textareaClass" :id="itemId" :rows="rows" :disabled="disabled" :name="name"
        :aria-describedby="formitem.described" v-model="model" v-bind="attributes"
        @blur="$emit('blur')"
      ></textarea>
    </template>
  </form-item-container>
</template>

<script>
  import RandomID from '../mixins/random-id.js'
  import AddModel from '../mixins/add-model.js'
  import FormItemContainer from './FormItemContainer.vue'

  export default {
    name: "NhsTextarea",
    mixins: [AddModel, RandomID],
    components: {
      FormItemContainer
    },
    props: {
      rows: {
        type: Number,
        default: 5
      },
      disabled: {
        type: Boolean,
        default: false
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
      },
      error: {
        type: Object,
        default() {
          return {}
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      textareaClass() {
        if (this.error.text) {
          return "nhsuk-textarea nhsuk-textarea--error"
        }
        return "nhsuk-textarea"
      }
    }
  }
</script>
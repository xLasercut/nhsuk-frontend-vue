<template>
  <form-item :error="error" :hint="hint" :label="label" :id="itemId">
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
        @blur="$emit('blur')" @change="$emit('change')"
      ></textarea>
    </template>
  </form-item>
</template>

<script>
  import RandomID from '../mixins/random-id.js'
  import AddModel from '../mixins/add-model.js'
  import FormItem from '../mixins/form-item.js'

  export default {
    name: "NhsTextarea",
    mixins: [AddModel, RandomID, FormItem],
    props: {
      rows: {
        type: Number,
        default: 5
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
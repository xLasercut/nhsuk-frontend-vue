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
      <select
        :class="selectClass" :id="itemId" :name="name"
        :aria-describedby="formitem.described" v-bind="attributes"
        :disabled="disabled" v-model="model"
        @blur="$emit('blur')" @change="$emit('change')"
      >
        <slot></slot>
      </select>
    </template>
  </form-item>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import FormItem from '../mixins/form-item.js'

  export default {
    name: "NhsSelect",
    mixins: [AddModel, RandomID, FormItem],
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
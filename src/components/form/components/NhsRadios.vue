<template>
  <form-item :error="error">
    <nhs-fieldset :legend="label" :page-heading="pageHeading" v-bind="attributes" size="l">
      <nhs-hint-text v-if="hint" :id="hintId">
        <slot name="hint" :props="hint">{{hint}}</slot>
      </nhs-hint-text>
      <nhs-error-text v-if="error" :id="errorId">
        <slot name="error" :props="errorMsg">{{errorMsg}}</slot>
      </nhs-error-text>
      <radio
        v-for="(item, index) in items"
        :label="item.label"
        :hint="item.hint"
        :conditional="item.conditional"
        :disabled="item.disabled || disabled"
        :id="`${id}-${index}`" :name="item.name" :radio-value="item.value"
        v-model="model" :key="`${id}-${index}`"
      >
        <template slot="label">
          <slot name="label" :props="item"></slot>
        </template>
        <template slot="hint">
          <slot name="hint" :props="item"></slot>
        </template>
      </radio>
    </nhs-fieldset>
  </form-item>
</template>

<script>
  import Radio from './Radio.vue'

  import FormItemGroup from '../mixins/form-item-group.js'

  export default {
    name: 'NhsRadios',
    mixins: [ FormItemGroup ],
    components: { Radio }
  }
</script>
<template>
  <form-item :error="error">
    <nhs-fieldset
      :legend="label"
      :page-heading="pageHeading"
      :aria-describedby="ariaDescribedby"
      :size="headingSize"
    >
      <nhs-hint-text v-if="hint" :id="hintId">
        <slot name="hint" :props="hint">{{hint}}</slot>
      </nhs-hint-text>
      <nhs-error-text v-if="error" :id="errorId">
        <slot name="error" :props="errorMsg">{{errorMsg}}</slot>
      </nhs-error-text>
      <div class="nhsuk-checkboxes">
        <checkbox
          v-for="(item, index) in items"
          :label="item.label"
          :hint="item.hint"
          :conditional="item.conditional"
          :disabled="item.disabled || disabled"
          :id="`${id}-${index}`" :name="item.name" :checkbox-value="item.value"
          v-model="model" :key="`${id}-${index}`"
        >
          <template slot="item-label">
            <slot name="item-label" :props="item"></slot>
          </template>
          <template slot="item-hint">
            <slot name="item-hint" :props="item"></slot>
          </template>
          <template slot="item-conditional">
            <slot name="item-conditional" :props="item"></slot>
          </template>
        </checkbox>
      </div>
    </nhs-fieldset>
  </form-item>
</template>

<script>
  import Checkbox from './Checkbox.vue'

  import FormItemGroup from '../mixins/form-item-group.js'

  export default {
    name: 'NhsCheckboxes',
    components: { Checkbox },
    mixins: [ FormItemGroup ]
  }
</script>
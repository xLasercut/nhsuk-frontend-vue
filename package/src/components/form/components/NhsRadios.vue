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
      <div :class="classes">
        <div v-for="(item, index) in items" :key="`${id}-${index}`">
          <component
            :label="item.label"
            :hint="item.hint"
            :disabled="item.disabled || disabled"
            :id="`${id}-${index + 1}`" :name="item.name" :radio-value="item.value"
            v-model="model"
            :is="component(item)" :divider="item.divider"
          >
            <template slot="item-label">
              <slot name="item-label" :props="item"></slot>
            </template>
            <template slot="item-hint">
              <slot name="item-hint" :props="item"></slot>
            </template>
          </component>
          <div class="nhsuk-radios__conditional" v-show="showConditional(item.value, item.conditional)">
            <slot name="item-conditional" :props="item">{{item}}</slot>
          </div>
        </div>
      </div>
    </nhs-fieldset>
  </form-item>
</template>

<script>
  import Radio from './Radio.vue'
  import RadioDivider from './RadioDivider.vue'

  import FormItemGroup from '../mixins/form-item-group.js'

  export default {
    name: 'NhsRadios',
    mixins: [ FormItemGroup ],
    props: {
      inline: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-radios' ]

        if (this.inline) {
          classes.push('nhsuk-radios--inline')
        }

        return classes.join(' ')
      }
    },
    methods: {
      component(item) {
        if (item.divider) {
          return RadioDivider
        }
        return Radio
      },
      showConditional(radioValue, conditional) {
        return radioValue === this.model && conditional
      }
    }
  }
</script>

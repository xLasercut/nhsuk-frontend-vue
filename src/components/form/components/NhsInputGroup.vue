<template>
  <form-item :error="error">
    <nhs-fieldset :legend="label" :page-heading="pageHeading" v-bind="attributes" :size="headingSize">
      <nhs-hint-text v-if="hint" :id="hintId">
        <slot name="hint" :props="hint">{{hint}}</slot>
      </nhs-hint-text>
      <nhs-error-text v-if="error" :id="errorId">
        <slot name="error" :props="errorMsg">{{errorMsg}}</slot>
      </nhs-error-text>
      <div class="nhsuk-date-input" :id="id">
        <input-item
          v-for="(item, index) in items"
          :label="item.label" :width="item.width" :type="item.type" :autocomplete="item.autocomplete"
          :disabled="item.disabled || disabled"
          :id="`${id}-${index}`" :name="item.name" :rules="item.rules"
          v-model="model[`${id}-${index}`]" :key="`${id}-${index}`" :ref="`${id}-${index}`"
          @change="validate()" @update:error="errorMsg = $event"
        >
          <template slot="item-label">
            <slot name="item-label" :props="item"></slot>
          </template>
        </input-item>
      </div>
    </nhs-fieldset>
  </form-item>
</template>

<script>
  import { NhsHintText, NhsErrorText } from '../../typography'
  import NhsFieldset from '../../fieldset'
  import FormItem from '../shared/FormItem.vue'
  import InputItem from './InputItem.vue'

  import VModel from '../mixins/v-model.js'
  import FormAria from '../mixins/form-aria.js'

  export default {
    name: 'NhsInputGroup',
    components: { InputItem, NhsHintText, NhsErrorText, NhsFieldset, FormItem },
    mixins: [ VModel, FormAria ],
    data() {
      return {
        error: false,
        errorMsg: ''
      }
    },
    props: {
      hint: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      pageHeading: {
        type: Boolean,
        default: false
      },
      items: {
        type: Array,
        default() {
          return []
        }
      },
      headingSize: {
        type: String,
        default: ''
      }
    },
    computed: {
      attributes() {
        var attributes = {}
        if (this.hint || this.error) {
          var describedby = []

          if (this.hint) {
            describedby.push(this.hintId)
          }

          if (this.error) {
            describedby.push(this.errorId)
          }

          attributes['aria-describedby'] = describedby.join(' ')
        }

        return attributes
      }
    },
    methods: {
      validate() {
        this.error = false
        for (var key in this.$refs) {
          var error = this.$refs[key][0].validate()
          if (error) {
            this.error = true
          }
        }
      }
    }
  }
</script>
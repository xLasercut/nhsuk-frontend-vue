<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input"
      :id="id" :name="name" type="radio"
      :value="radioValue" v-bind="attributes" :disabled="disabled"
      v-model="model"
    >
    <nhs-label :for="id" v-if="label" class="nhsuk-radios__label">
      <slot name="item-label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text :id="hintId" v-if="hint" class="nhsuk-radios__hint">
      <slot name="item-hint">{{hint}}</slot>
    </nhs-hint-text>
  </div>
</template>

<script>
  import { NhsHintText, NhsLabel } from '../../typography'
  import VModel from '../mixins/v-model.js'

  export default {
    props: {
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        required: true
      },
      label: {
        type: String
      },
      hint: {
        type: String
      },
      radioValue: {
        type: String,
        required: true
      },
      divider: {}
    },
    components: { NhsHintText, NhsLabel },
    mixins: [ VModel ],
    computed: {
      attributes() {
        var attributes = {}
        if (this.hint) {
          attributes['aria-describedby'] = this.hintId
        }

        return attributes
      },
      hintId() {
        return `${this.id}-hint`
      }
    }
  }
</script>

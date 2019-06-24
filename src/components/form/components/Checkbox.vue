<template>
  <div class="nhsuk-checkboxes__item">
    <input
      class="nhsuk-checkboxes__input" :id="id" :name="name" type="checkbox"
      :value="checkboxValue" v-model="model" :disabled="disabled" v-bind="attributes"
    >
    <nhs-label :for="id" class="nhsuk-checkboxes__label">
      <slot name="label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text v-if="hint" :id="hintId" class="nhsuk-checkboxes__hint">
      <slot name="hint">{{hint}}</slot>
    </nhs-hint-text>
    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${id}`" v-if="model && conditional">
      <slot name="conditional">{{conditional}}</slot>
    </div>
  </div>
</template>

<script>
  import VModel from '../mixins/v-model.js'

  import { NhsLabel, NhsHintText } from '../../typography'

  export default {
    props: {
      checkboxValue: {
        type: String
      },
      conditional: {
        type: String,
        default: ''
      },
      hint: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        required: true
      }
    },
    mixins: [ VModel ],
    components: { NhsLabel, NhsHintText },
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

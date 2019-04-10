<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input"
      :id="itemId" :name="name" type="radio"
      :value="formValue" :aria-describedby="describedBy"
      v-bind="attributes" :disabled="disabled"
      v-model="model"
    >
    <nhs-label class="nhsuk-radios__label" :attributes="label.attributes" :page-heading="label.pageHeading" :for="itemId">
      <slot></slot>
    </nhs-label>
    <nhs-hint-text class="nhsuk-radios__hint" :attributes="hint.attributes" :id="`${itemId}-hint`" v-if="hint.text">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
  </div>
</template>

<script>
  import RandomID from '../mixins/random-id.js'
  import AddModel from '../mixins/add-model.js'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsLabel from '../typography/NhsLabel.vue'

  export default {
    name: "NhsRadio",
    components: {
      NhsHintText,
      NhsLabel
    },
    props: {
      name: {
        type: String,
        required: true
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
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
      formValue: {
        default: null
      }
    },
    mixins: [RandomID, AddModel],
    computed: {
      describedBy() {
        if (this.hint.text) {
          return `${this.itemId}-hint`
        }
        return ""
      }
    }
  }
</script>
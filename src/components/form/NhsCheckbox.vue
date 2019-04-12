<template>
  <div class="nhsuk-checkboxes__item">
    <input class="nhsuk-checkboxes__input" :id="itemId" :name="name" type="checkbox" :value="checkboxValue" v-model="model" :disabled="disabled" :aria-describedby="describedBy">
    <nhs-label class="nhsuk-checkboxes__label" :attributes="label.attributes" :page-heading="label.pageHeading" :for="itemId">
      <slot></slot>
    </nhs-label>
    <nhs-hint-text class="nhsuk-checkboxes__hint" :attributes="hint.attributes" :id="`${itemId}-hint`" v-if="hint.text">
      <slot name="hint" :props="hint">{{hint.text}}</slot>
    </nhs-hint-text>
    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${itemId}`" v-if="model && conditional">
      <slot name="conditional">Use slot: conditional for override</slot>
    </div>
  </div>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'
  import NhsLabel from '../typography/NhsLabel.vue'
  import NhsHintText from '../typography/NhsHintText.vue'

  export default {
    name: "NhsCheckbox",
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      checkboxValue: {
        type: String
      },
      name: {
        type: String,
        required: true
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
      conditional: {
        type: Boolean,
        default: false
      }
    },
    mixins: [AddModel, RandomID],
    components: {
      NhsLabel,
      NhsHintText
    },
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

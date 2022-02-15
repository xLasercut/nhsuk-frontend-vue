<template>
  <div class="nhsuk-checkboxes__item">
    <input
      class="nhsuk-checkboxes__input"
      :id="id"
      :name="name"
      type="checkbox"
      :value="checkboxValue"
      v-model="internalModel"
      v-bind="attributes"
    >
    <nhs-label :for="id" class="nhsuk-checkboxes__label">
      <slot name="item-label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text v-if="hint" :id="hintId()" class="nhsuk-checkboxes__hint">
      <slot name="item-hint">{{hint}}</slot>
    </nhs-hint-text>
    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${id}`" v-if="showConditional()">
      <slot name="item-conditional">{{conditional}}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import NhsHintText from '../../hint-text/NhsHintText.vue'
import NhsLabel from '../../label/NhsLabel.vue'
import {getInternalModel} from '../../shared/form/v-model'

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:model-value'],
  props: {
    checkboxValue: {
      type: String
    },
    conditional: {},
    hint: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      required: true
    }
  },
  components: { NhsLabel, NhsHintText },
  setup(props, context) {
    const internalModel = getInternalModel(props, context)
    function showConditional(): boolean {
      return false
    }

    const attributes = computed(() => {
      const attributes: {[key: string]: any} = {}
      if (props.disabled) {
        attributes['disabled'] = true
      }

      if (props.hint) {
        attributes['aria-describedby'] = hintId()
      }

      return attributes
    })

    function hintId(): string {
      return `${props.id}-hint`
    }

    return {hintId, internalModel, attributes, showConditional}
  }
})

  // export default {
  //   ,
  //   mixins: [ VModel ],
  //
  //   methods: {
  //     showConditional() {
  //       if (Array.isArray(this.model)) {
  //         return this.model.includes(this.checkboxValue) && this.conditional
  //       }
  //       return this.model && this.conditional
  //     }
  //   },
  //   computed: {
  //     attributes() {
  //       var attributes = {}
  //       if (this.hint) {
  //         attributes['aria-describedby'] = this.hintId
  //       }
  //
  //       return attributes
  //     },
  //     hintId() {
  //       return `${this.id}-hint`
  //     }
  //   }
  // }
</script>

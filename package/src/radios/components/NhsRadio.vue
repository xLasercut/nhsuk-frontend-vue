<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input"
      :id="id" :name="name" type="radio"
      :value="radioValue" v-bind="attributes" :disabled="disabled"
      v-model="internalModel"
      @change="$emit('change', id)"
      @blur="$emit('blur', id)"
      @focus="$emit('focus', id)"
    >
    <nhs-label :for="id" v-if="label" class="nhsuk-radios__label">
      <slot name="item-label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text element="div" :id="hintId()" v-if="hint" class="nhsuk-radios__hint">
      <slot name="item-hint">{{hint}}</slot>
    </nhs-hint-text>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {NhsHintText} from '../../hint-text'
import {NhsLabel} from '../../label'
import {getInternalModel} from '../../shared/form/v-model'


export default defineComponent({
  inheritAttrs: false,
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
    divider: {
      type: String
    },
    modelValue: {
      required: true
    }
  },
  components: { NhsHintText, NhsLabel },
  setup(props, context) {
    const internalModel = getInternalModel(props, context)

    const attributes = computed(() => {
      let attributes: {[key: string]: any} = {} = {}
      if (props.disabled) {
        attributes['disabled'] = true
      }

      if (props.hint) {
        attributes['aria-describedby'] = hintId()
      }

      return attributes
    })

    function hintId() {
      return `${props.id}-hint`
    }

    return {internalModel, attributes, hintId}
  }
})
</script>

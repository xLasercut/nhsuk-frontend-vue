<!--<template>-->
<!--  <nhs-form-item :error="error">-->
<!--    <nhs-fieldset-->
<!--      :legend="label"-->
<!--      :page-heading="pageHeading"-->
<!--      :aria-describedby="ariaDescribedby"-->
<!--      :size="headingSize"-->
<!--    >-->
<!--      <nhs-hint-text v-if="hint" :id="hintId(id)">-->
<!--        <slot name="hint" :hint="hint">{{hint}}</slot>-->
<!--      </nhs-hint-text>-->
<!--      <nhs-error-text v-if="error" :id="errorId(id)">-->
<!--        <slot name="error" :error="errorMsg">{{errorMsg}}</slot>-->
<!--      </nhs-error-text>-->
<!--      <div :class="classes">-->
<!--        <div v-for="(item, index) in items" :key="`${id}-${index}`">-->
<!--          <component-->
<!--            :label="item.label"-->
<!--            :hint="item.hint"-->
<!--            :disabled="item.disabled || disabled"-->
<!--            :id="`${id}-${index + 1}`" :name="item.name" :radio-value="item.value"-->
<!--            v-model="internalModel"-->
<!--            :is="component(item)" :divider="item.divider"-->
<!--          >-->
<!--            <template slot="item-label">-->
<!--              <slot name="item-label" :item="item"></slot>-->
<!--            </template>-->
<!--            <template slot="item-hint">-->
<!--              <slot name="item-hint" :item="item"></slot>-->
<!--            </template>-->
<!--          </component>-->
<!--          <div class="nhsuk-radios__conditional" v-show="showConditional(item.value, item.conditional)">-->
<!--            <slot name="item-conditional" :item="item">{{item}}</slot>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nhs-fieldset>-->
<!--  </nhs-form-item>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import NhsRadio from './components/NhsRadio.vue'-->
<!--import NhsRadioDivider from './components/NhsRadioDivider.vue'-->
<!--import {computed, defineComponent, PropType} from 'vue'-->
<!--import {getInternalModel} from '../shared/form/v-model'-->
<!--import NhsFormItem from '../shared/form/NhsFormItem.vue'-->
<!--import NhsFieldset from '../fieldset/NhsFieldset.vue'-->
<!--import NhsHintText from '../hint-text/NhsHintText.vue'-->
<!--import NhsErrorText from '../error-text/NhsErrorText.vue'-->
<!--import {handleItemRegistry} from '../shared/form/form-item-registry'-->
<!--import {errorId, getAriaDescribedBy, hintId} from '../shared/form/aria-helper'-->
<!--import {getFormEvents} from '../shared/form/event-helper'-->
<!--import {randomString} from '../shared/helpers/random-string'-->
<!--import {NhsFieldsetSize} from '../fieldset/types'-->
<!--import {NhsRadiosItemConfig} from './interfaces'-->

<!--export default defineComponent({-->
<!--  name: 'nhs-radios',-->
<!--  inheritAttrs: false,-->
<!--  emits: ['update:model-value', 'blur', 'change', 'focus'],-->
<!--  props: {-->
<!--    id: {-->
<!--      type: String,-->
<!--      default: (): string => {-->
<!--        return `nhs-radios-${randomString()}`-->
<!--      }-->
<!--    },-->
<!--    hint: {-->
<!--      type: String-->
<!--    },-->
<!--    label: {-->
<!--      type: String-->
<!--    },-->
<!--    inline: {-->
<!--      type: Boolean,-->
<!--      default: false-->
<!--    },-->
<!--    disabled: {-->
<!--      type: Boolean,-->
<!--      default: (): boolean => {-->
<!--        return false-->
<!--      }-->
<!--    },-->
<!--    pageHeading: {-->
<!--      type: Boolean,-->
<!--      default: (): boolean => {-->
<!--        return false-->
<!--      }-->
<!--    },-->
<!--    headingSize: {-->
<!--      type: String as PropType<NhsFieldsetSize>-->
<!--    },-->
<!--    items: {-->
<!--      type: Array as PropType<Array<NhsRadiosItemConfig>>,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  components: { NhsHintText, NhsFormItem, NhsFieldset, NhsErrorText },-->
<!--  setup(props, context) {-->
<!--    const internalModel = getInternalModel(props, context)-->
<!--    const {error, errorMsg, validator} = handleItemRegistry(props, internalModel)-->

<!--    const ariaDescribedby = getAriaDescribedBy(props, error)-->
<!--    const {onBlur, onChange} = getFormEvents(props, validator, context)-->

<!--    const classes = computed((): string => {-->
<!--      const classes = [ 'nhsuk-radios' ]-->

<!--      if (props.inline) {-->
<!--        classes.push('nhsuk-radios&#45;&#45;inline')-->
<!--      }-->

<!--      return classes.join(' ')-->
<!--    })-->

<!--    function component(item) {-->
<!--      if (item.divider) {-->
<!--        return NhsRadioDivider-->
<!--      }-->
<!--      return NhsRadio-->
<!--    }-->

<!--    return {-->
<!--      classes,-->
<!--      internalModel,-->
<!--      error,-->
<!--      errorMsg,-->
<!--      ariaDescribedby,-->
<!--      onBlur,-->
<!--      onChange,-->
<!--      errorId,-->
<!--      hintId-->
<!--    }-->
<!--  }-->
<!--    // methods: {-->
<!--    //   showConditional(radioValue, conditional) {-->
<!--    //     return radioValue === this.model && conditional-->
<!--    //   }-->
<!--    // }-->
<!--  })-->
<!--</script>-->

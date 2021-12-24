<!--<template>-->
<!--  <nhs-form-item :error="error">-->
<!--    <nhs-fieldset-->
<!--      :legend="label"-->
<!--      :page-heading="pageHeading"-->
<!--      :aria-describedby="ariaDescribedby"-->
<!--      :size="headingSize"-->
<!--    >-->
<!--      <nhs-hint-text v-if="hint" :id="hintId">-->
<!--        <slot name="hint" :hint="hint">{{hint}}</slot>-->
<!--      </nhs-hint-text>-->
<!--      <nhs-error-text v-if="error" :id="errorId">-->
<!--        <slot name="error" :error="errorMsg">{{errorMsg}}</slot>-->
<!--      </nhs-error-text>-->
<!--      <div class="nhsuk-checkboxes">-->
<!--        <nhs-checkbox-->
<!--          v-for="(item, index) in items"-->
<!--          :label="item.label"-->
<!--          :hint="item.hint"-->
<!--          :conditional="item.conditional"-->
<!--          :disabled="item.disabled || disabled"-->
<!--          :id="`${id}-${index + 1}`" :name="item.name" :checkbox-value="item.value"-->
<!--          v-model="model" :key="`${id}-${index}`"-->
<!--        >-->
<!--          <template slot="item-label">-->
<!--            <slot name="item-label" :item="item"></slot>-->
<!--          </template>-->
<!--          <template slot="item-hint">-->
<!--            <slot name="item-hint" :item="item"></slot>-->
<!--          </template>-->
<!--          <template slot="item-conditional">-->
<!--            <slot name="item-conditional" :props="item"></slot>-->
<!--          </template>-->
<!--        </nhs-checkbox>-->
<!--      </div>-->
<!--    </nhs-fieldset>-->
<!--  </nhs-form-item>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import {defineComponent} from 'vue'-->
<!--import NhsCheckbox from './component/NhsCheckbox.vue'-->
<!--import NhsFormItem from '../shared/form/NhsFormItem.vue'-->

<!--export default defineComponent({-->
<!--  name: 'nhs-checkboxes',-->
<!--  components: { NhsCheckbox, NhsFormItem }-->
<!--})-->
<!--</script>-->

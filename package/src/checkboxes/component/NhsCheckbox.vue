<!--<template>-->
<!--  <div class="nhsuk-checkboxes__item">-->
<!--    <input-->
<!--      class="nhsuk-checkboxes__input" :id="id" :name="name" type="checkbox"-->
<!--      :value="checkboxValue" v-model="model" :disabled="disabled" v-bind="attributes"-->
<!--    >-->
<!--    <nhs-label :for="id" class="nhsuk-checkboxes__label">-->
<!--      <slot name="item-label">{{label}}</slot>-->
<!--    </nhs-label>-->
<!--    <nhs-hint-text v-if="hint" :id="hintId" class="nhsuk-checkboxes__hint">-->
<!--      <slot name="item-hint">{{hint}}</slot>-->
<!--    </nhs-hint-text>-->
<!--    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${id}`" v-if="showConditional()">-->
<!--      <slot name="item-conditional">{{conditional}}</slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import {defineComponent} from 'vue'-->
<!--import NhsHintText from '../../hint-text/NhsHintText.vue'-->
<!--import NhsLabel from '../../label/NhsLabel.vue'-->

<!--export default defineComponent({-->
<!--  inheritAttrs: false,-->
<!--  props: {-->
<!--    checkboxValue: {-->
<!--      type: String-->
<!--    },-->
<!--    conditional: {},-->
<!--    hint: {-->
<!--      type: String-->
<!--    },-->
<!--    label: {-->
<!--      type: String,-->
<!--      required: true-->
<!--    },-->
<!--    name: {-->
<!--      type: String-->
<!--    },-->
<!--    disabled: {-->
<!--      type: Boolean,-->
<!--      default: (): boolean => {-->
<!--        return false-->
<!--      }-->
<!--    },-->
<!--    id: {-->
<!--      type: String,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  components: { NhsLabel, NhsHintText },-->
<!--})-->

<!--  // export default {-->
<!--  //   ,-->
<!--  //   mixins: [ VModel ],-->
<!--  //-->
<!--  //   methods: {-->
<!--  //     showConditional() {-->
<!--  //       if (Array.isArray(this.model)) {-->
<!--  //         return this.model.includes(this.checkboxValue) && this.conditional-->
<!--  //       }-->
<!--  //       return this.model && this.conditional-->
<!--  //     }-->
<!--  //   },-->
<!--  //   computed: {-->
<!--  //     attributes() {-->
<!--  //       var attributes = {}-->
<!--  //       if (this.hint) {-->
<!--  //         attributes['aria-describedby'] = this.hintId-->
<!--  //       }-->
<!--  //-->
<!--  //       return attributes-->
<!--  //     },-->
<!--  //     hintId() {-->
<!--  //       return `${this.id}-hint`-->
<!--  //     }-->
<!--  //   }-->
<!--  // }-->
<!--</script>-->

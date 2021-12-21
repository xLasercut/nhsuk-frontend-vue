<template>
  <div class="nhsuk-action-link" v-bind="$attrs">
    <nhs-link-switcher class="nhsuk-action-link__link" @click="$emit('click')" :href="href">
      <nhs-icon icon="arrow-right-circle"></nhs-icon>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </nhs-link-switcher>
  </div>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../shared/link-switcher'
import NhsIcon from '../icon/NhsIcon.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-action-link',
  emits: ['click'],
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  components: { NhsLinkSwitcher, NhsIcon }
})
</script>

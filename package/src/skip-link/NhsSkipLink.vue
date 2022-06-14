<template>
  <a class="nhsuk-skip-link" href="#maincontent" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-skip-link',
  emits: ['click']
})
</script>

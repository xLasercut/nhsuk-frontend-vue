<template>
  <a class="nhsuk-skip-link" href="#maincontent" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-skip-link'
})
</script>

<template>
  <link-switcher :href="item.href">
    <slot name="action" :props="item">{{item.text}}</slot>
    <span class="nhsuk-u-visually-hidden" v-if="item.hiddenText">{{item.hiddenText}}</span>
  </link-switcher>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    components: {
      LinkSwitcher
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>
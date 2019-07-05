<template>
  <div class="nhsuk-table__panel-with-heading-tab">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-table__heading-tab">{{heading}}</heading-switcher>
    <div class="nhsuk-table-responsive">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'

  export default {
    props: {
      heading: {
        type: String,
        default: ''
      },
      headingLevel: {
        type: Number,
        default: 3
      }
    },
    components: {
      HeadingSwitcher
    }
  }
</script>

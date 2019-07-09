<template>
  <div class="nhsuk-warning-callout" v-bind="$attrs">
    <heading-switcher class="nhsuk-warning-callout__label" :heading-level="headingLevel">
      <slot name="heading" :props="heading">{{heading}}</slot>
    </heading-switcher>
    <slot></slot>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'

  export default {
    name: 'NhsWarningCallout',
    components: { HeadingSwitcher },
    props: {
      heading: {
        type: String,
        required: true
      },
      headingLevel: {
        type: Number,
        default: 3
      }
    }
  }
</script>
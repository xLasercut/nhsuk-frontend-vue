<template>
  <nav :class="`nhsuk-contents-list${extraClasses}`" v-bind="extraAttributes" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
    <ol class="nhsuk-contents-list__list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'
  export default {
    name: "NhsContents",
    mixins: [SharedProps],
    props: {
      ariaLabel: {
        type: String,
        default: "Pages in this guide"
      },
      hiddenText: {
        type: String,
        default: "Contents"
      }
    }
  }
</script>

<template>
  <nav class="nhsuk-contents-list" v-bind="attributes" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
    <ol class="nhsuk-contents-list__list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
   export default {
    name: "NhsContents",
    props: {
      ariaLabel: {
        type: String,
        default: "Pages in this guide"
      },
      hiddenText: {
        type: String,
        default: "Contents"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

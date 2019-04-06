<template>
  <nav :class="`nhsuk-breadcrumb${extraClasses}`" v-bind="attributes" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot class="item"></slot>
      </ol>
      <p class="nhsuk-breadcrumb__back">
        <slot name="back" class="back"></slot>
      </p>
    </div>
  </nav>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsBreadcrumb",
    mixins: [SharedProps],
    props: {
      ariaLabel: {
        type: String,
        default: "Breadcrumb"
      }
    }
  }
</script>
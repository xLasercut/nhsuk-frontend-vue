<template>
  <nav class="nhsuk-breadcrumb" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot name="item"></slot>
      </ol>
      <p class="nhsuk-breadcrumb__back">
        <slot name="back"></slot>
      </p>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NhsBreadcrumb",
    props: {
      ariaLabel: {
        type: String,
        default: ""
      }
    }
  }
</script>
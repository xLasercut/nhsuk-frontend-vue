<template>
  <nav class="nhsuk-breadcrumb" v-bind="attributes" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot></slot>
      </ol>
      <slot name="backlink"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NhsBreadcrumb',
    props: {
      ariaLabel: {
        type: String,
        default: 'Breadcrumb'
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
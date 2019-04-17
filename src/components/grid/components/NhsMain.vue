<template>
  <div :class="containerClass">
    <main class="nhsuk-main-wrapper" id="maincontent">
      <slot></slot>
    </main>
  </div>
</template>

<script>
  const types = {
    fluid: "nhsuk-width-container-fluid",
    normal: "nhsuk-width-container"
  }

  export default {
    name: "NhsMain",
    props: {
      type: {
        type: String,
        default: "normal",
        validator(val) {
          return val in types
        }
      }
    },
    computed: {
      containerClass() {
        return types[this.type]
      }
    }
  }
</script>

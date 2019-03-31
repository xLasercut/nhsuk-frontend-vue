<template>
  <div>
    <code-block :code="primary">
      <nhs-button @click="showAlert('primary button')">Primary Button</nhs-button>
    </code-block>

    <code-block :code="secondary">
      <nhs-button type="secondary" @click="showAlert('secondary button')">Secondary Button</nhs-button>
    </code-block>

    <code-block :code="reverse">
      <nhs-button type="reverse" @click="showAlert('reverse button')">Reverse Button</nhs-button>
    </code-block>

    <code-block :code="icon">
      <nhs-button type="secondary" @click="showAlert('icon button')">
        <nhs-icon icon="cross"></nhs-icon>
      </nhs-button>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        primary: `<nhs-button @click="showAlert('primary button')">
    Primary Button
  </nhs-button>`,
        secondary: `<nhs-button type="secondary" @click="showAlert('secondary button')">
    Secondary Button
  </nhs-button>`,
        reverse: `<nhs-button type="reverse" @click="showAlert('reverse button')">
    Reverse Button
  </nhs-button>`,
        icon: `<nhs-button type="secondary" @click="showAlert('icon button')">
    <nhs-icon icon="cross"></nhs-icon>
  </nhs-button>`
      }
    },
    methods: {
      showAlert(msg) {
        alert(msg)
      }
    }
  }
</script>

<template>
  <div>
    <code-block :code="primary">
      <nhs-row>
        <nhs-col>
          <nhs-button @click="showAlert('primary button')">
            Primary Button
          </nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col>
          <nhs-button @click="showAlert('primary button')" :disabled="true">
            Primary Button Disabled
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="secondary">
      <nhs-row>
        <nhs-col>
          <nhs-button type="secondary" @click="showAlert('secondary button')">
            Secondary Button
          </nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col>
          <nhs-button type="secondary" @click="showAlert('secondary button')" :disabled="true">
            Secondary Button Disabled
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="reverse">
      <nhs-row>
        <nhs-col>
          <nhs-button type="reverse" @click="showAlert('reverse button')">
            Reverse Button
          </nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col>
          <nhs-button type="reverse" @click="showAlert('reverse button')" :disabled="true">
            Reverse Button Disabled
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="icon">
      <nhs-row>
        <nhs-col>
          <nhs-button type="secondary" @click="showAlert('icon button')">
            <nhs-icon icon="cross"></nhs-icon>
          </nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col>
          <nhs-button type="secondary" @click="showAlert('icon button')" :disabled="true">
            <nhs-icon icon="cross"></nhs-icon>
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        primary: `<nhs-button @click="showAlert('primary button')">
    Primary Button
  </nhs-button>
  
  <nhs-button @click="showAlert('primary button')" :disabled="true">
    Primary Button Disabled
  </nhs-button>`,
        secondary: `<nhs-button type="secondary" @click="showAlert('secondary button')">
    Secondary Button
  </nhs-button>
  
  <nhs-button type="secondary" @click="showAlert('secondary button')" :disabled="true">
    Secondary Button Disabled
  </nhs-button>`,
        reverse: `<nhs-button type="reverse" @click="showAlert('reverse button')">
    Reverse Button
  </nhs-button>
  
  <nhs-button type="reverse" @click="showAlert('reverse button')" :disabled="true">
    Reverse Button Disabled
  </nhs-button>`,
        icon: `<nhs-button type="secondary" @click="showAlert('icon button')">
    <nhs-icon icon="cross"></nhs-icon>
  </nhs-button>
  
  <nhs-button type="secondary" @click="showAlert('icon button')" :disabled="true">
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

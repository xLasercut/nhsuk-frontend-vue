<template>
  <div>
    <code-block :code="normalCode">
      <nhs-row>
        <nhs-col :span="33">
          <nhs-button name="primary-button">
            Primary Button
          </nhs-button>         
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button type="secondary" name="secondary-button">
            Secondary Button
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button type="reverse" name="reverse-button">
            Reverse Button
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>
    <code-block :code="disabledCode">
      <nhs-row>
        <nhs-col :span="33">
          <nhs-button name="disabled-primary-button" :disabled="true">
            Primary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button type="secondary" name="disabled-secondary-button" :disabled="true">
            Secondary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button type="reverse" name="disabled-reverse-button" :disabled="true">
            Reverse Button Disabled
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
        normalCode: `<nhs-button>
    Primary Button
  </nhs-button>

  <nhs-button type="secondary">
    Secondary Button
  </nhs-button>

  <nhs-button type="reverse">
    Reverse Button
  </nhs-button>`,
        disabledCode: `<nhs-button :disabled="true">
    Primary Button Disabled
  </nhs-button>
  
  <nhs-button type="secondary" :disabled="true">
    Secondary Button Disabled
  </nhs-button>
  
  <nhs-button type="reverse" @click="showAlert('reverse button')" :disabled="true">
    Reverse Button Disabled
  </nhs-button>`,
      }
    }
  }
</script>

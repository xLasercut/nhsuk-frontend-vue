<template>
  <nhs-main>
    <code-block>
      <nhs-row>
        <nhs-col :span="50">
          <nhs-input v-model="normalInput"></nhs-input>
        </nhs-col>
        <nhs-col :span="50">
          Input: {{normalInput}}
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-input :disabled="true"></nhs-input>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-input label="Input with Label"></nhs-input>
        </nhs-col>
      </nhs-row>

      

      <nhs-row>
        <nhs-col :span="50">
          <nhs-input label="Input with Label and hint">
            <nhs-hint-text>This is a hint text</nhs-hint-text>
          </nhs-input>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block>
      <nhs-row>
        <nhs-col :span="50">
          <nhs-input label="Input with Error" :error="error">
            <nhs-error-text>some error text</nhs-error-text>
          </nhs-input>
        </nhs-col>
        <nhs-col :span="50">
          <nhs-button @click="toggleError()" name="toggle-button">Toggle Error</nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="20" label="20 character width" width="20"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="10" label="10 character width" width="10"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="5" label="5 character width" width="5"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="4" label="4 character width" width="4"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="3" label="3 character width" width="3"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="2" label="2 character width" width="2"></nhs-input>
        </nhs-col>
      </nhs-row>
    </code-block>
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        normalInput: "",
        error: true
      }
    },
    methods: {
      toggleError() {
        this.error = !this.error
      }
    }
  }
</script>
<template>
  <div>
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
          <nhs-input label="Input with Error" :error="true"></nhs-input>
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
        <nhs-col>
          <nhs-input label="20 character width" width="20"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input label="10 character width" width="10"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input label="5 character width" width="5"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input label="4 character width" width="4"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input label="3 character width" width="3"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input label="2 character width" width="2"></nhs-input>
        </nhs-col>
      </nhs-row>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        normalInput: ""
      }
    }
  }
</script>
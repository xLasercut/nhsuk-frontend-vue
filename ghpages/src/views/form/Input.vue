<template>
  <nhs-main>
    <code-block :code="sourceTypes">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-input v-model="inputValue">
            <nhs-label slot="label">Input label</nhs-label>
            <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
            <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
          </nhs-input>
        </nhs-col>
        <nhs-col :span="50">
          <p>Input: {{inputValue}}</p>
          <nhs-button @click="toggleError()" name="toggle-button">Toggle Error</nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-input :disabled="true" name="disabled"></nhs-input>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="sourceSize">
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="20" :width="20" name="width-20"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="10" :width="10" name="width-10"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="5" :width="5" name="width-5"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="4" :width="4" name="width-4"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="3" :width="3" name="width-3"></nhs-input>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-col>
          <nhs-input :maxlength="2" :width="2" name="width-2"></nhs-input>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="input" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceTypes = `<<nhs-input v-model="inputValue">
    <nhs-label slot="label">Input label</nhs-label>
    <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
    <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
  </nhs-input>
  
  <nhs-input :disabled="true" name="disabled"></nhs-input>
  
  export default {
    data() {
      return {
        inputValue: "",
        error: "Error Text"
      }
    }
  }`

  var sourceSize = `<nhs-row>
    <nhs-col>
      <nhs-input :maxlength="20" :width="20"></nhs-input>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col>
      <nhs-input :maxlength="10" :width="10"></nhs-input>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col>
      <nhs-input :maxlength="5" :width="5"></nhs-input>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col>
      <nhs-input :maxlength="4" :width="4"></nhs-input>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col>
      <nhs-input :maxlength="3" :width="3"></nhs-input>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col>
      <nhs-input :maxlength="2" :width="2"></nhs-input>
    </nhs-col>
  </nhs-row>`

  export default {
    data() {
      return {
        sourceTypes: sourceTypes,
        sourceSize: sourceSize,
        inputValue: "",
        error: "Error Text",
        rows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "The id of the input. Default: NhsInput_<random string>"
          },
          {
            name: "name",
            type: "string",
            required: "no",
            description: "The name of the input, which is submitted with the form data."
          },
          {
            name: "type",
            type: "string",
            required: "no",
            description: "Type of input control to render. Default: text."
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, input is disabled"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the input component."
          }
        ]
      }
    },
    methods: {
      toggleError() {
        if (this.error) {
          this.error = ""
        }
        else {
          this.error = "Error Text"
        }
      }
    }
  }
</script>
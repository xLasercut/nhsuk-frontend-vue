<template>
  <nhs-main>
    <code-block :code="sourceTypes">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-input v-model="inputValue" name="normal" :label="label" :hint="hint" :error="error"></nhs-input>
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

    <argument-table heading="Input Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceTypes = `<nhs-input v-model="inputValue" name="normal" :label="label" :hint="hint" :error="error">
  </nhs-input>
  
  <nhs-input :disabled="true" name="disabled"></nhs-input>
  
  export default {
    data() {
      return {
        inputValue: "",
        label: {
          text: "Input Label"
        },
        hint: {
          text: "Input hint"
        },
        error: {
          text: "Input error"
        }
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
        label: {
          text: "Input Label"
        },
        hint: {
          text: "Input hint"
        },
        error: {
          text: "Input error"
        },
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
            required: "yes",
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
            name: "label",
            type: "object",
            required: "no",
            description: "Arguments for the label component (e.g. text). See label component."
          },
          {
            name: "hint",
            type: "object",
            required: "no",
            description: "Arguments for the hint text component (e.g. text). See hint-text component."
          },
          {
            name: "error",
            type: "object",
            required: "no",
            description: "Arguments for the error text component (e.g. text). See error-text component."
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
        if (this.error.text) {
          this.error.text = ""
        }
        else {
          this.error.text = "Input error"
        }
      }
    }
  }
</script>
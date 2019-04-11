<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-textarea :hint="hint" :error="error" :label="label" v-model="text" :rows="2" name="textarea"></nhs-textarea>
        </nhs-col>
        <nhs-col :span="50">
          <p>Text: {{text}}</p>
          <nhs-button name="toggle" @click="toggleError()">Toggle Error</nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-textarea name="textarea" :rows="2" :disabled="true"></nhs-textarea>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Textarea Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-textarea :hint="hint" :error="error" :label="label" :rows="2" v-model="text">
  </nhs-textarea>

  <nhs-textarea name="textarea" :disabled="true"></nhs-textarea>
  
  export default {
    data() {
      return {
        hint: {
          text: "Hint text"
        },
        error: {
          text: "Error text"
        },
        label: {
          text: "Label text"
        },
        text: ""
      }
    }
  }`

  export default {
    data() { 
      return {
        hint: {
          text: "Hint text"
        },
        error: {
          text: "Error text"
        },
        label: {
          text: "Label text"
        },
        text: "",
        source: source,
        rows: [
          {
            name: "name",
            type: "string",
            required: "yes",
            description: "The name of the textarea, which is submitted with the form data."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "The id of the textarea. Default: NhsTextarea_<random id>"
          },
          {
            name: "rows",
            type: "number",
            required: "no",
            description: "Optional number of textarea rows. Default: 5"
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, textarea is disabled"
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
            description: "Arguments for the hint component (e.g. text). See hint-text component."
          },
          {
            name: "error",
            type: "object",
            required: "no",
            description: "Arguments for the error component (e.g. text). See error-text component."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the textarea tag."
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
          this.error.text = "Error text"
        }
      }
    }
  }
</script>

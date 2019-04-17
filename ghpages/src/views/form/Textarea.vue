<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-textarea v-model="text" :rows="2" name="textarea">
            <nhs-label slot="label">Input label</nhs-label>
            <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
            <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
          </nhs-textarea>
        </nhs-col>
        <nhs-col :span="50">
          <p>Text: {{text}}</p>
          <nhs-button name="toggle" @click="toggleError()">Toggle Error</nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-textarea name="textarea" :rows="1" :disabled="true"></nhs-textarea>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="textarea" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-textarea v-model="text" :rows="2" name="textarea">
    <nhs-label slot="label">Input label</nhs-label>
    <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
    <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
  </nhs-textarea>

  <nhs-textarea name="textarea" :disabled="true"></nhs-textarea>
  
  export default {
    data() {
      return {
        error: "Error text"
      }
    }
  }`

  export default {
    data() { 
      return {
        error: "Error text",
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
        if (this.error) {
          this.error = ""
        }
        else {
          this.error = "Error text"
        }
      }
    }
  }
</script>

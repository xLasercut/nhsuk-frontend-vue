<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-select name="normal" :label="label" :hint="hint" :error="error" v-model="selectnormal">
            <option>Select 1</option>
            <option disabled>Select 2</option>
            <option value="OPT3">Select 3</option>
          </nhs-select>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{selectnormal}}</p>
          <nhs-button name="toggle" @click="toggleError()">Toggle Error</nhs-button>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-select name="disabled" v-model="selectdisabled" :disabled="true">
            <option>Select 1</option>
            <option disabled>Select 3</option>
            <option value="OPT4">Select 4</option>
          </nhs-select>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Select Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-select :label="label" :hint="hint" :error="error" v-model="selected">
    <option>Select 1</option>
    <option disabled>Select 2</option>
    <option value="OPT3">Select 3</option>
  </nhs-select>
  
  <nhs-select :disabled="true">
    <option>Select 1</option>
  </nhs-select>
  
  export default {
    data() {
      return {
        hint: {
          text: "Hint text"
        },
        label: {
          text: "Label text"
        },
        error: {
          text: "Error text"
        }
      }
    }
  }`

  export default {
    data() {
      return {
        selectnormal: "",
        selectdisabled: "Select 1",
        selectoverride: "",
        source: source,
        hint: {
          text: "Hint text"
        },
        label: {
          text: "Label text"
        },
        error: {
          text: "Error text"
        },
        rows: [
          {
            name: "name",
            type: "string",
            required: "yes",
            description: "The name of the select, which is submitted with the form data."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "The id for each select box. Default: NhsSelect_<random string>"
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
            description: "Any extra HTML attributes (for example class) to add to the select component."
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
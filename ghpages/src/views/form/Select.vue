<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-select v-model="selectnormal">
            <nhs-label slot="label">Input label</nhs-label>
            <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
            <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
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

    <argument-table heading="select" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-select v-model="selectnormal">
    <nhs-label slot="label">Input label</nhs-label>
    <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
    <nhs-error-text slot="error" v-if="error">{{error}}</nhs-error-text>
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
        error: "Error text"
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
        error: "Error text",
        rows: [
          {
            name: "name",
            type: "string",
            required: "no",
            description: "The name of the select, which is submitted with the form data."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "The id for each select box. Default: NhsSelect_<random string>"
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, select is disabled"
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
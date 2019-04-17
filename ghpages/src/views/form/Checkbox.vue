<template>
  <nhs-main>
    <code-block :code="sourceSingle">
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox v-model="checked">
              <nhs-label slot="label">Single Checkbox</nhs-label>
            </nhs-checkbox>
            <nhs-checkbox :disabled="true">
              <nhs-label slot="label">Disabled</nhs-label>
            </nhs-checkbox>
            <nhs-checkbox v-model="checked">
              <nhs-label slot="label">With hint</nhs-label>
              <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
            </nhs-checkbox>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Status: {{checked}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="sourceOverride">
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox checkbox-value="London" v-model="checkedval">
              <nhs-label slot="label">London</nhs-label>
            </nhs-checkbox>

            <nhs-checkbox checkbox-value="Paris" v-model="checkedval">
              <nhs-label slot="label">Paris</nhs-label>
            </nhs-checkbox>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Status: {{checkedval}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="sourceGroup">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-form-itemgroup>
            <nhs-fieldset slot="fieldset" legend="Fieldset text"></nhs-fieldset>
            <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
            <nhs-error-text slot="error">Error text</nhs-error-text>
            <nhs-checkbox conditional="Conditional text">
              <nhs-label slot="label">London</nhs-label>
            </nhs-checkbox>
          </nhs-form-itemgroup>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="checkbox" :rows="cbrows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceSingle = `<nhs-checkbox v-model="checked">
    <nhs-label slot="label">Single Checkbox</nhs-label>
  </nhs-checkbox>
  
  <nhs-checkbox :disabled="true">
    <nhs-label slot="label">Disabled</nhs-label>
  </nhs-checkbox>

  <nhs-checkbox v-model="checked">
    <nhs-label slot="label">With hint</nhs-label>
    <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
  </nhs-checkbox>`

  var sourceOverride = `<nhs-checkbox checkbox-value="London" v-model="checkedval">
    <nhs-label slot="label">London</nhs-label>
  </nhs-checkbox>

  <nhs-checkbox checkbox-value="Paris" v-model="checkedval">
    <nhs-label slot="label">Paris</nhs-label>
  </nhs-checkbox>
  
  export default {
    data() {
      return {
        checkedval: []
      }
    }
  }`

  var sourceGroup = `<nhs-form-itemgroup>
    <nhs-fieldset slot="fieldset" legend="Fieldset text"></nhs-fieldset>
    <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
    <nhs-error-text slot="error">Error text</nhs-error-text>
    <nhs-checkbox conditional="Conditional text">
      <nhs-label slot="label">London</nhs-label>
    </nhs-checkbox>
  </nhs-form-itemgroup>`

  export default {
    data() {
      return {
        checked: true,
        checkedval: [],
        sourceSingle: sourceSingle,
        sourceOverride: sourceOverride,
        sourceGroup: sourceGroup,
        cbrows: [
          {
            name: "name",
            type: "string",
            required: "no",
            description: "Name attribute for each checkbox."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Specific id attribute for the checkbox. Default: NhsCheckbox_<random number>"
          },
          {
            name: "conditional",
            type: "string",
            required: "no",
            description: "Conditional text which displays when checkbox is checked."
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, checkbox will be disabled."
          },
          {
            name: "checkbox-value",
            type: "string",
            required: "no",
            description: "Value for the checkbox input."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the checkbox input tag."
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .status {
    line-height: 40px;
  }
</style>

<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-radio-group :hint="groupHint" :error="error" :fieldset="fieldset">
            <nhs-radio name="radio1" v-model="radioVal" radio-value="option 1">option 1</nhs-radio>
            <nhs-radio name="radio2" v-model="radioVal" radio-value="option 2">option 2</nhs-radio>
            <nhs-radio name="radio3" v-model="radioVal" radio-value="option 3" :disabled="true">option 3</nhs-radio>
            <nhs-radio name="radio2" v-model="radioVal" radio-value="option 4" :hint="hint">option 4</nhs-radio>
          </nhs-radio-group>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{radioVal}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Radio Arguments" :rows="rrows"></argument-table>
    <argument-table heading="Radio Group Arguments" :rows="rgrows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-radio-group :hint="groupHint" :error="error" :fieldset="fieldset">
    <nhs-radio name="radio1" v-model="radioVal" radio-value="option 1">option 1</nhs-radio>
    <nhs-radio name="radio2" v-model="radioVal" radio-value="option 2">option 2</nhs-radio>
    <nhs-radio name="radio3" v-model="radioVal" radio-value="option 3" :disabled="true">option 3</nhs-radio>
    <nhs-radio name="radio2" v-model="radioVal" radio-value="option 4" :hint="hint">option 4</nhs-radio>
  </nhs-radio-group>
  
  export default {
    data() {
      return {
        radioVal: "option 1",
        hint: {
          text: "Hint Text"
        },
        groupHint: {
          text: "Hint Text for radio group"
        },
        error: {
          text: "Error for radio group"
        },
        fieldset: {
          legend: {
            text: "Fieldset legend"
          }
        }
      }
    }
  }`

  export default {
    data() {
      return {
        radioVal: "option 1",
        source: source,
        hint: {
          text: "Hint Text"
        },
        groupHint: {
          text: "Hint Text for radio group"
        },
        error: {
          text: "Error for radio group"
        },
        fieldset: {
          legend: {
            text: "Fieldset legend"
          }
        },
        rrows: [
          {
            name: "name",
            type: "string",
            required: "yes",
            description: "Name attribute for the radio."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Specific id attribute for the radio. Default: NhsRadio_<random number>"
          },
          {
            name: "hint",
            type: "object",
            required: "no",
            description: "Provide optional hint to the radio. See hint-text component."
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, radio will be disabled."
          },
          {
            name: "radio-value",
            type: "string",
            required: "yes",
            description: "Value for the radio input."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the radio input tag."
          }
        ],
        rgrows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "id of the radio group"
          },
          {
            name: "fieldset",
            type: "object",
            required: "no",
            description: "Arguments for the fieldset component (e.g. legend). See fieldset component."
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
            description: "Any extra HTML attributes (for example class) to add to the radio group."
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
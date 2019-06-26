<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-radios
            :items="items" v-model="radioVal"
            label="Label as page heading" page-heading
            hint="hint text" :rules="rules"
          ></nhs-radios>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{radioVal}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="radio" :rows="rrows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-form-itemgroup>
      <nhs-fieldset slot="fieldset" legend="Radio Group"></nhs-fieldset>
      <nhs-hint-text slot="hint" >Hint text</nhs-hint-text>
      <nhs-error-text slot="error">Error text</nhs-error-text>
      <nhs-radio name="radio1" v-model="radioVal" radio-value="option 1">
        <nhs-label slot="label">Option 1</nhs-label>
      </nhs-radio>
      <nhs-radio name="radio2" v-model="radioVal" radio-value="option 2" :disabled="true">
        <nhs-label slot="label">Option 2</nhs-label>
      </nhs-radio>
      <nhs-radio name="radio3" v-model="radioVal" radio-value="option 3">
        <nhs-label slot="label">Option 3</nhs-label>
      </nhs-radio>
      <nhs-radio name="radio2" v-model="radioVal" radio-value="option 4">
        <nhs-label slot="label">Option 1</nhs-label>
        <nhs-hint-text slot="hint">Hint text</nhs-hint-text>
      </nhs-radio>
    </nhs-form-itemgroup>

  export default {
    data() {
      return {
        radioVal: "option 1"
      }
    }
  }`

  export default {
    data() {
      return {
        radioVal: "option 1",
        items: [
          {
            label: 'Option 1',
            value: 'option 1'
          },
          {
            label: 'Option 2',
            value: 'option 2',
            disabled: true
          },
          {
            label: 'Option 3',
            value: 'option 3',
            hint: 'hint'
          }
        ],
        rules: [
          (v) => v == 'option 1' || 'invalid option'
        ],
        source: source,
        rrows: [
          {
            name: "name",
            type: "string",
            required: "no",
            description: "Name attribute for the radio."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Specific id attribute for the radio. Default: NhsRadio_<random number>"
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
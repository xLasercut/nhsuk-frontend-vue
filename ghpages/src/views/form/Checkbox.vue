<template>
  <nhs-main>
    <code-block :code="sourceSingle">
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox name="single-checkbox" v-model="checked">
              Single Checkbox
            </nhs-checkbox>
            <nhs-checkbox name="disabled-checkbox" :disabled="true">
              Disabled
            </nhs-checkbox>
            <nhs-checkbox name="single-checkbox" :hint="hint">
              With hint
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
            <nhs-checkbox name="single-checkbox" override-value="London" v-model="checkedval">
              London
            </nhs-checkbox>

            <nhs-checkbox name="single-checkbox" override-value="Paris" v-model="checkedval">
              Paris
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
          <nhs-checkbox-group :error="error" :hint="hint" :fieldset="fieldset">
            <nhs-checkbox name="single-checkbox" :conditional="true">
              London
              <template slot="conditional">
                Some conditionals
              </template>
            </nhs-checkbox>
          </nhs-checkbox-group>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Checkbox Arguments" :rows="cbrows"></argument-table>

    <argument-table heading="Checkbox Group Arguments" :rows="cbgrows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceSingle = `<nhs-checkbox>
    Single Checkbox
  </nhs-checkbox>
  <nhs-checkbox :disabled="true">
    Disabled
  </nhs-checkbox>
  <nhs-checkbox :hint="hint">
    With hint
  </nhs-checkbox>
  
  export default {
    data() {
      return {
        hint: {
          text: "Hint text"
        }
      }
    }
  }`

  var sourceOverride = `<nhs-checkbox name="single-checkbox" override-value="London" v-model="checkedval">
    London
  </nhs-checkbox>

  <nhs-checkbox name="single-checkbox" override-value="Paris" v-model="checkedval">
    Paris
  </nhs-checkbox>
  
  export default {
    data() {
      return {
        checkedval: []
      }
    }
  }`

  var sourceGroup = `<nhs-checkbox-group :error="error" :hint="hint" :fieldset="fieldset">
    <nhs-checkbox name="single-checkbox" :conditional="true">
      London
      <template slot="conditional">
        Some conditionals
      </template>
    </nhs-checkbox>
  </nhs-checkbox-group>
  
  export default {
    data() {
      return {
        error: {
          text: "Error Text"
        },
        hint: {
          text: "Hint text"
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
        checked: true,
        checkedval: [],
        sourceSingle: sourceSingle,
        sourceOverride: sourceOverride,
        sourceGroup: sourceGroup,
        error: {
          text: "Error Text"
        },
        hint: {
          text: "Hint text"
        },
        fieldset: {
          legend: {
            text: "Fieldset legend"
          }
        },
        cbrows: [
          {
            name: "name",
            type: "string",
            required: "yes",
            description: "Name attribute for each checkbox."
          },
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Specific id attribute for the checkbox. Default: NhsCheckbox_<random number>"
          },
          {
            name: "hint",
            type: "object",
            required: "no",
            description: "Provide optional hint to each checkbox. See hint-text component."
          },
          {
            name: "conditional",
            type: "boolean",
            required: "no",
            description: "If true, content provided will be revealed when the item is checked."
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "If true, checkbox will be disabled."
          },
          {
            name: "override-value",
            type: "all",
            required: "no",
            description: "Value for the checkbox input."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the checkbox input tag."
          }
        ],
        cbgrows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "id of the checkbox group"
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
            description: "Arguments for the hint component (e.g. text). See hint component."
          },
          {
            name: "error",
            type: "object",
            required: "no",
            description: "Arguments for the error message component (e.g. text). See error message component."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the checkboxes group."
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

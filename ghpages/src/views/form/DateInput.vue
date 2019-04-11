<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-date-input
            :items="items" v-model="date"
            :error="error" :fieldset="fieldset" :hint="hint"
          ></nhs-date-input>
        </nhs-col>
        <nhs-col :span="50">
          Date: {{date}}
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="Date Input Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-date-input
    :items="items" v-model="date"
    :error="error" :fieldset="fieldset" :hint="hint"
  ></nhs-date-input>
  
  export default {
    data() {
      return {
        date: {},
        items: [
          {
              name: "day",
              width: 2,
              label: {
                text: "Day"
              },
              attributes: {},
              error: true
            },
            {
              name: "month",
              width: 2,
              label: {
                text: "Month"
              },
              attributes: {}
            },
            {
              name: "year",
              width: 4,
              label: {
                text: "Year"
              },
              attributes: {}
            }
        ],
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
        date: {},
        items: [
          {
              name: "day",
              width: 2,
              label: {
                text: "Day"
              },
              attributes: {},
              error: true
            },
            {
              name: "month",
              width: 2,
              label: {
                text: "Month"
              },
              attributes: {}
            },
            {
              name: "year",
              width: 4,
              label: {
                text: "Year"
              },
              attributes: {}
            }
        ],
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
        source: source,
        rows: [
          {
            name: "id",
            type: "string",
            required: "no",
            description: "Optional id. This is used for the main component and to compose id attribute for each item."
          },
          {
            name: "items",
            type: "array",
            required: "yes",
            description: "An array of input objects with name, value and optional classes."
          },
          {
            name: "items.{}.name",
            type: "string",
            required: "no",
            description: "Item-specific name attribute."
          },
          {
            name: "items.{}.label",
            type: "string",
            required: "no",
            description: "Optional item-specific label text"
          },
          {
            name: "items.{}.error",
            type: "boolean",
            required: "no",
            description: "If true, item will be set to error state"
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
            description: "Any extra HTML attributes (for example class) to add to the date-input component."
          }
        ]
      }
    }
  }
</script>
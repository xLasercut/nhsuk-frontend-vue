<template>
  <nhs-main>
    <code-block :code="sourceNormal">
      <nhs-row>
        <nhs-col :span="33">
          <nhs-button name="primary-button" href="/form/button">
            Primary Button
          </nhs-button>         
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="secondary" name="secondary-button">
            Secondary Button
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="reverse" name="reverse-button">
            Reverse Button
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>
    <code-block :code="sourceDisabled">
      <nhs-row>
        <nhs-col :span="33">
          <nhs-button name="disabled-primary-button" :disabled="true">
            Primary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="secondary" name="disabled-secondary-button" :disabled="true">
            Secondary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="reverse" name="disabled-reverse-button" :disabled="true">
            Reverse Button Disabled
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="button" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var sourceNormal = `<nhs-button>
    Primary Button
  </nhs-button>

  <nhs-button color="secondary">
    Secondary Button
  </nhs-button>

  <nhs-button color="reverse">
    Reverse Button
  </nhs-button>`


  var sourceDisabled = `<nhs-button name="disabled-primary-button" :disabled="true">
    Primary Button Disabled
  </nhs-button>
  
  <nhs-button color="secondary" :disabled="true">
    Secondary Button Disabled
  </nhs-button>
  
  <nhs-button color="reverse" :disabled="true">
    Reverse Button Disabled
  </nhs-button>`

  export default {
    data() {
      return {
        sourceNormal: sourceNormal,
        sourceDisabled: sourceDisabled,
        rows: [
          {
            name: "element",
            type: "string",
            required: "no",
            description: "Whether to use an <button> or <a> element to create the button. In most cases you will not need to set this as it will be configured automatically if you use href"
          },
          {
            name: "name",
            type: "string",
            required: "yes",
            description: "Name for the button"
          },
          {
            name: "color",
            type: "string",
            required: "no",
            description: "Alternative colours of the button. secondary or reverse"
          },
          {
            name: "disabled",
            type: "boolean",
            required: "no",
            description: "Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically."
          },
          {
            name: "href",
            type: "string",
            required: "no",
            description: "The URL that the button should link to. If this is set, element will be automatically set to <a> if it has not already been defined."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the textarea tag."
          }
        ]
      }
    }
  }
</script>

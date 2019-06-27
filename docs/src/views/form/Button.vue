<template>
  <nhs-main>
    <code-block :template="template">
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
    <code-block :template="templateDisabled">
      <nhs-row>
        <nhs-col :span="33">
          <nhs-button name="disabled-primary-button" disabled>
            Primary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="secondary" name="disabled-secondary-button" disabled>
            Secondary Button Disabled
          </nhs-button>
        </nhs-col>
        <nhs-col :span="33">
          <nhs-button color="reverse" name="disabled-reverse-button" disabled>
            Reverse Button Disabled
          </nhs-button>
        </nhs-col>
      </nhs-row>
    </code-block>

    <argument-table heading="button" :data-props="props" :data-slots="slots" :data-events="events" />
  </nhs-main>
</template>

<script>
  var template = `
  <nhs-button>
    Primary Button
  </nhs-button>

  <nhs-button color="secondary">
    Secondary Button
  </nhs-button>

  <nhs-button color="reverse">
    Reverse Button
  </nhs-button>
  `


  var templateDisabled = `
  <nhs-button name="disabled-primary-button" disabled>
    Primary Button Disabled
  </nhs-button>

  <nhs-button color="secondary" disabled>
    Secondary Button Disabled
  </nhs-button>

  <nhs-button color="reverse" disabled>
    Reverse Button Disabled
  </nhs-button>
  `

  export default {
    data() {
      return {
        template: template,
        templateDisabled: templateDisabled,
        props: [
          {
            name: "element",
            type: "string",
            description: "Whether to use an <button> or <a> element to create the button. In most cases you will not need to set this as it will be configured automatically if you use href"
          },
          {
            name: "color",
            type: "string",
            description: "Alternative colours of the button. secondary or reverse"
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically."
          },
          {
            name: "href",
            type: "string",
            description: "The URL that the button should link to. If this is set, element will be automatically set to <a> if it has not already been defined."
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ],
        events: [
          {
            name: 'click',
            trigger: 'on click'
          }
        ]
      }
    }
  }
</script>

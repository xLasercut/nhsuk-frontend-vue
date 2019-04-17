<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-summary-list :rows="rows">
      </nhs-summary-list>

      <nhs-summary-list :rows="rows">
        <template #value="value">
          <span v-html="value.props.text"></span>
        </template>
      </nhs-summary-list>
    </code-block>

    <argument-table heading="summary-list" :rows="argRows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-summary-list :rows="rows">
  </nhs-summary-list>

  <nhs-summary-list :rows="rows">
    <template #value="value">
      <span v-html="value.props.text"></span>
    </template>
  </nhs-summary-list>
  
  export default {
    data() {
      return {
        rows: [
          {
            key: {
              text: "Name"
            },
            value: {
              text: "Sarah Philips"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "name"
                }
              ]
            }
          },
          {
            key: {
              text: "Date of birth"
            },
            value: {
              text: "5 January 1978"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "date of birth"
                }
              ]
            }
          },
          {
            key: {
              text: "Contact information"
            },
            value: {
              text: "72 Guild Street<br>London<br>SE23 6FH"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "contact information"
                }
              ]
            }
          },
          {
            key: {
              text: "Contact details"
            },
            value: {
              text: '<p>07700 900457</p><p>sarah.phillips@example.com</p>'
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "contact details"
                }
              ]
            }
          }
        ]
      }
    }
  }`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            key: {
              text: "Name"
            },
            value: {
              text: "Sarah Philips"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "name"
                }
              ]
            }
          },
          {
            key: {
              text: "Date of birth"
            },
            value: {
              text: "5 January 1978"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "date of birth"
                }
              ]
            }
          },
          {
            key: {
              text: "Contact information"
            },
            value: {
              text: "72 Guild Street<br>London<br>SE23 6FH"
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "contact information"
                }
              ]
            }
          },
          {
            key: {
              text: "Contact details"
            },
            value: {
              text: '<p>07700 900457</p><p>sarah.phillips@example.com</p>'
            },
            action: {
              items: [
                {
                  href: "#",
                  text: "Change",
                  hiddenText: "contact details"
                }
              ]
            }
          }
        ],
        argRows: [
          {
            name: "rows",
            type: "array",
            required: "yes",
            description: "Array of row item objects."
          },
          {
            name: "rows.{}.key.text",
            type: "string",
            required: "yes",
            description: "Text to use within the each key."
          },
          {
            name: "rows.{}.key.attributes",
            type: "object",
            required: "no",
            description: "HTML attributes (for example class) to add to the key wrapper."
          },
          {
            name: "rows.{}.value.text",
            type: "string",
            required: "yes",
            description: "Text to use within the each value."
          },
          {
            name: "rows.{}.value.attributes",
            type: "object",
            required: "no",
            description: "HTML attributes (for example class) to add to the value wrapper."
          },
          {
            name: "rows.{}.action.attributes",
            type: "object",
            required: "no",
            description: "HTML attributes (for example class) to add to the action wrapper."
          },
          {
            name: "rows.{}.action.items",
            type: "array",
            required: "yes",
            description: "Array of action items"
          },
          {
            name: "rows.{}.action.items.{}.text",
            type: "string",
            required: "yes",
            description: "Text to use within each action item."
          },
          {
            name: "rows.{}.action.items.{}.href",
            required: "yes",
            type: "string",
            description: "The value of the link href attribute for an action item."
          },
          {
            name: "rows.{}.action.items.{}.hiddenText",
            required: "yes",
            type: "string",
            description: "Actions rely on context from the surrounding content so may require additional accessible text, text supplied to this option is appended to the end, use html for more complicated scenarios."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "HTML attributes (for example class) to add to the container."
          }
        ]
      }
    }
  }
</script>
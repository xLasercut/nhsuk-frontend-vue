<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-error-summary title="This is error summary">
        <p>Some description</p>
        <nhs-list type="error">
          <li><nhs-link href="/information/errorsummary">error one</nhs-link></li>
          <li><nhs-link href="/information/errorsummary">error two</nhs-link></li>
          <li><nhs-link href="/information/errorsummary">error three</nhs-link></li>
        </nhs-list>
      </nhs-error-summary>
    </code-block>

    <argument-table heading="Error Summary Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-error-summary label="This is error summary">
    <p>Some description</p>
    <nhs-list type="error">
      <li><nhs-link href="/information/errorsummary">error one</nhs-link></li>
      <li><nhs-link href="/information/errorsummary">error two</nhs-link></li>
      <li><nhs-link href="/information/errorsummary">error three</nhs-link></li>
    </nhs-list>
  </nhs-error-summary>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "title",
            type: "string",
            required: "yes",
            description: "Text to use for the heading of the error summary block."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the error-summary container."
          }
        ]
      }
    }
  }
</script>
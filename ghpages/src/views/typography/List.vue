<template>
  <nhs-main>
    <code-block :code="source">
      Bullet List
      <nhs-list>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </nhs-list>

      Numbered List
      <nhs-list type="number">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </nhs-list>

      Error List
      <nhs-list type="error">
        <li><nhs-link href="/typograpy/list">one</nhs-link></li>
        <li><nhs-link href="/typograpy/list">two</nhs-link></li>
        <li><nhs-link href="/typograpy/list">three</nhs-link></li>
      </nhs-list>
    </code-block>

    <argument-table heading="List Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `Bullet List
  <nhs-list>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Numbered List
  <nhs-list type="number">
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Error List
  <nhs-list type="error">
    <li><nhs-link href="/typograpy/list">one</nhs-link></li>
    <li><nhs-link href="/typograpy/list">two</nhs-link></li>
    <li><nhs-link href="/typograpy/list">three</nhs-link></li>
  </nhs-list>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "type",
            type: "string",
            required: "no",
            description: "Type of list - bullet, number or error. Default: bullet"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the list component."
          }
        ]
      }
    }
  }
</script>
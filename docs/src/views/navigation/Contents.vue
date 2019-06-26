<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-contents>
        <nhs-contents-item href="/navigation/contents">chapter one</nhs-contents-item>
        <nhs-contents-item href="/navigation/contents">chapter two</nhs-contents-item>
        <nhs-contents-item>chapter three</nhs-contents-item>
        <nhs-contents-item href="/navigation/contents">chapter four</nhs-contents-item>
      </nhs-contents>
    </code-block>

    <argument-table heading="contents" :rows="rows"></argument-table>
    <argument-table heading="contents-item" :rows="rowsci"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-contents>
    <nhs-contents-item href="/navigation/contents">chapter one</nhs-contents-item>
    <nhs-contents-item href="/navigation/contents">chapter two</nhs-contents-item>
    <nhs-contents-item>chapter three</nhs-contents-item>
    <nhs-contents-item href="/navigation/contents">chapter four</nhs-contents-item>
  </nhs-contents>`

  export default {
    data() {
      return {
        source: source,
        contents: [
          {
            href: "/navigation/contents",
            text: "chapter one"
          },
          {
            href: "/navigation/contents",
            text: "chapter two"
          },
          {
            href: "/navigation/contents",
            text: "chapter three",
            current: true
          },
          {
            href: "/navigation/contents",
            text: "chapter four"
          }
        ],
        rows: [
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to contents container"
          },
          {
            name: "aria-label",
            type: "string",
            required: "no",
            description: "Label used for text-to-speech. Default: Pages in this guide"
          },
          {
            name: "hidden-text",
            type: "string",
            required: "no",
            description: "Hidden text used for text-to-speech. Default: Contents"
          }
        ],
        rowsci: [
          {
            name: "href",
            type: "string",
            required: "no",
            description: "Href value of an item in the contents list. If not provided, item will show as current page"
          },
          {
            name: "aria-current",
            type: "string",
            required: "no",
            description: "Hidden label on the active page in the list, used for text-to-speech. Default: page"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to items in the list."
          }
        ]
      }
    }
  }
</script>
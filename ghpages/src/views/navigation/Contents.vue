<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-contents :items="contents">
      </nhs-contents>
    </code-block>

    <argument-table heading="Contents List Arguments" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-contents :items="contents">
  </nhs-contents>
  
  export default {
    data() {
      return {
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
        ]
      }
    }
  }`

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
            name: "items",
            type: "array",
            required: "yes",
            description: "Array of items in the contents list."
          },
          {
            name: "items.{}.href",
            type: "string",
            required: "yes",
            description: "Href value of an item in the contents list."
          },
          {
            name: "items.{}.text",
            type: "string",
            required: "yes",
            description: "Text value of an item in the contents list."
          },
          {
            name: "items.{}.current",
            type: "boolean",
            required: "no",
            description: "Current active page in the contents list."
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to items in the list."
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
          },
          {
            name: "aria-current",
            type: "string",
            required: "no",
            description: "Hiddent label on the active page in the list, used for text-to-speech. Default: page"
          }
        ]
      }
    }
  }
</script>
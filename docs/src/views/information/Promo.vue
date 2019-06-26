<template>
  <nhs-main>
    <code-block :code="source">
      <nhs-promo heading="Give Blood"
        src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
        href="/information/promo"
      >
        Please register today. Donating blood is easy, and saves lives.
      </nhs-promo>
    </code-block>

    <argument-table heading="promo" :rows="rows"></argument-table>
  </nhs-main>
</template>

<script>
  var source = `<nhs-promo heading="Give Blood"
    src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png"
    href="/information/promo"
  >
    Please register today. Donating blood is easy, and saves lives.
  </nhs-promo>`

  export default {
    data() {
      return {
        source: source,
        rows: [
          {
            name: "href",
            type: "string",
            required: "yes",
            description: "The value of the promo href attribute"
          },
          {
            name: "heading",
            type: "string",
            required: "yes",
            description: "The text heading of the promo"
          },
          {
            name: "heading-level",
            type: "number",
            required: "no",
            description: "Optional heading level for the promo heading. Default: 3"
          },
          {
            name: "src",
            type: "string",
            required: "no",
            description: "The URL of the image in the promo"
          },
          {
            name: "alt",
            type: "string",
            required: "no",
            description: "alt text of the image in the promo"
          },
          {
            name: "attributes",
            type: "object",
            required: "no",
            description: "Any extra HTML attributes (for example class) to add to the promo."
          }
        ]
      }
    }
  }
</script>
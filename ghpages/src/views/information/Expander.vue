<template>
  <div>
    <code-block :code="expander">
      <nhs-expander label="Expander">
        This is an expander
      </nhs-expander>
    </code-block>

    <code-block :code="expanderGroup">
      <nhs-expander-group>
        <nhs-expander label="Expander1">
          This is expander1
        </nhs-expander>
        <nhs-expander label="Expander2">
          This is expander2
        </nhs-expander>
      </nhs-expander-group>
    </code-block>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        expander: `<nhs-expander label="Expander">
      This is an expander
    </nhs-expander>`,
        expanderGroup: `<nhs-expander-group>
    <nhs-expander label="Expander1">
      This is expander1
    </nhs-expander>
    <nhs-expander label="Expander2">
      This is expander2
    </nhs-expander>
  </nhs-expander-group>`
      }
    }
  }
</script>
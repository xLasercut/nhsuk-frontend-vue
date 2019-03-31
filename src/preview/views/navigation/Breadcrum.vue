<template>
  <div>
    <code-block :code="breadcrumLink">
      <nhs-breadcrum>
        <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
          breadcrum item
        </nhs-breadcrum-item>
        <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
          breadcrum item 2
        </nhs-breadcrum-item>
        <nhs-breadcrum-back slot="back" to="/navigation/breadcrum">
          breadcrum back
        </nhs-breadcrum-back>
      </nhs-breadcrum>
    </code-block>

    <code-block :code="breadcrumNoLink">
      <nhs-breadcrum>
        <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
          breadcrum item
        </nhs-breadcrum-item>
        <nhs-breadcrum-item slot="item">
          breadcrum item 2
        </nhs-breadcrum-item>
        <nhs-breadcrum-back slot="back" to="/navigation/breadcrum">
          breadcrum back
        </nhs-breadcrum-back>
      </nhs-breadcrum>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumLink: `<nhs-breadcrum>
    <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
      breadcrum item
    </nhs-breadcrum-item>
    <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
      breadcrum item 2
    </nhs-breadcrum-item>
    <nhs-breadcrum-back slot="back" to="/navigation/breadcrum">
      breadcrum back
    </nhs-breadcrum-back>
  </nhs-breadcrum>`,
        breadcrumNoLink: ` <nhs-breadcrum>
    <nhs-breadcrum-item slot="item" to="/navigation/breadcrum">
      breadcrum item
    </nhs-breadcrum-item>
    <nhs-breadcrum-item slot="item">
      breadcrum item 2
    </nhs-breadcrum-item>
    <nhs-breadcrum-back slot="back" to="/navigation/breadcrum">
      breadcrum back
    </nhs-breadcrum-back>
  </nhs-breadcrum>`
      }
    }
  }
</script>
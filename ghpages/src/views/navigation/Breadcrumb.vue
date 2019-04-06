<template>
  <div>
    <code-block :code="breadcrumbLink">
      <nhs-breadcrumb>
        <nhs-breadcrumb-item to="/navigation/breadcrumb">
          breadcrumb item
        </nhs-breadcrumb-item>
        <nhs-breadcrumb-item to="/navigation/breadcrumb">
          breadcrumb item 2
        </nhs-breadcrumb-item>
        <nhs-breadcrumb-item type="back" slot="back" to="/navigation/breadcrumb">
          breadcrumb back
        </nhs-breadcrumb-item>
      </nhs-breadcrumb>
    </code-block>

    <code-block :code="breadcrumbNoLink">
      <nhs-breadcrumb>
        <nhs-breadcrumb-item to="/navigation/breadcrumb">
          breadcrumb item
        </nhs-breadcrumb-item>
        <nhs-breadcrumb-item>
          breadcrumb item 2
        </nhs-breadcrumb-item>
        <nhs-breadcrumb-item type="back" slot="back" to="/navigation/breadcrumb">
          breadcrumb back
        </nhs-breadcrumb-item>
      </nhs-breadcrumb>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumbLink: `<nhs-breadcrumb>
    <nhs-breadcrumb-item slot="item" to="/navigation/breadcrumb">
      breadcrumb item
    </nhs-breadcrumb-item>
    <nhs-breadcrumb-item slot="item" to="/navigation/breadcrumb">
      breadcrumb item 2
    </nhs-breadcrumb-item>
    <nhs-breadcrumb-back slot="back" to="/navigation/breadcrumb">
      breadcrum back
    </nhs-breadcrumb-back>
  </nhs-breadcrum>`,
        breadcrumbNoLink: ` <nhs-breadcrumb>
    <nhs-breadcrumb-item slot="item" to="/navigation/breadcrumb">
      breadcrumb item
    </nhs-breadcrumb-item>
    <nhs-breadcrumb-item slot="item">
      breadcrumb item 2
    </nhs-breadcrumb-item>
    <nhs-breadcrumb-back slot="back" to="/navigation/breadcrumb">
      breadcrumb back
    </nhs-breadcrumb-back>
  </nhs-breadcrumb>`
      }
    }
  }
</script>
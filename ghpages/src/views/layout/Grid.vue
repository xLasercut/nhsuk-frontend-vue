<template>
  <code-block :code="htmlcode">
    <h4 class="nhsuk-u-margin-bottom-0">Full width (100%)</h4>
    <nhs-row>
      <nhs-col>
        <p>.nhsuk-grid-column-full</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Halves (50%)</h4>
    <nhs-row>
      <nhs-col :span="50">
        <p>.nhsuk-grid-column-one-half</p>
      </nhs-col>
      <nhs-col :span="50">
        <p>.nhsuk-grid-column-one-half</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Thirds (33%)</h4>
    <nhs-row>
      <nhs-col :span="66">
        <p>.nhsuk-grid-column-two-thirds</p>
      </nhs-col>
      <nhs-col :span="33">
        <p>.nhsuk-grid-column-one-third</p>
      </nhs-col>
    </nhs-row>
    <nhs-row>
      <nhs-col :span="33">
        <p>.nhsuk-grid-column-one-third</p>
      </nhs-col>
      <nhs-col :span="66">
        <p>.nhsuk-grid-column-two-thirds</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Quarters (25%)</h4>
    <nhs-row>
      <nhs-col :span="75">
        <p>.nhsuk-grid-column-three-quarters</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>.nhsuk-grid-column-one-quarter</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>.nhsuk-grid-column-one-quarter</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>.nhsuk-grid-column-one-quarter</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>.nhsuk-grid-column-one-quarter</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>.nhsuk-grid-column-one-quarter</p>
      </nhs-col>
    </nhs-row>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        htmlcode: `<h4 class="nhsuk-u-margin-bottom-0">Full width (100%)</h4>
  <nhs-row>
    <nhs-col>
      <p>.nhsuk-grid-column-full</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Halves (50%)</h4>
  <nhs-row>
    <nhs-col :span="50">
      <p>.nhsuk-grid-column-one-half</p>
    </nhs-col>
    <nhs-col :span="50">
      <p>.nhsuk-grid-column-one-half</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Thirds (33%)</h4>
  <nhs-row>
    <nhs-col :span="66">
      <p>.nhsuk-grid-column-two-thirds</p>
    </nhs-col>
    <nhs-col :span="33">
      <p>.nhsuk-grid-column-one-third</p>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col :span="33">
      <p>.nhsuk-grid-column-one-third</p>
    </nhs-col>
    <nhs-col :span="66">
      <p>.nhsuk-grid-column-two-thirds</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Quarters (25%)</h4>
  <nhs-row>
    <nhs-col :span="75">
      <p>.nhsuk-grid-column-three-quarters</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>.nhsuk-grid-column-one-quarter</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>.nhsuk-grid-column-one-quarter</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>.nhsuk-grid-column-one-quarter</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>.nhsuk-grid-column-one-quarter</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>.nhsuk-grid-column-one-quarter</p>
    </nhs-col>
  </nhs-row>`
      }
    }
  }
</script>

<style scoped> 
  p {
    background: #005eb8;
    padding: 10px;
    color: #ffffff;
  }
</style>
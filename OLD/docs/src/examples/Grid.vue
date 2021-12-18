<template>
  <nhs-main>
    <h4 class="nhsuk-u-margin-bottom-0">Full width (100%)</h4>
    <nhs-row>
      <nhs-col>
        <p>:span="100"</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Halves (50%)</h4>
    <nhs-row>
      <nhs-col :span="50">
        <p>:span="50"</p>
      </nhs-col>
      <nhs-col :span="50">
        <p>:span="50"</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Thirds (33%)</h4>
    <nhs-row>
      <nhs-col :span="66">
        <p>:span="66"</p>
      </nhs-col>
      <nhs-col :span="33">
        <p>:span="33"</p>
      </nhs-col>
    </nhs-row>
    <nhs-row>
      <nhs-col :span="33">
        <p>:span="33"</p>
      </nhs-col>
      <nhs-col :span="66">
        <p>:span="66"</p>
      </nhs-col>
    </nhs-row>
    <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Quarters (25%)</h4>
    <nhs-row>
      <nhs-col :span="75">
        <p>:span="75"</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>:span="25"</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>:span="25"</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>:span="25"</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>:span="25"</p>
      </nhs-col>
      <nhs-col :span="25">
        <p>:span="25"</p>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>

<style scoped>
  p {
    background: #005eb8;
    padding: 10px;
    color: #ffffff;
  }
</style>
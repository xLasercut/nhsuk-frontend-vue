<template>
  <nhs-main>
    <code-block :code="radionormalCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-radio-group>
            <nhs-radio v-model="radionormal">option 1</nhs-radio>
            <nhs-radio v-model="radionormal">option 2</nhs-radio>
          </nhs-radio-group>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{radionormal}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="radiooverrideCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-radio-group>
            <nhs-radio v-model="radiooverride" label="OPT1">option 1</nhs-radio>
            <nhs-radio v-model="radiooverride" label="OPT2">option 2</nhs-radio>
          </nhs-radio-group>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{radiooverride}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="radioinlineCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-radio-group type="inline">
            <nhs-radio v-model="radioinline">inline 1</nhs-radio>
            <nhs-radio v-model="radioinline">inline 2</nhs-radio>
          </nhs-radio-group>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Selected: {{radioinline}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        radionormal: "option 1",
        radiooverride: "OPT1",
        radioinline: "inline 1",
        radionormalCode: `<nhs-radio-group>
    <nhs-radio v-model="radionormal">option 1</nhs-radio>
    <nhs-radio v-model="radionormal">option 2</nhs-radio>
  </nhs-radio-group>`,
        radiooverrideCode: `<nhs-radio-group>
    <nhs-radio v-model="radiooverride" label="OPT1">option 1</nhs-radio>
    <nhs-radio v-model="radiooverride" label="OPT2">option 2</nhs-radio>
  </nhs-radio-group>`,
        radioinlineCode: `<nhs-radio-group type="inline">
    <nhs-radio v-model="radioinline">inline 1</nhs-radio>
    <nhs-radio v-model="radioinline">inline 2</nhs-radio>
  </nhs-radio-group>`
      }
    }
  }
</script>

<style scoped>
  .status {
    line-height: 40px;
  }
</style>
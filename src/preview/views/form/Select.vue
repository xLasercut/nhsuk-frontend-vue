<template>
  <div>
    <code-block :code="selectnormalCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-select v-model="selectnormal">
            <option>Select 1</option>
            <option>Select 2</option>
            <option disabled>Select 3</option>
            <option>Select 4</option>
          </nhs-select>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">{{selectnormal}}</p>
        </nhs-col>
      </nhs-row>

      <nhs-row>
        <nhs-col :span="50">
          <nhs-select label="select with label">
            <option>Select 1</option>
            <option>Select 2</option>
            <option disabled>Select 3</option>
            <option>Select 4</option>
          </nhs-select>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="selectdisabledCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-select v-model="selectdisabled" :disabled="true">
            <option>Select 1</option>
            <option>Select 2</option>
            <option disabled>Select 3</option>
            <option>Select 4</option>
          </nhs-select>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">{{selectdisabled}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>

    <code-block :code="selectoverrideCode">
      <nhs-row>
        <nhs-col :span="50">
          <nhs-select v-model="selectoverride">
            <option value="OPT1">Select 1</option>
            <option value="OPT2">Select 2</option>
            <option value="OPT3">Select 3</option>
            <option value="OPT4">Select 4</option>
          </nhs-select>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">{{selectoverride}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectnormal: "",
        selectdisabled: "Select 1",
        selectoverride: "",
        selectnormalCode: `<nhs-select v-model="selectnormal">
    <option>Select 1</option>
    <option>Select 2</option>
    <option disabled>Select 3</option>
    <option>Select 4</option>
  </nhs-select>
  
  <nhs-select label="select with label">
    <option>Select 1</option>
    <option>Select 2</option>
    <option disabled>Select 3</option>
    <option>Select 4</option>
  </nhs-select>`,
        selectdisabledCode: `<nhs-select v-model="selectdisabled" :disabled="true">
    <option>Select 1</option>
    <option>Select 2</option>
    <option disabled>Select 3</option>
    <option>Select 4</option>
  </nhs-select>`,
        selectoverrideCode: `<nhs-select v-model="selectoverride">
    <option value="OPT1">Select 1</option>
    <option value="OPT2">Select 2</option>
    <option value="OPT3">Select 3</option>
    <option value="OPT4">Select 4</option>
  </nhs-select>`
      }
    }
  }
</script>
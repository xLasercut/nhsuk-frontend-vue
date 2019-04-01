<template>
  <div>
    <code-block>
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
    </code-block>

    <code-block>
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

    <code-block>
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
        selectoverride: ""
      }
    }
  }
</script>
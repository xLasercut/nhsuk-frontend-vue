<template>
  <div>
    <code-block :code="singleCode">
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox name="single-checkbox" v-model="checked">
              Single Checkbox
            </nhs-checkbox>
            <nhs-checkbox name="disabled-checkbox" :disabled="true">
              Single Checkbox Disabled
            </nhs-checkbox>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Status: {{checked}}</p>
        </nhs-col>
      </nhs-row>
      
    </code-block>

    <code-block :code="customLabelCode">
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox name="single-checkbox" override-value="London" v-model="checkedval">
              London
            </nhs-checkbox>

            <nhs-checkbox name="single-checkbox" override-value="Paris" v-model="checkedval">
              Paris
            </nhs-checkbox>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Status: {{checkedval}}</p>
        </nhs-col>
      </nhs-row>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        checkedval: [],
        singleCode: `<nhs-checkbox v-model="checked">
    Single Checkbox
  </nhs-checkbox>
  
  <nhs-checkbox :disabled="true">
    Single Checkbox Disabled
  </nhs-checkbox>`,
        customLabelCode: `<nhs-checkbox label="London" v-model="checkedval">
    London
  </nhs-checkbox>

  <nhs-checkbox label="Paris" v-model="checkedval">
    Paris
  </nhs-checkbox>`
      }
    }
  }
</script>

<style scoped>
  .status {
    line-height: 40px;
  }
</style>

<template>
  <div>
    <code-block>
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox v-model="checked">
              Single Checkbox
            </nhs-checkbox>
            <nhs-checkbox :disabled="true">
              Single Checkbox Disabled
            </nhs-checkbox>
        </nhs-col>
        <nhs-col :span="50">
          <p class="status">Status: {{checked}}</p>
        </nhs-col>
      </nhs-row>
      
    </code-block>

    <code-block>
      <nhs-row>
        <nhs-col :span="50">
            <nhs-checkbox label="London" v-model="checkedval">
              London
            </nhs-checkbox>

            <nhs-checkbox label="Paris" v-model="checkedval">
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
        checkedval: []
      }
    }
  }
</script>

<style scoped>
  .status {
    line-height: 40px;
  }
</style>

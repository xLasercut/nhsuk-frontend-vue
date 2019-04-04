<template>
  <div class="nhsuk-form-group">
    <div class="nhsuk-date-input__item">
      <nhs-input label="Day" width="2" type="number" v-model="date['day']"></nhs-input>
    </div>
    <div class="nhsuk-date-input__item">
      <nhs-input label="Month" width="2" type="number" v-model="date['month']"></nhs-input>
    </div>
    <div class="nhsuk-date-input__item">
      <nhs-input label="Year" width="4" type="number" v-model="date['year']"></nhs-input>
    </div>
  </div>
</template>

<script>
  import NhsInput from './NhsInput.vue'

  export default { 
    name: "NhsDateInput",
    components: {
      NhsInput
    },
    props: {
      value: {
        type: Object
      }
    },
    data() {
      return {
        date: this.value
      }
    },
    watch: {
      date(val) {
        this.$emit("input", val)
      },
      value(val) {
        this.date = val
      }
    }
  }
</script>
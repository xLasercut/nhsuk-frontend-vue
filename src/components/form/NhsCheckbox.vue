<template>
  <div class="nhsuk-checkboxes__item">
    <input class="nhsuk-checkboxes__input" :id="id" :name="name" type="checkbox" :value="label" v-model="model">
    <label class="nhsuk-label nhsuk-checkboxes__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    props: ["value", "label", "name", "id"],
    data() {
      return {
        model: this.value
      }
    },
    watch: {
      value(val) {
        this.checked = val
      },
      model(val) {
        this.$emit("input", val)
      }
    }
  }
</script>

<template>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" :for="itemId" v-if="label">{{label}}</label>
    <slot></slot>
    <input :class="inputClass" :id="itemId" :name="name" type="text" :disabled="disabled" v-model="model">
  </div>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'

  export default {
    name: "NhsInput",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      error: {
        type: Boolean,
        default: false
      }
    },
    mixins: [AddModel, RandomID],
    computed: {
      inputClass() {
        var width = ""
        var error = ""
        switch (this.width) {
          case "2":
            width = " nhsuk-input--width-2"
            break
          case "3":
            width = " nhsuk-input--width-3"
            break
          case "4":
            width = " nhsuk-input--width-4"
            break
          case "5":
            width = " nhsuk-input--width-5"
            break
          case "10":
            width = " nhsuk-input--width-10"
            break
          case "20":
            width = " nhsuk-input--width-20"
            break
        }

        if (this.error) {
          error = " nhsuk-input--error"
        }

        return `nhsuk-input${width}${error}`
      }
    }
  }
</script>

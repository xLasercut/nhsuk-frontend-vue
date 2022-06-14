<template>
  <nhs-error-summary title="There is a problem">
    <p>
      Optional description of the errors and how to correct them.
      <br />
      Note that the error summary should receive focus on page load using the JavaScript that comes
      with this component.
    </p>
    <nhs-list type="error">
      <li><a href="#input-with-error-message">Link to input error with explanation</a></li>
    </nhs-list>
  </nhs-error-summary>
  <br /><br /><br /><br /><br /><br />↕ Intentionally long page to demonstrate error summary link
  scrolling behaviour ↕<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <nhs-input
    label="National Insurance number"
    hint="Clicking an error summary link should scroll the top of this input's label into view."
    :rules="rules"
    v-model="model"
  ></nhs-input>
  <br /><br /><br /><br /><br /><br />↕ Intentionally long page to demonstrate error summary link
  scrolling behaviour ↕<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: ''
    })

    let _id: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _id = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return { ...toRefs(state) }
  }
})
</script>

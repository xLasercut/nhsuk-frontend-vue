<template>
  <nhs-input
    id="input-with-error-message"
    label="National Insurance number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    :rules="rules"
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: ''
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
</script>

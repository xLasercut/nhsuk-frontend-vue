<template>
  <nhs-select
    id="select-2"
    label="Label text goes here"
    hint="Hint text goes here"
    v-model="model"
    :rules="rules"
  >
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [(v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here']
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function): void {
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

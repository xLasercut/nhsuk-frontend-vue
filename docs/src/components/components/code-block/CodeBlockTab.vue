<template>
  <div>
    <input type="checkbox" v-model="checked" :id="id">
    <label class="tab" :for="id"><slot></slot></label>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, watch} from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      required: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const state = reactive({
      checked: props.modelValue
    })

    watch(() => props.modelValue, (val) => {
      state.checked = val
    })

    watch(() => state.checked, (val) => {
      context.emit('update:model-value', val)
    })

    return {...toRefs(state)}
  }
})
</script>

<style scoped>
  input {
    display: none;
  }

  label {
    padding: 5px 15px 2px 15px;
    display: block;
    margin: 3px;
    cursor: pointer;
    font-size: 12pt;
    color: #005eb8;
    border-bottom: 4px solid #f0f4f5;
  }

  label:hover {
    outline: 3px solid #ffb81c;
  }


  input:checked+label {
    border-bottom: 4px solid #005eb8;
  }
</style>

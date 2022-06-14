<template>
  <nhs-table :headers="headers" :data="data">
    <template #item.vue-properties="{ item }">
      {{ slotPropsDisplayBlank(item) }}
      <highlightjs
        language="typescript"
        :code="slotPropsDisplay(item['vue-properties'])"
        v-if="item['vue-properties']"
      >
      </highlightjs>
    </template>
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { SlotsDoc, SlotsDocProperties } from '../../../assets/interfaces'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup() {
    const state = reactive({
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Props',
          value: 'vue-properties'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ]
    })

    function slotPropsDisplayBlank(item: SlotsDoc): string {
      if (item['vue-properties']) {
        return 'object'
      }
      return '-'
    }

    function slotPropsDisplay(slotProps: Array<SlotsDocProperties>): string {
      let properties = `{\n`
      for (const slotProp of slotProps) {
        properties = properties + `  ${slotProp.name}: ${slotProp.type || 'any'}\n`
      }
      properties = properties + `}\n`

      return properties
    }

    return { ...toRefs(state), slotPropsDisplay, slotPropsDisplayBlank }
  }
})
</script>

<template>
  <nhs-table :headers="headers" :data="data">
    <template #item.type="{item}">
      {{itemType(item.value.type)}}
      <highlightjs language="typescript" :code="itemTypeObject(item.value.type)" v-if="showCodeBlock(item.value.type)">
      </highlightjs>
    </template>
    <template #item.required="{item}">{{isRequired(item.required)}}</template>
    <template #item.default="{item}">{{item.default || '-'}}</template>
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

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
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Required',
          value: 'required'
        },
        {
          text: 'Default',
          value: 'default'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ]
    })

    function itemTypeObject(typeString: string): string {
      if (typeString.startsWith('object') || typeString.startsWith('array')) {
        let output = `{\n`
        const parsed = JSON.parse(typeString.split('|')[1])
        for (const key in parsed) {
          output = output + `  ${key}: ${parsed[key]}\n`
        }
        output = output + '}'
        return output
      }
      return typeString
    }

    function itemType(typeString: string): string {
      if (typeString.startsWith('object') || typeString.startsWith('array')) {
        return typeString.split('|')[0]
      }
      return typeString
    }

    function showCodeBlock(typeString: string): boolean {
      return typeString.startsWith('object') || typeString.startsWith('array')
    }

    function isRequired(required: boolean): string {
      if (required) {
        return 'yes'
      }
      return 'no'
    }

    return {...toRefs(state), isRequired, itemTypeObject, itemType, showCodeBlock}
  }
})
</script>

<style scoped>
code {
  font-size: 11pt;
  border-radius: 5px;
}
</style>

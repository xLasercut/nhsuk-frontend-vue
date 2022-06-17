<template>
  <nhs-table :headers="headers" :data="data">
    <template #item.value="{ item }">{{ item.value || '-' }}</template>
    <template #item.arguments="{ item }">
      {{ eventsPropsDisplayBlank(item) }}
      <highlightjs
        language="typescript"
        :code="eventsPropsDisplay(item.arguments)"
        v-if="item.arguments"
      >
      </highlightjs>
    </template>
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { EventsDoc, SlotsDocProperties } from '../../../assets/interfaces';

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
          text: 'Event Value',
          value: 'arguments'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ]
    });

    function eventsPropsDisplayBlank(item: EventsDoc): string {
      if (item.arguments) {
        return 'object';
      }
      return '-';
    }

    function eventsPropsDisplay(slotProps: Array<SlotsDocProperties>): string {
      let properties = `{\n`;
      for (const slotProp of slotProps) {
        properties = properties + `  ${slotProp.name}: ${slotProp.type || 'any'}\n`;
      }
      properties = properties + `}\n`;

      return properties;
    }

    return { ...toRefs(state), eventsPropsDisplay, eventsPropsDisplayBlank };
  }
});
</script>

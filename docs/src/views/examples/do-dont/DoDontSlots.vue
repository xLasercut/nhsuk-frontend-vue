<template>
  <nhs-dodont title="Do" type="tick" :items="doItems">
    <template #item="{ item }">
      <a>{{ item }}</a>
    </template>
  </nhs-dodont>

  <nhs-dodont title="Don't" type="cross" :items="dontItems">
    <template #item="{ item }">
      <a>{{ item }}</a>
    </template>
  </nhs-dodont>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      doItems: [
        'cover blisters that are likely to burst with a soft plaster or dressing',
        'wash your hands before touching a burst blister',
        'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
      ],
      dontItems: [
        'do not burst a blister yourself',
        'do not peel the skin off a burst blister',
        'do not pick at the edges of the remaining skin',
        'do not wear the shoes or use the equipment that caused your blister until it heals'
      ]
    });

    return { ...toRefs(state) };
  }
});
</script>

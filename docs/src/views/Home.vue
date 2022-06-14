<template>
  <nhs-hero :heading="title" :text="description"></nhs-hero>
  <nhs-main>
    <nhs-row>
      <nhs-col>
        <nhs-card-group>
          <nhs-card
            heading="Components"
            href="/components"
            description="Component documentation and playground"
            clickable
          ></nhs-card>
          <nhs-card
            heading="Examples"
            href="/examples"
            description="Example pages"
            clickable
          ></nhs-card>
        </nhs-card-group>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { setPageColor } from '../assets/helpers'

export default defineComponent({
  setup() {
    const state = reactive({
      title: 'NHS.UK frontend Vue',
      description: 'Port of nhsuk-frontend library to vue.js'
    })

    onMounted(() => {
      setPageColor()
    })

    return { ...toRefs(state) }
  }
})
</script>

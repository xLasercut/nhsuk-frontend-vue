<template>
  <nhs-breadcrumb>
    <nhs-breadcrumb-item href="/">Home</nhs-breadcrumb-item>
    <nhs-breadcrumb-item>Examples</nhs-breadcrumb-item>
    <template #backlink>
      <nhs-breadcrumb-backlink href="/">Home</nhs-breadcrumb-backlink>
    </template>
  </nhs-breadcrumb>
  <nhs-main>
    <ul>
      <li v-for="(item, index) in examples" :key="`example-${index}`">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </nhs-main>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {filteredExamplesRoutes} from '../../router/examples'

export default defineComponent({
  setup() {
    const examples = computed(() => {
      return filteredExamplesRoutes.map((item) => {
        const {name, ...rest} = item
        return {
          ...rest,
          name: name.replace('examples-', '')
        }
      })
    })

    return {examples}
  }
})
</script>

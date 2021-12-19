<template>
  <nhs-footer>
    <nhs-footer-item v-for="(item, index) in footerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-footer-item>
  </nhs-footer>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      footerLinks: [
        {
          text: "Github",
          href: "https://github.com/xLasercut/nhsuk-frontend-vue"
        }
      ]
    })

    return {...toRefs(state)}
  }
})
</script>

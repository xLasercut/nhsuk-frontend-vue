<template>
  <nhs-footer v-if="showFooter">
    <nhs-footer-item v-for="(item, index) in footerLinks" :key="index" :href="item.href">
      {{ item.text }}
    </nhs-footer-item>
  </nhs-footer>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import router from '../../router';

export default defineComponent({
  setup() {
    const state = reactive({
      footerLinks: [
        {
          text: 'Github',
          href: 'https://github.com/xLasercut/nhsuk-frontend-vue'
        }
      ]
    });

    const showFooter = computed((): boolean => {
      return !router.currentRoute.value.fullPath.includes('/examples/');
    });

    return { ...toRefs(state), showFooter };
  }
});
</script>

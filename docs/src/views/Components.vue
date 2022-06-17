<template>
  <nhs-breadcrumb>
    <nhs-breadcrumb-item
      v-for="(item, index) in breadcrumbItems()"
      :href="item.href"
      :key="`components-breadcrumb-${index}`"
    >
      {{ item.text }}
    </nhs-breadcrumb-item>
    <template #backlink>
      <nhs-breadcrumb-backlink :href="breadcrumbBackItem().href">
        {{ breadcrumbBackItem().text }}
      </nhs-breadcrumb-backlink>
    </template>
  </nhs-breadcrumb>
  <nhs-main>
    <router-view></router-view>
  </nhs-main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import router from '../router';
import { setPageColor } from '../assets/helpers';

export default defineComponent({
  setup(_props) {
    function breadcrumbBackItem() {
      const routeSplit = router.currentRoute.value.fullPath.split('/');
      if (routeSplit.length === 2) {
        return {
          text: 'Home',
          href: '/'
        };
      }

      return {
        text: 'Components',
        href: '/components'
      };
    }

    function breadcrumbItems() {
      const items: Array<{ href?: string; text: string | symbol }> = [
        {
          href: '/',
          text: 'Home'
        }
      ];

      const routeSplit = router.currentRoute.value.fullPath.split('/');

      if (routeSplit.length === 2) {
        items.push({
          text: 'Components'
        });
      }

      if (routeSplit.length === 3) {
        items.push({
          text: 'Components',
          href: '/components'
        });
        items.push({
          text: router.currentRoute.value.name || ''
        });
      }

      return items;
    }

    onMounted(() => {
      setPageColor();
    });

    return { breadcrumbItems, breadcrumbBackItem };
  }
});
</script>

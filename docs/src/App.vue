<template>
  <site-header></site-header>
  <router-view></router-view>
  <site-footer></site-footer>
</template>

<script lang="ts">
import SiteFooter from './components/app/SiteFooter.vue';
import SiteHeader from './components/app/SiteHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { SiteFooter, SiteHeader }
});
</script>

<style>
td .hljs {
  font-size: 11pt;
  border-radius: 5px;
}
</style>

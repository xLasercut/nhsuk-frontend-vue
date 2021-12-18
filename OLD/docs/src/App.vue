<template>
  <div>
    <site-header v-if="!$route.path.includes('example')" />
    <router-view></router-view>
    <site-footer v-if="!$route.path.includes('example')"/>
  </div>
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue'
  import SiteFooter from './components/SiteFooter.vue'

  export default {
    name:  'App',
    components: { SiteHeader, SiteFooter }
  }
</script>

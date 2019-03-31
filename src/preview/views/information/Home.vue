<template>
  <div>
    <nhs-action-link v-for="(route, index) in infoRoutes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import InfoRoutes from '@/preview/route-information.js'

  export default {
    computed: {
      infoRoutes() {
        var routes = []
        for (var route of InfoRoutes) {
          if (route.path !== "/information/*" && route.path !== "/information") {
            routes.push(route)
          }
        }
        return routes
      }
    }
  }
</script>
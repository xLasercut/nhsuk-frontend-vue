<template>
  <div>
    <nhs-action-link v-for="(route, index) in infoRoutes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import InfoRoutes from '@/preview/route-layout.js'

  export default {
    computed: {
      infoRoutes() {
        var routes = []
        for (var route of InfoRoutes) {
          if (route.path !== "/layout/*" && route.path !== "/layout") {
            routes.push(route)
          }
        }
        return routes
      }
    }
  }
</script>
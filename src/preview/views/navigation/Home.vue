<template>
  <div>
    <nhs-action-link v-for="(route, index) in routes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import NavRoutes from '@/preview/router/route-navigation.js'

  export default {
    computed: {
      routes() {
        var routes = []
        for (var route of NavRoutes) {
          if (route.path !== "/navigation/*" && route.path !== "/navigation") {
            routes.push(route)
          }
        }
        return routes
      }
    }
  }
</script>
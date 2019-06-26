<template>
  <nhs-main>
    <nhs-action-link v-for="(route, index) in routes" :href="route.path" :key="index">{{route.name}}</nhs-action-link>
  </nhs-main>
</template>

<script>
  import NavRoutes from '../../router/route-navigation.js'

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
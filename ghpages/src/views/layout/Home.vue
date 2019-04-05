<template>
  <div>
    <nhs-action-link v-for="(route, index) in routes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import LayoutRoutes from '../../router/route-layout.js'

  export default {
    computed: {
      routes() {
        var routes = []
        for (var route of LayoutRoutes) {
          if (route.path !== "/layout/*" && route.path !== "/layout") {
            routes.push(route)
          }
        }
        return routes
      }
    }
  }
</script>
<template>
  <div>
    <nhs-action-link v-for="(route, index) in routes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import InfoRoutes from '../../router/route-information.js'

  export default {
    computed: {
      routes() {
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
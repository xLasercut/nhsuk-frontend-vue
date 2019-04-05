<template>
  <div>
    <nhs-action-link v-for="(route, index) in routes" :to="route.path" :key="index">{{route.name}}</nhs-action-link>
  </div>
</template>

<script>
  import InfoRoutes from '../../router/route-form.js'

  export default {
    computed: {
      routes() {
        var routes = []
        for (var route of InfoRoutes) {
          if (route.path !== "/form/*" && route.path !== "/form") {
            routes.push(route)
          }
        }
        return routes
      }
    }
  }
</script>
<template>
  <nhs-main>
    <nhs-action-link v-for="(route, index) in routes" :href="route.path" :key="index">{{route.name}}</nhs-action-link>
  </nhs-main>
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
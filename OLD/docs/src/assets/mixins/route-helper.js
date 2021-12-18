const blacklist = ["Typography", "Navigation", "Form", "Layout", "Information"]

export default {
  methods: {
    getAllRoutes() {
      var routesToDisplay = []
      var mainRoutes = this.$router.options.routes
      for (var mainRoute of mainRoutes) {
        if (mainRoute.path === '/section') {
          var childRoutes = mainRoute.children
        }
      }

      for (var childRoute of childRoutes) {
        if (childRoute.name && !blacklist.includes(childRoute.name)) {
          routesToDisplay.push(childRoute)
        }
      }

      return routesToDisplay.sort(function (a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      })
    }
  }
}
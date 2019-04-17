<template>
  <nhs-main>
    <nhs-row>
      <nhs-col>
        <nhs-nav-az>
          <nhs-nav-az-item v-for="(item, index) in navItems" :key="index" :disabled="item.disabled" @click="scrollTo(item.text)">
            {{item.text}}
          </nhs-nav-az-item>
        </nhs-nav-az>
      </nhs-col>
    </nhs-row>
    <nhs-row>
      <nhs-col>
        <nhs-list-panel
          v-for="(items, key) in panels" :key="key"
          :label="key" :id="`panel-${key}`"
          :back-to-top="true" @back-to-top="backToTop()"
        >
          <nhs-list-panel-item v-for="(item, index) in items" :key="index" :href="item.href">
            {{item.text}}
          </nhs-list-panel-item>
        </nhs-list-panel>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>

<script>
  const blacklist = ["Typography", "Navigation", "Form", "Layout", "Information"]
  const alphabet = [
    "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X",
    "Y", "Z"
  ]

  export default {
    data() {
      return {
        navItems: [],
        routes: this.getAllRoutes(),
        panels: {},
      }
    },
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
      },
      getListPanelItems() {
        for (var letter of alphabet) {
          if (!(letter in this.panels)) {
            this.panels[letter] = []
          }

          for (var route of this.routes) {
            var regex = new RegExp(`^${letter}`)
            if (regex.test(route.name)) {
              this.panels[letter].push({
                text: route.name,
                href: route.path
              })
            }
          }

          if (this.panels[letter].length > 0) {
            this.navItems.push({text: letter})
          }
          else{ 
            this.navItems.push({text: letter, disabled: true})
            delete this.panels[letter]
          }
        }
      },
      scrollTo(event) {
        document.getElementById('panel-' + event).scrollIntoView()
      },
      backToTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
    mounted() {
      this.getListPanelItems()
    }
  }
</script>
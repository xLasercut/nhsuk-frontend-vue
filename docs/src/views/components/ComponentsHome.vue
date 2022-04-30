<template>
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
        v-for="panel in panels" :key="panel.name"
        :label="panel.name" :id="`panel-${panel.name}`"
      >
        <nhs-list-panel-item @click="toTop()" v-for="(item, index) in panel.items" :key="index" :href="item.path">
          {{item.name}}
        </nhs-list-panel-item>
      </nhs-list-panel>
    </nhs-col>
  </nhs-row>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {filteredComponentRoutes} from '../../router/components'

const AZ_ALPHABETS = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]

export default defineComponent({
  setup() {
    const navItems = computed(() => {
      const routeAlphabets = new Set(filteredComponentRoutes.map((route) => {
        return route.name[0].toUpperCase()
      }))

      return AZ_ALPHABETS.map((alphabet) => {
        let disabled = true
        if (routeAlphabets.has(alphabet)) {
          disabled = false
        }
        return {
          text: alphabet,
          disabled: disabled
        }
      })
    })

    const panels = computed(() => {
      return AZ_ALPHABETS
        .map((alphabet) => {
          const items = filteredComponentRoutes.filter((route) => {
            return route.name[0].toUpperCase() === alphabet
          })

          if (items.length === 0) {
            return null
          }

          return {
            name: alphabet,
            items: items
          }
        })
        .filter((panel) => {
          return panel
        })
    })

    function scrollTo(event: string): void {
      //@ts-ignore
      document.getElementById('panel-' + event).scrollIntoView()
    }

    function toTop() {
      window.scrollTo(0, 0)
    }

    return {navItems, panels, scrollTo, toTop}
  }
})
</script>

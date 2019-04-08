<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer" v-bind="attributes">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden" v-if="links">{{hiddenText}}</h2>
        <ul class="nhsuk-footer__list" v-if="links">
          <li class="nhsuk-footer__list-item" v-for="(item, index) in links" :key="index">
            <link-switcher class="nhsuk-footer__list-item-link" :href="item.href">
              <slot name="link" :props="item">{{item.text}}</slot>
            </link-switcher>
          </li>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; {{copyright}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsFooter",
    components: {
      LinkSwitcher
    },
    props: {
      hiddenText: {
        type: String,
        default: "Support links"
      },
      copyright: {
        type: String,
        default: "Crown copyright"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      links: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
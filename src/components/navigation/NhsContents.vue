<template>
  <nav class="nhsuk-contents-list" v-bind="attributes" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
    <ol class="nhsuk-contents-list__list">
      <li class="nhsuk-contents-list__item" v-bind="addAriaCurrent(item.current)" v-for="(item, index) in items" :key="index">
        <span class="nhsuk-contents-list__current" v-if="item.current">
          <slot name="current" :props="item">{{item.text}}</slot>
        </span>
        <link-switcher class="nhsuk-contents-list__link" v-if="!item.current" :href="item.href">
          <slot name="link" :props="item">{{item.text}}</slot>
        </link-switcher>
      </li>
    </ol>
  </nav>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsContents",
    components: {
      LinkSwitcher
    },
    props: {
      ariaLabel: {
        type: String,
        default: "Pages in this guide"
      },
      hiddenText: {
        type: String,
        default: "Contents"
      },
      ariaCurrent: {
        type: String,
        default: "page"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      addAriaCurrent(current) {
        if (current) {
          return {
            "aria-current": this.ariaCurrent
          }
        }
        return {}
      }
    }
  }
</script>

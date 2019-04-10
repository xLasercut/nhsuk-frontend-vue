<template>
  <nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" :aria-label="ariaLabel" v-bind="attributes">
    <ol class="nhsuk-nav-a-z__list" role="list">
      <li class="nhsuk-nav-a-z__item" v-for="(item, index) in items" :key="index">
        <span class="nhsuk-nav-a-z__link--disabled" v-if="item.disabled">{{item.text}}</span>
        <link-switcher class="nhsuk-nav-a-z__link" :href="`#${item.text}`" v-if="!item.disabled" @click="$emit('click',item.text)">{{item.text}}</link-switcher>
      </li>
    </ol>
  </nav>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsNavAz",
    components: {
      LinkSwitcher
    },
    props: {
      ariaLabel: {
        type: String,
        default: "A to Z Navigation"
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
    }
  }
</script>
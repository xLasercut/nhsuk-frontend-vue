<template>
  <nav class="nhsuk-breadcrumb" v-bind="attributes" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <li class="nhsuk-breadcrumb__item" v-for="(link, index) in items" :key="index">
          <link-switcher class="nhsuk-breadcrumb__link" :href="link.href" v-bind="link.attributes" v-if="link.href">
            <slot name="link" :props="link">{{link.text}}</slot>
          </link-switcher>
          <span class="nhsuk-breadcrumb__link" v-if="!link.href">
            {{link.text}}
          </span>
        </li>
      </ol>
      <p class="nhsuk-breadcrumb__back">
        <link-switcher class="nhsuk-breadcrumb__backlink" :href="href">
          <slot name="backlink" :props="text">{{text}}</slot>
        </link-switcher>
      </p>
    </div>
  </nav>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsBreadcrumb",
    components: {
      LinkSwitcher
    },
    props: {
      ariaLabel: {
        type: String,
        default: "Breadcrumb"
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
      },
      href: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
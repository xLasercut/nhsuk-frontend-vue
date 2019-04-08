<template>
  <div class="nhsuk-do-dont-list" v-bind="attributes">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-do-dont-list__label">{{title}}</heading-switcher>
    <ul :class="`nhsuk-list nhsuk-list--${type}`">
      <li v-for="(item, index) in items" :key="index">
        <nhs-icon :icon="type"></nhs-icon>
        <slot name="item" :props="item">{{item}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
  import NhsIcon from '../icon/NhsIcon.vue'
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

  const types = ["tick", "cross"]

  export default {
    name: "NhsDodont",
    components: {
      NhsIcon,
      HeadingSwitcher
    },
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "tick",
        validator(val) {
          return types.includes(val)
        }
      },
      items: {
        type: Array,
        required: true
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<template>
  <div class="nhsuk-do-dont-list" v-bind="attributes">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-do-dont-list__label">{{title}}</heading-switcher>
    <ul :class="doDontType">
      <li v-for="(item, index) in items" :key="index">
        <nhs-icon :icon="doDontIcon"></nhs-icon>
        <slot name="item" :props="item">{{item}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
  import NhsIcon from '../icon/NhsIcon.vue'
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

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
        default: "tick"
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
    },
    computed: {
      doDontType() {
        var classMap = {
          cross: "nhsuk-list nhsuk-list--cross",
          tick: "nhsuk-list nhsuk-list--tick"
        }

        if (this.type.toLowerCase() in classMap) {
          return classMap[this.type.toLowerCase()]
        }
        return classMap.tick
      },
      doDontIcon() {
        var icons = ["tick", "cross"]
        
        if (icons.includes(this.type.toLowerCase())) {
          return this.type.toLowerCase()
        }
        return "tick"
      }
    }
  }
</script>
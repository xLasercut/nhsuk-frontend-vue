<template>
  <div :class="`nhsuk-care-card nhsuk-care-card--${type}`" v-bind="attributes">
    <div class="nhsuk-care-card__heading-container">
      <heading-switcher :heading-level="headingLevel" class="nhsuk-care-card__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
          {{heading}}
        </span>
      </heading-switcher>
      <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-care-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

  const types = ["non-urgent", "urgent", "immediate"]

  export default {
    name: "NhsCareCard",
    props: {
      heading: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "non-urgent",
        validator(val) {
          return types.includes(val)
        }
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      hiddenText: {
        type: String,
        default() {
          switch (this.type) {
            case "urgent":
              return "Urgent advice: "
            case "immediate":
              return "Immediate action required: "
            default:
              return "Non-urgent advice: "
          }
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      HeadingSwitcher
    }
  }
</script>


<template>
  <div :class="cardType" v-bind="attributes">
    <div class="nhsuk-care-card__heading-container">
      <heading-switcher :heading-level="headingLevel" class="nhsuk-care-card__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
          {{label}}
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
  import SharedProps from '../mixins/shared-props.js'
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

  export default {
    name: "NhsCareCard",
    props: {
      label: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "non-urgent"
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      hiddenText: {
        type: String,
        default() {
          switch (this.type.toLowerCase()) {
            case "urgent":
              return "Urgent advice: "
            case "immediate":
              return "Immediate action required: "
            default:
              return "Non-urgent advice: "
          }
        }
      }
    },
    components: {
      HeadingSwitcher
    },
    mixins: [SharedProps],
    computed: {
      cardType() {
        var secondaryType = ""
        switch (this.type.toLowerCase()) {
          case "urgent":
            secondaryType = "urgent"
            break
          case "immediate":
            secondaryType = "immediate"
            break
          default:
            secondaryType = "non-urgent"
            break
            
        }
        return `nhsuk-care-card nhsuk-care-card--${secondaryType}${this.extraClasses}`
      }
    }
  }
</script>


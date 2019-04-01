<template>
  <div :class="cardType">
    <div class="nhsuk-care-card__heading-container">
      <h3 class="nhsuk-care-card__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">Urgent advice: </span>
          {{label}}
        </span>
      </h3>
      <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-care-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
      }
    },
    computed: {
      cardType() {
        switch (this.type) {
          case "urgent":
            return "nhsuk-care-card nhsuk-care-card--urgent"
          case "immediate":
            return "nhsuk-care-card nhsuk-care-card--immediate"
          default:
            return "nhsuk-care-card nhsuk-care-card--non-urgent"
        }
      }
    }
  }
</script>


<template>
  <div :class="`nhsuk-global-alert${extraClasses}`" v-bind="attributes" id="nhsuk-global-alert">
    <div class="nhsuk-width-container">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
          <div class="nhsuk-global-alert__content">
            <h2 class="nhsuk-global-alert__heading">
              <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
              {{label}}
            </h2>
            <p class="nhsuk-global-alert__message">
              <slot></slot>
            </p>
            <p class="nhsuk-global-alert__updated">
              {{updated}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsEmergencyAlert",
    props: {
      hiddenText: {
        type: String,
        default: "Alert: "
      },
      label: {
        type: String,
        default: ""
      },
      updated: {
        type: String,
        default: ""
      }
    },
    mixins: [SharedProps]
  }
</script>
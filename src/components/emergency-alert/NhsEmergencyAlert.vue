<template>
  <div class="nhsuk-global-alert" v-bind="attributes" id="nhsuk-global-alert">
    <div class="nhsuk-width-container">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-full">
          <div class="nhsuk-global-alert__content">
            <h2 class="nhsuk-global-alert__heading">
              <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
              {{title}}
            </h2>
            <p class="nhsuk-global-alert__message">
              <slot></slot>
            </p>
            <p class="nhsuk-global-alert__updated">
              {{lastUpdated}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NhsEmergencyAlert',
    props: {
      hiddenText: {
        type: String,
        default: 'Alert: '
      },
      title: {
        type: String,
        required: true
      },
      lastUpdated: {
        type: String,
        default: ''
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
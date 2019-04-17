<template>
  <div class="nhsuk-list-panel" v-bind="attributes">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-list-panel__label" :id="id" v-if="label">
      {{label}}
    </heading-switcher>
    <div :class="panelboxClass" v-if="disabled">
      <p class="nhsuk-list-panel--results-items__no-results">{{message}}</p>
    </div>
    <ul :class="panelboxClass" v-if="!disabled">
      <slot></slot>
    </ul>
    <div class="nhsuk-back-to-top" v-if="backToTop">
      <link-switcher class="nhsuk-back-to-top__link" @click="$emit('back-to-top')" href="">
        <nhs-icon icon="arrow-right"></nhs-icon>
        Back to top
      </link-switcher>
    </div>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'
  import NhsIcon from '../../icon/NhsIcon.vue'

  export default {
    name: "NhsListPanel",
    components: {
      HeadingSwitcher,
      LinkSwitcher,
      NhsIcon
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      label: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: ""
      },
      headingLevel: {
        type: Number,
        default: 2
      },
      disabled: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: ""
      },
      backToTop: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      panelboxClass() {
        if (this.label) {
          return "nhsuk-list-panel__box nhsuk-list-panel__box--with-labe"
        }
        return "nhsuk-list-panel__box"
      }
    }
  }
</script>
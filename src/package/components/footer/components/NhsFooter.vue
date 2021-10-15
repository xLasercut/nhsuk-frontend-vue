<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer" v-bind="$attrs">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden" v-if="$slots.default()">{{hiddenText}}</h2>
        <ul class="nhsuk-footer__list" v-if="$slots.default()">
          <slot></slot>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; {{copyright}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsFooter',
  inheritAttrs: false,
  props: {
    hiddenText: {
      type: String,
      default: 'Support links'
    },
    copyright: {
      type: String,
      default: 'Crown copyright'
    }
  }
})
</script>

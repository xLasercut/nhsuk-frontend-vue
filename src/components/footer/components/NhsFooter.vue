<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer" v-bind="attributes">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden" v-if="$slots.default">{{hiddenText}}</h2>
        <ul :class="classes" v-if="$slots.default">
          <slot></slot>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; {{copyright}}</p>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'NhsFooter',
    props: {
      hiddenText: {
        type: String,
        default: 'Support links'
      },
      copyright: {
        type: String,
        default: 'Crown copyright'
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      column: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-footer__list' ]

        if (this.column) {
          classes.push('nhsuk-footer__list--three-columns')
        }

        return classes.join(' ')
      }
    }
  }
</script>
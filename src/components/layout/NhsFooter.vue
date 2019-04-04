<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
        <ul class="nhsuk-footer__list">
          <slot></slot>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; {{copyright}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "NhsFooter",
    props: {
      hiddenText: {
        type: String,
        default: ""
      },
      copyright: {
        type: String,
        default: "Crown copyright"
      }
    }
  }
</script>
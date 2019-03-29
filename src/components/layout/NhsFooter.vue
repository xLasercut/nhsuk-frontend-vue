<template>
  <footer role="contentinfo">
    <div class="nhsuk-footer" id="nhsuk-footer">
      <div class="nhsuk-width-container">
        <h2 class="nhsuk-u-visually-hidden">Support links</h2>
        <ul class="nhsuk-footer__list">
          <slot></slot>
        </ul>
        <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "NhsFooter"
  }
</script>
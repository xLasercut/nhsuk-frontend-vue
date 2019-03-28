<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input" :id="id" name="example" type="radio" value="yes">
    <label class="nhsuk-label nhsuk-radios__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    props: ["id"]
  }
</script>
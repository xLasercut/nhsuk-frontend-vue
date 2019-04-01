<template>
  <textarea class="nhsuk-textarea" :id="id" :rows="rows" :disabled="disabled"></textarea>
</template>

<script>
  export default {
    name: "NhsTextarea",
    props: ["id", "rows", "disabled"]
  }
</script>
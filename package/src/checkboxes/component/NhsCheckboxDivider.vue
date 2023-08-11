<template>
  <div class="nhsuk-checkboxes__divider">{{ divider }}</div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});
defineEmits([]);
defineProps({
  divider: {
    type: String,
    required: true
  }
});
</script>

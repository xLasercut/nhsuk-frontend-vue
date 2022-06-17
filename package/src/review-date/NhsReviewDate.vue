<template>
  <div class="nhsuk-review-date" v-bind="$attrs">
    <p class="nhsuk-body-s">
      Page last reviewed: {{ lastReview }}<br />
      Next review due: {{ nextReview }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  name: 'nhs-review-date',
  props: {
    lastReview: {
      type: String,
      required: true
    },
    nextReview: {
      type: String,
      required: true
    }
  }
});
</script>

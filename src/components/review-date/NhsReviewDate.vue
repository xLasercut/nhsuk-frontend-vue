<template>
  <div class="nhsuk-review-date" v-bind="$attrs">
    <p class="nhsuk-body-s">
      Page last reviewed: {{ lastReview }}<br>
      Next review due: {{ nextReview }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'NhsReviewDate',
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
  }
</script>
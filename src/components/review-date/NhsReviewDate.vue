<template>
  <div class="nhsuk-review-date">
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
        default: ''
      },
      nextReview: {
        type: String,
        default: ''
      }
    }
  }
</script>
<template>
<div>
  <nhs-main>
    <code-block file="FeedbackBanner" />
    <argument-table heading="feedback" :data-props="props" :data-slots="slots" />
  </nhs-main>
  <nhs-feedback
    title="Help us make the NHS website better"
    label="Take our short survey"
    href="https://www.nhs.uk"
  >
    Your feedback helps us improve the NHS website.
  </nhs-feedback>
</div>
</template>

<script>
   export default {
    data() {
      return {
        props: [
          {
            name: 'title',
            required: 'yes',
            type: 'string',
            description: 'Title to be displayed in the feedback banner component.'
          },
          {
            name: 'label',
            type: 'string',
            description: 'Optional text to be displayed within the link at the end of the content'
          },
          {
            name: 'href',
            type: 'string',
            description: 'Optional value of the link href attribute at the end of the content'
          },
          {
            name: 'hidden-text',
            type: 'string',
            description: 'Hidden text used for text-to-speech: Default: feedback invite'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>
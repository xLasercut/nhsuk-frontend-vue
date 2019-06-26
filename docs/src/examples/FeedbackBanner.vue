<template>
  <div>
    <nhs-main>
      <nhs-row>
        <nhs-col :span="66">
          <p>To view the feedback banner component, wait 3 seconds for it to display.</p>
        </nhs-col>
      </nhs-row>
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
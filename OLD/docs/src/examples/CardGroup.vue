<template>
  <div>
    <h2>Halves</h2>

    <nhs-card-group type="half">
      <nhs-card
        href="#"
        clickable
        heading="Introduction to care and support"
        heading-classes="nhsuk-heading-m"
        description="A quick guide for people who have care and support needs and their carers."
      ></nhs-card>
      <nhs-card
        href="#"
        clickable
        heading="Help from social services and charitiest"
        heading-classes="nhsuk-heading-m"
        description="Includes helplines, needs assessments, advocacy and reporting abuse."
      ></nhs-card>
      <nhs-card
        href="#"
        clickable
        heading="Money, work and benefits"
        heading-classes="nhsuk-heading-m"
        description="How to pay for care and support, and where you can get help with costs."
      ></nhs-card>
      <nhs-card
        href="#"
        clickable
        heading="Care after a hospital stay"
        heading-classes="nhsuk-heading-m"
        description="Includes hospital discharge and care and support afterwards."
      ></nhs-card>
    </nhs-card-group>

    <h2>Thirds</h2>

    <nhs-card-group type="third">
      <nhs-card
        href="#"
        clickable
        heading="5 steps to mental wellbeing"
        heading-classes="nhsuk-heading-m"
        description="Practical advice to help you feel mentally and emotionally better."
      ></nhs-card>
      <nhs-card
        href="#"
        clickable
        heading="Healthy weight"
        heading-classes="nhsuk-heading-m"
        description="Check your BMI using our healthy weight calculator and find out if you're a healthy weight."
      ></nhs-card>
      <nhs-card
        href="#"
        clickable
        heading="Exercise"
        heading-classes="nhsuk-heading-m"
        description="Programmes, workouts and tips to get you moving and improve your fitness and wellbeing."
      ></nhs-card>
    </nhs-card-group>

    <h2>Quarters</h2>

    <nhs-card-group type="quarter">
      <nhs-card clickable>
        <template #heading>
          <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
            91 <span class="nhsuk-u-visually-hidden">Applicants</span>
          </p>
          <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
            Applicants
          </a>
        </template>
      </nhs-card>
      <nhs-card clickable>
        <template #heading>
          <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
            23 <span class="nhsuk-u-visually-hidden">Jobs</span>
          </p>
          <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
            Jobs
          </a>
        </template>
      </nhs-card>
      <nhs-card clickable>
        <template #heading>
          <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
            8 <span class="nhsuk-u-visually-hidden">Services</span>
          </p>
          <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
            Services
          </a>
        </template>
      </nhs-card>
      <nhs-card clickable>
        <template #heading>
          <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
            33 <span class="nhsuk-u-visually-hidden">Messages</span>
          </p>
          <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
            Messages
          </a>
        </template>
      </nhs-card>
    </nhs-card-group>
  </div>
</template>

<script>
export default {

}
</script>

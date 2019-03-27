<template>
  <div>
    <nhs-header :links="navLinks"></nhs-header>
    <nhs-main>
      <nhs-row>
        <nhs-col>
          <nhs-button>Primary</nhs-button>
        </nhs-col>
      </nhs-row>
      <nhs-row>
        <nhs-input width="2"></nhs-input>
      </nhs-row>
      <nhs-row>
        <nhs-checkbox id="test">Test</nhs-checkbox>
        <nhs-checkbox id="test2">Test2</nhs-checkbox>
      </nhs-row>
    </nhs-main>
    <nhs-footer :links="navLinks"></nhs-footer>
  </div>
</template>

<script>
  export default {
    name:  'App',
    data() {
      return {
        navLinks: [
          {
            label: "Home",
            url: "/"
          },
          {
            label: "Health A-Z",
            url: "https://www.nhs.uk/conditions"
          },
          {
            label: "Live Well",
            url: "https://www.nhs.uk/live-well/"
          },
          {
            label: "Care and support",
            url: "https://www.nhs.uk/conditions/social-care-and-support/"
          },
          {
            label: "Health news",
            url: "https://www.nhs.uk/news/"
          },
          {
            label: "Services near you",
            url: "https://www.nhs.uk/service-search"
          }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <code-block :code="withCaption">
      <nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
        Itchy, red, watering eyes
      </nhs-image>
    </code-block>

    <code-block :code="noCaption">
      <nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis"></nhs-image>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        withCaption: `<nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
    Itchy, red, watering eyes
  </nhs-image>`,
        noCaption: `<nhs-image src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis">
  </nhs-image>`
      }
    }
  }
</script>
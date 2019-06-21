<template>
  <div>
    <nhs-promo-group :column="2">
      <promo />
      <promo />
    </nhs-promo-group>
    <nhs-promo-group :column="3">
      <promo-image />
      <promo-image />
      <promo-image />
    </nhs-promo-group>
    <nhs-promo-group :column="2">
      <nhs-promo heading="Save a life: give blood"
        href="https://www.nhs.uk/"
        small
      >
      </nhs-promo>
      <nhs-promo heading="Save a life: give blood"
        href="https://www.nhs.uk/"
        small
      >
      </nhs-promo>
    </nhs-promo-group>
  </div>
</template>

<script>
  import Promo from './Promo.vue'
  import PromoImage from './PromoImage.vue'

  export default {
    components: { Promo, PromoImage }
  }
</script>
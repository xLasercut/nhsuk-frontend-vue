<template>
  <div class="nhsuk-header__search">
    <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
      <nhs-icon icon="search"></nhs-icon>
      <span class="nhsuk-u-visually-hidden">Search</span>
    </button>
    <div class="nhsuk-header__search-wrap" id="wrap-search">
      <form class="nhsuk-header__search-form" id="search"  action="/search/" method="get" role="search">
        <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
        <div class="autocomplete-container" id="autocomplete-container"></div>
        <input class="nhsuk-search__input" id="search-field" name="search-field" type="search" placeholder="Search" autocomplete="off">
        <button class="nhsuk-search__submit" type="submit">
          <nhs-icon icon="search"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Search</span>
        </button>
        <button class="nhsuk-search__close" id="close-search">
          <nhs-icon icon="close"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Close search</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import NhsIcon from '../../icon/NhsIcon.vue'

  export default {
    components: {
      NhsIcon
    }
  }
</script>
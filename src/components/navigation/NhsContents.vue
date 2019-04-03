<template>
  <nav class="nhsuk-contents-list" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
    <ol class="nhsuk-contents-list__list">
      <li class="nhsuk-contents-list__item" :aria-current="ariaCurrent">
        <span class="nhsuk-contents-list__current">{{label}}</span>
      </li>
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: "NhsContents",
    props: {
      label: {
        type: String,
        default: ""
      },
      ariaLabel: {
        type: String,
        default: ""
      },
      ariaCurrent: {
        type: String,
        default: ""
      },
      hiddenText: {
        type: String,
        default: ""
      }
    }
  }
</script>

<template>
  <nhs-nav-az>
    <nhs-nav-az-item v-for="item in items" :key="`nav-${item.label}`" :disabled="item.disabled">
      {{item.label}}
    </nhs-nav-az-item>
  </nhs-nav-az>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'A'
          },
          {
            label: 'B',
            disabled: true
          },
          {
            label: 'C'
          },
          {
            label: 'D'
          },
          {
            label: 'E'
          },
          {
            label: 'F'
          },
          {
            label: 'G'
          },
          {
            label: 'H'
          },
          {
            label: 'I'
          },
          {
            label: 'J'
          },
          {
            label: 'K'
          },
          {
            label: 'L'
          },
          {
            label: 'M'
          },
          {
            label: 'N'
          },
          {
            label: 'O'
          },
          {
            label: 'P'
          },
          {
            label: 'Q'
          },
          {
            label: 'R'
          },
          {
            label: 'S'
          },
          {
            label: 'T'
          },
          {
            label: 'U'
          },
          {
            label: 'V'
          },
          {
            label: 'W'
          },
          {
            label: 'X'
          },
          {
            label: 'Y'
          },
          {
            label: 'Z'
          }
        ]
      }
    }
  }

</script>
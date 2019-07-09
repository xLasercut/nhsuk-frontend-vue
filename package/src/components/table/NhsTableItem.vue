<template>
  <td class="nhsuk-table__cell" v-bind="$attrs">
    <slot></slot>
  </td>
</template>

<script>
  export default {
    name: 'NhsTableItem'
  }
</script>
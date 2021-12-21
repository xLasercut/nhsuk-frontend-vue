<template>
  <nhs-main>
    <code-block name="ButtonDocs" />
    <code-block name="ButtonDocsDisabled" />
    <argument-table heading="nhs-button"></argument-table>
  </nhs-main>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import CodeBlock from '../../components/components/CodeBlock.vue'

export default defineComponent({
  components: {CodeBlock}
})
</script>

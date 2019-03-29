<template>
  <div>
    <nhs-row>
      <nhs-col>
        <nhs-details label="Click for more details">
          This is more detailed information.
        </nhs-details>

        <code-block>
          {{details}}
        </code-block>
      </nhs-col>
    </nhs-row>
  </div>
</template>

<script>
  import CodeBlock from '@/preview/components/CodeBlock.vue'

  export default {
    data() {
      return {
        details: `<nhs-details label="Click for more details">
            This is more detailed information.
          </nhs-details>`
      }
    },
    components: {
      CodeBlock
    }
  }
</script>
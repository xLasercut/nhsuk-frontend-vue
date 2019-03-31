<template>
  <div>
    <code-block :code="doCode">
      <nhs-dodont label="Do" type="do">
        <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
        <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
        <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
      </nhs-dodont>
    </code-block>

    <code-block :code="dontCode">
      <nhs-dodont label="Don't" type="dont">
        <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
        <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
        <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
      </nhs-dodont>
    </code-block>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        doCode: `<nhs-dodont label="Do" type="do">
    <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
    <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
    <nhs-dodont-item type="do">this is a do list</nhs-dodont-item>
  </nhs-dodont>`,
        dontCode: `<nhs-dodont label="Don't" type="dont">
    <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
    <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
    <nhs-dodont-item type="dont">this is a don't list</nhs-dodont-item>
  </nhs-dodont>`
      }
    }
  }
</script>


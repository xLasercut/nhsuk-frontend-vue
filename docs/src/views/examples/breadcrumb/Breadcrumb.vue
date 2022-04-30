<template>
  <nhs-breadcrumb>
    <nhs-breadcrumb-item href="/level-one">Level one</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two">Level two</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two/level-three">Level three</nhs-breadcrumb-item>
    <template #backlink>
      <nhs-breadcrumb-backlink href="/level-one/level-two/level-three">Back to Level three</nhs-breadcrumb-backlink>
    </template>
  </nhs-breadcrumb>
</template>

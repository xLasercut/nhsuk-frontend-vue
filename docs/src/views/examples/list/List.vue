<template>
  Bullet List
  <nhs-list>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Numbered List
  <nhs-list type="number">
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Error List
  <nhs-list type="error">
    <li><router-link to="/components/list">one</router-link></li>
    <li><router-link to="/components/list">two</router-link></li>
    <li><router-link to="/components/list">three</router-link></li>
  </nhs-list>
</template>

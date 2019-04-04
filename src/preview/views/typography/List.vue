<template>
  <div>
    <code-block>
      <nhs-list>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </nhs-list>
    </code-block>

    <code-block>
      <nhs-list type="number">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </nhs-list>
    </code-block>

    <code-block>
      <nhs-list type="error">
        <li><nhs-link to="/typograpy/list">one</nhs-link></li>
        <li><nhs-link to="/typograpy/list">two</nhs-link></li>
        <li><nhs-link to="/typograpy/list">three</nhs-link></li>
      </nhs-list>
    </code-block>
  </div>
</template>
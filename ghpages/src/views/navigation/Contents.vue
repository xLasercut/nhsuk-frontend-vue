<template>
  <code-block>
    <nhs-contents>
      <nhs-contents-item v-for="(item, index) in contents" :key="index" :to="item.to" :current="item.current">
        {{item.text}}
      </nhs-contents-item>
    </nhs-contents>
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        contents: [
          {
            to: "/navigation/contents",
            text: "chapter one"
          },
          {
            to: "/navigation/contents",
            text: "chapter two"
          },
          {
            to: "/navigation/contents",
            text: "chapter three",
            current: true
          },
          {
            to: "/navigation/contents",
            text: "chapter four"
          }
        ]
      }
    }
  }
</script>
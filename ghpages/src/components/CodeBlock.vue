<template>
  <nhs-row>
    <nhs-col>
      <div class="example_container">
        <slot></slot>
      </div>
      <div class="expand_container" :style="expandContainerStyle">
        <button class="expand_button" @click="toggleCode()">Show Code</button>
      </div>
      <div class="code_container" :style="codeContainerStyle">
        <pre v-highlightjs="code">
          <code :class="type">
          </code>
        </pre>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "html"
      },
      code: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        codeContainerStyle: {
          "display": "none"
        },
        expandContainerStyle: {
          "border-bottom": "1px solid #d8dde0",
          "margin-bottom": "40px"
        }
      }
    },
    methods: {
      toggleCode() {
        if (this.codeContainerStyle["display"] === "none") {
          this.codeContainerStyle["display"] = "block"
          this.expandContainerStyle["border-bottom"] = "none"
          this.expandContainerStyle["margin-bottom"] = 0
        }
        else {
          this.codeContainerStyle["display"] = "none"
          this.expandContainerStyle["border-bottom"] = "1px solid #d8dde0"
          this.expandContainerStyle["margin-bottom"] = "40px"
        }
      }
    }
  }
</script>

<style scoped>
  @import '../atom-one-light.css';

  .example_container {
    width: 100%;
    background: #f0f4f5;
    border: 1px solid #d8dde0;
    border-bottom: none;
    margin: 0;
    padding: 20px;
  }

  .code_container {
    border: 1px solid #d8dde0;
    background: #f0f4f5;
    width: 100%;
    margin: 0;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 40px;
  }

  .expand_container {
    width: 100%;
    border-left: 1px solid #d8dde0;
    border-right: 1px solid #d8dde0;
  }

  .expand_button {
    border: none;
    border-bottom: 5px solid #005eb8;
    background: #f0f4f5;
    cursor: pointer;
    outline: none;
    padding: 10px;
  }

  .expand_button:hover {
    outline: 3px solid #ffb81c;
  }

  .expand_button:focus {
    outline: 3px solid #ffb81c;
  }
</style>
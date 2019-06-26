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
        <div>
          <button class="code_tab" @click="display='template'" v-show="code">template</button>
          <button class="code_tab" @click="display='script'" v-show="script">script</button>
        </div>
        <highlight-code :code="code" :lang="type" v-show="display == 'template'">
        </highlight-code>
        <highlight-code :code="script" lang="js" v-show="display == 'script'">
        </highlight-code>
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
      },
      script: {
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
        },
        display: "template"
      }
    },
    methods: {
      toggleCode() {
        if (this.codeContainerStyle["display"] === "none") {
          this.codeContainerStyle["display"] = "block"
          this.expandContainerStyle["border-bottom"] = "none"
          this.codeContainerStyle["margin-bottom"] = "40px"
          this.expandContainerStyle["margin-bottom"] = "0px"
        }
        else {
          this.codeContainerStyle["display"] = "none"
          this.expandContainerStyle["border-bottom"] = "1px solid #d8dde0"
          this.expandContainerStyle["margin-bottom"] = "40px"
          this.codeContainerStyle["margin-bottom"] = "0px"
        }
      }
    }
  }
</script>

<style scoped>
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
    padding: 0;
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

  .code_tab {
    background: none;
    border: none;
    padding: 10px;
  }

  pre {
    padding: 0;
    margin: 0;
  }

  input {
    display: none;
  }

  input:checked+label {
    background: gray;
  }
</style>
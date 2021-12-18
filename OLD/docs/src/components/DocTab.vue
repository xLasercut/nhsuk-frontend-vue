<template>
  <div>
    <input type="radio" :value="tabValue" v-model="model" :id="id">
    <label class="tab" :for="id"><slot></slot></label>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      tabValue: {
        required: true
      },
      value: {}
    },
    data() {
      return {
        model: this.value
      }
    },
    watch: {
      value(val) {
        this.model = val
      },
      model(val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>
  input {
    display: none;
  }

  label {
    padding: 5px 15px 2px 15px;
    display: block;
    margin: 3px;
    cursor: pointer;
    font-size: 12pt;
    color: #005eb8;
    border-bottom: 4px solid #f0f4f5;
  }

  label:hover {
    outline: 3px solid #ffb81c;
  }


  input:checked+label {
    border-bottom: 4px solid #005eb8;
  }
</style>
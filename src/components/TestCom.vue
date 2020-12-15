<template>
  <div class="hello">
      Hi
  </div>
</template>

<script>
export default {
  name: 'TestCom',
  methods: {
    sum (a, b) {
      const result = a + b
      return result
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

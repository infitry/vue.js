<template>
  <div class="hello test">
      Hi {{ num }}
      <button v-on:click="plus">클릭</button>
  </div>
</template>

<script>
export default {
  name: 'TestCom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 2
    }
  },
  methods: {
    plus () {
      const self = this
      this.$axios.get('http://localhost:8000/data', {
        params : {
          data: this.num
        }
      })
      .then(function (response) {
        self.num = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@/css/test.css"/>

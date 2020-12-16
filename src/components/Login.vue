<template>
  <div class="hello test">
      {{ msg }}
      <input v-model="id" />
      <button v-on:click="login">로그인</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '로그인 해 주세요.',
      num: 2,
      id: ''
    }
  },
  methods: {
    login () {
      const self = this
      this.$axios.get('http://localhost:8000/data', {
        params : {
          data: this.num
        }
      })
      .then(function (response) {
          localStorage.setItem('user', self.id)
          self.$router.push('/test')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@/css/test.css"/>

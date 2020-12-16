<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>test link</h2>
    <ul>
      <li>
        <router-link to="/test">go test</router-link>
        <div v-if="isLogin">
          <button v-on:click="logout">로그아웃</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created () {
    // this.isLogin()
    // this.test()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLogin: false
    }
  },
  method: {
    logout () {
      localStorage.setItem('user', null)
    },
    isLogin () {
      console.log(localStorage.getItem('user'))
      this.isLogin = localStorage.getItem('user')
    },
    test () {
      alert()
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

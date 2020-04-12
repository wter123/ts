
<template>
  <!--模板-->
  <form novalidate>
    <label for="username">用户名</label>
    <input type="text" placeholder="Please Enter your username" id="username" v-model="username">
    <br>
    <label for="password">密码</label>
    <input type="password" placeholder="Please Enter your password" id="password" v-model="password">
    <br>
    <button type="button" v-on:click="register">Register</button>
  </form>
 
</template>
 
<script>
  /*js*/
  export default {
    name: 'register',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
      register: function () {
        let that = this;
        that.$http.post('/api/register',{
          username: that.username,
          password: that.password
        }).then(function (response) {
          console.log(response.data)
          if(parseInt(response.data.code) === 200){
            that.$router.push('/login')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
 
</script>
 
<style>
  /*样式*/
 
</style>
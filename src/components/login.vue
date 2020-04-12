
<template>
  <!--模板-->
  <!--用户名密码验证-->
  <form novalidate>
    <label for="username">用户名</label>
    <input type="text" placeholder="用户名" id="username" v-model="username">
    <br>
    <label for="password">密码</label>
    <input type="password" placeholder="密码" id="password" v-model="password">
    <br>
    <button v-on:click="wsLogin" type="button">Login</button>
  </form>
</template>
 
<script>
  /*js*/
  export default {
    name: 'wsLogin',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      wsLogin: function () {
        let that = this;
        that.$http.post('/api/login', {
          username: that.username,
          password: that.password
        }).then(function (response) {
          console.log(response.data);
          if(parseInt(response.data.code) === 400){
            // 登录失败
            that.username = '';
            that.password = '';
          }else if (parseInt(response.data.code) === 200){
            // 存token
            console.log("Aaa")
            // sessionStorage.setItem('token', response.data.token);
            // 登录成功,跳转到index
            that.$router.push('/Home')
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
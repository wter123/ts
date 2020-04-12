<template>
		<div class="container" style="margin-top: 50px;">
			<form id="addUserForm" class=" form form-horizontal" action="#" method="POST">
				
				<h3 class="text-center">用户注册</h3>
				<!--把标签和控件放在一个from-group的div中-->
				<div class="form-group">
					<label for="username" class="  control-label">账<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>号</label>
					<div class=" ">
						<input class="form-control" v-model="username" type="text" name="userName" id="username" placeholder="由2-12个字符组成" />
					</div>
					<div class=" ">
					</div>
				</div>
				<div class="form-group">
					<label for="psw" class=" control-label">密<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>码</label>
					<div class=" ">
						<input class="form-control" type="password" name="userPassword" id="psw" placeholder="由6-18个字符组成" />
					</div>
					<div class=" ">
					</div>
				</div>
				<div class="form-group">
					<label for="psw" class=" control-label">确认密码</label>
					<div class=" ">
						<input class="form-control" type="password" v-model="password" name="userPassword2" id="psw" placeholder="再次确认密码" />
					</div>
					<div class=" ">
					</div>
				</div>
				<div class="form-group">
	                <label for="email" class=" control-label">邮<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>箱</label>
	                <div class=" ">
	                	<input name="userEmail" class="form-control" type="email"   id="email" placeholder="例如:123@123.com">
	                </div>
	                <div class=" ">
					</div>
	            </div>
				<div class="form-group form-inline">
	              	<label for="verification-code" class="">验证码：</label>  
	            	<input name="verification" class="form-control  " type="verification-code"   id="verification-code" placeholder="输入验证码">
	           
 
	            </div>
				<button type="buttom" class="btn btn-success col-xl-12" v-on:click="wsRegister">注册</button>
            	<div class="text-right" style="margin-bottom: 20px;">
                	<router-link to="/ws-login"><a>已有账号？立即登录</a></router-link>
            	</div>
			</form>
		</div>
</template>
<script >

$(function () {
	//表单的id
    $('#addUserForm').bootstrapValidator({
　　　　　　　　message: 'This value is not valid',
            　feedbackIcons: {
                　　　　　　　　valid: 'glyphicon glyphicon-ok',
                　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                　　　　　　　　validating: 'glyphicon glyphicon-refresh'
            　　　　　　　　   },
            fields: {
                userName: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },stringLength: {
	                        min: 2,
	                        max: 12,
	                        message: '2-12位字母或数字'
	                    }
                    }
                },
                userPassword: {
                	validators: {
	                    notEmpty: {
	                        message: '密码不能为空'
	                    },stringLength: {
	                        min: 6,
	                        max: 18,
	                        message: '6-18位字母或数字'
	                    },identical: {
	                        field: 'userPassword2',
	                        message: '请保持密码一致'
	                    }
	                }
                },
                userPassword2: {
                	validators: {
	                    notEmpty: {
	                        message: '请再次输入密码'
	                    },stringLength: {
	                        min: 6,
	                        max: 18,
	                        message: '6-18位字母或数字'
	                    },identical: {
	                        field: 'userPassword',
	                        message: '请保持密码一致'
	                    }
	                }
                },
                userEmail: {
                    validators: {
	                    notEmpty: {
	                        message: '邮箱不能为空'
	                    },
	                    emailAddress: {
	                        message: '非法邮箱格式'
	                    }
	                }
                }
            }
        });
    });








  export default {
    name: 'wsRegister',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
     wsRegister: function () {
		let that = this;
		console.log(that.username,that.password)
        that.$http.post('/api/register',{
          username: that.username,
          password: that.password
        }).then(function (response) {
          console.log(response.data)
          if(parseInt(response.data.code) === 200){
			// sessionStorage.setItem('token', response.data.token);
            that.$router.push('/ws-login')
          }
        }).catch(function (error) {
          console.log(error)
		})
		
      }
    }
  }





</script>


<style lang="less" scoped>
.container{
	width:320px
}
		.form{
			border-radius: 50px;
			// background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
		}
		a:hover{
			text-decoration: none;
			color: red;
		}
</style>
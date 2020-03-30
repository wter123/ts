<template>
    <div class="ws-login">

    
        <div class="container">
            <div class="row row-centered">
                <div class="well    col-centered">
                    <h2>欢迎登录</h2>
                    <form action="/login" method="post" role="form">
                        <div class="input-group input-group-md">
                            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
                            <input type="text" class="form-control" id="userid" name="userid" placeholder="请输入用户ID"/>
                        </div>
                        <div class="input-group input-group-md">
                            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码"/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-success btn-block">登录</button>
                    </form>
                    <div class="text-right" style="margin-bottom: 20px;">
                	<router-link to="/ws-register"><a>未有账号？立即登录</a></router-link>
            	</div>
                </div>
            </div>
        </div>
</div></template>


<style lang="less" scoped>
 
   
    .container{
        display:table;
        width:410px;
     margin-top:100px ;
        
    }
    .well{
        width:320px
    }
    .row{
        display: table-cell;
        vertical-align: middle;
    }
    /* centered columns styles */
    .row-centered {
        text-align:center;
    }
    .col-centered {
        display:inline-block;
        float:none;
        text-align:left;
        margin-right:-4px;
        h2{
            text-align: center;
        }
    }
</style>
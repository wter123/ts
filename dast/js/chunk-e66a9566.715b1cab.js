(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e66a9566"],{"2f50":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{novalidate:""}},[r("label",{attrs:{for:"username"}},[e._v("用户名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Please Enter your username",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("br"),r("label",{attrs:{for:"password"}},[e._v("密码")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Please Enter your password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("button",{attrs:{type:"button"},on:{click:e.register}},[e._v("Register")])])},s=[],n={name:"register",data:function(){return{username:"",password:""}},methods:{register:function(){let e=this;e.$http.post("/api/register",{username:e.username,password:e.password}).then((function(t){console.log(t.data),200===parseInt(t.data.code)&&e.$router.push("/login")})).catch((function(e){console.log(e)}))}}},o=n,u=(r("ae41"),r("2877")),i=Object(u["a"])(o,a,s,!1,null,null,null);t["default"]=i.exports},ae41:function(e,t,r){"use strict";var a=r("e306"),s=r.n(a);s.a},e306:function(e,t,r){}}]);
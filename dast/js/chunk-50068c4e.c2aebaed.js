(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50068c4e"],{1954:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{attrs:{novalidate:""}},[t("label",{attrs:{for:"username"}},[e._v("用户名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名",id:"username"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}}),t("br"),t("label",{attrs:{for:"password"}},[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码",id:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),t("br"),t("button",{attrs:{type:"button"},on:{click:e.wsLogin}},[e._v("Login")])])},n=[],s={name:"wsLogin",data:function(){return{username:"",password:""}},methods:{wsLogin:function(){let e=this;e.$http.post("/api/login",{username:e.username,password:e.password}).then((function(a){console.log(a.data),400===parseInt(a.data.code)?(e.username="",e.password=""):200===parseInt(a.data.code)&&(console.log("Aaa"),e.$router.push("/Home"))})).catch((function(e){console.log(e)}))}}},r=s,u=(t("9ce0"),t("2877")),c=Object(u["a"])(r,o,n,!1,null,null,null);a["default"]=c.exports},"9ce0":function(e,a,t){"use strict";var o=t("d64c"),n=t.n(o);n.a},d64c:function(e,a,t){}}]);
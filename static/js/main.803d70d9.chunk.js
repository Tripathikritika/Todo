(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={mainDiv:"Todo_mainDiv__hv2wV",addDiv:"Todo_addDiv__2_xDx",inputAdd:"Todo_inputAdd__2zFe2",card:"Todo_card__FH3vn",commonColor:"Todo_commonColor__Vs6We",buttonBorder:"Todo_buttonBorder__bE9ow"}},14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(5),o=a.n(n),l=(a(19),a(20),a(10)),d=a(1),i=a.n(d),s="TODO_ADD",m="TODO_COMPLETED_TASK ",u="RESET_TASK",y=a(29),p=function(e){return{type:s,payload:{id:Object(y.a)(),title:e,status:!0}}},f=function(e){return{type:m,payload:{id:Object(y.a)(),title:e}}},v=function(e){return{type:u}},E=a(2);function b(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(""),d=Object(l.a)(o,2),s=d[0],m=d[1],u=Object(E.c)(function(e){return e.reducers.todoArray}),y=Object(E.c)(function(e){return e.reducers.completedArray}),b=Object(E.b)();Object(r.useEffect)(function(){if("#"===a[0]){var e=a.split("").slice(1).join("");m(e)}},[a]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h2",{className:"".concat(i.a.commonColor)},"Organize Your Day"))),c.a.createElement("div",{className:"row ".concat(i.a.mainDiv)},c.a.createElement("div",{className:"col-12 d-flex justify-content-end"},c.a.createElement("div",{className:"btn  m-1 ".concat(i.a.buttonBorder),onClick:function(){b(v())}},c.a.createElement("i",{class:"fas fa-power-off"})," RESET")),c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"".concat(i.a.addDiv," ")},c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"#"!==a[0]&&(b(p(a)),n(""))}},c.a.createElement("input",{type:"text",placeholder:"Add a task...",value:a,name:a,onChange:function(e){n(e.target.value)},className:"rounded  p-2 ".concat(i.a.inputAdd)}))),c.a.createElement("div",{className:"text-left"},u&&u.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("div",{className:"container p-0"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 m-2 d-flex justify-content-center"},c.a.createElement("div",{className:"".concat(i.a.card," card"),style:{width:"200px",border:e.title.includes(s)&&""!==s?"3px solid yellow":null},onClick:function(){return t=e.title,b(f(t)),void n("");var t}},c.a.createElement("div",{className:"card-body"},e.title))))))})),c.a.createElement("div",null,y&&y.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 m-2 d-flex justify-content-center"},c.a.createElement("div",{className:"".concat(i.a.card," card border-3 "),style:{width:"200px",border:e.title.includes(s)&&""!==s?"3px solid yellow":"3px solid green"}},c.a.createElement("div",{className:"card-body"},e.title))))))}))))))}var O=function(){return c.a.createElement("div",null,c.a.createElement(b,null))},_=a(3),A=a(6),N=a(4),j=function(e){return JSON.parse(localStorage.getItem(e))},w=function(e,t){localStorage.setItem(e,JSON.stringify(t))},D=function(e){localStorage.removeItem(e)},x={todoArray:j("todoArray")||[],status:j("status")||!1,completedArray:j("completedArray")||[]},S=a(13),T=Object(_.c)({reducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return w("status",!0),w("todoArray",[].concat(Object(N.a)(e.todoArray),[t.payload])),Object(A.a)({},e,{todoArray:[t.payload].concat(Object(N.a)(e.todoArray)),status:!0});case m:return w("completedArray",[].concat(Object(N.a)(e.completedArray),[t.payload])),w("todoArray",e.todoArray.filter(function(e){return e.title!==t.payload.title})),Object(A.a)({},e,{completedArray:[t.payload].concat(Object(N.a)(e.completedArray)),todoArray:e.todoArray.filter(function(e){return e.title!==t.payload.title})});case u:return D("todoArray"),D("completedArray"),D("status"),Object(A.a)({},e,{todoArray:[],completedArray:[]});default:return e}}}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,h=Object(_.e)(T,g(Object(_.a)(S.a)));o.a.render(c.a.createElement(E.a,{store:h},c.a.createElement(O,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.803d70d9.chunk.js.map
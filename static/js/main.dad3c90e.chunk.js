(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(3),l=a.n(c),r=(a(16),a(4)),s=a(1),i=a(5),u=Object(i.b)({name:"todos",initialState:{todos:[],filters:[]},reducers:{addTodos:function(e,t){e.todos.push(t.payload)},changeStatus:function(e,t){var a=t.payload.id,o=e.todos.find((function(e){return e.id===a}));console.log(o.completed),o&&(o.completed=!o.completed)},deleteItem:function(e,t){var a=t.payload.id;e.todos=e.todos.filter((function(e){return e.id!==a}))},saveLocalStorageIntoState:function(e,t){t.payload.map((function(t){return e.todos.push(t)}))},filterTodos:function(e,t){switch(t.payload.value){case"completed":e.filters=e.todos.filter((function(e){return!0===e.completed}));break;case"uncompleted":e.filters=e.todos.filter((function(e){return!1===e.completed}));break;default:e.filters=e.todos}}}}),d=u.actions,m=d.addTodos,f=d.changeStatus,p=d.deleteItem,v=d.saveLocalStorageIntoState,b=d.filterTodos,E=u.reducer;function h(){var e=Object(s.b)(),t=Object(o.useState)(),a=Object(r.a)(t,2),c=a[0],l=a[1];return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(t){t.preventDefault(),e(m({text:c,completed:!1,id:1e3*Math.random()})),l("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(t){return e(b({value:t.target.value}))},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))}var g=function(e){var t=e.text,a=e.id,c=e.completed,l=Object(o.useState)(!1),i=Object(r.a)(l,2),u=i[0],d=i[1],m=Object(s.c)((function(e){return e.todos.todos})),v=Object(s.b)();return n.a.createElement("div",{className:u?"todo fall":"todo"},n.a.createElement("li",{className:"todo-item ".concat(c?"completed":""),id:a},t),n.a.createElement("button",{onClick:function(){m.map((function(e){e.id===a&&v(f({id:a}))}))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(e){d((function(e){return!e})),setTimeout((function(){m.map((function(e){e.id===a&&v(p({id:a}))}))}),1e3)},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},N=function(){var e=Object(s.c)((function(e){return e.todos.filters})).map((function(e){return n.a.createElement(g,{text:e.text,key:e.id,completed:e.completed,id:e.id})}));return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"}," ",e," "))};a(23);var O=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.todos.todos}));Object(o.useEffect)((function(){c(),e(b("other"))}),[]),Object(o.useEffect)((function(){a(),e(b("other"))}),[t]);var a=function(){localStorage.setItem("posts",JSON.stringify(t))},c=function(){if(null===localStorage.getItem("posts"))localStorage.setItem("posts",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("posts"));e(v(t))}};return console.log(t),n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"To-Do List (Redux)")),n.a.createElement(h,null),n.a.createElement(N,null))},S=Object(i.a)({reducer:{todos:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:S},n.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.dad3c90e.chunk.js.map
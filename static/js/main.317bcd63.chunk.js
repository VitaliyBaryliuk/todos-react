(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(7),c=n.n(i),s=(n(15),n(1)),r=n(2),l=n(4),u=n(3),d=n(5),f=(n(16),n(17),n(8)),m=function(t){var e=t.id,n=t.text,o=t.done,i=t.onCheckboxClick;return a.a.createElement("li",{className:"Todos__item"},a.a.createElement("input",{type:"checkbox",checked:o,onChange:function(){return i(e)}}),a.a.createElement("span",{className:"Todos__item-text ".concat(o?"checked":"")},n))},h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],filtredTodos:[],filtredBy:"",inputValue:"",leftCount:0},n.onInputValueChenge=function(t){n.setState({inputValue:t})},n.addNewTodosItem=function(){n.state.inputValue&&n.setState(function(t){var e=t.todos,n=t.inputValue,o={value:e.length+1,text:n,done:!1};return{todos:[].concat(Object(f.a)(e),[o]),inputValue:""}},function(){n.setLeftCount(),n.state.filtredBy&&n.setFilter(n.state.filtredBy)})},n.setDone=function(t){n.setState(function(e){var n=e.todos,o=n.find(function(e){return e.value===t});return o.done=!o.done,{todos:n}},function(){n.setLeftCount(),n.state.filtredBy&&n.setFilter(n.state.filtredBy)})},n}return Object(d.a)(e,t),Object(r.a)(e,[{key:"setLeftCount",value:function(){var t=this;this.setState(function(){return{leftCount:t.state.todos.filter(function(t){return!1===t.done}).length}})}},{key:"setFilter",value:function(t){var e=[];"done"===t?e=this.state.todos.filter(function(t){return!0===t.done}):"all"===t?t="":e=this.state.todos.filter(function(t){return!1===t.done}),this.setState({filtredTodos:e,filtredBy:t})}},{key:"render",value:function(){var t=this,e=this.state,n=e.todos,o=e.inputValue,i=e.leftCount,c=e.filtredBy,s=e.filtredTodos;return c&&(n=s),a.a.createElement("div",{className:"Todos"},a.a.createElement("h1",{className:"Todos__title"},"Todos"),a.a.createElement("div",{className:"Todos__input-wrapper"},a.a.createElement("input",{className:"Todos__input",type:"text",value:o,onChange:function(e){t.onInputValueChenge(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t.addNewTodosItem()}}),a.a.createElement("button",{className:"Todos__input-button",onClick:function(){return t.addNewTodosItem()}},"Add")),a.a.createElement("div",{className:"Todos__list"},n.map(function(e){return a.a.createElement(m,{key:e.value,text:e.text,done:e.done,id:e.value,onCheckboxClick:t.setDone})})),a.a.createElement("div",{className:"Todos__bottom"},a.a.createElement("p",{className:"Todos__bottom-left-count"},i," left"),a.a.createElement("button",{className:"Todos__bottom-button",onClick:function(){t.setFilter("all")}},"all"),a.a.createElement("button",{className:"Todos__bottom-button",onClick:function(){t.setFilter("active")}},"Active"),a.a.createElement("button",{className:"Todos__bottom-button",onClick:function(){t.setFilter("done")}},"Archived")))}}]),e}(o.Component),p=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement(h,null)}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.317bcd63.chunk.js.map
(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),l=t.n(r),o=(t(14),t(6)),i=t(3),s=t(4),m=t(7),u=t(5),h=t(8),d=function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("div",{class:"nav-wrapper"},c.a.createElement("a",{href:"#",class:"brand-logo"},"Miniflix"),c.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",{href:"sass.html"},"Sass")),c.a.createElement("li",null,c.a.createElement("a",{href:"badges.html"},"Components")),c.a.createElement("li",null,c.a.createElement("a",{href:"collapsible.html"},"JavaScript"))))))},p=(t(15),function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("form",{class:"example",action:"/action_page.php",onSubmit:e.onSubmit},c.a.createElement("input",{type:"text",placeholder:"Search..",name:"search2",onChange:e.onChange}),c.a.createElement("button",{type:"submit"},c.a.createElement("i",{class:"fa fa-search"}))))}),f=function(e){return c.a.createElement("div",{className:"col s12 m6 l3"},c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},null==e.image?c.a.createElement("img",{className:"",src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"Card image cap",style:{width:"100%",height:360}}):c.a.createElement("img",{className:"",src:"http://image.tmdb.org/t/p/w185".concat(e.image),alt:"Card image cap",style:{width:"100%",height:360}}))))},v=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12"},e.movies.map((function(e,a){return c.a.createElement(f,{key:e.id,image:e.poster_path,date:e.release_date})})))))},g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t.apiKey,"&query=").concat(t.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({movies:Object(o.a)(e.results)})}))},t.onChange=function(e){t.setState({searchTerm:e.target.value})},t.state={movies:[],searchTerm:""},t.apiKey="0ea2b1048640167f7abb52a7eff8d3ca",t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement(p,{onSubmit:this.onSubmit,onChange:this.onChange}),c.a.createElement(v,{movies:this.state.movies}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d72e9e4c.chunk.js.map
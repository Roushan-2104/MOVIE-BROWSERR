(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(13),r=c.n(n),i=(c(20),c(7)),l=(c(6),c(2)),o=c(5),j=c(0);function d(e){var t=e.setSearchText,c=Object(l.f)();return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(o.b,{className:"navbar-brand fw-bold fs-4",to:"/",children:"Movie Browser"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link DISABLED",to:"/",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/trend",children:"Trending"})})]}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("input",{className:"me-2 form-control",placeholder:"Search For Movies",onChange:function(e){c.push("/search"),t(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-outline-danger",type:"search",children:"Search"})]})]})]})})})}function b(e){return Object(j.jsxs)("header",{className:"text-center bg p-4 position-relative hero-contains ",children:[Object(j.jsx)("h1",{className:"display-4 fw-bold text-light d-inline-block",children:e.title}),e.backdrop&&Object(j.jsx)("div",{className:"backdrop",style:{backgroundImage:"url(".concat(e.backdrop,")")}})]})}function h(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{title:"Welcome To Movie Browserr"}),Object(j.jsxs)("div",{className:"text-center p-3 m-4",children:[Object(j.jsx)("span",{children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-stars text-primary me-4",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"})})}),Object(j.jsx)("blockquote",{className:"blockquote text-warning fs-2",children:Object(j.jsx)("q",{children:" You get hurt, hurt \u2019em back. You get killed\u2026 walk it off "})}),Object(j.jsxs)("p",{className:"blockquote-footer fs-4 mt-3 ps-5",children:["Steve Rogers in"," ",Object(j.jsx)("cite",{title:"Avengers",className:"text-danger",children:"Avengers : Age of Ultron"})]}),Object(j.jsx)("img",{src:"https://www.sideshow.com/wp/wp-content/uploads/2020/11/cap-740x493.jpg",alt:"cap.",className:"img-fluid mt-4 rounded"})]})]})}function m(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{title:"Trending"}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("div",{className:"card card-size mt-4 d-inline-block",children:[Object(j.jsx)("img",{src:"https://images.alphacoders.com/117/thumb-1920-1171603.jpg",className:"card-img-top poster",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"Shang Chi"}),Object(j.jsx)("p",{className:"card-text",children:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}),Object(j.jsx)("a",{href:"/",className:"btn btn-primary disabled",children:"Nothing HERE"})]})]})})]})}function x(e){var t=e.movies,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/movies/".concat(t.id);return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"m-3",children:Object(j.jsxs)("div",{className:"card card-size mt-4 d-inline-block",children:[Object(j.jsx)("img",{src:c,className:"card-img-top poster",onError:function(e){e.target.src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-no-image-available-icon-flat-vector-illustration.jpg?ver=6"},alt:""}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.original_title}),Object(j.jsx)(o.b,{to:a,className:"btn btn-primary mt-2",children:"Show Details"})]})]})})})}function u(e){var t=e.keyword,c=e.searchResults,a="You Are Searching For ".concat(t),s=c.map((function(e,t){return Object(j.jsx)(x,{movies:e},t)})),n=function(){return c.length>3?Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:s})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{className:"text-center text-light my-4",children:"There is no results for your search . Try again !"})})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{title:a}),Object(j.jsx)(n,{})]})}function p(){var e=Object(l.g)().id;console.log(e);var t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!0),o=Object(i.a)(r,2),d=o[0],h=o[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=eef0ae062dfda1f5ebdc1dd92ae95aa9&language=en-US")).then((function(e){return e.json()})).then((function(e){setTimeout((function(){n(e),h(!1)}),1500)}))}),[e]),function(){if(d)return Object(j.jsx)(b,{title:"Loading......."});if(s){var e="https://image.tmdb.org/t/p/w500/".concat(s.poster_path),t="https://image.tmdb.org/t/p/original/".concat(s.backdrop_path);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{title:s.original_title,backdrop:t}),Object(j.jsx)("div",{className:"container my-5 text-light",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("img",{src:e,className:"rounded img-fluid",alt:"",onError:function(e){e.target.src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-no-image-available-icon-flat-vector-illustration.jpg?ver=6"}})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-3 border-bottom border-danger d-inline-block text-info pb-1\r ",children:s.original_title}),Object(j.jsx)("p",{className:"mt-3 blockquote text-warning",children:Object(j.jsx)("q",{children:Object(j.jsx)("em",{children:s.tagline})})}),s.overview&&Object(j.jsx)("p",{className:"lead fs-3 mt-4",children:s.overview}),s.homepage&&Object(j.jsx)("a",{className:"btn btn-lg btn-outline-primary mt-3",href:s.homepage,target:"_blank",rel:"noreferrer",children:"Want some more details !!"})]})})]})})]})}}()}function g(){return Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("img",{src:"https://i.imgur.com/qIufhof.png",alt:"...",className:"error img-fluid"}),Object(j.jsx)("div",{id:"info",children:Object(j.jsx)("h3",{className:"text-light",children:"This page could not be found"})})]})}var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],b=r[1];return Object(a.useEffect)((function(){o&&fetch("https://api.themoviedb.org/3/search/movie?api_key=eef0ae062dfda1f5ebdc1dd92ae95aa9&language=en-US&query=".concat(o,"&page=1&include_adult=false/")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[o]),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{searchText:o,setSearchText:b}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(h,{})}),Object(j.jsx)(l.a,{path:"/trend",component:m}),Object(j.jsx)(l.a,{path:"/search",children:Object(j.jsx)(u,{keyword:o,searchResults:c})}),Object(j.jsx)(l.a,{path:"/movies/:id",children:Object(j.jsx)(p,{keyword:o})}),Object(j.jsx)(l.a,{component:g})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(O,{})})}),document.getElementById("root")),v()},6:function(e,t,c){}},[[30,1,2]]]);
//# sourceMappingURL=main.407bf01f.chunk.js.map
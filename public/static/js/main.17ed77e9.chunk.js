(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),i=e(3),o=e.n(i),s=(e(12),e(4)),r=e(5),l=e(7),u=e(6),h=(e(13),e(0)),j=function(t){Object(l.a)(e,t);var n=Object(u.a)(e);function e(){var t;return Object(s.a)(this,e),(t=n.call(this)).state={plants:[]},t}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:3001/api/v1/plants").then((function(t){return t.json()})).then((function(n){console.log(n),t.setState({plants:n})}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"Hello, Heroku!"}),Object(h.jsx)("h2",{children:this.state.plants.map((function(t){return t.name})).join(" ")})]})})}}]),e}(c.Component),p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.17ed77e9.chunk.js.map
(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(5),o=s.n(r),i=s(6),c=s(7),a=s(10),l=s(8),u=s(9),b=s(1),h=(s(4),s(15),s(2)),d=s.n(h),p=s(0),j=function(t){var e=t.goods;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})},y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);switch(s){case n.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:o.sort((function(t,e){return t.length-e.length}));case n.NONE:}return r&&o.reverse(),o}(y,{sortType:s,isReversed:e}),o=!(JSON.stringify(r)===JSON.stringify(y));return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":s!==n.ALPHABET}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":s!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!e}),onClick:this.reverse,children:"Reverse"}),o&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(p.jsx)(j,{goods:r})]})}}]),s}(b.Component);o.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a73d915e.chunk.js.map
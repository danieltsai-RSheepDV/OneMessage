(this["webpackJsonpone-message"]=this["webpackJsonpone-message"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e),n.d(e,"serverURL",(function(){return I}));var r=n(3),a=n.n(r),c=n(11),i=n.n(c),s=(n(17),n(5)),u=n(6),o=n(7),l=n(10),p=n(9),h=(n.p,n(18),n(1)),d=n.n(h),f=n(2),b=n(4),j=function(){var t=Object(f.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.setItem("@UUID",JSON.stringify(e));case 3:return t.abrupt("return",JSON.stringify(e));case 6:t.prev=6,t.t0=t.catch(0),console.log("Error writing UUID: "+t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();function v(){return(v=Object(f.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=Object(f.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.getItem("@UUID");case 3:if(null===(e=t.sent)){t.next=8;break}return t.abrupt("return",e);case 8:fetch(I+"/uuidAPI",{method:"POST"}).then((function(t){return t.json()})).then((function(t){j(t)}));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error reading UUID: "+t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),t.abrupt("return",new Promise((function(t,n){e().then((function(e){t(e)})).catch((function(t){n()}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=function(){var t=Object(f.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.setItem("@MessageCreated",e);case 3:return t.abrupt("return",JSON.stringify(e));case 6:t.prev=6,t.t0=t.catch(0),console.log("Error writing UUID: "+t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();function x(){return(x=Object(f.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=Object(f.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.getItem("@MessageCreated");case 3:if(null==(e=t.sent)){t.next=8;break}return t.abrupt("return",e);case 8:return t.abrupt("return","false");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error reading MessageCreated: "+t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),t.abrupt("return",new Promise((function(t,n){e().then((function(e){t(e)})).catch((function(t){n()}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=n(0),m={text:"hello"},k=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).disable="",r.state={disabled:r.disable},r.handleClick=r.handleClick.bind(Object(o.a)(r)),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;(function(){return x.apply(this,arguments)})().then((function(e){t.disable="true"==e,t.setState({disabled:t.disable})}))}},{key:"handleClick",value:function(t){this.setState({disabled:!0}),O("true")}},{key:"render",value:function(){return Object(g.jsx)("span",{id:"bottom_bar",children:Object(g.jsxs)("nobr",{children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter value",id:"input_box",disabled:this.state.disabled?"disabled":""}),Object(g.jsx)("button",{id:"send_button",onClick:this.handleClick,children:Object(g.jsx)("span",{id:"send_button_text",children:">"})})]})})}}]),n}(a.a.Component),y=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={apiResponse:""},r}return Object(u.a)(n,[{key:"callAPI",value:function(){var t=this;fetch(I+"/testAPI").then((function(t){return t.text()})).then((function(e){return t.setState({apiResponse:e})})).catch((function(t){return t})),fetch(I+"/messageAPI",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(m)}).then((function(t){return t.text()})).then((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){(function(){return v.apply(this,arguments)})().then((function(t){return console.log(t)})),this.callAPI()}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{id:"header",children:[Object(g.jsx)("span",{className:"title",id:"title_one",children:"ONE"}),Object(g.jsx)("h1",{children:Object(g.jsx)("span",{className:"title",children:"MESSAGE"})}),Object(g.jsx)("nav",{})]}),Object(g.jsx)("div",{id:"content",children:Object(g.jsx)(k,{})}),Object(g.jsx)("div",{})]})}}]),n}(a.a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))},I="http://localhost:1337";i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.04cc54ab.chunk.js.map
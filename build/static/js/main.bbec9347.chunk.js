(this["webpackJsonpparser-image-from-pdf"]=this["webpackJsonpparser-image-from-pdf"]||[]).push([[0],{59:function(e,n,t){},61:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var r,a=t(8),c=t.n(a),o=t(33),s=t.n(o),i=(t(59),t(17)),l=t(24),u=t(14),p=t.n(u),d=(t(61),t(34)),f=t(35).a.div(r||(r=Object(d.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  //display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  border: 1px solid;\n  border-radius: 10px;\n\n  @media (min-width: 1200px) {\n    width: 350px;\n    max-width: 100%;\n  }\n\n  :before {\n    box-sizing: inherit;\n  }\n\n  :after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n']))),b=t(54);function j(e,n){var t=[e,n||e];console.log(t,"====");for(var r=[],a=t[0];a<=t[1];a++)r.push(a-1);return console.log(r,"!!!!!!!!!!"),r}var h=t(64).PDFDocument;function x(e,n){return g.apply(this,arguments)}function g(){return g=Object(i.a)(p.a.mark((function e(n,t){var r,a,c,o,s,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.split(","),console.log(r),r.forEach((function(e,n){if(e.includes("-")){var t=parseInt(e.split("-")[0],10),a=parseInt(e.split("-")[1],10);r.splice(n,1,j(t,a))}else r.splice(n,1,parseInt(e,10)-1)})),a=r.reduce((function(e,n){return Array.isArray(n)?e.push.apply(e,Object(b.a)(n)):e.push(n),e}),[]),console.log(a),e.next=8,h.load(t);case 8:return c=e.sent,o=c.getPages().length,console.log(o),a.forEach((function(e){if(e+1>o||e+1<=0)throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0412\u044b\u0445\u043e\u0434 \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446. \u0412\u0441\u0435\u0433\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446 - ".concat(o))})),s=new Set(a),console.log(Array.from(s).sort((function(e,n){return e-n}))),e.next=16,h.create();case 16:return l=e.sent,e.next=19,l.copyPages(c,a);case 19:return u=e.sent,e.next=22,Promise.all(u.map(function(){var e=Object(i.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.addPage(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 22:return e.next=24,l.save();case 24:return e.abrupt("return",e.sent);case 27:throw e.prev=27,e.t0=e.catch(0),alert(e.t0.message),new Error(e.t0.message);case 31:case"end":return e.stop()}}),e,null,[[0,27]])}))),g.apply(this,arguments)}function m(e){try{var n=new Blob([e],{type:"application/pdf"});console.log(n);var t=window.URL.createObjectURL(n);console.log(t);var r=document.createElement("a");r.href=t,r.download="copyResult.pdf",document.body.appendChild(r),r.click(),r.remove()}catch(a){console.log(a)}}var v=t(10);var O=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1],d=function(){var e=Object(i.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),e.next=4,x(s,t);case 4:return r=e.sent,e.next=7,m(r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(f,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("a",{children:Object(v.jsx)("b",{children:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438\u0437 PDF"})}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"file",accept:".pdf",onChange:function(e){try{var n=e.target.files[0],t=new FileReader;t.addEventListener("load",(function(e){r(e.target.result)})),t.addEventListener("error",(function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430")})),n&&t.readAsDataURL(n)}catch(e){console.log(e)}},name:"file"}),Object(v.jsx)("br",{}),Object(v.jsx)("a",{children:"\u041d\u043e\u043c\u0435\u0440\u0430 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446"}),Object(v.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 2, 3-8, 12",onChange:function(e){u(e.target.value)}}),t&&s?Object(v.jsx)("button",{onClick:d,style:{"margin-top":"10px","align-item":"center"},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}):null,Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.bbec9347.chunk.js.map
(this["webpackJsonpleniolabs-challenge"]=this["webpackJsonpleniolabs-challenge"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(19),a=n.n(r),i=n(8),j=n(2),l=n(14),b=n.n(l),d=n(20),h=n(7),o=function e(t,n,c){var s=[];for(var r in t)t.hasOwnProperty(r)&&("object"==typeof t[r]?s=s.concat(e(t[r],n,c)):(r===n&&t[r]===c||r===n&&""===c||t[r]===c&&""===n&&-1===s.lastIndexOf(t))&&s.push(t));return s},x=(n(27),n(0)),O=function(e){var t=e.member;return Object(x.jsxs)("div",{className:"member-details",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"ID: "}),t.id]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Title: "}),t.title]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"First Name: "}),t.first_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Middle Name: "}),t.middle_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Last Name: "}),t.last_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Gender: "}),t.gender]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Party: "}),t.party]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Date of Birth: "}),t.date_of_birth]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Last Update: "}),t.last_updated]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"State: "}),t.state]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Total Votes: "}),t.total_votes]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Missed Votes: "}),t.missed_votes]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Missed Votes PCT: "}),t.missed_votes_pct]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Votes Against Party PCT: "}),t.votes_against_party_pct]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Votes With Party PCT: "}),t.votes_with_party_pct]})]})},u=function(e){var t=e.listOfMembers,n=Object(j.g)().congressId,s=Object(j.f)(),r=Object(c.useState)(""),a=Object(h.a)(r,2),i=a[0],l=a[1],u=Object(c.useState)(!0),p=Object(h.a)(u,2),m=p[0],f=p[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,"id",n);case 2:c=e.sent,l(c),f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,t]);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Congress Member Details"}),m?Object(x.jsx)("p",{children:"Loading..."}):null===i||void 0===i?void 0:i.map((function(e){return Object(x.jsx)(O,{member:e},e.id)})),Object(x.jsx)("button",{onClick:function(){s.goBack()},children:"Back"})]})},p=function(e){var t=e.member;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"ID: "}),t.id]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Title: "}),t.title]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"First Name: "}),t.first_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Middle Name: "}),t.middle_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Last Name: "}),t.last_name]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Gender: "}),t.gender]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{children:"Party: "}),t.party]}),Object(x.jsx)(i.b,{to:"./congress/".concat(t.id),children:"Details..."}),Object(x.jsx)("br",{})]})},m=function(e){var t=e.listOfMembers;return Object(x.jsx)("div",{className:"congress-member-card",children:null===t||void 0===t?void 0:t.map((function(e){return Object(x.jsx)(p,{member:e},e.id)}))})},f=(n(34),function(e){var t=e.listOfMembers;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:"Congress Members"})}),Object(x.jsxs)("main",{children:[Object(x.jsx)("h3",{children:"List of congress persons:"}),Object(x.jsx)(m,{listOfMembers:null===t||void 0===t?void 0:t.results[0].members})]})]})}),y=n(11),v=n(17),g=function(e){var t=e.listOfMembers,n=Object(c.useState)(""),s=Object(h.a)(n,2),r=s[0],a=s[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(h.a)(t,2),s=n[0],r=n[1];return[s,function(e){var t=e.target;r(Object(v.a)(Object(v.a)({},s),{},Object(y.a)({},t.name,t.value)))},function(){r(e)}]}({searchText:"",searchTextByID:"",searchTextByFirstName:"",searchTextByLastName:"",searchTextByGender:"",searchTextByParty:""}),j=Object(h.a)(i,2),l=j[0],b=j[1],d=l.searchText,O=l.searchTextByID,u=l.searchTextByFirstName,p=l.searchTextByLastName,f=l.searchTextByGender,g=l.searchTextByParty,C=function(e){e.preventDefault(),"search-general"===e.target.name?a(o(t,"",d)):"search-text-by-id"===e.target.name?a(o(t,"id",O)):"search-text-by-firstname"===e.target.name?a(o(t,"first_name",u)):"search-text-by-lastname"===e.target.name?a(o(t,"last_name",p)):"search-text-by-gender"===e.target.name?a(o(t,"gender",f)):"search-text-by-party"===e.target.name&&a(o(t,"party",g))},T=Object(c.useState)(!1),_=Object(h.a)(T,2),B=_[0],N=_[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Search Screen"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{type:"text",placeholder:"Type to search",name:"searchText",autoComplete:"off",value:d,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-general",children:"Search..."}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),N(!B)},children:"Advanced Filters"}),B&&Object(x.jsxs)("div",{className:"advanced-filters",children:[Object(x.jsx)("input",{type:"text",placeholder:"Find members by id",name:"searchTextByID",autoComplete:"off",value:O,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-text-by-id",children:"Search..."}),Object(x.jsx)("input",{type:"text",placeholder:"Find members by name",name:"searchTextByFirstName",autoComplete:"off",value:u,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-text-by-firstname",children:"Search..."}),Object(x.jsx)("input",{type:"text",placeholder:"Find members by lastname",name:"searchTextByLastName",autoComplete:"off",value:p,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-text-by-lastname",children:"Search..."}),Object(x.jsx)("input",{type:"text",placeholder:"Find members by gender",name:"searchTextByGender",autoComplete:"off",value:f,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-text-by-gender",children:"Search..."}),Object(x.jsx)("input",{type:"text",placeholder:"Find members by party",name:"searchTextByParty",autoComplete:"off",value:g,onChange:b}),Object(x.jsx)("button",{onClick:function(e){C(e)},name:"search-text-by-party",children:"Search..."})]})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:" Results: "}),0===r.length?Object(x.jsx)("p",{children:"No results"}):Object(x.jsx)(m,{listOfMembers:r}),Object(x.jsx)("hr",{})]})]})]})},C=(n(35),function(){return Object(x.jsxs)("footer",{children:["Congress Members \xa9 ",(new Date).getFullYear(),". Built with \ud83d\udc9c by"," ",Object(x.jsx)("a",{href:"https://www.emilianolucero.ar",children:"Emiliano Lucero"})]})}),T=function(){return Object(x.jsx)("nav",{className:"header",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/search",children:"Search"})})]})})},_=(n(36),function(){var e=function(e){var t=Object(c.useRef)(!0),n=Object(c.useState)({data:null,loading:!0,error:null}),s=Object(h.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){a({data:null,error:null,loading:!0}),fetch(e,{credentials:"same-origin",headers:{"Content-Type":"application/json","X-API-Key":"a0CHHl708v6kczmfIugymmaIKan93Pqct35cwCEs"}}).then((function(e){return e.json()})).then((function(e){t.current&&a({loading:!1,error:null,data:e})}))}),[e]),r}("https://api.propublica.org/congress/v1/102/house/members.json"),t=e.loading,n=e.data;return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)("div",{children:"Loading..."}):Object(x.jsxs)("div",{children:[Object(x.jsxs)(i.a,{children:[Object(x.jsx)(T,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/search",children:Object(x.jsx)(g,{listOfMembers:n})}),Object(x.jsx)(j.a,{path:"/congress/:congressId",children:Object(x.jsx)(u,{listOfMembers:n})}),Object(x.jsx)(j.a,{path:"/",children:Object(x.jsx)(f,{listOfMembers:n})})]})})]}),Object(x.jsx)(C,{})]})})});n(37);var B=function(){return Object(x.jsx)(_,{})};n(38);a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.134ed98b.chunk.js.map
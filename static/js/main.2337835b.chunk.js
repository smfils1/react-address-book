(this["webpackJsonpreact-addresss-book"]=this["webpackJsonpreact-addresss-book"]||[]).push([[0],{22:function(e,a,t){e.exports={logoText:"NavBar_logoText__35mD2",logo:"NavBar_logo__2uzfx",link:"NavBar_link__vh2Bq"}},57:function(e,a,t){e.exports=t.p+"static/media/default-img.b6681619.png"},66:function(e,a,t){e.exports=t(88)},71:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(25),c=t.n(l),o=(t(71),t(36)),s=t(51),m=t(52),i=t(64),d=t(53),h=t(65),u=t(24),g=t(15),E=function(e){var a=e.children;return r.a.createElement("div",{className:"text-center m-3 display-4"},a)},p=t(18),C=t(28),f=t(8),N=t(19),H=function(e){var a=e.className,t=e.submitHandler,n=e.fnameChangeHandler,l=e.lnameChangeHandler,c=e.phoneChangeHandler,o=e.birthDateChangeHandler;return r.a.createElement(f.a,{className:a},r.a.createElement(f.a.Group,{controlId:"formGroupEmail"},r.a.createElement(f.a.Label,null,"First Name"),r.a.createElement(f.a.Control,{onChange:n,type:"text",name:"fname",placeholder:"Enter First Name"})),r.a.createElement(f.a.Group,{controlId:"formGroupEmail"},r.a.createElement(f.a.Label,null,"Last Name"),r.a.createElement(f.a.Control,{onChange:l,type:"text",placeholder:"Enter Last Name"})),r.a.createElement(f.a.Group,{controlId:"formGroupPassword"},r.a.createElement(f.a.Label,null,"Telephone #"),r.a.createElement(f.a.Control,{onChange:c,type:"tel",placeholder:"Telephone #"})),r.a.createElement(f.a.Group,{controlId:"formGroupPassword"},r.a.createElement(f.a.Label,null,"Birth Date"),r.a.createElement(f.a.Control,{onChange:o,type:"date",placeholder:"Birth Date"})),r.a.createElement(N.LinkContainer,{to:"/"},r.a.createElement(C.a,{type:"submit",onClick:t},"Add Contact")))},b=function(e){var a=e.submitHandler,t=e.fnameChangeHandler,n=e.lnameChangeHandler,l=e.phoneChangeHandler,c=e.birthDateChangeHandler;return r.a.createElement(p.a,null,r.a.createElement(E,null,"Add Contact"),r.a.createElement(H,{className:"m-auto py-4 w-sm-75",submitHandler:a,fnameChangeHandler:t,lnameChangeHandler:n,phoneChangeHandler:l,birthDateChangeHandler:c}))},v=t(21),w=t(58),y=t(20),x=t(57),L=t.n(x),k=t(59),B=function(e){var a=e.FirstName,t=e.LastName,n=e.Birthday,l=e.Telephone,c=e.width,o=e.deleteHandler;return r.a.createElement(v.a,{style:{width:c}},r.a.createElement(w.a,{className:"no-gutters"},r.a.createElement(y.a,{xs:3},r.a.createElement(v.a.Img,{src:L.a})),r.a.createElement(y.a,{xs:7},r.a.createElement("div",{className:"ml-3 mt-2"},r.a.createElement(v.a.Title,null,"".concat(a,"  ").concat(t)),r.a.createElement(v.a.Subtitle,{className:"mb-1 text-muted"},l),r.a.createElement(v.a.Text,null,n))),r.a.createElement(y.a,{xs:2,className:"mt-auto mb-2 text-center"},r.a.createElement(C.a,{value:"".concat(a).concat(t).concat(l).concat(n),onClick:o,variant:"danger"},r.a.createElement(k.a,null)))))},T=t(60),D=function(e){var a=e.contacts,t=e.className,n=e.deleteHandler;return r.a.createElement("div",{className:t},a.map((function(e){return r.a.createElement(B,Object.assign({},e,{deleteHandler:n,width:"25rem",key:Object(T.v4)()}))})))},F=t(34),j=t(26),O=function(e){var a=e.width,t=e.className,n=e.searchChangeHandler;return r.a.createElement(F.a,{style:{width:a},className:t},r.a.createElement(j.a,{placeholder:"Name, Phone, or Birthdate","aria-label":"search","aria-describedby":"basic-addon2",onChange:n}),r.a.createElement(F.a.Append,null,r.a.createElement(F.a.Text,{id:"basic-addon2",className:"bg-primary text-white"},"Search")))},A=function(e){var a=e.contacts,t=e.searchChangeHandler,n=e.deleteHandler;return r.a.createElement(p.a,null,r.a.createElement(O,{searchChangeHandler:t,width:"20rem",className:"mx-auto my-5"}),0===a.length?r.a.createElement("h2",{className:"text-center"},"No Contacts"):r.a.createElement("div",null,r.a.createElement(D,{contacts:a,deleteHandler:n,className:"d-flex flex-wrap  justify-content-around mb-5"})))},G=function(e){var a=e.contacts,t=e.searchChangeHandler,n=e.deleteHandler;return r.a.createElement("div",null,r.a.createElement(E,null,"Contacts"),r.a.createElement(A,{contacts:a,searchChangeHandler:t,deleteHandler:n}))},_=(t(81),t(23)),I=t(35),P=t(62),S=t(22),J=t.n(S),q=function(e){e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark"},r.a.createElement(p.a,null,r.a.createElement(N.LinkContainer,{to:"/"},r.a.createElement(_.a.Brand,{className:J.a.logoText},r.a.createElement(P.a,{className:J.a.logo}),"Address Book")),r.a.createElement(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(I.a,{className:"ml-auto"},r.a.createElement(N.LinkContainer,{exact:!0,to:"/"},r.a.createElement(I.a.Link,{className:J.a.link,active:!1},"Contacts")),r.a.createElement(N.LinkContainer,{to:"/add-contact"},r.a.createElement(I.a.Link,{className:J.a.link,active:!1},"Add Contact")))))))},W=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={submitNewData:!1,newFirstName:"",newLastName:"",newPhone:"",newBirthDate:"",search:"",contacts:[{FirstName:"Cathy",LastName:"Pierce",Birthday:"9/14/1996",Telephone:"200-910-8132"},{FirstName:"Alfonso",LastName:"Cooley",Birthday:"8/10/1973",Telephone:"200-657-9362"},{FirstName:"Victor",LastName:"Gordon",Birthday:"8/3/1970",Telephone:"200-661-9407"},{FirstName:"Colleen",LastName:"Wright",Birthday:"10/28/1967",Telephone:"200-250-7949"},{FirstName:"James",LastName:"Johnston",Birthday:"5/11/1972",Telephone:"200-645-3176"},{FirstName:"Anna",LastName:"Reyes",Birthday:"9/10/1975",Telephone:"200-707-8670"}]},t.getUniqueId=function(e){var a=e.FirstName,t=e.LastName,n=e.Birthday,r=e.Telephone;return"".concat(a).concat(t).concat(r).concat(n)},t.filteredContacts=function(){var e=t.state,a=e.search,n=e.contacts;return n.filter((function(e){return function(e,a){return Object.values(a).some((function(a){return a.trim().toLowerCase().includes(e.trim().toLowerCase())}))}(a,e)}))},t.deleteHandler=function(e){if(window.confirm("Are you sure you want to delete contact?")){var a=e.currentTarget.value;t.setState((function(e){for(var n=Object(o.a)(e.contacts),r=0;r<n.length;r++)if(a===t.getUniqueId(n[r])){n.splice(r,1);break}return{contacts:n}}))}},t.submitHandler=function(e){var a=window.confirm("Are you sure you want to add new contact?");a?t.setState((function(e){var t={FirstName:e.newFirstName,LastName:e.newLastName,Telephone:e.newPhone,Birthday:e.newBirthDate},n=Object(o.a)(e.contacts);return n.push(t),{submitNewData:a,contacts:Object(o.a)(n)}})):(e.preventDefault(),t.setState({submitNewData:a}))},t.inputChangeHandler=function(e,a){var n=e.target.value,r={};r[a]=n,t.setState(r)},t.searchChangeHandler=function(e){t.inputChangeHandler(e,"search")},t.fnameChangeHandler=function(e){t.inputChangeHandler(e,"newFirstName")},t.lnameChangeHandler=function(e){t.inputChangeHandler(e,"newLastName")},t.phoneChangeHandler=function(e){t.inputChangeHandler(e,"newPhone")},t.birthDateChangeHandler=function(e){t.inputChangeHandler(e,"newBirthDate")},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.HashRouter,{basename:"/react-address-book/"},r.a.createElement(q,null),r.a.createElement(g.g,null,r.a.createElement(g.d,{exact:!0,path:"/",render:function(a){return r.a.createElement(G,Object.assign({},a,{contacts:e.filteredContacts(),searchChangeHandler:e.searchChangeHandler,deleteHandler:e.deleteHandler}))}}),r.a.createElement(g.d,{exact:!0,path:"/add-contact",render:function(a){return r.a.createElement(b,Object.assign({},a,{submitHandler:e.submitHandler,fnameChangeHandler:e.fnameChangeHandler,lnameChangeHandler:e.lnameChangeHandler,phoneChangeHandler:e.phoneChangeHandler,birthDateChangeHandler:e.birthDateChangeHandler}))}}),r.a.createElement(g.c,{to:"/"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.2337835b.chunk.js.map
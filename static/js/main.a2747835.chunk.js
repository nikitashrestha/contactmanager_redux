(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t(76)},43:function(e,a,t){},52:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),o=t.n(c),s=(t(43),t(7)),l=t(8),i=t(11),m=t(9),u=t(12),p=t(10),d=(t(50),t(78)),h=t(79),b=t(80),f=(t(52),t(33)),v=t(13),E=t(37),y=t(15),C={contacts:[]},g=Object(v.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CONTACTS":return Object(y.a)({},e,{contacts:a.payload});case"DEL_CONTACTS":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACTS":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"GET_CONTACT":return Object(y.a)({},e,{contact:a.payload});case"UPD_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.email===a.payload.email?e=a.payload:e})});default:return e}}}),N=t(34),O=[f.a],j=Object(v.createStore)(g,{},Object(N.composeWithDevTools)(v.applyMiddleware.apply(void 0,O))),w=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},_=t(77),A={env:"production",basename:"/contactmanager_redux",apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/contactmanager_redux",REACT_APP_BASE_NAME:"/contactmanager_redux"}).REACT_APP_API_KEY},x=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:A.basename,className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};x.defaultProps={branding:"My App"};var k=x,S=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},T=t(6),P=t.n(T),D=t(16),q=t(17),R=t.n(q),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(e){t.props.delContact(e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone_number,s=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,t)}),r.a.createElement(_.a,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}}]),a}(n.Component),G=Object(p.b)(null,{delContact:function(e){return function(){var a=Object(D.a)(P.a.mark(function a(t){return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R.a.delete("https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/".concat(e));case 3:t({type:"DEL_CONTACTS",payload:e}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),t({type:"DEL_CONTACTS",payload:e});case 9:case"end":return a.stop()}},a,this,[[0,6]])}));return function(e){return a.apply(this,arguments)}}()}})(L),z=t(1),I=t.n(z),M=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getContact()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.map(function(e){return r.a.createElement(G,{key:e.id,contact:e})}))}}]),a}(n.Component),W=Object(p.b)(function(e){return{contacts:e.contact.contacts}},{getContact:function(){return function(){var e=Object(D.a)(P.a.mark(function e(a){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts");case 2:t=e.sent,a({type:"GET_CONTACTS",payload:t.data.data});case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()}})(M);M.PropTypes={contact:I.a.array.isRequired,getContact:I.a.func.isRequired};var F=t(14),U=t(35),B=t.n(U),K=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:B()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};K.defaultProps={type:"text"};var X=K,H=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone_number:"",errors:{}},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,r=a.email,c=a.phone_number;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone_number:c};t.props.addContact(o),t.setState({name:"",email:"",phone_number:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{phone:"Phone is required"}});else t.setState({errors:{email:"Email is required"}});else t.setState({errors:{name:"Name is required"}})},t.onChange=function(e){return t.setState(Object(F.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone_number,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(X,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:this.onChange,error:c.name}),r.a.createElement(X,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:t,onChange:this.onChange,error:c.email}),r.a.createElement(X,{label:"Phone",name:"phone_number",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}}]),a}(n.Component);H.prototypes={addContact:I.a.func.isRequired};var J=Object(p.b)(null,{addContact:function(e){return function(){var a=Object(D.a)(P.a.mark(function a(t){var n;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.post("https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts",e,{headers:{"X-Api-Key":"2PLWDCcD8L2Xj869AwzS44yHGlE7xyhi3aFO2ZG2"}});case 2:n=a.sent,console.log(n),t({type:"ADD_CONTACTS",payload:n.data});case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}})(H),V=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone_number:"",errors:{}},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,r=a.email,c=a.phone_number;if(""!==n)if(""!==r)if(""!==c){var o=t.props.match.params.id,s={name:n,email:r,phone_number:c};t.props.updContact(o,s),t.setState({name:"",email:"",phone_number:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{phone:"Phone is required"}});else t.setState({errors:{email:"Email is required"}});else t.setState({errors:{name:"Name is required"}})},t.onChange=function(e){return t.setState(Object(F.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e,a){var t=e.contact,n=t.name,r=t.email,c=t.phone_number;this.setState({name:n,email:r,phone_number:c})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getCont(e)}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone_number,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(X,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:this.onChange,error:c.name}),r.a.createElement(X,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:t,onChange:this.onChange,error:c.email}),r.a.createElement(X,{label:"Phone",name:"phone_number",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}}]),a}(n.Component),Z=Object(p.b)(function(e){return{contact:e.contact.contact}},{getCont:function(e){return function(){var a=Object(D.a)(P.a.mark(function a(t){var n;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.get("https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/".concat(e));case 2:n=a.sent,t({type:"GET_CONTACT",payload:n.data});case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},updContact:function(e,a){return function(){var t=Object(D.a)(P.a.mark(function t(n){var r;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.put("https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/".concat(e),a,{headers:{"X-Api-Key":"2PLWDCcD8L2Xj869AwzS44yHGlE7xyhi3aFO2ZG2"}});case 2:r=t.sent,console.log(r),n({type:"UPD_CONTACT",payload:r.data});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(V);V.PropTypes={contact:I.a.object.isRequired,getCont:I.a.func.isRequired};var Y=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{store:j},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:W}),r.a.createElement(b.a,{exact:!0,path:"/contact/add",component:J}),r.a.createElement(b.a,{exact:!0,path:"/contact/edit/:id",component:Z}),r.a.createElement(b.a,{exact:!0,path:"/about",component:w}),r.a.createElement(b.a,{component:S}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.a2747835.chunk.js.map
(this.webpackJsonponestop=this.webpackJsonponestop||[]).push([[0],{151:function(e,t,a){e.exports=a(258)},156:function(e,t,a){},161:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=a(30),i=a.n(o),s=a(45),m=a(38),u=a(22),d=a(23);a(156);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"HomePageText"},r.a.createElement("p",null,"One Stop For All Your"),r.a.createElement("b",null,r.a.createElement("div",{className:"innerHomePageText"},"Trips",r.a.createElement("br",null),"New Memories",r.a.createElement("br",null),"Destinations",r.a.createElement("br",null),"Reservations",r.a.createElement("br",null),"Joy"))),r.a.createElement("div",{className:"createyourtrip-button"},r.a.createElement(u.b,{to:"/Login"},r.a.createElement("button",{className:"homePageButton"},"Create Your Trip"))),r.a.createElement("div",{className:"video-container"},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/AccurateVapidGrunion?controls=0&hd=1",scrolling:"no",title:"gif"})))},E=(a(161),a(54)),b=a.n(E),f=function(){return b.a.get("/api/trip/usertrips")},g=function(e){return b.a.get("/api/trip/"+e)},v=function(e){return b.a.delete("/api/trip/delete/"+e)},h=function(e,t){return b.a.put("/api/trip/edit/"+e,t)},N=function(e){return b.a.post("/api/trip/createtrip",e)},y=function(){return b.a.post("/api/user/logout")},k=Object(n.createContext)(null);var w=function(){var e=Object(d.g)(),t=Object(n.useContext)(k),a=t.user,l=t.setUser;function c(){return(c=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),console.log("handleLogout function called"),y().then((function(t){console.log(t),200===t.status?(console.log("handlelogout line 19:"+t.data),console.log("handlelogout line 20:"+t.data.message),console.log("handlelogout line 21:"+t.data.logged_in),l((function(e){return t.data.logged_in})),e.push("/"),alert(t.data.message)):(alert("You are not currently logged in."),e.push("/Login"))})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("nav component line 9:"+a),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"nav-wrapper"},r.a.createElement("nav",{id:"nav"},r.a.createElement("div",{className:"nav left"},r.a.createElement("span",{className:"gradient skew"},r.a.createElement("h1",{className:"logo un-skew"},r.a.createElement(u.b,{to:"/"},"OneStop")))),r.a.createElement("div",{className:"nav right"},r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/"},"Home")))),r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/User"},"User")))),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement("button",{className:"btn-nav",onClick:function(e){return c.apply(this,arguments)}},"Logout")))),r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/User"},"UserTrip")))),r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/Create"},"CreateTrip"))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/Login"},"Login")))),r.a.createElement("div",{className:"a-tag nav-link"},r.a.createElement("span",{className:"nav-link-span"},r.a.createElement("span",{className:"u-nav"},r.a.createElement(u.b,{to:"/Signup"},"SignUp")))))))))};a(179);var _=function(){var e=Object(n.useContext)(k),t=e.user,a=e.setUser,l=Object(d.g)();function c(){return(c=Object(s.a)(i.a.mark((function e(n){var r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=document.querySelector("#inputEmail").value.trim(),c=document.querySelector("#inputPassword").value.trim(),!r||!c){e.next=8;break}return e.next=6,fetch("/api/user/login",{method:"POST",body:JSON.stringify({email:r,password:c}),headers:{"Content-Type":"application/json"}});case 6:409===(o=e.sent).status?o.json().then((function(e){alert(e.message)})):o.ok?o.json().then((function(e){console.log(e),console.log(e.message),console.log(e.logged_in),console.log(e.user_id),console.log(e.user_name),a((function(t){return e.logged_in})),console.log("login after state-set:"+t),l.push("/User")})):window.location="/404";case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"card shadow-lg border-0 rounded-lg mt-5"},r.a.createElement("div",{className:"card-header header-color"},r.a.createElement("h3",{className:"text-center font-weight-light my-4"},"Login")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"loginForm"},r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{className:"form-control input-color",id:"inputEmail",type:"email",placeholder:"name@example.com"})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{className:"form-control input-color",id:"inputPassword",type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-check mb-3"},r.a.createElement("input",{className:"form-check-input",id:"inputRememberPassword",type:"checkbox",value:""}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inputRememberPassword"},"Remember Password")),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center mt-4 mb-0"},r.a.createElement("a",{className:"small",href:"/password"},"Forgot Password?"),r.a.createElement("button",{className:"btn btn-primary login-btn",type:"submit",id:"loginBtn",onClick:function(e){return c.apply(this,arguments)}},"Login")))),r.a.createElement("div",{className:"card-footer text-center py-3"},r.a.createElement("div",{className:"small"},r.a.createElement(u.b,{to:"/SignUp"},"Need an account? Sign up!")),r.a.createElement("div",{className:"small"},r.a.createElement(u.b,{to:"/"},"Home"))))))))},C=a(263),x=a(262),j=a(260),O=a(77),D=a.n(O);a(180);var S=function(){var e=Object(d.g)(),t=Object(n.useState)(),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useRef)(!1);function i(e){v(e).then((function(e){f().then((function(e){console.log(e.data.trips),c(e.data.trips)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){return o=!0,f().then((function(e){return o&&c(e.data.trips),null})).catch((function(e){return console.log(e)})),function(){o=!1}}),[l]);var s=[{title:"Id",dataIndex:"id",key:"id"},{title:"Trip",dataIndex:"trip_name",key:"trip_name",filters:[{text:"1",value:"1"}],render:function(e){return r.a.createElement("span",null,e)},width:"30%"},{title:"Start Date",dataIndex:"start_date",key:"start_date",render:function(e){return D.a.utc(e).format("MM-DD-YYYY")}},{title:"End Date",dataIndex:"end_date",key:"end_date",render:function(e){return D.a.utc(e).format("MM-DD-YYYY")}},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return r.a.createElement(r.a.Fragment,null,e.map((function(e){var t=e.length>5?"geekblue":"green",a="None"!==e&&""!==e;return r.a.createElement(C.a,{color:t,key:e,visible:a},e.toUpperCase())})))}},{title:"Actions",key:"action",render:function(t){return r.a.createElement(x.b,{size:"middle"},r.a.createElement("button",{className:"userTripPageButton btn btn-primary btn-sm",onClick:function(){return i(t.id)}},"Delete"),r.a.createElement("button",{className:"userTripPageButton btn btn-primary btn-sm",onClick:function(){return e.push("/edit_trip/"+t.id)}},"Edit Trip"),r.a.createElement("button",{className:"userTripPageButton btn btn-primary btn-sm",onClick:function(){return e.push("/AddDetails/"+t.id)}},"Reservations"))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{dataSource:l,columns:s,rowKey:"id"}),",")};a(253);var T=function(){var e=Object(d.g)();function t(){return(t=Object(s.a)(i.a.mark((function t(a){var n,r,l,c,o,s,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),a.stopPropagation(),n=document.querySelector("#inputName").value.trim(),r=document.querySelector("#inputEmail").value.trim(),l=document.querySelector("#inputPhone").value.trim(),c=document.querySelector("#inputPassword").value.trim(),o=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,s=/^\d{10}$/,n){t.next=13;break}return alert("Name is required."),t.abrupt("return");case 13:if(o.test(r)){t.next=18;break}return alert("Please provide a valid email address for registration."),t.abrupt("return");case 18:if(!(c.length<6)){t.next=23;break}return alert("Password length must be greater than or equal to 6."),t.abrupt("return");case 23:if(s.test(l)){t.next=28;break}return alert("Please provide a 10-digit phone number for registration."),t.abrupt("return");case 28:return t.next=30,fetch("/api/user/signup",{method:"POST",body:JSON.stringify({name:n,email:r,phone:l,password:c}),headers:{"Content-Type":"application/json"}});case 30:m=t.sent,console.log(m),409===m.status?m.json().then((function(e){alert(e.message)})):200===m.status?(m.json().then((function(e){alert(e.message)})),e.push("/Login")):alert("test");case 34:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"card shadow-lg border-0 rounded-lg mt-5"},r.a.createElement("div",{className:"card-header header-color"},r.a.createElement("h3",{className:"text-center font-weight-light my-4"},"Sign Up")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"signupForm"},r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputEmail"},"Name"),r.a.createElement("input",{className:"form-control input-color",id:"inputName",type:"name",placeholder:"Name"})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{className:"form-control input-color",id:"inputEmail",type:"email",placeholder:"name@example.com"})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputPhone"},"Phone number"),r.a.createElement("input",{className:"form-control input-color",id:"inputPhone",type:"phoneNumber",placeholder:"Enter 9 digit phone number"})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{className:"form-control input-color",id:"inputPassword",type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-check mb-3"},r.a.createElement("input",{className:"form-check-input",id:"inputRememberPassword",type:"checkbox",value:""}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inputRememberPassword"},"Remember Password")),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center mt-4 mb-0"},r.a.createElement(u.b,{className:"small forgotpass",to:"/password"},"Forgot Password?"),r.a.createElement("button",{className:"login-btn btn btn-primary",type:"submit",id:"loginBtn",onClick:function(e){return t.apply(this,arguments)}},"Sign Up")))),r.a.createElement("div",{className:"card-footer text-center py-3"},r.a.createElement("div",{className:"small forgotpass"},r.a.createElement(u.b,{to:"/Login"},"Have an account? Login!")),r.a.createElement("div",{className:"small forgotpass"},r.a.createElement(u.b,{to:"/"},"Home"))))))))},A=a(73),F=a(79),P=(a(254),a(147)),R=a(261),U=a(49),I=function(){var e={beforeUpload:function(e){return"image/png"!==e.type&&P.b.error("".concat(e.name," is not a png file")),"image/png"===e.type||R.a.LIST_IGNORE},onChange:function(e){console.log(e.fileList)}};return r.a.createElement(R.a,e,r.a.createElement(U.a,null,"Upload png only"))};var L=function(){var e=Object(d.g)(),t=Object(n.useState)({trip_name:"",start_date:"",end_date:"",tags:[],upload:""}),a=Object(m.a)(t,2),l=a[0],c=a[1];function o(e){var t=e.target,a=t.name,n=t.value;c(Object(F.a)(Object(F.a)({},l),{},Object(A.a)({},a,n))),console.log(l.tags),console.log(l.tags.length)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"back1"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"card shadow-lg border-0 rounded-lg mt-5"},r.a.createElement("div",{className:"card-header header-color"},r.a.createElement("h3",{className:"text-center font-weight-light my-4"},"Create Your Trip")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"signupForm"},r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputName"},"Title of Trip"),r.a.createElement("input",{className:"form-control input-color",id:"inputName",type:"name",name:"trip_name",placeholder:"Trip Name",value:l.trip_name,onChange:o})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputStartDate"},"Start Date"),r.a.createElement("input",{className:"form-control input-color",id:"inputStartDate",type:"date",name:"start_date",placeholder:"Trip Start Date",value:l.start_date,onChange:o})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputEndDate"},"End Date"),r.a.createElement("input",{className:"form-control input-color",id:"inputEndDate",type:"date",name:"end_date",placeholder:"Trip End Date",value:l.end_date,onChange:o})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputTags"},"Tags"),r.a.createElement("input",{className:"form-control input-color",id:"inputTags",type:"Tags",placeholder:"Up to 5 tags",name:"tags",value:l.tags,onChange:o})),r.a.createElement("div",null,r.a.createElement("label",null,"Trip Image"),r.a.createElement("br",null),r.a.createElement(I,{name:"upload",value:l.upload,onChange:o})))),r.a.createElement("div",{className:"card-footer text-center py-3"},r.a.createElement("button",{className:"btn btn-primary btn-md",disabled:!(l.trip_name&&l.start_date&&l.end_date),onClick:function(t){t.preventDefault(),l.trip_name&&l.start_date&&l.end_date&&N({trip_name:l.trip_name,start_date:l.start_date,end_date:l.end_date,tags:l.tags.length?l.tags.split(","):["None"],upload:l.upload}).then((function(t){return e.push("/AddDetails/"+t.data.data.id)})).catch((function(e){return console.log(e)}))}}," Next"))))))))};var Y=function(e){var t=e.children,a=e.id,n=e.onClick;return r.a.createElement("button",{onClick:n,id:a,className:"btn btn-primary btn-md"},t)};a(255);var z=function(e){var t=e.children,a=e.onClick;return r.a.createElement("button",{onClick:a,className:"tripModal btn-primary btn-md"},t)},B=(a(256),function(e){if(!e.show)return null;var t=[{title:"Id",dataIndex:"id",key:"id"},{title:"Reservation",dataIndex:"name",key:"name",filters:[{text:"1",value:"1"}],render:function(e){return r.a.createElement("span",null,e)},width:"30%"},{title:"Confirmation",dataIndex:"confirmation",key:"confirmation",render:function(e){return r.a.createElement("span",null,e)}},{title:"Description",dataIndex:"description",key:"description",render:function(e){return r.a.createElement("span",null,e)}},{title:"Actions",key:"action",render:function(){return r.a.createElement(x.b,{size:"middle"},r.a.createElement("button",{className:"userTripPageButton btn btn-primary btn-sm"},"Delete"),r.a.createElement("button",{className:"userTripPageButton btn btn-primary btn-sm"},"Edit Reservation"))}}];return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Current Reservations")),r.a.createElement("div",{className:"modal-body"},r.a.createElement(j.a,{dataSource:[{id:"1",name:"Airplane",confirmation:654321,description:"Soul plane"}],columns:t,rowKey:"id"})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{onClick:e.onClose,className:"button"},"Close"))))});var M=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],c=function(e){e.preventDefault();var t=document.createElement("br"),a=document.createElement("form");a.setAttribute("id","reservationForm"),a.setAttribute("method","post"),a.setAttribute("action","submit.php");var n=document.createElement("h1");n.setAttribute("class","h1"),n.setAttribute("name","Reservation Type Here"),n.setAttribute("placeholder","Reservation Name");var r=document.createElement("input");r.setAttribute("id","inputFieldAddDetails"),r.setAttribute("class","form-control input-color"),r.setAttribute("type","text"),r.setAttribute("name","ReservationName"),r.setAttribute("placeholder","Reservation Name");var l=document.createElement("input");l.setAttribute("id","inputFieldAddDetails"),l.setAttribute("class","form-control input-color"),l.setAttribute("type","text"),l.setAttribute("name","ConfirmationNumber"),l.setAttribute("placeholder","Confirmation Number");var c=document.createElement("input");c.setAttribute("id","inputFieldAddDetails"),c.setAttribute("class","form-control input-color"),c.setAttribute("type","text"),c.setAttribute("name","description"),c.setAttribute("placeholder","Description or Link");var o=document.createElement("input");o.setAttribute("class","btn btn-primary btn-sm"),o.setAttribute("type","submit"),o.setAttribute("value","Submit"),a.appendChild(n),a.appendChild(t.cloneNode()),a.appendChild(r),a.appendChild(t.cloneNode()),a.appendChild(l),a.appendChild(t.cloneNode()),a.appendChild(c),a.appendChild(t.cloneNode()),a.appendChild(o),document.getElementsByTagName("body")[0].appendChild(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"card shadow-lg border-0 rounded-lg mt-6"},r.a.createElement("div",{className:"card-header header-color"},r.a.createElement("h3",{className:"text-center font-weight-light my-4"},"Add Details")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary btn-md"},"Reservations"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(Y,{type:"air",onClick:c},"Airplane"),r.a.createElement(Y,{type:"car",onClick:c},"Car"),r.a.createElement(Y,{type:"hotel",onClick:c},"Hotel"),r.a.createElement(Y,{type:"restaurant",onClick:c},"Restaurant"),r.a.createElement(Y,{type:"misc",onClick:c},"Other"))),r.a.createElement("h1",{id:"addDetailsRes"},"Type of Reservation Here")),r.a.createElement(z,{onClick:function(){return l(!0)}},"View Reservations"),r.a.createElement(B,{onClose:function(){return l(!1)},show:a}),r.a.createElement("div",{className:"card-footer text-center py-3"},r.a.createElement("button",{className:"btn btn-primary btn-md"},r.a.createElement("div",{id:"addDetailsSubBtn"},r.a.createElement(u.b,{to:"/User"},"Finalize")))))))))},q=(a(257),function(){var e={beforeUpload:function(e){return"image/png"!==e.type&&P.b.error("".concat(e.name," is not a png file")),"image/png"===e.type||R.a.LIST_IGNORE},onChange:function(e){console.log(e.fileList)}};return r.a.createElement(R.a,e,r.a.createElement(U.a,null,"Upload png only"))});var H=function(){var e=Object(d.g)(),t=Object(n.useState)({trip_name:"",start_date:"",end_date:"",tags:[],upload:""}),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(d.h)().id;function i(e){var t=e.target,a=t.name,n=t.value;c(Object(F.a)(Object(F.a)({},l),{},Object(A.a)({},a,n))),console.log(l)}return Object(n.useEffect)((function(){g(o).then((function(e){c({trip_name:e.data.trip_name,start_date:D.a.utc(e.data.start_date).format("yyyy-MM-DD"),end_date:D.a.utc(e.data.end_date).format("yyyy-MM-DD"),tags:e.data.tags.join(", "),upload:e.data.upload})})).catch((function(e){return console.log(e)}))}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"back1"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("div",{className:"card shadow-lg border-0 rounded-lg mt-5"},r.a.createElement("div",{className:"card-header header-color"},r.a.createElement("h3",{className:"text-center font-weight-light my-4"},"Edit Trip")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"signupForm"},r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputName"},"Title of Trip"),r.a.createElement("input",{className:"form-control input-color",id:"inputName",type:"name",name:"trip_name",placeholder:"Trip Name",defaultValue:l.trip_name,onChange:i})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputStartDate"},"Start Date"),r.a.createElement("input",{className:"form-control input-color",id:"inputStartDate",type:"date",name:"start_date",placeholder:"Trip Start Date",defaultValue:l.start_date,onChange:i})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputEndDate"},"End Date"),r.a.createElement("input",{className:"form-control input-color",id:"inputEndDate",type:"date",name:"end_date",placeholder:"Trip End Date",defaultValue:l.end_date,onChange:i})),r.a.createElement("div",{className:"form-floating mb-3"},r.a.createElement("label",{htmlFor:"inputTags"},"Tags"),r.a.createElement("input",{className:"form-control input-color",id:"inputTags",type:"Tags",placeholder:"Up to 5 tags",name:"tags",defaultValue:l.tags,onChange:i})),r.a.createElement("div",null,r.a.createElement("label",null,"Trip Image"),r.a.createElement("br",null),r.a.createElement(q,{name:"upload",defaultValue:l.upload,onChange:i})))),r.a.createElement("div",{className:"card-footer text-center py-3"},r.a.createElement("button",{className:"btn btn-primary btn-md",disabled:!(l.trip_name&&l.start_date&&l.end_date),onClick:function(t){t.preventDefault(),l.trip_name&&l.start_date&&l.end_date&&h(o,{trip_name:l.trip_name,start_date:l.start_date,end_date:l.end_date,tags:l.tags.length?l.tags.split(","):["None"],upload:l.upload}).then(e.push("/User")).catch((function(e){return console.log(e)}))}}," Save Changes"))))))))},V={checkAuthorization:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/user/authorized",{withCredentials:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};var J=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),E=(o[0],o[1],Object(n.useState)(!0)),b=Object(m.a)(E,2);b[0],b[1],console.log("app line 17:"+a),Object(n.useEffect)((function(){l(JSON.parse(window.localStorage.getItem("user"))),g()}),[]),Object(n.useEffect)((function(){window.localStorage.setItem("user",a)}),[a]);var f=Object(n.useMemo)((function(){return{user:a,setUser:l}}),[a,l]);function g(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("requireAuth called"),e.next=3,V.checkAuthorization();case 3:return t=e.sent,console.log(t.data.authorized),e.abrupt("return",t.data.authorized);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("provider value, app line 19:"+f),r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(k.Provider,{value:f},r.a.createElement(w,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(p,null)),r.a.createElement(d.b,{exact:!0,path:"/Login"},r.a.createElement(_,null)),r.a.createElement(d.b,{exact:!0,path:"/SignUp"},r.a.createElement(T,null)),r.a.createElement(d.b,{exact:!0,path:"/User"},g()?r.a.createElement(S,null):r.a.createElement(_,null)),r.a.createElement(d.b,{exact:!0,path:"/Create",render:function(){return g()?r.a.createElement(L,null):r.a.createElement(d.a,{to:"/Login"})}}),r.a.createElement(d.b,{exact:!0,path:"/AddDetails/:id",render:function(){return g()?r.a.createElement(M,null):r.a.createElement(d.a,{to:"/Login"})}}),r.a.createElement(d.b,{exact:!0,path:"/edit_trip/:id",render:function(){return g()?r.a.createElement(H,null):r.a.createElement(d.a,{to:"/Login"})}})))))};c.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.a4a93e81.chunk.js.map
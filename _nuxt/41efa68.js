(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(t,e,n){"use strict";n.r(e),e.default=function(){return{authUser:null}}},222:function(t,e,n){"use strict";n(11),n(3),n(43);var r=n(1),o=n(217),c=n.n(o),l=n(308),d=n.n(l);c.a.extend(d.a),e.a=function(){r.a.filter("phone_number",(function(t){return t?(t=String(t)).slice(0,2)+"-"+t.slice(2,6)+"-"+t.slice(6):"-"})),r.a.filter("time_ago",(function(t){if(!t)return"-";var e=c()(t);return e.isValid()?e.fromNow(!0):"-"}))}},311:function(t,e,n){"use strict";var r=n(483),o=n(491),c=n(486),l=n(484),d=n(212),f=n(210),m=n(138),h=n(57),v=n(211),_=n(120),x=n(488),k=n(490),S=n(487),y=n(485),w=n(306),E=(n(290),{name:"AdminLayout",data:function(){return{drawer:!1,mini:!1,menuGroup:null,menus:[{key:"menu-subheader-admin",subheader:"Admin"},{key:"menu-control",text:"Control",link:"/admin/control",icon:"mdi-gamepad-variant-outline"},{key:"menu-settings-stages-main",text:"Settings Main",link:"/admin/settings/stages/main",icon:"mdi-cog-outline"},{key:"menu-settings-stages-second",text:"Settings Second",link:"/admin/settings/stages/second",icon:"mdi-cog-outline"},{key:"menu-divider-1",divider:!0},{key:"menu-subheader-screen",subheader:"Stage Screen"},{key:"menu-state-main",text:"Main Screen",link:"/stages/main",icon:"mdi-home-floor-1"},{key:"menu-state-second",text:"Second Screen",link:"/stages/second",icon:"mdi-home-floor-2"}]}}}),O=n(63),component=Object(O.a)(E,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{light:""}},[e(k.a,{attrs:{value:!0,"mini-variant":t.mini,app:"",clipped:""}},[e(f.a,{attrs:{dense:"",flat:"",nav:""}},[e(v.a,{attrs:{color:"indigo"},model:{value:t.menuGroup,callback:function(e){t.menuGroup=e},expression:"menuGroup"}},[t._l(t.menus,(function(n){return[n.divider?e(l.a,{key:n.key}):n.subheader?e(y.a,{directives:[{name:"show",rawName:"v-show",value:!t.mini,expression:"!mini"}],key:n.key},[t._v("\n            "+t._s(n.subheader)+"\n          ")]):e(m.a,{key:n.key,attrs:{to:n.link,link:"",nuxt:""}},[e(_.a,[e(d.a,[t._v(t._s(n.icon))])],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"font-weight-regular"},[t._v(t._s(n.text))])],1)],1)]}))],2)],1)],1),t._v(" "),e(o.a,{attrs:{color:"primary","clipped-left":"","clipped-right":"",dark:"",app:""}},[e(c.a,{on:{click:function(e){t.mini=!t.mini}}}),t._v(" "),e(w.a,[t._v("Admin")]),t._v(" "),e(S.a),t._v(" "),e("user-profile")],1),t._v(" "),e(x.a,{staticStyle:{"background-color":"#fafafa"}},[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{UserProfile:n(472).default})},312:function(t,e,n){"use strict";var r=n(483),o=n(488),c={name:"EmptyLayout"},l=n(63),component=Object(l.a)(c,(function(){var t=this._self._c;return t(r.a,{attrs:{light:""}},[t(o.a,{staticStyle:{"background-color":"#fdfdfd"}},[t("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},313:function(t,e,n){"use strict";var r=n(483),o=n(488),c={name:"EmptyLayout"},l=n(63),component=Object(l.a)(c,(function(){var t=this._self._c;return t(r.a,{attrs:{light:""}},[t(o.a,[t("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},331:function(t,e,n){n(332),t.exports=n(333)},370:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(!e.getters.isLoggedIn)return n("/login")}},449:function(t,e,n){"use strict";n.r(e),e.default={onAuthStateChanged:function(t,e){var n=t.commit;e?n("SET_AUTH_USER",e):n("RESET_STORE")}}},450:function(t,e,n){"use strict";n.r(e);var r=n(96),o=n(15),c=(n(51),["allClaims"]);e.default={nuxtServerInit:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var l,d,f,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=t.dispatch,null!==n.$fire.auth){o.next=3;break}throw"nuxtServerInit Example not working - this.$fire.auth cannot be accessed.";case 3:if(null!==e.$fire.auth){o.next=5;break}throw"nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.";case 5:if(null!==e.app.$fire.auth){o.next=7;break}throw"nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.";case 7:if(!(e.res&&e.res.locals&&e.res.locals.user)){o.next=12;break}return d=e.res.locals.user,f=d.allClaims,m=Object(r.a)(d,c),console.info("Auth User verified on server-side. User: ",m,"Claims:",f),o.next=12,l("onAuthStateChanged",{authUser:m,claims:f});case 12:case"end":return o.stop()}}),o)})))()},onAuthStateChanged:function(t,e){var n=t.commit,r=e.authUser;e.claims;r?(console.log("AuthStateChangedAction",r),n("SET_AUTH_USER",r)):n("RESET_STORE")}}},451:function(t,e,n){"use strict";n.r(e),e.default={isLoggedIn:function(t){try{return null!==t.authUser.uid}catch(t){return!1}}}},452:function(t,e,n){"use strict";n.r(e);var r=n(216);e.default={RESET_STORE:function(t){Object.assign(t,Object(r.default)())},SET_AUTH_USER:function(t,e){t.authUser={uid:e.uid,email:e.email}},ON_AUTH_STATE_CHANGED_MUTATION:function(t,e){var n=e.authUser,r=(e.claims,n.uid),o=n.email;t.authUser={uid:r,email:o}}}},472:function(t,e,n){"use strict";n.r(e);var r=n(214),o=n(212),c=n(210),l=n(138),d=n(120),f=n(57),m=n(493),h=(n(28),n(15)),v=(n(51),n(27),n(65),{name:"UserProfile",computed:{profile:function(){return this.$store.state.authUser||{}},name:function(){return(this.profile.email||"").replace(/@.*$/,"")}},methods:{handleOnSignOut:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:t.$router.replace("/login");case 3:case"end":return e.stop()}}),e)})))()}}}),_=n(63),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{"nudge-bottom":16,"nudge-width":140,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.attrs,l=n.on;return[e("div",t._g(t._b({staticClass:"d-flex justify-center align-center"},"div",c,!1),l),[e(r.a,{attrs:{color:"white",size:"32"}},[e(o.a,{attrs:{light:""}},[t._v("mdi-account-outline")])],1),t._v(" "),e("span",{staticClass:"pl-3"},[t._v(t._s(t.name))])],1)]}}])},[t._v(" "),e(c.a,{attrs:{dense:""}},[e(l.a,{on:{click:t.handleOnSignOut}},[e(d.a,[e(o.a,[t._v("mdi-logout")])],1),t._v(" "),e(f.c,[t._v("Sign Out")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},89:function(t,e,n){"use strict";var r=n(492),o=n(482),c={name:"ErrorLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{statusMessages:{401:{title:"Unauthorized",message:"จำเป็นต้องลงชื่อเพื่อเข้าใช้งานก่อน หากมีข้อสงสัยติดต่อผู้ดูแลระบบ"},403:{title:"Access Denied",message:"คุณไม่สามารถเข้าถึงทรัพยากรได้ หากมีข้อสงสัยติดต่อผู้ดูแลระบบ"},404:{title:"404 Not Found",message:"ขอโทษด้วยนะ เราไม่พบหน้าที่คุณต้องการ"},415:{title:"Unsupported Media Type",message:"ไม่รองรับการทำงานบนอุปกรณ์หรือเว็บเบราว์เซอร์"},500:{title:"An error occurred",message:"เรากำลังปรับปรุงเพื่อสิ่งที่ดีกว่า และเราจะกลับมาในไม่ช้า"},503:{title:"An error occurred",message:"เรากำลังปรับปรุงเพื่อสิ่งที่ดีกว่า และเราจะกลับมาในไม่ช้า"}}}},head:function(){return{title:this.title}},computed:{status:function(){return this.error.statusCode in this.statusMessages?this.error.statusCode:500},message:function(){return this.statusMessages[this.status].message},title:function(){return this.statusMessages[this.status].title}},mounted:function(){window.onbeforeunload=null}},l=n(63),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{"fill-height":""}},[e(o.a,{attrs:{align:"center",justify:"center","fill-height":""}},[e("div",{staticClass:"d-inline"},[e("div",{staticClass:"text-h1 font-weight-bold text-center grey--text text--lighten-2"},[t._v("\n        "+t._s(t.status)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-center pt-3 font-weight-light"},[t._v("\n        "+t._s(t.message)+"\n      ")])])])],1)}),[],!1,null,null,null);e.a=component.exports}},[[331,20,6,21]]]);
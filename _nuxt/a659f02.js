(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{484:function(e,t,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("22a9e764",content,!0,{sourceMap:!1})},485:function(e,t,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("b07f0bfc",content,!0,{sourceMap:!1})},489:function(e,t,n){"use strict";n(484)},490:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,'.slot-machine-box{display:flex;justify-content:center;align-items:center;font-size:8rem;font-size:Roboto,"sans-serif"}',""]),e.exports=r},491:function(e,t,n){"use strict";n(485)},492:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,".slot-machine__container[data-v-f873896c]{width:100%;padding:16px}.slot-machine-list[data-v-f873896c]{position:relative;width:100%;display:flex}.slot-machine-list[data-v-f873896c],.slot-machine-list *[data-v-f873896c]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.slot-machine-item[data-v-f873896c]{border:thin solid #eee;border-radius:4px;overflow:hidden}.slot-machine-list>.slot-machine-item+.slot-machine-item[data-v-f873896c]{margin-left:8px}.slot-machine__boxes[data-v-f873896c]{transition:transform 1s ease-in-out}.slot-machine__details[data-v-f873896c]{margin-top:16px;font-size:5rem;text-align:center}",""]),e.exports=r},495:function(e,t,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("3a36172b",content,!0,{sourceMap:!1})},497:function(e,t,n){"use strict";n.r(t);n(27),n(52),n(26),n(9),n(64),n(69);var r=n(15),o=n(80),c=n(13);n(51),n(30),n(55),n(3),n(11),n(10),n(43),n(142),n(28),n(33);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d={name:"SlotMachine",props:{items:{type:Number,default:3},message:{type:String,default:""},hideDetails:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},data:function(){return{id:null,spinning:!1,boxSize:10,boxItems:[1,2,3,4,5,6,7,8,9,0,"X"],ro:null,audio:null}},mounted:function(){var e=this;this.id="slot-machine-"+this._uid,this.roll(),this.ro=new ResizeObserver(this.onResize),this.loadEffect(),setTimeout((function(){e.ro.observe(e.$refs[e.id]),e.onResize()}),100)},beforeDestroy:function(){this.ro.unobserve(this.$refs[this.id])},methods:{onResize:function(){var e=(this.$refs[this.id].offsetWidth-8*(this.items-1))/this.items;this.boxSize=e;var t,n=l(document.querySelectorAll(".slot-machine-box"));try{for(n.s();!(t=n.n()).done;){var r=t.value;r.style.width=this.boxSize+"px",r.style.height=this.boxSize+"px",r.style.fontSize=this.boxSize+"px"}}catch(e){n.e(e)}finally{n.f()}},loadEffect:function(){this.audio=new Audio("/sounds/spinning-eff.mp3")},resetRoll:function(){this.roll()},roll:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,d=document.querySelectorAll(".slot-machine-item");f=Math.min(1,f);var h,m=0,v=l(d);try{var x=function(){var c=h.value;if(n)c.dataset.spinned="0";else if("1"===c.dataset.spinned)return{v:void 0};var l=c.querySelector(".slot-machine-boxes"),d=l.cloneNode(!1),v=["0"];if(!n){r=Math.min(1,r);for(var x=[],i=0;i<r;i++)x.push.apply(x,Object(o.a)(t.boxItems));v.push.apply(v,Object(o.a)(t.shuffle(x))),v.push(e[m]),d.addEventListener("transitionstart",(function(){c.dataset.spinned="1",l.querySelectorAll(".slot-machine-box").forEach((function(e){e.style.filter="blur(1px)"}))}),{once:!0}),d.addEventListener("transitionend",(function(){l.querySelectorAll(".slot-machine-box").forEach((function(e,t){e.style.filter="blur(0)",t>0&&l.removeChild(e)}))}),{once:!0})}for(var w=v.length-1;w>=0;w--){var y=document.createElement("div");y.classList.add("slot-machine-box"),y.style.width=t.boxSize+"px",y.style.height=t.boxSize+"px",y.style.fontSize=t.boxSize+"px",y.textContent=v[w],d.appendChild(y)}d.style.transitionDuration="".concat(f,"s"),d.style.transform="translateY(-".concat((c.clientHeight+1.8)*(v.length-1),"px)"),c.replaceChild(d,l),m+=1};for(v.s();!(h=v.n()).done;){var w=x();if("object"===Object(c.a)(w))return w.v}}catch(e){v.e(e)}finally{v.f()}},shuffle:function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[t-=1];e[t]=e[n],e[n]=r}return e},spin:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,f,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.spinning){t.next=2;break}return t.abrupt("return");case 2:t.prev=2,e.spinning=!0,e.audio&&e.audio.play(),n=("0".repeat(e.items)+code).slice(-e.items).split(""),e.roll(n,!1,1,2),r=Date.now(),o=document.querySelectorAll(".slot-machine-item"),c=l(o),t.prev=10,d=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.value,n=t.querySelector(".slot-machine-boxes"),r=parseInt(n.style.transitionDuration),n.style.transform="translateY(0)",e.next=6,new Promise((function(e){return setTimeout(e,100*r)}));case 6:case"end":return e.stop()}}),e)})),c.s();case 13:if((f=c.n()).done){t.next=17;break}return t.delegateYield(d(),"t0",15);case 15:t.next=13;break;case 17:t.next=22;break;case 19:t.prev=19,t.t1=t.catch(10),c.e(t.t1);case 22:return t.prev=22,c.f(),t.finish(22);case 25:return t.next=27,new Promise((function(e){return setTimeout(e,900)}));case 27:h=Date.now(),e.audio&&e.audio.pause(),e.audio&&(e.audio.currentTime=0),console.log("start",r,"end",h,(h-r)/1e3),t.next=36;break;case 33:t.prev=33,t.t2=t.catch(2),console.error(t.t2);case 36:return t.prev=36,e.spinning=!1,t.finish(36);case 39:case"end":return t.stop()}}),t,null,[[2,33,36,39],[10,19,22,25]])})))()},show:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n=("0".repeat(e.items)+code).slice(-e.items).split(""),e.roll(n,!1,1,0),r=document.querySelectorAll(".slot-machine-item"),o=l(r),t.prev=5,f=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,n=t.querySelector(".slot-machine-boxes"),r=parseInt(n.style.transitionDuration),n.style.transform="translateY(0)",e.next=6,new Promise((function(e){return setTimeout(e,100*r)}));case 6:case"end":return e.stop()}}),e)})),o.s();case 8:if((c=o.n()).done){t.next=12;break}return t.delegateYield(f(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(5),o.e(t.t1);case 17:return t.prev=17,o.f(),t.finish(17);case 20:t.next=25;break;case 22:t.prev=22,t.t2=t.catch(0),console.error(t.t2);case 25:return t.prev=25,e.spinning=!1,t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[0,22,25,28],[5,14,17,20]])})))()}}},h=d,m=(n(489),n(491),n(65)),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t("div",{ref:e.id,staticClass:"slot-machine__container"},[t("div",{staticClass:"slot-machine-list"},[e._l(e.items,(function(i){return[t("div",{key:"item-"+i,staticClass:"slot-machine-item",style:{width:e.boxSize+"px",height:e.boxSize+"px"}},[t("div",{staticClass:"slot-machine-boxes"})])]}))],2),e._v(" "),e.hideDetails?e._e():t("div",{staticClass:"slot-machine__details",style:{fontSize:.7*e.boxSize+"px"}},[e._v("\n    "+e._s(e.visible?e.message:" ")+"\n  ")])])}),[],!1,null,"f873896c",null);t.default=component.exports},521:function(e,t,n){"use strict";n(495)},522:function(e,t,n){var r=n(24),o=n(523),c=n(524),l=r(!1);l.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]);var f=o(c);l.push([e.i,".screen__container[data-v-84e309ca]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:32px 16px;background-color:#fdfdfd}.screen-device[data-v-84e309ca]{position:fixed;bottom:8px;right:16px;text-align:right;font-size:.6rem;color:#ddd}.screen-item[data-v-84e309ca]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff}.screen-winner[data-v-84e309ca]{margin-top:16px}.screen-winner--text[data-v-84e309ca]{font-size:5rem}.screen-btn[data-v-84e309ca]{width:200px;height:200px;background-image:url("+f+");background-position:50%;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-btn[data-v-84e309ca]:disabled{cursor:not-allowed;filter:grayscale(100%)}.screen-mode-btn[data-v-84e309ca]{width:100px;height:100px;background-color:#fff;border:thin solid #ddd;border-radius:4px;margin-left:auto;margin-right:auto;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-mode-btn[data-v-84e309ca]:disabled{cursor:not-allowed;filter:grayscale(100%)}",""]),e.exports=l},523:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},524:function(e,t,n){e.exports=n.p+"img/stage-btn.5961cfb.png"},542:function(e,t,n){"use strict";n.r(t);var r=n(162),o=(n(27),n(41),n(15)),c=(n(43),n(10),n(3),n(51),{name:"StageMainPage",layout:"empty",middleware:"auth",data:function(){return{state:"wait",spinning:!0,showWinner:!1,isSpinDevice:!1,hasRegistrants:!1,slotLen:10,buttonSize:100,backgroundImage:null,winner:{name:"",telno:""},error:{show:!1,messages:[]}}},mounted:function(){this.init(),this.initEvent()},methods:{onResize:function(){var e=window.innerHeight;this.buttonSize=.25*e},init:function(){try{var e=this.loadRegistrants();console.log(e),this.hasRegistrants=e&&e.length>0}catch(e){this.error.messages=[e.message],this.error.show=!1}},initEvent:function(){var e=this;this.$fire.database.ref("stage").on("value",(function(t){var n=t.val();if(e.onOffloadRegistrants(n.offline_version),n.main&&n.main.bg&&(e.backgroundImage=n.main.bg),console.log("spin device",e.isSpinDevice),!e.isSpinDevice){e.state=n.state;var r=n.winner;e.winner=r,console.log(e.state),"spinning"===e.state?e.onSpinning():"spined"===e.state&&(e.onSpined(),e.showWinner=!0)}"0000000000"===e.winner.telno&&(e.$refs.slot_machine&&e.$refs.slot_machine.resetRoll(),e.showWinner=!1)}))},handleOnSpin:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.showWinner=!1,e.isSpinDevice=!0,e.spinning=!1,(n=e.getWinner()).telno){t.next=7;break}return t.abrupt("return");case 7:return e.winner=n,t.next=10,e.$fire.database.ref("stage").update({winner:n,state:"spinning"});case 10:return e.state="spinning",t.next=13,e.onSpinning();case 13:return t.next=15,e.$fire.database.ref("stage").update({state:"spined"});case 15:e.state="spined",t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0);case 21:return t.prev=21,e.showWinner=!0,e.spinning=!1,e.isSpinDevice=!1,t.finish(21);case 26:case"end":return t.stop()}}),t,null,[[0,18,21,26]])})))()},onSpinning:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.winner.telno.slice(0,-3)+"xxx",e.$refs.slot_machine&&e.$refs.slot_machine.resetRoll(),t.next=4,e.$refs.slot_machine.spin(n);case 4:case"end":return t.stop()}}),t)})))()},onSpined:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.winner.telno.slice(0,-3)+"xxx",console.log(e.$refs.slot_machine),e.$refs.slot_machine&&e.$refs.slot_machine.resetRoll(),t.next=5,e.$refs.slot_machine.show(n);case 5:case"end":return t.stop()}}),t)})))()},getWinner:function(){try{var e=this.loadRegistrants();console.log("before get winner",e.length);var t=e[Math.floor(Math.random()*e.length)],filter=e.filter((function(e){return e.telno!==t.telno}));return localStorage.setItem("offline_registrants",JSON.stringify(filter)),this.hasRegistrants=filter&&filter.length>0,console.log("after get winner",filter.length),t}catch(e){console.error(e)}},onOffloadRegistrants:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r=localStorage.getItem("offline_version"),console.log("load registrants",e,r),r===e+""){n.next=11;break}return n.next=6,t.$fire.database.ref("registrants").once("value");case 6:o=n.sent,c=o.val(),localStorage.setItem("offline_registrants",JSON.stringify(c)),localStorage.setItem("offline_version",e),t.hasRegistrants=c&&c.length>0;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()},loadRegistrants:function(){try{return JSON.parse(localStorage.getItem("offline_registrants")||"[]")}catch(e){return[]}}}}),l=(n(521),n(65)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{directives:[{def:r.a,name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],staticClass:"screen__container",style:{backgroundImage:"url("+e.backgroundImage+")"}},[t("div",{staticClass:"screen-item",staticStyle:{width:"95%"}},[t("slot-machine",{ref:"slot_machine",attrs:{items:e.slotLen,message:"คุณ"+e.winner.name,visible:e.showWinner}})],1),e._v(" "),t("div",{staticClass:"screen-item",staticStyle:{flex:"0"}},[t("button",{staticClass:"screen-btn",style:{width:e.buttonSize+"px",height:e.buttonSize+"px"},attrs:{disabled:!e.hasRegistrants||["wait","spined","spinning"].includes(e.state)},on:{click:e.handleOnSpin}})])])}),[],!1,null,"84e309ca",null);t.default=component.exports;installComponents(component,{SlotMachine:n(497).default})}}]);
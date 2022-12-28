(window.webpackJsonp=window.webpackJsonp||[]).push([[28,15],{501:function(t,e,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("47dd1810",content,!0,{sourceMap:!1})},509:function(t,e,n){"use strict";n(501)},510:function(t,e,n){var o=n(24)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),o.push([t.i,'.slot-machine__container[data-v-5800928c]{width:100%;padding:16px 16px 8px;border-radius:4px}.slot-machine-list[data-v-5800928c]{position:relative;width:100%;display:flex;margin-bottom:8px}.slot-machine-list[data-v-5800928c],.slot-machine-list *[data-v-5800928c]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.slot-machine-item[data-v-5800928c]{border-radius:4px;overflow:hidden;background-color:#fff}.slot-machine-list>.slot-machine-item+.slot-machine-item[data-v-5800928c]{margin-left:8px}.slot-machine-boxes[data-v-5800928c]{width:200px;height:200px;overflow:hidden}.slot-machine-box[data-v-5800928c]{display:block;margin:0}.slot-machine-box__item[data-v-5800928c]{display:flex;justify-content:center;align-items:center;font-size:8rem;font-size:Roboto,"sans-serif";margin-left:-2px}.slot-machine-details[data-v-5800928c]{margin-top:8px;font-size:5rem;text-align:center}',""]),t.exports=o},514:function(t,e,n){"use strict";n.r(e);n(182);var o=n(13),r=n(75),l=(n(55),n(74),n(3),n(10),{name:"SlotMachine",props:{message:{type:String,default:""},hideDetails:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},messageColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},slotBackground:{type:String,default:"#ffffff"},backgroundColor:{type:String,default:"#ffffff00"}},data:function(){return{id:null,ro:null,boxWidth:200,boxHeight:200,slots:[],opts:null,startedAt:null,visible:!1}},mounted:function(){var t=this;this.id="slot-machine-"+this._uid,this.ro=new ResizeObserver(this.onResize),this.initSlots(),this.loadEffect(),setTimeout((function(){t.ro.observe(t.$refs[t.id]),t.onResize()}),100)},beforeDestroy:function(){this.ro.unobserve(this.$refs[this.id])},methods:{onResize:function(){var t=this.$refs[this.id].offsetWidth;console.log(t);var e=(t-72)/10;this.boxWidth=e;var n=.1*e;this.boxHeight=e+2*n,console.log("update box size",this.boxWidth,this.boxHeight)},initSlots:function(){this.slots=Object(r.a)(Array(10)).map((function(t){return Object(r.a)(Array(11)).map((function(t,i){return i>9?"X":i}))}))},loadEffect:function(){this.audio=new Audio("/sounds/spinning-eff.mp3?d="+Date.now()),this.audio.preload="auto"},next:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)}},start:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.opts||10!==e.length||(this.visible=!1,this.opts=this.slots.map((function(data,i){var slot=t.$refs.slots[i],n=e[i];return{el:slot.querySelector(".slot-machine-box"),finalPos:n*t.boxHeight,startOffset:2e3+500*Math.random()+500*i,height:data.length*t.boxHeight,duration:9e3+700*i,isFinished:!1}})),this.audio&&this.audio.play(),this.next()(this.animate))},reset:function(){for(var i in this.visible=!1,this.opts=null,this.startedAt=null,this.audio&&(this.audio.currentTime=0),this.slots){this.$refs.slots[i].querySelector(".slot-machine-box").style.transform="translateY(0)"}},show:function(t){for(var i in this.visible=!0,this.slots){var e=t[i],data=this.slots[i],slot=this.$refs.slots[i],n=e*this.boxHeight;console.log("all items",data.length,this.boxHeight,data.length*this.boxHeight);var r=data.length*this.boxHeight,l=-1*Math.floor(n%r),c=slot.querySelector(".slot-machine-box");console.log(c.style.transform,r,n,Object(o.a)(e)),c.style.transform="translateY("+l+"px)"}},animate:function(t){if(this.opts){null===this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach((function(t){if(!t.isFinished){var n=Math.max(t.duration-e,0),o=Math.pow(n,3)/Math.pow(t.duration,3)*t.startOffset,r=-1*Math.floor((o+t.finalPos)%t.height);t.el.style.transform="translateY("+r+"px)",e>t.duration&&(console.log("finished",t,r,t.finalPost),t.isFinished=!0)}})),this.opts.every((function(t){return t.isFinished}))?(this.opts=null,this.startedAt=null,this.audio&&this.audio.pause(),this.audio&&(this.audio.currentTime=0),this.visible=!0,console.log("finished"),this.$emit("end")):this.next()(this.animate)}}}}),c=l,d=(n(509),n(63)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{ref:t.id,staticClass:"slot-machine__container",style:{backgroundColor:t.backgroundColor}},[e("div",{staticClass:"slot-machine-list"},[t._l(t.slots,(function(slot,i){return[e("div",{key:"slot-"+i,ref:"slots",refInFor:!0,staticClass:"slot-machine-item",style:{backgroundColor:t.slotBackground}},[e("div",{staticClass:"slot-machine-boxes",style:{width:t.boxWidth+"px",height:t.boxHeight+"px"}},[e("div",{staticClass:"slot-machine-box"},[t._l(slot,(function(n,o){return[e("div",{key:"item-"+i+o,staticClass:"slot-machine-box__item",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n                "+t._s(n)+"\n              ")])]})),t._v(" "),e("div",{staticClass:"slot-machine-box__item slot-machine-box__item--copy",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n              "+t._s(slot[0])+"\n            ")])],2)])])]}))],2),t._v(" "),t.hideDetails?t._e():e("div",{staticClass:"slot-machine-details",style:{minHeight:.7*t.boxWidth+"px",fontSize:.7*t.boxWidth+"px",color:t.messageColor}},[t._v("\n    "+t._s(t.visible||t.fixed?t.message:" ")+"\n  ")])])}),[],!1,null,"5800928c",null);e.default=component.exports},585:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},586:function(t,e,n){t.exports=n.p+"img/stage-btn.5961cfb.png"},598:function(t,e,n){var content=n(654);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("55f59232",content,!0,{sourceMap:!1})},653:function(t,e,n){"use strict";n(598)},654:function(t,e,n){var o=n(24),r=n(585),l=n(586),c=o(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]);var d=r(l);c.push([t.i,".screen__container[data-v-1d560ac4]{height:100%;margin:auto;background-repeat:no-repeat;background-size:cover;overflow:auto}.screen__wrapper[data-v-1d560ac4]{background-color:#ddd;background-repeat:no-repeat;background-size:cover;background-position:50%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;border:thin solid #fafafa;cursor:none;overflow:hidden}.screen__wrapper[data-v-1d560ac4],.screen__wrapper *[data-v-1d560ac4]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.screen-device[data-v-1d560ac4]{position:fixed;bottom:8px;right:16px;text-align:right;font-size:.6rem;color:#ddd}.screen-item[data-v-1d560ac4]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.screen-winner[data-v-1d560ac4]{margin-top:16px}.screen-winner--text[data-v-1d560ac4]{font-size:5rem}.screen-btn[data-v-1d560ac4]{width:200px;height:200px;background-image:url("+d+");background-position:50%;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-btn[data-v-1d560ac4]:disabled{cursor:not-allowed;filter:grayscale(100%)}.screen-mode-btn[data-v-1d560ac4]{width:100px;height:100px;background-color:#fff;border:thin solid #ddd;border-radius:4px;margin-left:auto;margin-right:auto;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-mode-btn[data-v-1d560ac4]:disabled{cursor:not-allowed;filter:grayscale(100%)}",""]),t.exports=c},697:function(t,e,n){"use strict";n.r(e);var o=n(210),r=n(217),l=(n(28),n(41),n(9),n(17),n(10),n(18),n(75)),c=n(15),d=n(2),h=(n(51),n(74),n(12),n(11),n(3),n(56),n(30),n(31),n(43),n(55),n(183)),f=n.n(h);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"StageMainPage",layout:"empty",middleware:"auth",data:function(){return{state:"wait",loading:!1,spinning:!0,showWinner:!1,isSpinDevice:!1,hasRegistrants:!1,slotLen:10,buttonSize:100,backgroundImage:null,winner:{name:"",telno:""},error:{show:!1,messages:[]},settings:{width:1280,height:720,background:{url:null,image:null,path:null,mode:"color",color:"#DDDDDD"},button:{size:180,padding_top:32,padding_bottom:32,background:{url:null,image:null,path:null}},slot:{width:1240,show_name:!0,name_color:"#000000",number_color:"#000000",number_background:"#ffffff",background_color:"#ffffff00"}},winners:[]}},computed:{screenStyle:function(){var t="color"===this.settings.background.mode?{backgroundColor:this.settings.background.color}:{backgroundImage:"url("+this.settings.background.url+")"};return v({width:this.settings.width+"px",height:this.settings.height+"px"},t)},slotStyle:function(){return{width:this.settings.slot.width+"px"}},screenButtonStyle:function(){return{paddingTop:this.settings.button.padding_top+"px",paddingBottom:this.settings.button.padding_bottom+"px"}},buttonStyle:function(){return{width:this.settings.button.size+"px",height:this.settings.button.size+"px",backgroundImage:"url("+this.settings.button.background.url+")",backgroundColor:this.settings.button.background.url?"transparent":"#ffffff"}}},mounted:function(){this.init(),this.initEvent()},methods:{onResize:function(){var t=window.innerHeight;this.buttonSize=.25*t},init:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$fire.database.ref("winner_logs").once("value");case 4:n=e.sent,o=n.val()||{},r=Object.keys(o).map((function(t){return o[t].telno})),l=(l=t.loadRegistrants()).filter((function(t){return!r.includes(t.telno)})),console.log(l),t.hasRegistrants=l&&l.length>0,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),t.error.messages=[e.t0.message],t.error.show=!1;case 17:return e.prev=17,t.loading=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,13,17,20]])})))()},initEvent:function(){var t=this;this.$fire.database.ref("stage").on("value",(function(e){var n=e.val();if(t.onOffloadRegistrants(n.offline_version),!t.isSpinDevice){t.state=n.state;var o=n.winner;t.winner=o,console.log(t.state),"spinning"===t.state?t.onSpinning():"spined"===t.state&&(t.onSpined(),t.showWinner=!0)}"0000000000"===t.winner.telno&&(t.$refs.slot_machine&&t.$refs.slot_machine.reset(),t.showWinner=!1)})),this.$fire.database.ref("winner_logs").on("value",(function(e){var n=e.val()||{};t.winners=Object.keys(n).map((function(t){return n[t].telno}))})),this.$fire.database.ref("settings/stages/main").on("value",this.loadSettings)},loadSettings:function(t){try{var e=t.val()||{};this.settings.width=e.width?Number(e.width):1280,this.settings.height=e.height?Number(e.height):720;var n=e.background||{};this.settings.background.mode=n.mode||"color",this.settings.background.color=n.color||"#DDDDDD",this.settings.background.url=n.url||null,this.settings.background.path=n.path||null,this.settings.background.image=null;var button=e.button||{};this.settings.button.size=button.size?Number(button.size):180,this.settings.button.padding_top=button.padding_top?Number(button.padding_top):32,this.settings.button.padding_bottom=button.padding_bottom?Number(button.padding_bottom):32;var o=button.background||{};this.settings.button.background.url=o.url||null,this.settings.button.background.path=o.path||null,this.settings.button.background.image=null;var slot=e.slot||{};this.settings.slot.width=slot.width?Number(slot.width):1240,this.settings.slot.show_name=!1!==slot.show_name,this.settings.slot.name_color=slot.name_color||"#000000",this.settings.slot.number_color=slot.number_color||"#000000",this.settings.slot.number_background=slot.number_background||"#ffffff",this.settings.slot.background_color=slot.background_color||"#ffffff00"}catch(t){console.error(t)}},handleOnSpin:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.showWinner=!1,t.isSpinDevice=!0,t.spinning=!1,(n=t.getWinner()).telno){e.next=7;break}return e.abrupt("return");case 7:return t.winner=n,e.next=10,t.$fire.database.ref("stage").update({winner:n,state:"spinning"});case 10:return t.state="spinning",e.next=13,t.onSpinning();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:return e.prev=18,t.showWinner=!0,t.spinning=!1,t.isSpinDevice=!1,e.finish(18);case 23:case"end":return e.stop()}}),e,null,[[0,15,18,23]])})))()},handleOnEndSpin:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.database.ref("stage").update({state:"spined"});case 2:return e.next=4,t.$fire.database.ref("winner_logs").push(v(v({},t.winner),{},{created_at:f()().format("YYYY-MM-DD HH:mm:ss")}));case 4:t.state="spined";case 5:case"end":return e.stop()}}),e)})))()},onSpinning:function(){var t=this,e=[].concat(Object(l.a)(this.winner.telno.slice(0,-3).split("").map((function(t){return Number(t)}))),[10,10,10]);setTimeout((function(){t.$refs.slot_machine&&t.$refs.slot_machine.reset(),t.$refs.slot_machine.start(e)}),100)},onSpined:function(){var t=this,e=[].concat(Object(l.a)(this.winner.telno.slice(0,-3).split("").map((function(t){return Number(t)}))),[10,10,10]);console.log(e,this.$refs.slot_machine),setTimeout((function(){t.$refs.slot_machine&&t.$refs.slot_machine.reset(),t.$refs.slot_machine.show(e)}),100)},getWinner:function(){var t=this;try{var e=this.loadRegistrants();e=e.filter((function(e){return!t.winners.includes(e.telno)})),console.log("before get winner",e.length);var n=e[Math.floor(Math.random()*e.length)],filter=e.filter((function(t){return t.telno!==n.telno}));return this.hasRegistrants=filter&&filter.length>0,n}catch(t){console.error(t)}},onOffloadRegistrants:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var o,r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o=localStorage.getItem("offline_version"),r=localStorage.getItem("offline_registrants"),console.log("load registrants",t,o),o===t+""&&r){n.next=13;break}return n.next=7,e.$fire.database.ref("candidates").once("value");case 7:l=n.sent,c=l.val()||"[]",localStorage.setItem("offline_registrants",JSON.stringify(c)),localStorage.setItem("offline_version",t),e.hasRegistrants=c&&c.length>0,console.log("load random data completed");case 13:n.next=20;break;case 15:n.prev=15,n.t0=n.catch(0),console.error(n.t0),localStorage.removeItem("offline_registrants"),e.hasRegistrants=!1;case 20:case"end":return n.stop()}}),n,null,[[0,15]])})))()},loadRegistrants:function(){try{return JSON.parse(localStorage.getItem("offline_registrants")||"[]")}catch(t){return[]}}}},w=(n(653),n(63)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"screen__container"},[e("div",{staticClass:"screen__wrapper",style:t.screenStyle},[e("div",{staticClass:"screen__slot",style:t.slotStyle},[e("slot-machine",{ref:"slot_machine",attrs:{message:"คุณ"+t.winner.name,"hide-details":!t.settings.slot.show_name,"message-color":t.settings.slot.name_color,color:t.settings.slot.number_color,"slot-background":t.settings.slot.number_background,"background-color":t.settings.slot.background_color},on:{end:t.handleOnEndSpin}})],1),t._v(" "),e("div",{staticClass:"screen__button",style:t.screenButtonStyle},[e("button",{staticClass:"screen-btn",style:t.buttonStyle,attrs:{disabled:!t.hasRegistrants||["wait","spined","spinning"].includes(t.state)},on:{click:t.handleOnSpin}})])]),t._v(" "),e(o.a,{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e("div",{staticClass:"text-center"},[e(r.a,{attrs:{width:"3"}}),t._v(" "),e("div",[t._v("Loading...")])],1)])],1)}),[],!1,null,"1d560ac4",null);e.default=component.exports;installComponents(component,{SlotMachine:n(514).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[29,15],{501:function(t,e,o){var content=o(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("0f8c6015",content,!0,{sourceMap:!1})},508:function(t,e,o){"use strict";o(501)},509:function(t,e,o){var n=o(24)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),n.push([t.i,'.slot-machine__container[data-v-655d5a3c]{width:100%;padding:16px 16px 8px;border-radius:4px}.slot-machine-list[data-v-655d5a3c]{position:relative;width:100%;display:flex}.slot-machine-list[data-v-655d5a3c],.slot-machine-list *[data-v-655d5a3c]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.slot-machine-item[data-v-655d5a3c]{border-radius:4px;overflow:hidden;background-color:#fff}.slot-machine-list>.slot-machine-item+.slot-machine-item[data-v-655d5a3c]{margin-left:8px}.slot-machine-boxes[data-v-655d5a3c]{width:200px;height:200px;overflow:hidden}.slot-machine-box[data-v-655d5a3c]{display:block;margin:0}.slot-machine-box__item[data-v-655d5a3c]{display:flex;justify-content:center;align-items:center;font-size:8rem;font-size:Roboto,"sans-serif";margin-left:-2px}.slot-machine-details[data-v-655d5a3c]{margin-top:16px;font-size:5rem;text-align:center}',""]),t.exports=n},513:function(t,e,o){"use strict";o.r(e);o(182);var n=o(13),r=o(75),l=(o(55),o(74),o(3),o(10),{name:"SlotMachine",props:{message:{type:String,default:""},hideDetails:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},messageColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},slotBackground:{type:String,default:"#ffffff"},backgroundColor:{type:String,default:"#ffffff00"}},data:function(){return{id:null,ro:null,boxWidth:200,boxHeight:200,slots:[],opts:null,startedAt:null,visible:!1}},mounted:function(){var t=this;this.id="slot-machine-"+this._uid,this.ro=new ResizeObserver(this.onResize),this.initSlots(),this.loadEffect(),setTimeout((function(){t.ro.observe(t.$refs[t.id]),t.onResize()}),100)},beforeDestroy:function(){this.ro.unobserve(this.$refs[this.id])},methods:{onResize:function(){var t=this.$refs[this.id].offsetWidth;console.log(t);var e=(t-72)/10;this.boxWidth=e;var o=.1*e;this.boxHeight=e+2*o,console.log("update box size",this.boxWidth,this.boxHeight)},initSlots:function(){this.slots=Object(r.a)(Array(10)).map((function(t){return Object(r.a)(Array(11)).map((function(t,i){return i>9?"X":i}))}))},loadEffect:function(){this.audio=new Audio("/sounds/spinning-eff.mp3?d="+Date.now()),this.audio.preload="auto"},next:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)}},start:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.opts||10!==e.length||(this.visible=!1,this.opts=this.slots.map((function(data,i){var slot=t.$refs.slots[i],o=e[i];return{el:slot.querySelector(".slot-machine-box"),finalPos:o*t.boxHeight,startOffset:2e3+500*Math.random()+500*i,height:data.length*t.boxHeight,duration:9e3+700*i,isFinished:!1}})),this.audio&&this.audio.play(),this.next()(this.animate))},reset:function(){for(var i in this.visible=!1,this.opts=null,this.startedAt=null,this.audio&&(this.audio.currentTime=0),this.slots){this.$refs.slots[i].querySelector(".slot-machine-box").style.transform="translateY(0)"}},show:function(t){for(var i in this.visible=!0,this.slots){var e=t[i],data=this.slots[i],slot=this.$refs.slots[i],o=e*this.boxHeight;console.log("all items",data.length,this.boxHeight,data.length*this.boxHeight);var r=data.length*this.boxHeight,l=-1*Math.floor(o%r),c=slot.querySelector(".slot-machine-box");console.log(c.style.transform,r,o,Object(n.a)(e)),c.style.transform="translateY("+l+"px)"}},animate:function(t){if(this.opts){null===this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach((function(t){if(!t.isFinished){var o=Math.max(t.duration-e,0),n=Math.pow(o,3)/Math.pow(t.duration,3)*t.startOffset,r=-1*Math.floor((n+t.finalPos)%t.height);t.el.style.transform="translateY("+r+"px)",e>t.duration&&(console.log("finished",t,r,t.finalPost),t.isFinished=!0)}})),this.opts.every((function(t){return t.isFinished}))?(this.opts=null,this.startedAt=null,this.audio&&this.audio.pause(),this.audio&&(this.audio.currentTime=0),this.visible=!0,console.log("finished"),this.$emit("end")):this.next()(this.animate)}}}}),c=l,d=(o(508),o(63)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{ref:t.id,staticClass:"slot-machine__container",style:{backgroundColor:t.backgroundColor}},[e("div",{staticClass:"slot-machine-list"},[t._l(t.slots,(function(slot,i){return[e("div",{key:"slot-"+i,ref:"slots",refInFor:!0,staticClass:"slot-machine-item",style:{backgroundColor:t.slotBackground}},[e("div",{staticClass:"slot-machine-boxes",style:{width:t.boxWidth+"px",height:t.boxHeight+"px"}},[e("div",{staticClass:"slot-machine-box"},[t._l(slot,(function(o,n){return[e("div",{key:"item-"+i+n,staticClass:"slot-machine-box__item",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n                "+t._s(o)+"\n              ")])]})),t._v(" "),e("div",{staticClass:"slot-machine-box__item slot-machine-box__item--copy",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n              "+t._s(slot[0])+"\n            ")])],2)])])]}))],2),t._v(" "),t.hideDetails?t._e():e("div",{staticClass:"slot-machine-details",style:{minHeight:.7*t.boxWidth+"px",fontSize:.7*t.boxWidth+"px",color:t.messageColor}},[t._v("\n    "+t._s(t.visible||t.fixed?t.message:" ")+"\n  ")])])}),[],!1,null,"655d5a3c",null);e.default=component.exports},584:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},585:function(t,e,o){t.exports=o.p+"img/stage-btn.5961cfb.png"},597:function(t,e,o){var content=o(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("406b07f0",content,!0,{sourceMap:!1})},654:function(t,e,o){"use strict";o(597)},655:function(t,e,o){var n=o(24),r=o(584),l=o(585),c=n(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]);var d=r(l);c.push([t.i,".screen__container[data-v-3ba67e8e]{height:100%;margin:auto;background-repeat:no-repeat;background-size:cover;overflow:auto}.screen__wrapper[data-v-3ba67e8e]{background-color:#ddd;background-repeat:no-repeat;background-size:cover;background-position:50%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;border:thin solid #fafafa;cursor:none;overflow:hidden}.screen__wrapper[data-v-3ba67e8e],.screen__wrapper *[data-v-3ba67e8e]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.screen-device[data-v-3ba67e8e]{position:fixed;bottom:8px;right:16px;text-align:right;font-size:.6rem;color:#ddd}.screen-item[data-v-3ba67e8e]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.screen-winner[data-v-3ba67e8e]{margin-top:16px}.screen-winner--text[data-v-3ba67e8e]{font-size:5rem}.screen-btn[data-v-3ba67e8e]{width:200px;height:200px;background-image:url("+d+");background-position:50%;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-btn[data-v-3ba67e8e]:disabled{cursor:not-allowed;filter:grayscale(100%)}.screen-mode-btn[data-v-3ba67e8e]{width:100px;height:100px;background-color:#fff;border:thin solid #ddd;border-radius:4px;margin-left:auto;margin-right:auto;cursor:pointer;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;user-select:none}.screen-mode-btn[data-v-3ba67e8e]:disabled{cursor:not-allowed;filter:grayscale(100%)}",""]),t.exports=c},698:function(t,e,o){"use strict";o.r(e);o(28),o(12),o(9),o(11),o(3),o(17),o(10),o(18);var n=o(75),r=o(2);o(31),o(74),o(43),o(30),o(55);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={name:"StageScreen",layout:"empty",middleware:"auth",data:function(){return{state:"wait",winner:{name:"",telno:""},settings:{width:1280,height:720,background:{url:null,image:null,path:null,mode:"color",color:"#DDDDDD"},slot:{width:1240,padding_top:24,name_color:"#000000",number_color:"#000000",number_background:"#ffffff",background_color:"#ffffff00"}}}},computed:{screenStyle:function(){var t="color"===this.settings.background.mode?{backgroundColor:this.settings.background.color}:{backgroundImage:"url("+this.settings.background.url+")"};return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({width:this.settings.width+"px",height:this.settings.height+"px"},t)},slotStyle:function(){return{width:this.settings.slot.width+"px",paddingTop:this.settings.slot.padding_top+"px"}}},mounted:function(){this.initEvent()},methods:{initEvent:function(){var t=this;this.$fire.database.ref("stage").on("value",(function(e){var o=e.val();t.state=o.state;var n=o.winner;t.winner=n,console.log(t.state),"spinning"===t.state?t.onSpinning():"spined"===t.state&&t.onSpined(),"0000000000"===t.winner.telno&&t.$refs.slot_machine&&t.$refs.slot_machine.reset()})),this.$fire.database.ref("settings/stages/screen").on("value",this.loadSettings)},loadSettings:function(t){try{var e=t.val()||{};this.settings.width=e.width||1280,this.settings.height=e.height||720;var o=e.background||{};this.settings.background.mode=o.mode||"color",this.settings.background.color=o.color||"#DDDDDD",this.settings.background.url=o.url||null,this.settings.background.path=o.path||null,this.settings.background.image=null;var slot=e.slot||{};this.settings.slot.width=slot.width||1240,this.settings.slot.padding_top=slot.padding_top||24,this.settings.slot.name_color=slot.name_color||"#000000",this.settings.slot.number_color=slot.number_color||"#000000",this.settings.slot.number_background=slot.number_background||"#ffffff",this.settings.slot.background_color=slot.background_color||"#ffffff00"}catch(t){console.error(t)}},onSpinning:function(){var t=[].concat(Object(n.a)(this.winner.telno.slice(0,-3).split("").map((function(t){return Number(t)}))),[10,10,10]);this.$refs.slot_machine&&this.$refs.slot_machine.reset(),this.$refs.slot_machine.start(t)},onSpined:function(){var t=this,e=[].concat(Object(n.a)(this.winner.telno.slice(0,-3).split("").map((function(t){return Number(t)}))),[10,10,10]);console.log(this.$refs.slot_machine),setTimeout((function(){t.$refs.slot_machine&&t.$refs.slot_machine.reset(),t.$refs.slot_machine.show(e)}),100)}}},d=c,h=(o(654),o(63)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"screen__container"},[e("div",{staticClass:"screen__wrapper",style:t.screenStyle},[e("div",{staticClass:"screen__slot",style:t.slotStyle},[e("slot-machine",{ref:"slot_machine",attrs:{items:t.slotLen,message:"คุณ"+t.winner.name,visible:t.showWinner,"message-color":t.settings.slot.name_color,color:t.settings.slot.number_color,"slot-background":t.settings.slot.number_background,"background-color":t.settings.slot.background_color}})],1)])])}),[],!1,null,"3ba67e8e",null);e.default=component.exports;installComponents(component,{SlotMachine:o(513).default})}}]);
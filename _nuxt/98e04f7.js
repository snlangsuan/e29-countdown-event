(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15],{501:function(t,e,o){var content=o(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("6d9a2fa2",content,!0,{sourceMap:!1})},508:function(t,e,o){"use strict";o(501)},509:function(t,e,o){var n=o(24)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),n.push([t.i,'.slot-machine__container[data-v-e9cfd61e]{width:100%;padding:16px 16px 8px;border-radius:4px}.slot-machine-list[data-v-e9cfd61e]{position:relative;width:100%;display:flex}.slot-machine-list[data-v-e9cfd61e],.slot-machine-list *[data-v-e9cfd61e]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.slot-machine-item[data-v-e9cfd61e]{border-radius:4px;overflow:hidden;background-color:#fff}.slot-machine-list>.slot-machine-item+.slot-machine-item[data-v-e9cfd61e]{margin-left:8px}.slot-machine-boxes[data-v-e9cfd61e]{width:200px;height:200px;overflow:hidden}.slot-machine-box[data-v-e9cfd61e]{display:block;margin:0}.slot-machine-box__item[data-v-e9cfd61e]{display:flex;justify-content:center;align-items:center;font-size:8rem;font-size:Roboto,"sans-serif";margin-left:-2px}.slot-machine-details[data-v-e9cfd61e]{margin-top:16px;font-size:5rem;text-align:center}',""]),t.exports=n},513:function(t,e,o){"use strict";o.r(e);o(182);var n=o(13),l=o(75),r=(o(55),o(74),o(3),o(10),{name:"SlotMachine",props:{message:{type:String,default:""},hideDetails:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},messageColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},slotBackground:{type:String,default:"#ffffff"},backgroundColor:{type:String,default:"#ffffff00"}},data:function(){return{id:null,ro:null,boxWidth:200,boxHeight:200,slots:[],opts:null,startedAt:null,visible:!1}},mounted:function(){var t=this;this.id="slot-machine-"+this._uid,this.ro=new ResizeObserver(this.onResize),this.initSlots(),this.loadEffect(),setTimeout((function(){t.ro.observe(t.$refs[t.id]),t.onResize()}),100)},beforeDestroy:function(){this.ro.unobserve(this.$refs[this.id])},methods:{onResize:function(){var t=this.$refs[this.id].offsetWidth;console.log(t);var e=(t-72)/10;this.boxWidth=e;var o=.1*e;this.boxHeight=e+2*o,console.log("update box size",this.boxWidth,this.boxHeight)},initSlots:function(){this.slots=Object(l.a)(Array(10)).map((function(t){return Object(l.a)(Array(11)).map((function(t,i){return i>9?"X":i}))}))},loadEffect:function(){this.audio=new Audio("/sounds/spinning-eff.mp3?d="+Date.now()),this.audio.preload="auto"},next:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)}},start:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.opts||10!==e.length||(this.visible=!1,this.opts=this.slots.map((function(data,i){var slot=t.$refs.slots[i],o=e[i];return{el:slot.querySelector(".slot-machine-box"),finalPos:o*t.boxHeight,startOffset:2e3+500*Math.random()+500*i,height:data.length*t.boxHeight,duration:9e3+700*i,isFinished:!1}})),this.audio&&this.audio.play(),this.next()(this.animate))},reset:function(){for(var i in this.visible=!1,this.opts=null,this.startedAt=null,this.audio&&(this.audio.currentTime=0),this.slots){this.$refs.slots[i].querySelector(".slot-machine-box").style.transform="translateY(0)"}},show:function(t){for(var i in this.visible=!0,this.slots){var e=t[i],data=this.slots[i],slot=this.$refs.slots[i],o=e*this.boxHeight;console.log("all items",data.length,this.boxHeight,data.length*this.boxHeight);var l=data.length*this.boxHeight,r=-1*Math.floor(o%l),h=slot.querySelector(".slot-machine-box");console.log(h.style.transform,l,o,Object(n.a)(e)),h.style.transform="translateY("+r+"px)"}},animate:function(t){null===this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach((function(t){if(!t.isFinished){var o=Math.max(t.duration-e,0),n=Math.pow(o,3)/Math.pow(t.duration,3)*t.startOffset,l=-1*Math.floor((n+t.finalPos)%t.height);t.el.style.transform="translateY("+l+"px)",e>t.duration&&(console.log("finished",t,l,t.finalPost),t.isFinished=!0)}})),this.opts.every((function(t){return t.isFinished}))?(this.opts=null,this.startedAt=null,this.audio&&this.audio.pause(),this.audio&&(this.audio.currentTime=0),this.visible=!0,console.log("finished"),this.$emit("end")):this.next()(this.animate)}}}),h=r,d=(o(508),o(63)),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{ref:t.id,staticClass:"slot-machine__container",style:{backgroundColor:t.backgroundColor}},[e("div",{staticClass:"slot-machine-list"},[t._l(t.slots,(function(slot,i){return[e("div",{key:"slot-"+i,ref:"slots",refInFor:!0,staticClass:"slot-machine-item",style:{backgroundColor:t.slotBackground}},[e("div",{staticClass:"slot-machine-boxes",style:{width:t.boxWidth+"px",height:t.boxHeight+"px"}},[e("div",{staticClass:"slot-machine-box"},[t._l(slot,(function(o,n){return[e("div",{key:"item-"+i+n,staticClass:"slot-machine-box__item",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n                "+t._s(o)+"\n              ")])]})),t._v(" "),e("div",{staticClass:"slot-machine-box__item slot-machine-box__item--copy",style:{width:t.boxWidth+"px",height:t.boxHeight+"px",fontSize:t.boxWidth+"px"}},[t._v("\n              "+t._s(slot[0])+"\n            ")])],2)])])]}))],2),t._v(" "),t.hideDetails?t._e():e("div",{staticClass:"slot-machine-details",style:{minHeight:.7*t.boxWidth+"px",fontSize:.7*t.boxWidth+"px",color:t.messageColor}},[t._v("\n    "+t._s(t.visible||t.fixed?t.message:" ")+"\n  ")])])}),[],!1,null,"e9cfd61e",null);e.default=component.exports},700:function(t,e,o){"use strict";o.r(e);var n=o(234),l={name:"TestPage"},r=o(63),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-3 red"},[e("slot-machine",{ref:"slot",attrs:{message:"คุณสวัสดี โชคดี"}}),t._v(" "),e("div",{staticClass:"py-3"},[e(n.a,{attrs:{block:""},on:{click:function(e){return t.$refs.slot.start([0,8,5,7,8,6,2,10,10,10])}}},[t._v("Start")]),t._v(" "),e(n.a,{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$refs.slot.reset()}}},[t._v("Reset")]),t._v(" "),e(n.a,{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$refs.slot.show([0,8,5,7,8,6,2,10,10,10])}}},[t._v("Show")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotMachine:o(513).default})}}]);
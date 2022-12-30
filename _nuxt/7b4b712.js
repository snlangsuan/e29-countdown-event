(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{603:function(e,t,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("4d688d4e",content,!0,{sourceMap:!1})},604:function(e,t,n){var content=n(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("132b62a5",content,!0,{sourceMap:!1})},677:function(e,t,n){"use strict";n(603)},678:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,'.slot-machine-box{display:flex;justify-content:center;align-items:center;font-size:8rem;font-size:Roboto,"sans-serif";margin-left:-3px}',""]),e.exports=r},679:function(e,t,n){"use strict";n(604)},680:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,".slot-machine__container[data-v-1c8f1f20]{width:100%;padding:16px 16px 8px;border-radius:4px}.slot-machine-list[data-v-1c8f1f20]{position:relative;width:100%;display:flex}.slot-machine-list[data-v-1c8f1f20],.slot-machine-list *[data-v-1c8f1f20]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.slot-machine-item[data-v-1c8f1f20]{border-radius:4px;overflow:hidden;padding-top:12px;padding-bottom:12px;background-color:#fff}.slot-machine-list>.slot-machine-item+.slot-machine-item[data-v-1c8f1f20]{margin-left:8px}.slot-machine__boxes[data-v-1c8f1f20]{transition:transform 5s ease-in-out}.slot-machine__details[data-v-1c8f1f20]{margin-top:16px;font-size:5rem;text-align:center}",""]),e.exports=r},704:function(e,t,n){"use strict";n.r(t);n(28),n(52),n(27),n(9),n(64),n(69);var r=n(15),o=n(75),l=n(13),c=(n(51),n(30),n(55),n(3),n(10),n(11),n(43),n(147),n(29),n(33),n(183)),f=n.n(c);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m={name:"SlotMachine",props:{items:{type:Number,default:3},message:{type:String,default:""},hideDetails:{type:Boolean,default:!1},visible:{type:Boolean,default:!0},messageColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},slotBackground:{type:String,default:"#ffffff"},backgroundColor:{type:String,default:"#ffffff00"}},data:function(){return{id:null,spinning:!1,boxSize:10,boxItems:[1,2,3,4,5,6,7,8,9,0],ro:null,audio:null}},mounted:function(){var e=this;this.id="slot-machine-"+this._uid,this.roll(),this.ro=new ResizeObserver(this.onResize),this.loadEffect(),setTimeout((function(){e.ro.observe(e.$refs[e.id]),e.onResize()}),100)},beforeDestroy:function(){this.ro.unobserve(this.$refs[this.id])},methods:{onResize:function(){var e=(this.$refs[this.id].offsetWidth-8*(this.items-1))/this.items;this.boxSize=e;var t,n=d(document.querySelectorAll(".slot-machine-box"));try{for(n.s();!(t=n.n()).done;){var r=t.value;r.style.width=this.boxSize+"px",r.style.height=this.boxSize+"px",r.style.fontSize=this.boxSize+"px"}}catch(e){n.e(e)}finally{n.f()}},loadEffect:function(){this.audio=new Audio("/sounds/spinning-eff.mp3")},resetRoll:function(){this.roll()},roll:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,f=document.querySelectorAll(".slot-machine-item");c=Math.max(1,c);var h,m=0,v=d(f);try{var x=function(){var l=h.value;if(n)l.dataset.spinned="0";else if("1"===l.dataset.spinned)return{v:void 0};var f=l.querySelector(".slot-machine-boxes"),d=f.cloneNode(!1),v=["0"];if(!n){r=Math.max(1,r);for(var x=[],i=0;i<r;i++)x.push.apply(x,Object(o.a)(t.boxItems));v.push.apply(v,Object(o.a)(t.shuffle(x))),v.push(e[m]),d.addEventListener("transitionstart",(function(){l.dataset.spinned="1",f.querySelectorAll(".slot-machine-box").forEach((function(e){e.style.filter="blur(1px)"}))}),{once:!0}),d.addEventListener("transitionend",(function(){f.querySelectorAll(".slot-machine-box").forEach((function(e,t){e.style.filter="blur(0)",t>0&&f.removeChild(e)}))}),{once:!0})}for(var y=v.length-1;y>=0;y--){var w=document.createElement("div");w.classList.add("slot-machine-box"),w.style.width=t.boxSize+"px",w.style.height=t.boxSize+"px",w.style.fontSize=t.boxSize+"px",w.textContent=v[y],d.appendChild(w)}d.style.transitionDuration="".concat(c+.5*m,"s"),d.style.transform="translateY(-".concat((l.clientHeight+1.8)*(v.length-1),"px)"),l.replaceChild(d,f),m+=1};for(v.s();!(h=v.n()).done;){var y=x();if("object"===Object(l.a)(y))return y.v}}catch(e){v.e(e)}finally{v.f()}},shuffle:function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),r=e[t-=1];e[t]=e[n],e[n]=r}return e},spin:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.spinning){t.next=2;break}return t.abrupt("return");case 2:t.prev=2,e.spinning=!0,setTimeout((function(){e.audio&&e.audio.play()}),400),n=("0".repeat(e.items)+code).slice(-e.items).split(""),e.roll(n,!1,4,4),r=f()(),o=document.querySelectorAll(".slot-machine-item"),console.log("items",o.length),l=d(o),t.prev=11,h=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,n=t.querySelector(".slot-machine-boxes"),r=parseInt(n.style.transitionDuration),console.log("duration",r),n.style.transform="translateY(0)",e.next=7,new Promise((function(e){return setTimeout(e,20*r)}));case 7:case"end":return e.stop()}}),e)})),l.s();case 14:if((c=l.n()).done){t.next=18;break}return t.delegateYield(h(),"t0",16);case 16:t.next=14;break;case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(11),l.e(t.t1);case 23:return t.prev=23,l.f(),t.finish(23);case 26:return m=f()(),console.log("start",r.format("HH:mm:ss"),"end",m.format("HH:mm:ss"),m.diff(r,"seconds",!0)),t.next=30,new Promise((function(e){return setTimeout(e,7800)}));case 30:e.audio&&e.audio.pause(),e.audio&&(e.audio.currentTime=0),t.next=37;break;case 34:t.prev=34,t.t2=t.catch(2),console.error(t.t2);case 37:return t.prev=37,e.spinning=!1,t.finish(37);case 40:case"end":return t.stop()}}),t,null,[[2,34,37,40],[11,20,23,26]])})))()},show:function(code){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n=("0".repeat(e.items)+code).slice(-e.items).split(""),e.roll(n,!1,1,0),r=document.querySelectorAll(".slot-machine-item"),o=d(r),t.prev=5,c=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.value,n=t.querySelector(".slot-machine-boxes"),r=parseInt(n.style.transitionDuration),n.style.transform="translateY(0)",e.next=6,new Promise((function(e){return setTimeout(e,100*r)}));case 6:case"end":return e.stop()}}),e)})),o.s();case 8:if((l=o.n()).done){t.next=12;break}return t.delegateYield(c(),"t0",10);case 10:t.next=8;break;case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(5),o.e(t.t1);case 17:return t.prev=17,o.f(),t.finish(17);case 20:t.next=25;break;case 22:t.prev=22,t.t2=t.catch(0),console.error(t.t2);case 25:return t.prev=25,e.spinning=!1,t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[0,22,25,28],[5,14,17,20]])})))()}}},v=m,x=(n(677),n(679),n(63)),component=Object(x.a)(v,(function(){var e=this,t=e._self._c;return t("div",{ref:e.id,staticClass:"slot-machine__container",style:{backgroundColor:e.backgroundColor}},[t("div",{staticClass:"slot-machine-list"},[e._l(e.items,(function(i){return[t("div",{key:"item-"+i,staticClass:"slot-machine-item",style:{width:e.boxSize+"px",height:e.boxSize+24+"px",backgroundColor:e.slotBackground,color:e.color}},[t("div",{staticClass:"slot-machine-boxes"})])]}))],2),e._v(" "),e.hideDetails?e._e():t("div",{staticClass:"slot-machine__details",style:{fontSize:.7*e.boxSize+"px",color:e.messageColor}},[e._v("\n    "+e._s(e.visible?e.message:" ")+"\n  ")])])}),[],!1,null,"1c8f1f20",null);t.default=component.exports}}]);
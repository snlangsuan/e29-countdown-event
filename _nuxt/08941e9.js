(window.webpackJsonp=window.webpackJsonp||[]).push([[21,14],{500:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6333e233",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(500)},508:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([t.i,".upload-field[data-v-2b473c87]{position:relative}.upload-field__content[data-v-2b473c87]{border:thin dashed #1967d2!important;border-radius:4px;padding:8px;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:4px;width:100%;height:240px;background-color:#e8f0fe;overflow:hidden;z-index:99;color:#1967d2!important}.upload-field__content *[data-v-2b473c87]{pointer-events:none}.upload-field__content>input[data-v-2b473c87]{display:none}.upload-field__drop-zone[data-v-2b473c87]{text-align:center}.upload-field--error[data-v-2b473c87]{border:2px solid #ff5252!important}.upload-field__disabled[data-v-2b473c87]{position:absolute;top:0;bottom:0;left:0;right:0}.upload-field__details[data-v-2b473c87]{margin-bottom:8px;padding:0 12px;display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.upload-field__details--hide[data-v-2b473c87]{display:none!important}.upload-field--readonly[data-v-2b473c87]{cursor:auto}.upload-field:hover .upload-field__image--remove[data-v-2b473c87]{display:flex}.upload-field:hover .upload-field__image--remove>*[data-v-2b473c87]{pointer-events:auto}.upload-field__image[data-v-2b473c87],.upload-field__image--remove[data-v-2b473c87]{position:absolute;left:0;right:0;top:0;bottom:0}.upload-field__image--remove[data-v-2b473c87]{display:none;z-index:1;background-color:rgba(0,0,0,.25);align-items:center;justify-content:center}.upload-field__normal[data-v-2b473c87]{text-align:center}.upload-field__normal>i[data-v-2b473c87]{color:#1967d2}.upload-field__normal>div>div[data-v-2b473c87]{display:inline-block;text-decoration:underline;cursor:pointer;pointer-events:auto}",""]),t.exports=r},513:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n(214),l=n(178),c=n(521),d=(n(43),n(3),n(28),n(52),n(29),n(27),n(9),n(64),n(69),n(33),n(13)),h=(n(41),n(56),n(536)),v=n.n(h);function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _={name:"UploadImageField",extends:n(502).a,inject:{form:{default:null}},props:{value:{type:String,default:""},src:{type:String,default:""},accept:{type:String,default:"image/png,image/jpg"},imageMaxDimension:{type:Array,default:function(){return[640,640]}}},data:function(){return{localVal:"",original:null,fileCompressor:null,isDragging:!1,processing:!1}},watch:{value:function(t){this.localVal=t}},mounted:function(){this.valid=!0,this.localVal=this.value},methods:{validate:function(t,e){if(t){var n=[];e=e||this.localVal,t&&(this.hasInput=this.hasFocused=!0);var r,o=f(this.rules);try{for(o.s();!(r=o.n()).done;){var l=r.value,c="function"==typeof l?l(e):l;"string"==typeof c?n.push(c):"boolean"!=typeof c&&console.error("Rules should return a string or boolean, received '".concat(Object(d.a)(c),"' instead"),this)}}catch(t){o.e(t)}finally{o.f()}return this.errorBucket=n,this.valid=0===n.length,this.valid}},reset:function(){this.valid=!0,this.localVal="",this.original=null,this.errorBucket=[],this.$emit("input",this.localVal)},resetValidation:function(){this.valid=!0,this.errorBucket=[]},getFile:function(){return this.original},handelOnChangeFile:function(){this.onConvertImage()},handelOnDrop:function(t){if(t.preventDefault(),!this.disabled&&!this.localVal){this.isDragging=!1;var e=t.dataTransfer.files;this.$refs.picture_upload.files=e,this.onConvertImage()}},handelOnDragEnter:function(t){t.preventDefault(),this.disabled||this.localVal||(this.isDragging=!0)},handleOnDragLeave:function(t){this.disabled||this.localVal||(this.isDragging=!1)},handleDragOver:function(t){this.disabled||this.localVal||t.preventDefault()},onConvertImage:function(){var t=this,input=this.$refs.picture_upload.files;if(input&&input.length>0){var e=input[0],n=this.accept.split(",");if(console.log(n,e.type),!n.includes(e.type))return this.errorBucket.push("File not support"),void(this.valid=!1);this.processing=!0;this.fileCompressor=new v.a(e,{convertSize:5e6,maxWidth:this.imageMaxDimension[0],maxHeight:this.imageMaxDimension[1],success:function(e){var n=new FileReader;n.onload=t.onRead,n.readAsDataURL(e),t.original=e}})}},onRead:function(t){console.log("read"),this.localVal=t.target.result,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.$refs.picture_upload.value=null,this.$refs.picture_upload.type="text",this.$refs.picture_upload.type="file",this.validate(!0,this.localVal),this.processing=!1},handelOnRemove:function(){this.localVal="",this.original=null,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.validate(!0,this.localVal)},handelOnRemoveURL:function(){console.log("remove url"),this.$emit("update:src",null),this.$emit("remove")}}},x=(n(507),n(63)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload-field",attrs:{id:t.id}},[t.src?e("div",{staticClass:"upload-field__content"},[e("div",{staticClass:"upload-field__image"},[e("div",{staticClass:"upload-field__image--remove"},[e(o.a,{attrs:{color:"white"},on:{click:t.handelOnRemoveURL}},[t._v("mdi-delete")])],1),t._v(" "),e(l.a,{staticClass:"grey lighten-4",attrs:{src:t.src,width:"100%",height:"100%",contain:""}})],1)]):e("div",{class:["upload-field__content",{"upload-field--error":!t.valid,"upload-field--disabled":t.disabled},{"upload-field-drop":t.isDragging}],attrs:{id:"upload_content"},on:{drop:t.handelOnDrop,dragover:t.handleDragOver,dragenter:t.handelOnDragEnter,dragleave:t.handleOnDragLeave}},[e("input",{ref:"picture_upload",attrs:{type:"file",alt:"",title:"",accept:t.accept},on:{input:t.handelOnChangeFile}}),t._v(" "),t.localVal?e("div",{staticClass:"upload-field__image"},[e("div",{staticClass:"upload-field__image--remove"},[e(o.a,{attrs:{color:"white"},on:{click:t.handelOnRemove}},[t._v("mdi-delete")])],1),t._v(" "),e(l.a,{staticClass:"grey lighten-4",attrs:{src:t.localVal,width:"100%",height:"100%",contain:""}})],1):t.isDragging?e("div",{staticClass:"upload-field__drop-zone"},[e(r.a,{attrs:{color:"#1967d2"}},[e(o.a,{attrs:{dark:""}},[t._v("mdi-tray-arrow-up")])],1),t._v(" "),e("div",{staticClass:"mt-4 text-subtitle-1 font-weight-light"},[t._v("Drop your image to here")])],1):e("div",{staticClass:"upload-field__normal"},[e(o.a,{attrs:{size:"32"}},[t._v("mdi-image")]),t._v(" "),e("div",{staticClass:"text-subtitle-1 font-weight-light"},[t._v("Drag and drop or "),e("div",{on:{click:function(e){return t.$refs.picture_upload.click()}}},[t._v("browse")])])],1)]),t._v(" "),e("div",{class:["upload-field__details",{"upload-field__details--hide":t.hideDetails}]},[t.errorBucket.length<1&&t.hint&&(t.persistentHint||t.isFocused)?e(c.a,{attrs:{value:[t.hint]}}):t._e(),t._v(" "),e(c.a,{attrs:{value:t.errorBucket,color:"error"}})],1)])}),[],!1,null,"2b473c87",null);e.default=component.exports},516:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("63c9496b",content,!0,{sourceMap:!1})},517:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},552:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("197fcea4",content,!0,{sourceMap:!1})},553:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},564:function(t,e,n){var content=n(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("064c7220",content,!0,{sourceMap:!1})},570:function(t,e,n){"use strict";n(12),n(9),n(17),n(10),n(18);var r=n(21),o=n(2),l=(n(3),n(11),n(552),n(7)),c=n(233),d=n(97),h=n(40),v=n(149),f=n(26),m=n(66),_=n(91),x=n(150),k=n(8);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(h.a,x.a,_.a,f.a,Object(v.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],l=n[1];t.$attrs.hasOwnProperty(o)&&Object(k.a)(o,l,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}})},571:function(t,e,n){"use strict";var r=n(2),o=(n(30),n(41),n(55),n(516),n(78)),l=n(40),c=n(26),d=n(66),h=n(101),v=n(7),f=n(0),m=n(8);e.a=Object(v.a)(o.a,l.a,d.a,Object(h.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:c.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,l=t.right,c=t.top;return{paddingBottom:Object(f.h)(n+footer+r),paddingLeft:Object(f.h)(o),paddingRight:Object(f.h)(l),paddingTop:Object(f.h)(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.s)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.s)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},575:function(t,e,n){"use strict";n(9),n(11),n(17),n(18);var r=n(2),o=(n(3),n(30),n(12),n(27),n(65),n(317),n(29),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(33),n(41),n(10),n(77),n(235),n(1)),l=n(76),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(c.G)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(_)};function k(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var h=y.get(c);return h||function(){var t,e;for(e in h=[],x)x[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&h.push(o)}));var o=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,h)}(),t(n.tag,Object(l.a)(data,{class:h}),o)}})},583:function(t,e,n){"use strict";n(564)},584:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([t.i,".setting-item__box[data-v-7afbb43d]{display:flex}.setting-item__box>*+*[data-v-7afbb43d]{padding-left:8px}.setting-item__actions[data-v-7afbb43d]{display:flex;align-items:flex-start;justify-content:flex-end;margin-right:-8px}.setting-item__image[data-v-7afbb43d]{position:relative}.setting-item__image:hover>.setting-item__image--hover[data-v-7afbb43d]{display:flex}.setting-item__image--hover[data-v-7afbb43d]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:none;justify-content:center;align-items:center}",""]),t.exports=r},597:function(t,e,n){var content=n(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6c0dabe8",content,!0,{sourceMap:!1})},608:function(t,e,n){"use strict";n.r(e);var r=n(234),o=n(499),l=n(497),c=n(578),d=n(481),h=n(534),v=n(214),f=n(178),m=n(210),_=n(217),x=n(492),k=n(15),y=(n(3),n(33),n(51),n(587)),w={name:"SettingBackgroundDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{loading:!1,valid:!0,item:{main:{url:null,ref:null,img:null},second:{url:null,ref:null,img:null}}}},watch:{value:function(t){t&&this.loadSettings()}},methods:{loadSettings:function(){var t=this;this.loading=!0,this.$fire.database.ref("stage/settings").once("value",(function(e){var n=e.val()||{},r=n.main,main=void 0===r?{}:r,o=n.second,l=void 0===o?{}:o;t.item.main.url=main.bg_url,t.item.main.path=main.bg_path,t.item.second.url=l.bg_url,t.item.second.path=l.bg_path,t.loading=!1}))},handleOnRemove:function(t){t.delete=t.path,t.url=null,t.path=null},handleOnSave:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:e.prev=2,t.loading=!0,e.t0=regeneratorRuntime.keys(t.item);case 5:if((e.t1=e.t0()).done){e.next=30;break}if(n=e.t1.value,r={bg_url:null,bg_path:null},!t.item[n].delete){e.next=15;break}return console.log("has delete"),e.next=12,t.$fire.storage.ref("/"+t.item[n].delete).delete();case 12:return e.next=14,t.$fire.database.ref("stage/settings").child(n).update(r);case 14:delete t.item[n].delete;case 15:if(!t.item[n].img){e.next=28;break}return console.log("add new image"),o=Object(y.a)()+".jpg",e.next=20,t.$fire.storage.ref("/images/"+o).putString(t.item[n].img,"data_url");case 20:return l=e.sent,e.next=23,l.ref.getDownloadURL();case 23:return r.bg_url=e.sent,r.bg_path=l.metadata.fullPath,delete t.item[n].img,e.next=28,t.$fire.database.ref("stage/settings").child(n).update(r);case 28:e.next=5;break;case 30:t.$emit("input",!1),e.next=36;break;case 33:e.prev=33,e.t2=e.catch(2),console.error(e.t2);case 36:return e.prev=36,t.loading=!1,e.finish(36);case 39:case"end":return e.stop()}}),e,null,[[2,33,36,39]])})))()}}},O=(n(583),n(63)),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{value:t.value,"max-width":"640",persistent:"",scrollable:""}},[e(o.a,[e(l.c,[t._v("Background Settings")]),t._v(" "),e(d.a),t._v(" "),e(l.b,{staticClass:"py-3",staticStyle:{position:"relative"}},[e(h.a,{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"pb-1"},[t._v("Main Screen")]),t._v(" "),t.item.main.url?e("div",{staticClass:"setting-item__image"},[e(f.a,{staticClass:"grey lighten-4",attrs:{src:t.item.main.url,height:"220",contain:""}}),t._v(" "),e("div",{staticClass:"setting-item__image--hover"},[e(r.a,{attrs:{icon:""},on:{click:function(e){return t.handleOnRemove(t.item.main)}}},[e(v.a,{attrs:{color:"white"}},[t._v("mdi-delete")])],1)],1)],1):e("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:t.item.main.img,callback:function(e){t.$set(t.item.main,"img",e)},expression:"item.main.img"}}),t._v(" "),e("div",{staticClass:"pb-1 mt-8"},[t._v("Second Screen")]),t._v(" "),t.item.second.url?e("div",{staticClass:"setting-item__image"},[e(f.a,{staticClass:"grey lighten-4",attrs:{src:t.item.second.url,height:"220",contain:""}}),t._v(" "),e("div",{staticClass:"setting-item__image--hover"},[e(r.a,{attrs:{icon:""},on:{click:function(e){return t.handleOnRemove(t.item.second)}}},[e(v.a,{attrs:{color:"white"}},[t._v("mdi-delete")])],1)],1)],1):e("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:t.item.second.img,callback:function(e){t.$set(t.item.second,"img",e)},expression:"item.second.img"}})],1),t._v(" "),e(m.a,{attrs:{value:t.loading,"z-index":"999",opacity:0,absolute:""}},[e(_.a,{attrs:{color:"primary",width:"3",indeterminate:""}})],1)],1),t._v(" "),e(d.a),t._v(" "),e(l.a,[e(x.a),t._v(" "),e(r.a,{attrs:{disabled:t.loading,text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Cancel")]),t._v(" "),e(r.a,{attrs:{disabled:t.loading,text:""},on:{click:t.handleOnSave}},[t._v("Save")])],1)],1)],1)}),[],!1,null,"7afbb43d",null);e.default=component.exports;installComponents(component,{UploadImageField:n(513).default})},651:function(t,e,n){"use strict";n(597)},652:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([t.i,".screen-winner[data-v-1077ae80]{border:thin solid #efefef;border-radius:4px;min-height:200px;display:flex;align-items:center;justify-content:center;background-color:#fff}.screen-winner__telno[data-v-1077ae80]{text-align:center;font-size:1.6rem;font-weight:500;letter-spacing:.2rem}.screen-winner__name[data-v-1077ae80]{text-align:center;font-size:1.2rem;margin-top:4px}.screen-winner--empty[data-v-1077ae80]{text-align:center;color:#ccc;font-size:1rem}.screen-status[data-v-1077ae80]{text-align:right;padding-bottom:16px}",""]),t.exports=r},696:function(t,e,n){"use strict";n.r(e);var r=n(234),o=n(570),l=n(575),c=n(496),d=n(217),h=n(488),v=n(571),f=(n(28),n(41),n(15)),m=(n(51),n(3),n(55),{name:"AdminControlPage",layout:"admin",data:function(){return{state:"wait",connected:!1,enableLoading:!1,uploadBackgroundDialog:!1,winner:{telno:"",name:""},snackbar:{show:!1,message:"",timeout:3e3,color:"success"}}},computed:{stateColor:function(){switch(this.state){case"wait":return"warning";case"spinning":return"error";case"ready":return"success";default:return"grey"}}},mounted:function(){this.initEvent()},methods:{initEvent:function(){var t=this;this.$fire.database.ref("stage").on("value",(function(e){var n=e.val();t.state=n.state||"wait";var r=n.winner;t.winner.telno=r.telno,t.winner.name=r.name})),this.$fire.database.ref(".info/connected").on("value",(function(e){t.connected=e.val()}))},handleOnEnableRandom:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.enableLoading=!0,e.next=4,t.$fire.database.ref("stage").child("state").set("ready");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:return e.prev=9,t.enableLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},handleOnDisableRandom:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.enableLoading=!0,e.next=4,t.$fire.database.ref("stage").child("state").set("wait");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:return e.prev=9,t.enableLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},handleOnCleanState:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.enableLoading=!0,e.next=4,t.$fire.database.ref("stage").update({state:"wait",winner:{name:"",telno:"0000000000"},offline_version:Date.now(),is_reset:!0});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:return e.prev=9,t.enableLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},handleOnSyncRegistrants:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRegistrants();case 3:return n=e.sent,e.next=6,t.$fire.database.ref("candidates").set(n);case 6:return e.next=8,t.$fire.database.ref("stage").child("offline_version").set(Date.now());case 8:t.snackbar.message="Sync success",t.snackbar.color="success",t.snackbar.show=!0,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t.snackbar.message=e.t0.message,t.snackbar.color="error",t.snackbar.show=!0;case 18:case"end":return e.stop()}}),e,null,[[0,13]])})))()},getRegistrants:function(){return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,300)}));case 2:return t.abrupt("return",[{name:"ทดสอบ ดวงดี",telno:"0823456743"},{name:"มานะ มานี",telno:"0812345654"}]);case 3:case"end":return t.stop()}}),t)})))()},handleOnChangeBackground:function(){this.uploadBackgroundDialog=!0}}}),_=(n(651),n(63)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(c.a,[e(h.a,[e(l.a,{attrs:{cols:"12",md:"8"}},[e("div",{staticClass:"screen-status"},[t.connected?e(o.a,{attrs:{color:t.stateColor,small:"",outlined:""}},[t._v("\n          "+t._s(t.state)+"\n        ")]):e(o.a,{attrs:{color:"error",small:"",outlined:""}},[t._v("offline")])],1),t._v(" "),e("div",{staticClass:"screen-winner"},["spinning"===t.state?e("div",[e(d.a,{attrs:{color:"primary",width:3,indeterminate:""}})],1):t.winner.telno&&t.winner.name?e("div",{staticClass:"screen-winner__content"},[e("div",{staticClass:"screen-winner__telno"},[t._v("\n            "+t._s(t._f("phone_number")(t.winner.telno))+"\n          ")]),t._v(" "),e("div",{staticClass:"screen-winner__name"},[t._v("\n            คุณ"+t._s(t.winner.name)+"\n          ")])]):e("div",{staticClass:"screen-winner__content"},[e("div",{staticClass:"screen-winner--empty"},[t._v("No Winner")])])]),t._v(" "),["wait","spined"].includes(t.state)?e(r.a,{staticClass:"my-3",attrs:{block:"",raised:""},on:{click:t.handleOnEnableRandom}},[t._v("\n        Enable Random\n      ")]):e(r.a,{staticClass:"my-3",attrs:{disabled:["spined","spinning"].includes(t.state),color:"error",block:"",raised:""},on:{click:t.handleOnDisableRandom}},[t._v("\n        Disable Random\n      ")])],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(r.a,{staticClass:"my-3",attrs:{block:""},on:{click:t.handleOnSyncRegistrants}},[t._v("Sync Registrants")]),t._v(" "),e(r.a,{attrs:{color:"error",block:""},on:{click:t.handleOnCleanState}},[t._v("\n        Clean State\n      ")])],1)],1),t._v(" "),e(v.a,{attrs:{timeout:t.snackbar.timeout,color:t.snackbar.color,left:""},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.message)+"\n  ")]),t._v(" "),e("setting-background-dialog",{model:{value:t.uploadBackgroundDialog,callback:function(e){t.uploadBackgroundDialog=e},expression:"uploadBackgroundDialog"}})],1)}),[],!1,null,"1077ae80",null);e.default=component.exports;installComponents(component,{SettingBackgroundDialog:n(608).default})}}]);
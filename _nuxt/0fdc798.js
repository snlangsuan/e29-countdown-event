(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{495:function(e,t,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("6333e233",content,!0,{sourceMap:!1})},499:function(e,t,n){"use strict";n(495)},500:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,".upload-field[data-v-2b473c87]{position:relative}.upload-field__content[data-v-2b473c87]{border:thin dashed #1967d2!important;border-radius:4px;padding:8px;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:4px;width:100%;height:240px;background-color:#e8f0fe;overflow:hidden;z-index:99;color:#1967d2!important}.upload-field__content *[data-v-2b473c87]{pointer-events:none}.upload-field__content>input[data-v-2b473c87]{display:none}.upload-field__drop-zone[data-v-2b473c87]{text-align:center}.upload-field--error[data-v-2b473c87]{border:2px solid #ff5252!important}.upload-field__disabled[data-v-2b473c87]{position:absolute;top:0;bottom:0;left:0;right:0}.upload-field__details[data-v-2b473c87]{margin-bottom:8px;padding:0 12px;display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.upload-field__details--hide[data-v-2b473c87]{display:none!important}.upload-field--readonly[data-v-2b473c87]{cursor:auto}.upload-field:hover .upload-field__image--remove[data-v-2b473c87]{display:flex}.upload-field:hover .upload-field__image--remove>*[data-v-2b473c87]{pointer-events:auto}.upload-field__image[data-v-2b473c87],.upload-field__image--remove[data-v-2b473c87]{position:absolute;left:0;right:0;top:0;bottom:0}.upload-field__image--remove[data-v-2b473c87]{display:none;z-index:1;background-color:rgba(0,0,0,.25);align-items:center;justify-content:center}.upload-field__normal[data-v-2b473c87]{text-align:center}.upload-field__normal>i[data-v-2b473c87]{color:#1967d2}.upload-field__normal>div>div[data-v-2b473c87]{display:inline-block;text-decoration:underline;cursor:pointer;pointer-events:auto}",""]),e.exports=r},506:function(e,t,n){"use strict";n.r(t);var r=n(214),o=n(212),l=n(178),c=n(511),d=(n(43),n(3),n(28),n(52),n(29),n(27),n(9),n(64),n(69),n(33),n(13)),f=(n(41),n(56),n(515)),v=n.n(f);function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var _={name:"UploadImageField",extends:n(498).a,inject:{form:{default:null}},props:{value:{type:String,default:""},src:{type:String,default:""},accept:{type:String,default:"image/png,image/jpg"},imageMaxDimension:{type:Array,default:function(){return[640,640]}}},data:function(){return{localVal:"",original:null,fileCompressor:null,isDragging:!1,processing:!1}},watch:{value:function(e){this.localVal=e}},mounted:function(){this.valid=!0,this.localVal=this.value},methods:{validate:function(e,t){if(e){var n=[];t=t||this.localVal,e&&(this.hasInput=this.hasFocused=!0);var r,o=m(this.rules);try{for(o.s();!(r=o.n()).done;){var l=r.value,c="function"==typeof l?l(t):l;"string"==typeof c?n.push(c):"boolean"!=typeof c&&console.error("Rules should return a string or boolean, received '".concat(Object(d.a)(c),"' instead"),this)}}catch(e){o.e(e)}finally{o.f()}return this.errorBucket=n,this.valid=0===n.length,this.valid}},reset:function(){this.valid=!0,this.localVal="",this.original=null,this.errorBucket=[],this.$emit("input",this.localVal)},resetValidation:function(){this.valid=!0,this.errorBucket=[]},getFile:function(){return this.original},handelOnChangeFile:function(){this.onConvertImage()},handelOnDrop:function(e){if(e.preventDefault(),!this.disabled&&!this.localVal){this.isDragging=!1;var t=e.dataTransfer.files;this.$refs.picture_upload.files=t,this.onConvertImage()}},handelOnDragEnter:function(e){e.preventDefault(),this.disabled||this.localVal||(this.isDragging=!0)},handleOnDragLeave:function(e){this.disabled||this.localVal||(this.isDragging=!1)},handleDragOver:function(e){this.disabled||this.localVal||e.preventDefault()},onConvertImage:function(){var e=this,input=this.$refs.picture_upload.files;if(input&&input.length>0){var t=input[0],n=this.accept.split(",");if(console.log(n,t.type),!n.includes(t.type))return this.errorBucket.push("File not support"),void(this.valid=!1);this.processing=!0;this.fileCompressor=new v.a(t,{convertSize:5e6,maxWidth:this.imageMaxDimension[0],maxHeight:this.imageMaxDimension[1],success:function(t){var n=new FileReader;n.onload=e.onRead,n.readAsDataURL(t),e.original=t}})}},onRead:function(e){console.log("read"),this.localVal=e.target.result,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.$refs.picture_upload.value=null,this.$refs.picture_upload.type="text",this.$refs.picture_upload.type="file",this.validate(!0,this.localVal),this.processing=!1},handelOnRemove:function(){this.localVal="",this.original=null,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.validate(!0,this.localVal)},handelOnRemoveURL:function(){console.log("remove url"),this.$emit("update:src",null),this.$emit("remove")}}},x=(n(499),n(63)),component=Object(x.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"upload-field",attrs:{id:e.id}},[e.src?t("div",{staticClass:"upload-field__content"},[t("div",{staticClass:"upload-field__image"},[t("div",{staticClass:"upload-field__image--remove"},[t(o.a,{attrs:{color:"white"},on:{click:e.handelOnRemoveURL}},[e._v("mdi-delete")])],1),e._v(" "),t(l.a,{staticClass:"grey lighten-4",attrs:{src:e.src,width:"100%",height:"100%",contain:""}})],1)]):t("div",{class:["upload-field__content",{"upload-field--error":!e.valid,"upload-field--disabled":e.disabled},{"upload-field-drop":e.isDragging}],attrs:{id:"upload_content"},on:{drop:e.handelOnDrop,dragover:e.handleDragOver,dragenter:e.handelOnDragEnter,dragleave:e.handleOnDragLeave}},[t("input",{ref:"picture_upload",attrs:{type:"file",alt:"",title:"",accept:e.accept},on:{input:e.handelOnChangeFile}}),e._v(" "),e.localVal?t("div",{staticClass:"upload-field__image"},[t("div",{staticClass:"upload-field__image--remove"},[t(o.a,{attrs:{color:"white"},on:{click:e.handelOnRemove}},[e._v("mdi-delete")])],1),e._v(" "),t(l.a,{staticClass:"grey lighten-4",attrs:{src:e.localVal,width:"100%",height:"100%",contain:""}})],1):e.isDragging?t("div",{staticClass:"upload-field__drop-zone"},[t(r.a,{attrs:{color:"#1967d2"}},[t(o.a,{attrs:{dark:""}},[e._v("mdi-tray-arrow-up")])],1),e._v(" "),t("div",{staticClass:"mt-4 text-subtitle-1 font-weight-light"},[e._v("Drop your image to here")])],1):t("div",{staticClass:"upload-field__normal"},[t(o.a,{attrs:{size:"32"}},[e._v("mdi-image")]),e._v(" "),t("div",{staticClass:"text-subtitle-1 font-weight-light"},[e._v("Drag and drop or "),t("div",{on:{click:function(t){return e.$refs.picture_upload.click()}}},[e._v("browse")])])],1)]),e._v(" "),t("div",{class:["upload-field__details",{"upload-field__details--hide":e.hideDetails}]},[e.errorBucket.length<1&&e.hint&&(e.persistentHint||e.isFocused)?t(c.a,{attrs:{value:[e.hint]}}):e._e(),e._v(" "),t(c.a,{attrs:{value:e.errorBucket,color:"error"}})],1)])}),[],!1,null,"2b473c87",null);t.default=component.exports},514:function(e,t,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("064c7220",content,!0,{sourceMap:!1})},540:function(e,t,n){"use strict";n(514)},541:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,".setting-item__box[data-v-7afbb43d]{display:flex}.setting-item__box>*+*[data-v-7afbb43d]{padding-left:8px}.setting-item__actions[data-v-7afbb43d]{display:flex;align-items:flex-start;justify-content:flex-end;margin-right:-8px}.setting-item__image[data-v-7afbb43d]{position:relative}.setting-item__image:hover>.setting-item__image--hover[data-v-7afbb43d]{display:flex}.setting-item__image--hover[data-v-7afbb43d]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:none;justify-content:center;align-items:center}",""]),e.exports=r},552:function(e,t,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("5a324a12",content,!0,{sourceMap:!1})},557:function(e,t,n){"use strict";n.r(t);var r=n(236),o=n(548),l=n(494),c=n(576),d=n(484),f=n(549),v=n(212),m=n(178),h=n(208),_=n(215),x=n(487),w=n(15),y=(n(3),n(33),n(51),n(544)),k={name:"SettingBackgroundDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{loading:!1,valid:!0,item:{main:{url:null,ref:null,img:null},second:{url:null,ref:null,img:null}}}},watch:{value:function(e){e&&this.loadSettings()}},methods:{loadSettings:function(){var e=this;this.loading=!0,this.$fire.database.ref("stage/settings").once("value",(function(t){var n=t.val()||{},r=n.main,main=void 0===r?{}:r,o=n.second,l=void 0===o?{}:o;e.item.main.url=main.bg_url,e.item.main.path=main.bg_path,e.item.second.url=l.bg_url,e.item.second.path=l.bg_path,e.loading=!1}))},handleOnRemove:function(e){e.delete=e.path,e.url=null,e.path=null},handleOnSave:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:t.prev=2,e.loading=!0,t.t0=regeneratorRuntime.keys(e.item);case 5:if((t.t1=t.t0()).done){t.next=30;break}if(n=t.t1.value,r={bg_url:null,bg_path:null},!e.item[n].delete){t.next=15;break}return console.log("has delete"),t.next=12,e.$fire.storage.ref("/"+e.item[n].delete).delete();case 12:return t.next=14,e.$fire.database.ref("stage/settings").child(n).update(r);case 14:delete e.item[n].delete;case 15:if(!e.item[n].img){t.next=28;break}return console.log("add new image"),o=Object(y.a)()+".jpg",t.next=20,e.$fire.storage.ref("/images/"+o).putString(e.item[n].img,"data_url");case 20:return l=t.sent,t.next=23,l.ref.getDownloadURL();case 23:return r.bg_url=t.sent,r.bg_path=l.metadata.fullPath,delete e.item[n].img,t.next=28,e.$fire.database.ref("stage/settings").child(n).update(r);case 28:t.next=5;break;case 30:e.$emit("input",!1),t.next=36;break;case 33:t.prev=33,t.t2=t.catch(2),console.error(t.t2);case 36:return t.prev=36,e.loading=!1,t.finish(36);case 39:case"end":return t.stop()}}),t,null,[[2,33,36,39]])})))()}}},C=(n(540),n(63)),component=Object(C.a)(k,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{value:e.value,"max-width":"640",persistent:"",scrollable:""}},[t(o.a,[t(l.c,[e._v("Background Settings")]),e._v(" "),t(d.a),e._v(" "),t(l.b,{staticClass:"py-3",staticStyle:{position:"relative"}},[t(f.a,{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"pb-1"},[e._v("Main Screen")]),e._v(" "),e.item.main.url?t("div",{staticClass:"setting-item__image"},[t(m.a,{staticClass:"grey lighten-4",attrs:{src:e.item.main.url,height:"220",contain:""}}),e._v(" "),t("div",{staticClass:"setting-item__image--hover"},[t(r.a,{attrs:{icon:""},on:{click:function(t){return e.handleOnRemove(e.item.main)}}},[t(v.a,{attrs:{color:"white"}},[e._v("mdi-delete")])],1)],1)],1):t("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:e.item.main.img,callback:function(t){e.$set(e.item.main,"img",t)},expression:"item.main.img"}}),e._v(" "),t("div",{staticClass:"pb-1 mt-8"},[e._v("Second Screen")]),e._v(" "),e.item.second.url?t("div",{staticClass:"setting-item__image"},[t(m.a,{staticClass:"grey lighten-4",attrs:{src:e.item.second.url,height:"220",contain:""}}),e._v(" "),t("div",{staticClass:"setting-item__image--hover"},[t(r.a,{attrs:{icon:""},on:{click:function(t){return e.handleOnRemove(e.item.second)}}},[t(v.a,{attrs:{color:"white"}},[e._v("mdi-delete")])],1)],1)],1):t("upload-image-field",{staticStyle:{height:"220px"},attrs:{accept:"image/jpeg"},model:{value:e.item.second.img,callback:function(t){e.$set(e.item.second,"img",t)},expression:"item.second.img"}})],1),e._v(" "),t(h.a,{attrs:{value:e.loading,"z-index":"999",opacity:0,absolute:""}},[t(_.a,{attrs:{color:"primary",width:"3",indeterminate:""}})],1)],1),e._v(" "),t(d.a),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(r.a,{attrs:{disabled:e.loading,text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("Cancel")]),e._v(" "),t(r.a,{attrs:{disabled:e.loading,text:""},on:{click:e.handleOnSave}},[e._v("Save")])],1)],1)],1)}),[],!1,null,"7afbb43d",null);t.default=component.exports;installComponents(component,{UploadImageField:n(506).default})},574:function(e,t,n){"use strict";n(552)},575:function(e,t,n){var r=n(24)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),r.push([e.i,".screen-winner[data-v-1a6f93d6]{border:thin solid #efefef;border-radius:4px;min-height:200px;display:flex;align-items:center;justify-content:center;background-color:#fff}.screen-winner__telno[data-v-1a6f93d6]{text-align:center;font-size:1.6rem;font-weight:500;letter-spacing:.2rem}.screen-winner__name[data-v-1a6f93d6]{text-align:center;font-size:1.2rem;margin-top:4px}.screen-winner--empty[data-v-1a6f93d6]{text-align:center;color:#ccc;font-size:1rem}.screen-status[data-v-1a6f93d6]{text-align:right;padding-bottom:16px}",""]),e.exports=r},610:function(e,t,n){"use strict";n.r(t);var r=n(236),o=n(550),l=n(570),c=n(492),d=n(215),f=n(482),v=n(571),m=(n(28),n(41),n(15)),h=(n(51),n(3),n(55),{name:"AdminControlPage",layout:"admin",data:function(){return{state:"wait",connected:!1,enableLoading:!1,uploadBackgroundDialog:!1,winner:{telno:"",name:""},snackbar:{show:!1,message:"",timeout:3e3,color:"success"}}},computed:{stateColor:function(){switch(this.state){case"wait":return"warning";case"spinning":return"error";case"ready":return"success";default:return"grey"}}},mounted:function(){this.initEvent()},methods:{initEvent:function(){var e=this;this.$fire.database.ref("stage").on("value",(function(t){var n=t.val();e.state=n.state||"wait";var r=n.winner;e.winner.telno=r.telno,e.winner.name=r.name})),this.$fire.database.ref(".info/connected").on("value",(function(t){e.connected=t.val()}))},handleOnEnableRandom:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.enableLoading=!0,t.next=4,e.$fire.database.ref("stage").child("state").set("ready");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:return t.prev=9,e.enableLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},handleOnDisableRandom:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.enableLoading=!0,t.next=4,e.$fire.database.ref("stage").child("state").set("wait");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:return t.prev=9,e.enableLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},handleOnCleanState:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.enableLoading=!0,t.next=4,e.$fire.database.ref("stage").update({state:"wait",winner:{name:"",telno:"0000000000"},offline_version:Date.now(),is_reset:!0});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:return t.prev=9,e.enableLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},handleOnSyncRegistrants:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getRegistrants();case 3:return n=t.sent,t.next=6,e.$fire.database.ref("registrants").set(n);case 6:return t.next=8,e.$fire.database.ref("stage").child("offline_version").set(Date.now());case 8:e.snackbar.message="Sync success",e.snackbar.color="success",e.snackbar.show=!0,t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),e.snackbar.message=t.t0.message,e.snackbar.color="error",e.snackbar.show=!0;case 18:case"end":return t.stop()}}),t,null,[[0,13]])})))()},getRegistrants:function(){return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,300)}));case 2:return e.abrupt("return",[{name:"ทดสอบ ดวงดี",telno:"0823456743"},{name:"มานะ มานี",telno:"0812345654"}]);case 3:case"end":return e.stop()}}),e)})))()},handleOnChangeBackground:function(){this.uploadBackgroundDialog=!0}}}),_=(n(574),n(63)),component=Object(_.a)(h,(function(){var e=this,t=e._self._c;return t(c.a,[t(f.a,[t(l.a,{attrs:{cols:"12",md:"8"}},[t("div",{staticClass:"screen-status"},[e.connected?t(o.a,{attrs:{color:e.stateColor,small:"",outlined:""}},[e._v("\n          "+e._s(e.state)+"\n        ")]):t(o.a,{attrs:{color:"error",small:"",outlined:""}},[e._v("offline")])],1),e._v(" "),t("div",{staticClass:"screen-winner"},["spinning"===e.state?t("div",[t(d.a,{attrs:{color:"primary",width:3,indeterminate:""}})],1):e.winner.telno&&e.winner.name?t("div",{staticClass:"screen-winner__content"},[t("div",{staticClass:"screen-winner__telno"},[e._v("\n            "+e._s(e._f("phone_number")(e.winner.telno))+"\n          ")]),e._v(" "),t("div",{staticClass:"screen-winner__name"},[e._v("\n            คุณ"+e._s(e.winner.name)+"\n          ")])]):t("div",{staticClass:"screen-winner__content"},[t("div",{staticClass:"screen-winner--empty"},[e._v("No Winner")])])]),e._v(" "),["wait","spined"].includes(e.state)?t(r.a,{staticClass:"my-3",attrs:{block:"",raised:""},on:{click:e.handleOnEnableRandom}},[e._v("\n        Enable Random\n      ")]):t(r.a,{staticClass:"my-3",attrs:{disabled:["spined","spinning"].includes(e.state),color:"error",block:"",raised:""},on:{click:e.handleOnDisableRandom}},[e._v("\n        Disable Random\n      ")])],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{staticClass:"my-3",attrs:{block:""},on:{click:e.handleOnSyncRegistrants}},[e._v("Sync Registrants")]),e._v(" "),t(r.a,{attrs:{color:"error",block:""},on:{click:e.handleOnCleanState}},[e._v("\n        Clean State\n      ")])],1)],1),e._v(" "),t(v.a,{attrs:{timeout:e.snackbar.timeout,color:e.snackbar.color,left:""},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n    "+e._s(e.snackbar.message)+"\n  ")]),e._v(" "),t("setting-background-dialog",{model:{value:e.uploadBackgroundDialog,callback:function(t){e.uploadBackgroundDialog=t},expression:"uploadBackgroundDialog"}})],1)}),[],!1,null,"1a6f93d6",null);t.default=component.exports;installComponents(component,{SettingBackgroundDialog:n(557).default})}}]);
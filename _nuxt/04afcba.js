(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{489:function(t,e,l){var content=l(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(25).default)("d1837a12",content,!0,{sourceMap:!1})},499:function(t,e,l){"use strict";l(489)},500:function(t,e,l){var n=l(24)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;600;700&display=swap);"]),n.push([t.i,".upload-field[data-v-4f7c08dd]{position:relative}.upload-field__content[data-v-4f7c08dd]{border:thin dashed #1967d2!important;border-radius:4px;padding:8px;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:4px;width:100%;height:240px;background-color:#e8f0fe;overflow:hidden;z-index:99;color:#1967d2!important}.upload-field__content *[data-v-4f7c08dd]{pointer-events:none}.upload-field__content>input[data-v-4f7c08dd]{display:none}.upload-field__drop-zone[data-v-4f7c08dd]{text-align:center}.upload-field--error[data-v-4f7c08dd]{border:2px solid #ff5252!important}.upload-field__disabled[data-v-4f7c08dd]{position:absolute;top:0;bottom:0;left:0;right:0}.upload-field__details[data-v-4f7c08dd]{margin-bottom:8px;padding:0 12px;display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.upload-field__details--hide[data-v-4f7c08dd]{display:none!important}.upload-field--readonly[data-v-4f7c08dd]{cursor:auto}.upload-field:hover .upload-field__image--remove[data-v-4f7c08dd]{display:flex}.upload-field:hover .upload-field__image--remove>*[data-v-4f7c08dd]{pointer-events:auto}.upload-field__image[data-v-4f7c08dd],.upload-field__image--remove[data-v-4f7c08dd]{position:absolute;left:0;right:0;top:0;bottom:0}.upload-field__image--remove[data-v-4f7c08dd]{display:none;z-index:1;background-color:rgba(0,0,0,.25);align-items:center;justify-content:center}.upload-field__normal[data-v-4f7c08dd]{text-align:center}.upload-field__normal>i[data-v-4f7c08dd]{color:#1967d2}.upload-field__normal>div>div[data-v-4f7c08dd]{display:inline-block;text-decoration:underline;cursor:pointer;pointer-events:auto}",""]),t.exports=n},504:function(t,e,l){"use strict";l.r(e);var n=l(211),o=l(210),r=l(177),d=l(497),c=(l(43),l(3),l(27),l(52),l(28),l(26),l(9),l(64),l(69),l(33),l(13)),f=(l(41),l(56),l(522)),h=l.n(f);function v(t,e){var l="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!l){if(Array.isArray(t)||(l=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var l=Object.prototype.toString.call(t).slice(8,-1);"Object"===l&&t.constructor&&(l=t.constructor.name);if("Map"===l||"Set"===l)return Array.from(t);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){l&&(t=l);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,d=!1;return{s:function(){l=l.call(t)},n:function(){var t=l.next();return r=t.done,t},e:function(t){d=!0,o=t},f:function(){try{r||null==l.return||l.return()}finally{if(d)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,l=new Array(e);i<e;i++)l[i]=t[i];return l}var _={name:"UploadImageField",extends:l(490).a,inject:{form:{default:null}},props:{value:{type:String,default:""},accept:{type:String,default:"image/png,image/jpg"},imageMaxDimension:{type:Array,default:function(){return[640,640]}}},data:function(){return{localVal:"",original:null,fileCompressor:null,isDragging:!1,processing:!1}},watch:{value:function(t){this.localVal=t}},mounted:function(){this.valid=!0,this.localVal=this.value},methods:{validate:function(t,e){if(t){var l=[];e=e||this.localVal,t&&(this.hasInput=this.hasFocused=!0);var n,o=v(this.rules);try{for(o.s();!(n=o.n()).done;){var r=n.value,d="function"==typeof r?r(e):r;"string"==typeof d?l.push(d):"boolean"!=typeof d&&console.error("Rules should return a string or boolean, received '".concat(Object(c.a)(d),"' instead"),this)}}catch(t){o.e(t)}finally{o.f()}return this.errorBucket=l,this.valid=0===l.length,this.valid}},reset:function(){this.valid=!0,this.localVal="",this.original=null,this.errorBucket=[],this.$emit("input",this.localVal)},resetValidation:function(){this.valid=!0,this.errorBucket=[]},getFile:function(){return this.original},handelOnChangeFile:function(){this.onConvertImage()},handelOnDrop:function(t){if(t.preventDefault(),!this.disabled&&!this.localVal){this.isDragging=!1;var e=t.dataTransfer.files;this.$refs.picture_upload.files=e,this.onConvertImage()}},handelOnDragEnter:function(t){t.preventDefault(),this.disabled||this.localVal||(this.isDragging=!0)},handleOnDragLeave:function(t){this.disabled||this.localVal||(this.isDragging=!1)},handleDragOver:function(t){this.disabled||this.localVal||t.preventDefault()},onConvertImage:function(){var t=this,input=this.$refs.picture_upload.files;if(input&&input.length>0){var e=input[0],l=this.accept.split(",");if(console.log(l,e.type),!l.includes(e.type))return this.errorBucket.push("File not support"),void(this.valid=!1);this.processing=!0;this.fileCompressor=new h.a(e,{convertSize:5e6,maxWidth:this.imageMaxDimension[0],maxHeight:this.imageMaxDimension[1],success:function(e){var l=new FileReader;l.onload=t.onRead,l.readAsDataURL(e),t.original=e}})}},onRead:function(t){console.log("read"),this.localVal=t.target.result,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.$refs.picture_upload.value=null,this.$refs.picture_upload.type="text",this.$refs.picture_upload.type="file",this.validate(!0,this.localVal),this.processing=!1},handelOnRemove:function(){this.localVal="",this.original=null,this.$emit("input",this.localVal),this.$emit("change",this.localVal,this.original),this.validate(!0,this.localVal)}}},y=(l(499),l(63)),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload-field",attrs:{id:t.id}},[e("div",{class:["upload-field__content",{"upload-field--error":!t.valid,"upload-field--disabled":t.disabled},{"upload-field-drop":t.isDragging}],attrs:{id:"upload_content"},on:{drop:t.handelOnDrop,dragover:t.handleDragOver,dragenter:t.handelOnDragEnter,dragleave:t.handleOnDragLeave}},[e("input",{ref:"picture_upload",attrs:{type:"file",alt:"",title:"",accept:t.accept},on:{input:t.handelOnChangeFile}}),t._v(" "),t.localVal?e("div",{staticClass:"upload-field__image"},[e("div",{staticClass:"upload-field__image--remove"},[e(o.a,{attrs:{color:"white"},on:{click:t.handelOnRemove}},[t._v("mdi-delete")])],1),t._v(" "),e(r.a,{staticClass:"grey lighten-4",attrs:{src:t.localVal,width:"100%",height:"100%",contain:""}})],1):t.isDragging?e("div",{staticClass:"upload-field__drop-zone"},[e(n.a,{attrs:{color:"#1967d2"}},[e(o.a,{attrs:{dark:""}},[t._v("mdi-tray-arrow-up")])],1),t._v(" "),e("div",{staticClass:"mt-4 text-subtitle-1 font-weight-light"},[t._v("Drop your image to here")])],1):e("div",{staticClass:"upload-field__normal"},[e(o.a,{attrs:{size:"32"}},[t._v("mdi-image")]),t._v(" "),e("div",{staticClass:"text-subtitle-1 font-weight-light"},[t._v("Drag and drop or "),e("div",{on:{click:function(e){return t.$refs.picture_upload.click()}}},[t._v("browse")])])],1)]),t._v(" "),e("div",{class:["upload-field__details",{"upload-field__details--hide":t.hideDetails}]},[t.errorBucket.length<1&&t.hint&&(t.persistentHint||t.isFocused)?e(d.a,{attrs:{value:[t.hint]}}):t._e(),t._v(" "),e(d.a,{attrs:{value:t.errorBucket,color:"error"}})],1)])}),[],!1,null,"4f7c08dd",null);e.default=component.exports}}]);
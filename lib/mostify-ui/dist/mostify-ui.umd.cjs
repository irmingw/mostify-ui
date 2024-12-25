/* @license Mostify UI By <tmwang>*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Mostify={},e.Vue)}(this,(function(e,t){"use strict";const a=Symbol("muiConfigProvider"),l=t.defineComponent({name:"MIcon",props:{name:{type:String,default:""},size:{type:String,default:"16px"},color:{type:String,default:"currentColor"}},setup(e,{emit:a}){const l=t.computed((()=>`mostifyiconfont m-icon-${e.name}`));return()=>t.createVNode("i",{class:l.value,onClick:e=>a("click",e),style:{color:e.color,fontSize:e.size?e.size:"16px",lineHeight:"inherit"}},null)}}),o=t.defineComponent({name:"MButton",props:{type:{type:String,default:"default"},size:{type:String,default:"small"},shape:{type:String,default:""},disabled:Boolean,loading:Boolean,border:Boolean,light:Boolean,leftIcon:String,rightIcon:String,block:{type:Boolean,default:!1}},emits:["click","focus","blur"],setup(e,{slots:o,emit:n}){const{btnClass:i,contentShow:r,setClickXEvent:s,btnRef:d,rippleRef:c}=(e=>{const l=t.ref(null),o=t.ref(null),n=t.inject(a,{size:""}),i=t.computed((()=>{const t=["m-button"];e.type&&t.push("m-button-type-"+e.type);const a=e.size||n.size||"small";return t.push("m-button-size-"+a),e.shape&&t.push("m-button-shape-"+e.shape),e.loading&&t.push("is-loading"),e.disabled&&t.push("is-disabled"),t})),r=t.computed((()=>!(e.loading&&["circle","square"].includes(e.shape))));let s=null;return{btnClass:i,contentShow:r,setClickXEvent:async e=>{if(!l.value)return;s||(s=document.createElement("div"),s.className="m-button-ripple");const t=s.cloneNode();l.value.appendChild(t);const a=o.value.getBoundingClientRect(),n=Math.max(a.width,a.height),i=n+"px",r=i;let d=(e.clientY-a.top-n/2).toFixed(0)+"px",c=(e.clientX-a.left-n/2).toFixed(0)+"px";d=.5*(a.height-n)+"px",Math.abs(a.width-a.height)<12&&(c=.5*(a.width-n)+"px"),t.setAttribute("style",`width:${i};height:${r};top:${d};left:${c};`),t.classList.add("m-button-ripple-active"),await new Promise((e=>setTimeout(e,500))),t.remove()},btnRef:o,rippleRef:l}})(e);function u(t,a){t.preventDefault(),e.loading||e.disabled||n(a,t)}const p=t=>{t.preventDefault(),e.loading||e.disabled||s(t)};return()=>{const a=o.leftIcon?o.leftIcon():e.leftIcon?t.createVNode(l,{name:e.leftIcon},null):"",n=o.rightIcon?o.rightIcon():e.rightIcon?t.createVNode(l,{name:e.rightIcon},null):"";return t.createVNode("button",{class:i.value,onMousedown:p,ref:d,style:{"--border-width":e.border?"1px":"0px",width:e.block?"100%":""},"data-light":e.light?"on":"off",onClick:e=>u(e,"click"),onFocus:e=>u(e,"focus"),onBlur:e=>u(e,"blur")},[!e.loading&&!e.disabled&&t.createVNode("div",{class:"m-button-ripple-wrapper",ref:c},null),t.createVNode("span",{class:"m-button-main"},[e.loading&&t.createVNode("span",{class:"m-button-loading-icon-wrapper",style:{marginRight:r.value?"8px":0}},[t.createVNode("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",class:"m-button-icon-loading"},[t.createVNode("path",{d:"M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z",fill:"currentColor"},null)])]),r.value&&t.createVNode(t.Fragment,null,[a&&t.createVNode("span",{class:"m-button-icon-left"},[a]),o.default&&o.default(),n&&t.createVNode("span",{class:"m-button-icon-right"},[n])])])])}}}),n=t.defineComponent({name:"MSpace",props:{size:{type:String,default:""},layout:{type:String,validator:e=>["x","y"].includes(e),default:"x"},alignItems:{type:String,default:"flex-start"}},setup(e,{slots:a}){const l=t.computed((()=>"y"===e.layout?"m-space-y":"m-space-x")),o=t.computed((()=>a.default?a.default():[]));return()=>{var a;return t.createVNode("div",{class:["m-space",l.value],style:{"--size":e.size||"","align-items":e.alignItems||""}},[null==(a=o.value)?void 0:a.map(((e,a)=>t.createVNode("div",{class:"m-space-item",key:a},[e])))])}}}),i=t.defineComponent({name:"MDivider",props:{layout:{type:String,default:"y",validator:e=>["x","y"].includes(e)},color:{type:String,default:""},size:{type:String,default:"12px"},borderStyle:{type:String,default:"solid"}},setup:e=>()=>t.createVNode("div",{style:{"--color":e.color,"--size":e.size,"--border-style":e.borderStyle},class:{"m-divider":!0,"m-divider-y":"y"===e.layout,"m-divider-x":"x"===e.layout}},null)}),r=t.defineComponent({name:"MAnchor",props:{getTarget:{type:Function,default:()=>window}},setup:(e,{slots:l})=>(t.inject(a),()=>t.createVNode("div",null,[l.default&&l.default()]))}),s=t.defineComponent({name:"MConfigProvider",props:{locale:{type:String,default:"zh-CN"},size:{type:String,default:"small",validator:e=>["small","mini","large"].includes(e)}},setup:(e,{slots:l})=>(t.provide(a,e),()=>t.createVNode(t.Fragment,null,[l.default&&l.default()]))}),d=t.defineComponent({name:"MBreadcrumb",props:{separator:{type:String,default:"/"}},setup(e,{slots:a}){var l,o;const n=null==(l=a.default)?void 0:l.call(a),i=a.separator?null==(o=a.separator)?void 0:o.call(a):e.separator;return()=>t.createVNode("div",{class:"m-breadcrumb"},[null==n?void 0:n.map(((e,a)=>t.createVNode(t.Fragment,null,[e,a>=0&&a<n.length-1&&t.createVNode("span",{class:"m-breadcrumb-separator"},[i])])))])}}),c=t.defineComponent({name:"MBreadcrumbItem",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_blank"}},setup(e,{slots:a}){const l=(null==a?void 0:a.default)?a.default():e.label;return()=>e.href&&!e.disabled?t.createVNode("a",{class:"m-breadcrumb-item m-breadcrumb-link","data-disabled":e.disabled,href:e.href,target:e.target},[l]):t.createVNode("span",{class:"m-breadcrumb-item","data-disabled":e.disabled},[l])}}),u=e=>e?e.getBoundingClientRect():null,p=e=>new Promise((t=>{if(!e)return null;Promise.all(e.getAnimations({subtree:!0}).map((e=>e.finished))).then((()=>{t(!0)})).catch((()=>{t(!1)}))})),m=(e,t,a,l=0)=>new Promise((async(o,n)=>{if(!e)return n("node is null");var i;await(i=e,new Promise((e=>{var t;if(!i)return e(!1);null==(t=null==i?void 0:i.getAnimations())||t.forEach((e=>{e.cancel()})),e(!0)}))),e.animate(t,a);const r="number"==typeof a?a:(null==a?void 0:a.duration)||null;null!=r&&Number(r)>=0?setTimeout((()=>{o(!0)}),Number(r)-l):o(!0)})),f={hideTime:200,showTime:200,bgShow:async e=>{await m(e,[{transform:"scaleY(0.8)",offset:0},{transform:"scaleY(1)",offset:.33},{transform:"scaleY(1)",offset:1}],{duration:200}).catch((()=>{}))},cShow:async e=>{await m(e,[{offset:0,opacity:0},{offset:.33,opacity:0},{offset:1,opacity:1}],{duration:200}).catch((()=>{}))},bgHide:async e=>{await m(e,[{opacity:1,offset:0},{opacity:.66,offset:.33},{opacity:0,transform:"scaleY(0.8)",offset:1}],{duration:200}).catch((()=>{}))},async cHide(e){await m(e,[{offset:0,opacity:1},{offset:.33,opacity:0},{offset:1,opacity:0}],{duration:200}).catch((()=>{}))}};const v=t.defineComponent({name:"MDropdown",props:{placement:{type:String,default:"bottomLeft"},trigger:{type:String,default:"click",validator:e=>["hover","click"].includes(e)},destroyOnHide:{type:Boolean,default:!1},disabled:Boolean,open:{type:Boolean,default:!1},toBody:{type:Boolean,default:!0}},setup(e,{slots:a}){const l=t.ref(null),o=t.ref(null),n=t.ref(null),i=t.ref(!1),r=t.reactive({top:"0",left:"0",waitChange:!1,renderToDom:null}),s=t.ref(!1);let d=null;const c=t.computed((()=>!e.destroyOnHide||i.value));let m=null;function v(){const t=u(m),a=u(n.value),{top:l,left:i}=function(e,t,a){const l=document.documentElement.scrollTop;var o,n,i,r,s,d,c,u,p;switch(o=e,n=t,i=a,r=window.innerWidth,s=window.innerHeight,d=n.top>(null==i?void 0:i.height),c=s-((null==n?void 0:n.top)+(null==i?void 0:i.height))>0,u=n.left>i.width,p=r-(n.left+i.width)>0,d&&c&&u&&p?o:c?u&&p?["bottomRight","bottomLeft","bottom"].includes(o)?o:"bottomLeft":u?"bottomRight":"bottomLeft":u&&p?["topLeft","topRight","top"].includes(o)?o:"topLeft":u?"topLeft":"topRight"){case"bottomRight":return{top:`${t.top+t.height+l}`,left:""+(t.left+t.width-a.width)};case"bottom":return{top:`${t.top+t.height+l}`,left:""+(t.left+t.width/2-a.width/2)};default:return{top:`${t.top+t.height+l}`,left:`${t.left}`}}}(e.placement,t,a);r.top=`${l}px`,r.left=`${i}px`,o.value.style.minWidth=`${t.width}px`}function g(){c.value&&v()}async function y(){i.value=!0,s.value=!0,d&&(clearTimeout(d),d=null),r.waitChange=!0,await new Promise((e=>requestAnimationFrame(e))),v(),window.addEventListener("scroll",g,!1),f.cShow(n.value),f.bgShow(o.value),await p(n.value).catch((()=>{})),r.waitChange=!1}function h(){r.waitChange||e.disabled||(i.value?w():y())}function b(){r.waitChange||e.disabled||i.value||y()}function w(){r.waitChange||(s.value&&(clearTimeout(d),d=null),s.value=!0,d=setTimeout((async()=>{s.value&&(r.waitChange=!0,f.cHide(n.value),f.bgHide(o.value),await new Promise((e=>setTimeout(e,0))),await p(n.value).catch((()=>{})),window.removeEventListener("scroll",g,!1),i.value=!1,r.waitChange=!1)}),60))}function V(e){const t=e.target;var a,o;t&&(o=t,(a=l.value)&&o&&(a===o||a.contains&&a.contains(o))||w())}function N(){s.value=!0,d?(clearTimeout(d),d=null,i.value=!0):(s.value=!1,i.value=!0)}function x(){var t,a;window.addEventListener("click",V,!0),"click"===e.trigger?null==m||m.addEventListener("click",h,!1):(null==m||m.addEventListener("mouseenter",b,!1),null==m||m.addEventListener("mouseleave",w,!1),null==(t=o.value)||t.addEventListener("mouseenter",N,!1),null==(a=o.value)||a.addEventListener("mouseleave",w,!1))}function S(){var e,t;null==m||m.removeEventListener("click",h,!1),window.removeEventListener("click",V,!1),null==m||m.removeEventListener("mouseenter",b,!1),null==m||m.removeEventListener("mouseleave",w,!1),null==(e=o.value)||e.removeEventListener("mouseenter",N,!1),null==(t=o.value)||t.removeEventListener("mouseleave",w,!1)}return t.watch((()=>e.trigger),(()=>{S(),x()})),t.onBeforeMount((()=>{var e;if(!document.querySelector("#m-inset__body")){const t=document.createElement("div");t.setAttribute("id","m-inset__body"),null==(e=document.querySelector("body"))||e.appendChild(t)}})),t.onMounted((()=>{var e;m=1===(null==(e=l.value.children)?void 0:e.length)?l.value.children[0]||null:l.value||null,x()})),t.onUnmounted((()=>{S()})),()=>t.createVNode("div",null,[t.createVNode("div",{class:"m-dropdown",ref:l,style:{"pointer-events":r.waitChange?"none":"all"}},[a.default&&a.default()]),t.createVNode(t.Teleport,{to:"#m-inset__body"},{default:()=>{var e;return[c.value&&t.withDirectives(t.createVNode("div",{class:"m-dropdown__content m-box-shadow",ref:o,style:{"--top":r.top,"--left":r.left,"pointer-events":r.waitChange?"none":"all"}},[t.createVNode("div",{class:"m-dropdown__body",ref:n},[a.content&&(null==(e=a.content())?void 0:e.map((e=>(e.props={...e.props},e))))])]),[[t.vShow,i.value]])]}})])}}),g=t.defineComponent({name:"MButtonGroup",props:{layout:{type:String,default:"x",validator:e=>["x","y"].includes(e)},size:{type:String,default:""}},setup(e,{slots:l}){const o=t.inject(a,{size:""});return t.provide(a,{size:e.size||o.size}),()=>t.createVNode("div",{class:["m-button-group","y"===e.layout?"m-button-layout-y":"m-button-layout-x"]},[l.default&&l.default()])}}),y=t.defineComponent({name:"MMenuItem",props:{disabled:Boolean,label:String},emits:["click"],setup(e,{slots:a,emit:l}){function o(t){if(e.disabled)return t.preventDefault(),void t.stopPropagation();l("click",t)}return()=>t.createVNode("div",{class:["m-menu__item",e.disabled?"is__disabled":""],"data-disabled":e.disabled,"aria-disabled":e.disabled,onClick:o},[a.default&&a.default()||e.label])}}),h=t.defineComponent({name:"MTransition",props:{onEnter:Function,onLeave:Function},setup:(e,a)=>()=>{const l=a.slots.default&&a.slots.default();return t.createVNode(t.Transition,{appear:!1,onEnter:(t,a)=>{var l;return null==(l=e.onEnter)?void 0:l.call(e,t,a)},onLeave:(t,a)=>{var l;return null==(l=e.onLeave)?void 0:l.call(e,t,a)},css:!1},"function"==typeof(o=l)||"[object Object]"===Object.prototype.toString.call(o)&&!t.isVNode(o)?l:{default:()=>[l]});var o}}),b=async({mask:e,content:t,wrapper:a})=>{m(e,[{opacity:0},{opacity:1}],120),m(a,[{transform:"scale(0.33)",offset:0,opacity:.66},{transform:"scale(1)",offset:.33,opacity:1},{transform:"scale(1)",offset:1,opacity:1}],{duration:500}),await m(t,[{opacity:0,offset:0},{opacity:.25,offset:.35},{opacity:1,offset:1}],{duration:500})},w=async({mask:e,wrapper:t,content:a})=>{m(e,[{opacity:1},{opacity:0}],{duration:240}),m(a,[{opacity:1,offset:0},{opacity:0,offset:.2},{opacity:0,offset:1}],{duration:240}),await m(t,[{opacity:1,offset:0},{opacity:.88,offset:.33},{opacity:0,offset:1,transform:"scale(0.33)"}],{duration:240},20)},V=(e='m-dialog[data-active="true"]')=>{document.querySelectorAll(e).length>0?(document.body.setAttribute("data-overflow","hidden"),document.documentElement.dataset.overflow="hidden"):(document.body.setAttribute("data-overflow","auto"),document.documentElement.dataset.overflow="auto")},N=t.defineComponent({name:"MDialog",components:{MButton:o},props:{visible:{type:Boolean,default:!1},content:{type:String,default:""},className:String,title:{type:String,default:""},cancelBtnText:{type:String,default:""},okBtnText:{type:String,default:""},okBtnProps:{type:Object,default:()=>({type:"primary"})},cancelBtnProps:{type:Object,default:()=>({type:"default"})},width:{type:[Number,String],default:"50%"},height:{type:[Number,String],default:"auto"},showClose:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:""},fullscreen:{type:Boolean,default:!1},escHide:{type:Boolean,default:!0},maskHide:{type:Boolean,default:!0},target:{type:[String],default:"body"},top:{type:String,default:"center"},_onClose:Function},emits:["close"],setup(e,a){const{wrapperRef:l,bodyRef:n,maskRef:i,dialogRef:r}={dialogRef:t.ref(null),wrapperRef:t.ref(null),maskRef:t.ref(null),bodyRef:t.ref(null)},{contentStyle:s,wrapperStyle:d,bodyStyle:c}=(v=e,{contentStyle:t.computed((()=>{const e=("number"==typeof v.width?`${v.width}px`:v.width)||"auto",t=("number"==typeof v.height?`${v.height}px`:v.height)||"auto";return v.fullscreen?{width:"100%",padding:"0px",margin:"0px",height:"100%"}:{width:e,maxWidth:"100%",height:t,margin:v.top&&"center"!==v.top?"0 auto":"24px auto"}})),wrapperStyle:t.computed((()=>v.fullscreen?"width: 100%; height: 100%;":"center"===v.top?"display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      ":`position:relative;top: ${v.top};padding-bottom:24px;`)),bodyStyle:t.computed((()=>"width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;"))}),u=t=>{var l;e._onClose&&(null==(l=e._onClose)||l.call(e,t)),a.emit("close",t)},p=t=>{("Escape"===t.code||27===t.keyCode||"Escape"===t.key)&&e.escHide&&(e=>{if(!e)return!1;const t=document.querySelectorAll(".m-dialog[data-show='true']");return t.length>0&&t[t.length-1]===e})(r.value)&&a.emit("close",{type:"cancel"})},m=async(t,a)=>{await new Promise((e=>requestAnimationFrame(e)));const o="center";l.value.style.setProperty("transform-origin",o),n.value.style.setProperty("transform-origin",o),V('.m-dialog[data-show="true"]'),await b({mask:i.value,content:n.value,wrapper:l.value}),e.escHide&&document.addEventListener("keyup",p),a()},f=async(e,t)=>{await w({mask:i.value,content:n.value,wrapper:l.value}),V('.m-dialog[data-show="true"]'),document.removeEventListener("keyup",p),t()};var v;return()=>{var p,v,g,y,b,w,V,N;const x=null==(v=(p=a.slots).default)?void 0:v.call(p),S=null==(y=(g=a.slots).footer)?void 0:y.call(g),k=null==(w=(b=a.slots).header)?void 0:w.call(b),C=null==(N=(V=a.slots).body)?void 0:N.call(V);return t.createVNode(t.Teleport,{to:e.target},{default:()=>[t.createVNode(h,{onEnter:m,onLeave:f},{default:()=>[t.withDirectives(t.createVNode("div",{class:`m-dialog ${e.className||""}`,"data-show":e.visible,ref:r,style:{"--m-dialog-mask-color":e.maskBackgroundColor}},[t.createVNode("section",{class:"m-dialog-mask",ref:i},null),t.createVNode("div",{class:"m-dialog-container",onClick:()=>e.maskHide&&u("cancel")},[t.createVNode("div",{style:d.value},[t.createVNode("div",{class:"m-dialog-cover",style:s.value},[t.createVNode("div",{class:"m-dialog-content",onClick:e=>e.stopPropagation()},[t.createVNode("div",{class:"m-dialog-content__background",ref:l},null),t.createVNode("section",{class:"m-dialog-content__wrapper",ref:n,style:c.value},[e.showClose&&t.createVNode(o,{type:"text",shape:"square",size:"small",class:"m-dialog-content__close",onClick:()=>u("cancel")},{default:()=>[t.createVNode("svg",{fill:"currentColor",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5090",width:"28",height:"28"},[t.createVNode("path",{d:"M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"},null)])]}),k||e.title&&t.createVNode("header",{class:"m-dialog__header"},[t.createVNode("span",{class:"m-dialog-title"},[e.title])]),C||t.createVNode("main",{class:"m-dialog__body"},[x||e.content]),S||(e.cancelBtnText||e.okBtnText)&&t.createVNode("footer",{class:"m-dialog__footer"},[e.cancelBtnText&&t.createVNode(o,t.mergeProps(e.cancelBtnProps,{onClick:()=>u("cancel")}),{default:()=>[e.cancelBtnText]}),e.okBtnText&&t.createVNode(o,t.mergeProps(e.okBtnProps,{onClick:()=>u("ok")}),{default:()=>[e.okBtnText]})])])])])])])]),[[t.vShow,e.visible]])]})]})}}}),x=e=>{const t=(null==e?void 0:e.title)||"",a=e.width||480,l=(null==e?void 0:e.top)||"center";return{onConfirm:()=>{},onCancel:()=>{},okBtnText:(null==e?void 0:e.okBtnText)||"确定",cancelBtnText:(null==e?void 0:e.cancelBtnText)||"",okBtnProps:null==e?void 0:e.okBtnProps,cancelBtnProps:null==e?void 0:e.cancelBtnProps,content:"hello",className:"m-dialog-confirm",title:t,width:a,top:l,escHide:!1,maskHide:!1,showClose:!1,visible:!0}},S=async e=>{const a=document.createElement("div");let l,o,n;document.body.appendChild(a);const i=t.createApp(N,{...x(e),target:a,_onClose:async t=>{var r,s;"cancel"===t&&e.onCancel?null==(r=e.onCancel)||r.call(e):"ok"===t&&e.onConfirm&&(null==(s=e.onConfirm)||s.call(e)),await w({mask:l,wrapper:n,content:o}),i.unmount(),a.remove()}});i.mount(a),l=a.querySelector(".m-dialog-mask"),o=a.querySelector(".m-dialog-content__wrapper"),n=a.querySelector(".m-dialog-content__background");let r="center";n.style.setProperty("transform-origin",r),o.style.setProperty("transform-origin",r),b({mask:l,content:o,wrapper:n})},k=Object.freeze({open:(e={})=>{S(Object.assign({},e))},confirm:(e={})=>{S(Object.assign({},e,{okBtnType:"primary",cancelBtnText:"取消",cancelBtnProps:{type:"default"}}))}}),C=t.defineComponent({name:"MInput",components:{MIcon:l},props:{value:[String,Number],modelValue:[String,Number],name:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"small"},prefix:{type:String,default:""},suffix:{type:String,default:""},prepend:{type:String,default:""},append:{type:String,default:""},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},width:{type:[String,Number],default:""},autofocus:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},maxlength:{type:[String,Number],default:""},minlength:{type:[String,Number],default:""},max:{type:[String,Number],default:""},min:{type:[String,Number],default:""},step:{type:[String,Number],default:""},pattern:{type:String,default:""},showLimitCount:{type:Boolean,default:!1},showPasswordIcon:{type:Boolean,default:!1}},emits:["update:modelValue","change","focus","blur"],exposed:["focus","blur"],setup(e,{emit:a,slots:o,expose:n}){const{inputRef:i,inputValue:r,isFocus:s,setIsFocus:d,onChange:c,onClearValue:u}=((e,a)=>{const l=t.ref(null),o=t.ref(!1),n=t.ref(e.value||e.modelValue||"");return t.watch((()=>[e.modelValue,e.value]),((e,t)=>{n.value=e[0]===t[0]?e[1]||"":e[0]||""})),{inputRef:l,inputValue:n,onChange:e=>{const t=e.target.value;n.value=t,a("update:modelValue",t),a("change",t)},isFocus:o,setIsFocus:async e=>{var t,n;o.value=e,await new Promise((e=>requestAnimationFrame(e))),e?(null==(t=l.value)||t.focus(),a("focus",e)):(null==(n=l.value)||n.blur(),a("blur",e))},onClearValue:()=>{n.value="",a("update:modelValue",""),a("change","")}}})(e,a),{showPassword:p,showPwd:m,pwdType:f,toggleShowPwd:v,showLimitCount:g}=(e=>{const a=t.ref(!1),l=t.ref(""),o=t.computed((()=>{var t;return e.showPasswordIcon&&!e.disabled&&!e.readonly&&"password"===(null==(t=e.type)?void 0:t.toLowerCase())})),n=t.computed((()=>{var t;return e.showLimitCount&&e.maxlength&&!e.disabled&&!e.readonly&&["text","textarea"].includes(null==(t=e.type)?void 0:t.toLowerCase())}));return{pwdType:l,showPwd:a,toggleShowPwd:()=>{a.value=!a.value,l.value=a.value?"text":"password"},showPassword:o,showLimitCount:n}})(e);return n({focus:()=>{d(!0)},blur:()=>{d(!1)}}),()=>{var a,n,y,h;const b=(null==(a=null==o?void 0:o.prefix)?void 0:a.call(o))||e.prefix,w=(null==(n=null==o?void 0:o.suffix)?void 0:n.call(o))||e.suffix,V=(null==(y=null==o?void 0:o.prepend)?void 0:y.call(o))||e.prepend,N=(null==(h=null==o?void 0:o.append)?void 0:h.call(o))||e.append,x=()=>{var a;return t.createVNode("div",{onClick:()=>d(!0),style:{width:e.width},class:{"m-input":!0,"is-disabled":e.disabled,"is-readonly":e.readonly,"is-focus":s.value,"m-input-size-large":"large"===e.size,"m-input-size-small":"small"===e.size,"m-input-size-mini":"mini"===e.size}},[b&&t.createVNode("div",{class:"m-input-prefix"},[b]),t.createVNode("input",{class:"m-input-base",ref:i,type:f.value||e.type,disabled:e.disabled,placeholder:e.placeholder,readonly:e.readonly,value:r.value,autofocus:e.autofocus,autocomplete:e.autocomplete,maxlength:e.maxlength,max:e.max,min:e.min,step:e.step,minlength:e.minlength,name:e.name,onInput:c,onBlur:()=>d(!1),onFocus:()=>d(!0)},null),e.clearable&&r.value&&t.createVNode("span",{class:"m-input-suffix-icon-wrapper m-clearable",onClick:u},[t.createVNode(l,{name:"close-circle"},null)]),p.value&&t.createVNode("span",{onClick:v,class:"m-input-suffix-icon-wrapper"},[t.createVNode(l,{name:m.value?"eye":"eye-close"},null)]),g.value&&t.createVNode("span",{class:"m-input-limit-count"},[`${null==(a=r.value)?void 0:a.length}/${e.maxlength}`]),w&&t.createVNode("div",{class:"m-input-suffix"},[w])])};return V||N?t.createVNode("div",{class:{"m-input-wrapper":!0,"has-prepend":V,"has-append":N}},[V&&t.createVNode("div",{class:"m-input-prepend"},[V]),x(),N&&t.createVNode("div",{class:"m-input-append"},[N])]):x()}}});function B({type:e}){switch(e){case"success":return t.createVNode(l,{size:"20px",name:"check-circle-fill"},null);case"warning":return t.createVNode(l,{size:"20px",name:"warning-circle-fill"},null);case"danger":return t.createVNode(l,{size:"20px",name:"close-circle-fill"},null);default:return t.createVNode(l,{size:"20px",name:"info-circle-fill"},null)}}const M=t.defineComponent({name:"MAlert",props:{type:{type:String,default:"primary"},icon:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},showClose:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},emits:["close"],setup(e,{slots:a,emit:l}){const n=t.ref(!0),i=()=>{n.value=!1,l("close")};return()=>{const l=a.title?a.title():e.title,r=a.default?a.default():e.description,s=a.icon?a.icon():t.createVNode(B,{type:e.type},null);return t.createVNode("div",{class:`m-alert m-alert-${e.type} ${e.dark?"is-dark":""}`,style:{display:n.value?"block":"none"}},[t.createVNode("main",{class:"m-alert-main"},[e.showIcon&&s&&t.createVNode("div",{class:"m-alert-icon"},[s]),t.createVNode("div",{class:"m-alert-content"},[l&&t.createVNode("div",{class:"m-alert-title"},[l]),r&&t.createVNode("div",{class:"m-alert-description"},[r])]),e.showClose&&t.createVNode("span",{class:"m-alert-close"},[t.createVNode(o,{onClick:i,rightIcon:"close",type:"text",shape:"circle"},null)])])])}}}),z=e=>Array.isArray(e);function _({checked:e,indeterminate:a}){return e?t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-hidden":"true"},[t.createVNode("path",{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"},null)]):a?t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor","aria-hidden":"true"},[t.createVNode("path",{d:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"},null)]):t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-hidden":"true"},[t.createVNode("path",{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"},null)])}const L=t.defineComponent({name:"MCheckbox",props:{size:{type:String,default:"small",validator:e=>["mini","small","large"].includes(e)},label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},value:{type:[String,Number],default:""},modelValue:{type:[String,Number,Boolean,Array],default:!1}},emits:["update:modelValue","change","update:indeterminate"],setup(e,{emit:a,slots:l}){const{checked:o,indeterminate:n,toggle:i}=((e,a)=>{var l;const o=t.ref(e.indeterminate),n=t.ref(z(e.modelValue)?null==(l=e.modelValue)?void 0:l.includes(e.value):e.modelValue||e.checked||!1);return t.watch((()=>[e.checked,e.indeterminate,e.modelValue]),(()=>{var t;n.value=z(e.modelValue)?null==(t=e.modelValue)?void 0:t.includes(e.value):e.modelValue||e.checked||!1,o.value=e.indeterminate})),{toggle:()=>{if(!e.disabled){if(z(e.modelValue)){const t=[...e.modelValue];t.includes(e.value)?(t.splice(t.indexOf(e.value),1),n.value=!1):(t.push(e.value),n.value=!0),a("update:modelValue",t),a("change",t)}else n.value=!n.value,a("update:modelValue",n.value),a("change",n.value);o.value=!1,a("update:indeterminate",o.value)}},indeterminate:o,checked:n}})(e,a);return()=>{const a=l.default?l.default():e.label;return t.createVNode("div",{class:{"m-checkbox":!0,"m-checkbox-disabled":e.disabled,"m-checkbox-checked":o.value,"m-checkbox-indeterminate":n.value,"m-checkbox-size-mini":"mini"===e.size,"m-checkbox-size-small":"small"===e.size,"m-checkbox-size-large":"large"===e.size},"data-disabled":e.disabled,"data-checked":o.value,"data-indeterminate":n.value,"data-value":e.value,onClick:i},[t.createVNode("div",{class:"m-checkbox-wrapper"},[t.createVNode("span",{class:"m-checkbox-control-wrapper"},[t.createVNode("div",{class:"m-checkbox-control-main"},[t.createVNode("div",{class:"m-checkbox-control-inner"},[_({checked:o.value,indeterminate:n.value})])])]),t.createVNode("span",{class:"m-checkbox-label"},[a]),t.createVNode("input",{type:"checkbox",class:"m-checkbox-input",checked:o.value,disabled:e.disabled,value:e.value},null)])])}}}),P=t.defineComponent({name:"MAvatar",components:{MIcon:l},props:{src:{type:String,default:""},size:{type:String,default:"36px"},alt:{type:String,default:""},srcSet:{type:String,default:""},fit:{type:String,default:"cover"},icon:{type:String,default:""},shape:{type:String,default:"circle"},loading:{type:String,default:"eager"}},setup(e,{slots:a}){const o=e=>{};return()=>{const n=a.icon?a.icon():e.icon?t.createVNode(l,{name:e.icon,class:"m-avatar-icon",size:String(.6*parseInt(e.size))+"px"},null):"",i=a.default?a.default():"";return t.createVNode("div",{class:{"m-avatar":!0,"m-avatar-shape-square":"square"===e.shape,"m-avatar-shape-circle":"circle"===e.shape},style:{"--size":e.size,"--shape":e.shape}},[n||i||t.createVNode("img",{src:e.src,alt:e.alt,srcset:e.srcSet,class:"m-avatar-image",style:{"object-fit":e.fit||"none"},loading:e.loading,width:e.size,height:e.size,onError:o},null)])}}}),T=[o,n,i,r,s,d,c,v,g,y,N,C,l,M,L,P].map((e=>(e.install=function(t){t.component(e.name,e)},e))),E={install(e){T.forEach((t=>{e.component(t.name,t)}))}};e.Dialog=k,e.MAlert=M,e.MAnchor=r,e.MAvatar=P,e.MBreadcrumb=d,e.MBreadcrumbItem=c,e.MButton=o,e.MButtonGroup=g,e.MCheckbox=L,e.MConfigProvider=s,e.MDialog=N,e.MDivider=i,e.MDropdown=v,e.MIcon=l,e.MInput=C,e.MMenuItem=y,e.MSpace=n,e.default=E,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=mostify-ui.umd.cjs.map

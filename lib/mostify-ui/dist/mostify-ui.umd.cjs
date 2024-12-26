/* @license Mostify UI By <Irming>*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Mostify={},e.Vue)}(this,(function(e,t){"use strict";const a=Symbol("mostify-provider-option"),l=()=>{const{size:e,zIndex:l}=t.inject(a,{size:"small",zIndex:1e3});return{size:e,zIndex:l}},o=t.defineComponent({name:"MIcon",props:{name:{type:String,default:""},size:{type:String,default:"16px"},color:{type:String,default:"currentColor"}},setup(e,{emit:a}){const l=t.computed((()=>`mostifyiconfont m-icon m-icon-${e.name}`));return()=>t.createVNode("i",{class:l.value,onClick:e=>a("click",e),style:{color:e.color,"--icon-size":e.size,lineHeight:"inherit"}},null)}}),n=t.defineComponent({name:"MButton",props:{type:{type:String,default:"default"},size:String,shape:{type:String,default:""},disabled:Boolean,loading:Boolean,border:Boolean,light:Boolean,leftIcon:String,rightIcon:String,block:{type:Boolean,default:!1}},emits:["click","focus","blur"],setup(e,{slots:a,emit:n}){const{btnClass:r,contentShow:i,setClickXEvent:s,btnRef:d,rippleRef:c}=(e=>{const a=t.ref(null),o=t.ref(null),{size:n}=l(),r=t.computed((()=>{const t=["m-button"];return e.type&&t.push("m-button-type-"+e.type),t.push("m-button-size-"+(e.size||n||"small")),e.shape&&t.push("m-button-shape-"+e.shape),e.loading&&t.push("is-loading"),e.disabled&&t.push("is-disabled"),t})),i=t.computed((()=>!(e.loading&&["circle","square"].includes(e.shape))));let s=null;return{btnClass:r,contentShow:i,setClickXEvent:async e=>{if(!a.value)return;s||(s=document.createElement("div"),s.className="m-button-ripple");const t=s.cloneNode();a.value.appendChild(t);const l=o.value.getBoundingClientRect(),n=Math.max(l.width,l.height),r=n+"px",i=r;let d=(e.clientY-l.top-n/2).toFixed(0)+"px",c=(e.clientX-l.left-n/2).toFixed(0)+"px";d=.5*(l.height-n)+"px",Math.abs(l.width-l.height)<12&&(c=.5*(l.width-n)+"px"),t.setAttribute("style",`width:${r};height:${i};top:${d};left:${c};`),t.classList.add("m-button-ripple-active"),await new Promise((e=>setTimeout(e,500))),t.remove()},btnRef:o,rippleRef:a}})(e);function u(t,a){t.preventDefault(),e.loading||e.disabled||n(a,t)}const p=t=>{t.preventDefault(),e.loading||e.disabled||s(t)};return()=>{const l=a.leftIcon?a.leftIcon():e.leftIcon?t.createVNode(o,{name:e.leftIcon},null):"",n=a.rightIcon?a.rightIcon():e.rightIcon?t.createVNode(o,{name:e.rightIcon},null):"";return t.createVNode("button",{class:r.value,onMousedown:p,ref:d,style:{"--border-width":e.border?"1px":"0px",width:e.block?"100%":""},"data-light":e.light?"on":"off",onClick:e=>u(e,"click"),onFocus:e=>u(e,"focus"),onBlur:e=>u(e,"blur")},[!e.loading&&!e.disabled&&t.createVNode("div",{class:"m-button-ripple-wrapper",ref:c},null),t.createVNode("span",{class:"m-button-main"},[e.loading&&t.createVNode("span",{class:"m-button-loading-icon-wrapper",style:{marginRight:i.value?"8px":0}},[t.createVNode("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",class:"m-button-icon-loading"},[t.createVNode("path",{d:"M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z",fill:"currentColor"},null)])]),i.value&&t.createVNode(t.Fragment,null,[l&&t.createVNode("span",{class:"m-button-icon-left"},[l]),a.default&&a.default(),n&&t.createVNode("span",{class:"m-button-icon-right"},[n])])])])}}}),r=t.defineComponent({name:"MSpace",props:{size:{type:String,default:""},layout:{type:String,validator:e=>["x","y"].includes(e),default:"x"},alignItems:{type:String,default:"flex-start"}},setup(e,{slots:a}){const l=t.computed((()=>"y"===e.layout?"m-space-y":"m-space-x")),o=t.computed((()=>a.default?a.default():[]));return()=>{var a;return t.createVNode("div",{class:["m-space",l.value],style:{"--size":e.size||"","align-items":e.alignItems||""}},[null==(a=o.value)?void 0:a.map(((e,a)=>t.createVNode("div",{class:"m-space-item",key:a},[e])))])}}}),i=t.defineComponent({name:"MDivider",props:{layout:{type:String,default:"y",validator:e=>["x","y"].includes(e)},color:{type:String,default:""},size:{type:String,default:"12px"},borderStyle:{type:String,default:"solid"}},setup:e=>()=>t.createVNode("div",{style:{"--color":e.color,"--size":e.size,"--border-style":e.borderStyle},class:{"m-divider":!0,"m-divider-y":"y"===e.layout,"m-divider-x":"x"===e.layout}},null)}),s=t.defineComponent({name:"MAnchor",props:{getTarget:{type:Function,default:()=>window}},setup:(e,{slots:l})=>(t.inject(a),()=>t.createVNode("div",null,[l.default&&l.default()]))}),d=t.defineComponent({name:"MConfigProvider",props:{locale:{type:String,default:"zh-CN"},size:{type:String,default:"small",validator:e=>["small","mini","large"].includes(e)}},setup:(e,{slots:a})=>()=>t.createVNode(t.Fragment,null,[a.default&&a.default()])}),c=t.defineComponent({name:"MBreadcrumb",props:{separator:{type:String,default:"/"}},setup(e,{slots:a}){var l,o;const n=null==(l=a.default)?void 0:l.call(a),r=a.separator?null==(o=a.separator)?void 0:o.call(a):e.separator;return()=>t.createVNode("div",{class:"m-breadcrumb"},[null==n?void 0:n.map(((e,a)=>t.createVNode(t.Fragment,null,[e,a>=0&&a<n.length-1&&t.createVNode("span",{class:"m-breadcrumb-separator"},[r])])))])}}),u=t.defineComponent({name:"MBreadcrumbItem",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_blank"}},setup(e,{slots:a}){const l=(null==a?void 0:a.default)?a.default():e.label;return()=>e.href&&!e.disabled?t.createVNode("a",{class:"m-breadcrumb-item m-breadcrumb-link","data-disabled":e.disabled,href:e.href,target:e.target},[l]):t.createVNode("span",{class:"m-breadcrumb-item","data-disabled":e.disabled},[l])}}),p=(e='m-dialog[data-active="true"]')=>{document.querySelectorAll(e).length>0?(document.body.setAttribute("data-overflow","hidden"),document.documentElement.dataset.overflow="hidden"):(document.body.setAttribute("data-overflow","auto"),document.documentElement.dataset.overflow="auto")},m=e=>e?e.getBoundingClientRect():null,f=e=>new Promise((t=>{if(!e)return null;Promise.all(e.getAnimations({subtree:!0}).map((e=>e.finished))).then((()=>{t(!0)})).catch((()=>{t(!1)}))})),v=(e,t,a,l=0)=>new Promise((async(o,n)=>{if(!e)return n("node is null");var r;await(r=e,new Promise((e=>{var t;if(!r)return e(!1);null==(t=null==r?void 0:r.getAnimations())||t.forEach((e=>{e.cancel()})),e(!0)}))),e.animate(t,a);const i="number"==typeof a?a:(null==a?void 0:a.duration)||null;null!=i&&Number(i)>=0?setTimeout((()=>{o(!0)}),Number(i)-l):o(!0)})),g={hideTime:200,showTime:200,bgShow:async e=>{await v(e,[{transform:"scaleY(0.8)",offset:0},{transform:"scaleY(1)",offset:.33},{transform:"scaleY(1)",offset:1}],{duration:200}).catch((()=>{}))},cShow:async e=>{await v(e,[{offset:0,opacity:0},{offset:.33,opacity:0},{offset:1,opacity:1}],{duration:200}).catch((()=>{}))},bgHide:async e=>{await v(e,[{opacity:1,offset:0},{opacity:.66,offset:.33},{opacity:0,transform:"scaleY(0.8)",offset:1}],{duration:200}).catch((()=>{}))},async cHide(e){await v(e,[{offset:0,opacity:1},{offset:.33,opacity:0},{offset:1,opacity:0}],{duration:200}).catch((()=>{}))}},h=e=>Array.isArray(e),y=(e,t,a=!0)=>{const l=e=>{const t=e.toString().split(".");return t[1]?t[1].length:0},o=Math.max(l(e),l(t));return parseFloat((a?e+t:e-t).toFixed(o))};const b=t.defineComponent({name:"MDropdown",props:{placement:{type:String,default:"bottomLeft"},trigger:{type:String,default:"click",validator:e=>["hover","click"].includes(e)},destroyOnHide:{type:Boolean,default:!1},disabled:Boolean,open:{type:Boolean,default:!1},toBody:{type:Boolean,default:!0}},setup(e,{slots:a}){const l=t.ref(null),o=t.ref(null),n=t.ref(null),r=t.ref(!1),i=t.reactive({top:"0",left:"0",waitChange:!1,renderToDom:null}),s=t.ref(!1);let d=null;const c=t.computed((()=>!e.destroyOnHide||r.value));let u=null;function p(){const t=m(u),a=m(n.value),{top:l,left:r}=function(e,t,a){const l=document.documentElement.scrollTop;var o,n,r,i,s,d,c,u,p;switch(o=e,n=t,r=a,i=window.innerWidth,s=window.innerHeight,d=n.top>(null==r?void 0:r.height),c=s-((null==n?void 0:n.top)+(null==r?void 0:r.height))>0,u=n.left>r.width,p=i-(n.left+r.width)>0,d&&c&&u&&p?o:c?u&&p?["bottomRight","bottomLeft","bottom"].includes(o)?o:"bottomLeft":u?"bottomRight":"bottomLeft":u&&p?["topLeft","topRight","top"].includes(o)?o:"topLeft":u?"topLeft":"topRight"){case"bottomRight":return{top:`${t.top+t.height+l}`,left:""+(t.left+t.width-a.width)};case"bottom":return{top:`${t.top+t.height+l}`,left:""+(t.left+t.width/2-a.width/2)};default:return{top:`${t.top+t.height+l}`,left:`${t.left}`}}}(e.placement,t,a);i.top=`${l}px`,i.left=`${r}px`,o.value.style.minWidth=`${t.width}px`}function v(){c.value&&p()}async function h(){r.value=!0,s.value=!0,d&&(clearTimeout(d),d=null),i.waitChange=!0,await new Promise((e=>requestAnimationFrame(e))),p(),window.addEventListener("scroll",v,!1),g.cShow(n.value),g.bgShow(o.value),await f(n.value).catch((()=>{})),i.waitChange=!1}function y(){i.waitChange||e.disabled||(r.value?w():h())}function b(){i.waitChange||e.disabled||r.value||h()}function w(){i.waitChange||(s.value&&(clearTimeout(d),d=null),s.value=!0,d=setTimeout((async()=>{s.value&&(i.waitChange=!0,g.cHide(n.value),g.bgHide(o.value),await new Promise((e=>setTimeout(e,0))),await f(n.value).catch((()=>{})),window.removeEventListener("scroll",v,!1),r.value=!1,i.waitChange=!1)}),60))}function x(e){const t=e.target;var a,o;t&&(o=t,(a=l.value)&&o&&(a===o||a.contains&&a.contains(o))||w())}function N(){s.value=!0,d?(clearTimeout(d),d=null,r.value=!0):(s.value=!1,r.value=!0)}function V(){var t,a;window.addEventListener("click",x,!0),"click"===e.trigger?null==u||u.addEventListener("click",y,!1):(null==u||u.addEventListener("mouseenter",b,!1),null==u||u.addEventListener("mouseleave",w,!1),null==(t=o.value)||t.addEventListener("mouseenter",N,!1),null==(a=o.value)||a.addEventListener("mouseleave",w,!1))}function S(){var e,t;null==u||u.removeEventListener("click",y,!1),window.removeEventListener("click",x,!1),null==u||u.removeEventListener("mouseenter",b,!1),null==u||u.removeEventListener("mouseleave",w,!1),null==(e=o.value)||e.removeEventListener("mouseenter",N,!1),null==(t=o.value)||t.removeEventListener("mouseleave",w,!1)}return t.watch((()=>e.trigger),(()=>{S(),V()})),t.onBeforeMount((()=>{var e;if(!document.querySelector("#m-inset__body")){const t=document.createElement("div");t.setAttribute("id","m-inset__body"),null==(e=document.querySelector("body"))||e.appendChild(t)}})),t.onMounted((()=>{var e;u=1===(null==(e=l.value.children)?void 0:e.length)?l.value.children[0]||null:l.value||null,V()})),t.onUnmounted((()=>{S()})),()=>t.createVNode("div",null,[t.createVNode("div",{class:"m-dropdown",ref:l,style:{"pointer-events":i.waitChange?"none":"all"}},[a.default&&a.default()]),t.createVNode(t.Teleport,{to:"#m-inset__body"},{default:()=>{var e;return[c.value&&t.withDirectives(t.createVNode("div",{class:"m-dropdown__content m-box-shadow",ref:o,style:{"--top":i.top,"--left":i.left,"pointer-events":i.waitChange?"none":"all"}},[t.createVNode("div",{class:"m-dropdown__body",ref:n},[a.content&&(null==(e=a.content())?void 0:e.map((e=>(e.props={...e.props},e))))])]),[[t.vShow,r.value]])]}})])}}),w=t.defineComponent({name:"MButtonGroup",props:{layout:{type:String,default:"x",validator:e=>["x","y"].includes(e)},size:String},setup(e,{slots:o}){const{size:n,zIndex:r}=l();return t.provide(a,{size:e.size||n,zIndex:r}),()=>{var a;const l=null==(a=o.default)?void 0:a.call(o);return t.createVNode("div",{class:["m-button-group","y"===e.layout?"m-button-layout-y":"m-button-layout-x"]},[l])}}}),x=t.defineComponent({name:"MMenuItem",props:{disabled:Boolean,label:String},emits:["click"],setup(e,{slots:a,emit:l}){function o(t){if(e.disabled)return t.preventDefault(),void t.stopPropagation();l("click",t)}return()=>t.createVNode("div",{class:["m-menu__item",e.disabled?"is__disabled":""],"data-disabled":e.disabled,"aria-disabled":e.disabled,onClick:o},[a.default&&a.default()||e.label])}}),N=t.defineComponent({name:"MTransition",props:{onEnter:Function,onLeave:Function},setup:(e,a)=>()=>{const l=a.slots.default&&a.slots.default();return t.createVNode(t.Transition,{appear:!1,onEnter:(t,a)=>{var l;return null==(l=e.onEnter)?void 0:l.call(e,t,a)},onLeave:(t,a)=>{var l;return null==(l=e.onLeave)?void 0:l.call(e,t,a)},css:!1},"function"==typeof(o=l)||"[object Object]"===Object.prototype.toString.call(o)&&!t.isVNode(o)?l:{default:()=>[l]});var o}}),V=async({mask:e,content:t,wrapper:a})=>{v(e,[{opacity:0},{opacity:1}],120),v(a,[{transform:"scale(0.33)",offset:0,opacity:.66},{transform:"scale(1)",offset:.33,opacity:1},{transform:"scale(1)",offset:1,opacity:1}],{duration:500}),await v(t,[{opacity:0,offset:0},{opacity:.25,offset:.35},{opacity:1,offset:1}],{duration:500})},S=async({mask:e,wrapper:t,content:a})=>{v(e,[{opacity:1},{opacity:0}],{duration:240}),v(a,[{opacity:1,offset:0},{opacity:0,offset:.2},{opacity:0,offset:1}],{duration:240}),await v(t,[{opacity:1,offset:0},{opacity:.88,offset:.33},{opacity:0,offset:1,transform:"scale(0.33)"}],{duration:240},20)},k=t.defineComponent({name:"MDialog",components:{MButton:n},props:{visible:{type:Boolean,default:!1},content:{type:String,default:""},className:String,title:{type:String,default:""},cancelBtnText:{type:String,default:""},okBtnText:{type:String,default:""},okBtnProps:{type:Object,default:()=>({type:"primary"})},cancelBtnProps:{type:Object,default:()=>({type:"default"})},width:{type:[Number,String],default:"50%"},height:{type:[Number,String],default:"auto"},showClose:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:""},fullscreen:{type:Boolean,default:!1},escHide:{type:Boolean,default:!0},maskHide:{type:Boolean,default:!0},target:{type:[String],default:"body"},top:{type:String,default:"center"},_onClose:Function},emits:["close"],setup(e,a){const{wrapperRef:l,bodyRef:o,maskRef:r,dialogRef:i}={dialogRef:t.ref(null),wrapperRef:t.ref(null),maskRef:t.ref(null),bodyRef:t.ref(null)},{contentStyle:s,wrapperStyle:d,bodyStyle:c}=(g=e,{contentStyle:t.computed((()=>{const e=("number"==typeof g.width?`${g.width}px`:g.width)||"auto",t=("number"==typeof g.height?`${g.height}px`:g.height)||"auto";return g.fullscreen?{width:"100%",padding:"0px",margin:"0px",height:"100%"}:{width:e,maxWidth:"100%",height:t,margin:g.top&&"center"!==g.top?"0 auto":"24px auto"}})),wrapperStyle:t.computed((()=>g.fullscreen?"width: 100%; height: 100%;":"center"===g.top?"display: flex; \n        align-items: center; \n        justify-content: center; \n        min-height: 100%;\n      ":`position:relative;top: ${g.top};padding-bottom:24px;`)),bodyStyle:t.computed((()=>"width: 100%; height: 100%;  position: relative;insert: 0; overflow-y: auto;"))}),u=t=>{var l;e._onClose&&(null==(l=e._onClose)||l.call(e,t)),a.emit("close",t)},m=t=>{("Escape"===t.code||27===t.keyCode||"Escape"===t.key)&&e.escHide&&(e=>{if(!e)return!1;const t=document.querySelectorAll(".m-dialog[data-show='true']");return t.length>0&&t[t.length-1]===e})(i.value)&&a.emit("close",{type:"cancel"})},f=async(t,a)=>{await new Promise((e=>requestAnimationFrame(e)));const n="center";l.value.style.setProperty("transform-origin",n),o.value.style.setProperty("transform-origin",n),p('.m-dialog[data-show="true"]'),await V({mask:r.value,content:o.value,wrapper:l.value}),e.escHide&&document.addEventListener("keyup",m),a()},v=async(e,t)=>{await S({mask:r.value,content:o.value,wrapper:l.value}),p('.m-dialog[data-show="true"]'),document.removeEventListener("keyup",m),t()};var g;return()=>{var p,m,g,h,y,b,w,x;const V=null==(m=(p=a.slots).default)?void 0:m.call(p),S=null==(h=(g=a.slots).footer)?void 0:h.call(g),k=null==(b=(y=a.slots).header)?void 0:b.call(y),C=null==(x=(w=a.slots).body)?void 0:x.call(w);return t.createVNode(t.Teleport,{to:e.target},{default:()=>[t.createVNode(N,{onEnter:f,onLeave:v},{default:()=>[t.withDirectives(t.createVNode("div",{class:`m-dialog ${e.className||""}`,"data-show":e.visible,ref:i,style:{"--m-dialog-mask-color":e.maskBackgroundColor}},[t.createVNode("section",{class:"m-dialog-mask",ref:r},null),t.createVNode("div",{class:"m-dialog-container",onClick:()=>e.maskHide&&u("cancel")},[t.createVNode("div",{style:d.value},[t.createVNode("div",{class:"m-dialog-cover",style:s.value},[t.createVNode("div",{class:"m-dialog-content",onClick:e=>e.stopPropagation()},[t.createVNode("div",{class:"m-dialog-content__background",ref:l},null),t.createVNode("section",{class:"m-dialog-content__wrapper",ref:o,style:c.value},[e.showClose&&t.createVNode(n,{type:"text",shape:"square",size:"small",class:"m-dialog-content__close",onClick:()=>u("cancel")},{default:()=>[t.createVNode("svg",{fill:"currentColor",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5090",width:"28",height:"28"},[t.createVNode("path",{d:"M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"},null)])]}),k||e.title&&t.createVNode("header",{class:"m-dialog__header"},[t.createVNode("span",{class:"m-dialog-title"},[e.title])]),C||t.createVNode("main",{class:"m-dialog__body"},[V||e.content]),S||(e.cancelBtnText||e.okBtnText)&&t.createVNode("footer",{class:"m-dialog__footer"},[e.cancelBtnText&&t.createVNode(n,t.mergeProps(e.cancelBtnProps,{onClick:()=>u("cancel")}),{default:()=>[e.cancelBtnText]}),e.okBtnText&&t.createVNode(n,t.mergeProps(e.okBtnProps,{onClick:()=>u("ok")}),{default:()=>[e.okBtnText]})])])])])])])]),[[t.vShow,e.visible]])]})]})}}}),C=e=>{const t=(null==e?void 0:e.title)||"",a=e.width||480,l=(null==e?void 0:e.top)||"center";return{onConfirm:()=>{},onCancel:()=>{},okBtnText:(null==e?void 0:e.okBtnText)||"确定",cancelBtnText:(null==e?void 0:e.cancelBtnText)||"",okBtnProps:null==e?void 0:e.okBtnProps,cancelBtnProps:null==e?void 0:e.cancelBtnProps,content:"hello",className:"m-dialog-confirm",title:t,width:a,top:l,escHide:!1,maskHide:!1,showClose:!1,visible:!0}},B=async e=>{const a=document.createElement("div");let l,o,n;document.body.appendChild(a);const r=t.createApp(k,{...C(e),target:a,_onClose:async t=>{var i,s;"cancel"===t&&e.onCancel?null==(i=e.onCancel)||i.call(e):"ok"===t&&e.onConfirm&&(null==(s=e.onConfirm)||s.call(e)),await S({mask:l,wrapper:n,content:o}),r.unmount(),a.remove()}});r.mount(a),l=a.querySelector(".m-dialog-mask"),o=a.querySelector(".m-dialog-content__wrapper"),n=a.querySelector(".m-dialog-content__background");let i="center";n.style.setProperty("transform-origin",i),o.style.setProperty("transform-origin",i),V({mask:l,content:o,wrapper:n})},M=Object.freeze({open:(e={})=>{B(Object.assign({},e))},confirm:(e={})=>{B(Object.assign({},e,{okBtnType:"primary",cancelBtnText:"取消",cancelBtnProps:{type:"default"}}))}}),z=(e,a)=>{const l=t.ref(e.modelValue||e.value);return t.watch((()=>e.modelValue),(e=>{l.value=e})),t.watch((()=>e.value),(e=>{l.value=e})),{value:l,setValue:t=>{e.disabled||e.readonly||(l.value=t,a("update:modelValue",t),a("change",t))}}},I=(e,a)=>{const{size:o}=l();return{classNames:t.computed((()=>{const t=["m-input",`m-input-size-${e.size||o||"small"}`];return e.disabled&&t.push("is-disabled"),e.readonly&&t.push("is-readonly"),a.value&&t.push("is-focus"),t}))}},_=e=>({showLimitCount:t.computed((()=>e.showLimitCount&&e.maxlength))}),L=e=>{const a=t.ref(null),l=t.ref(!1);return{domRef:a,isFocus:l,setIsFocus:e=>{var t,o;l.value=e,e?null==(t=a.value)||t.focus():null==(o=a.value)||o.blur()}}},P=t.defineComponent({name:"MInput",components:{MIcon:o},props:{value:[String,Number],modelValue:[String,Number],name:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},size:String,prefix:{type:String,default:""},suffix:{type:String,default:""},prepend:{type:String,default:""},append:{type:String,default:""},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},width:{type:[String,Number],default:""},autofocus:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},maxlength:{type:[String,Number],default:""},minlength:{type:[String,Number],default:""},max:{type:[String,Number],default:""},min:{type:[String,Number],default:""},step:{type:[String,Number],default:""},pattern:{type:String,default:""},showLimitCount:{type:Boolean,default:!1},showPasswordIcon:{type:Boolean,default:!1},tabindex:[Number,String]},emits:["update:modelValue","change","focus","blur"],exposed:["focus","blur"],setup(e,{emit:a,slots:l,expose:n}){const{value:r,setValue:i}=z(e,a),{domRef:s,isFocus:d,setIsFocus:c}=L(),{classNames:u}=I(e,d),{type:p,showPwd:m,toggleShowPwd:f}=(e=>{const a=t.ref(!1),l=t.ref(e.type),o=t.computed((()=>{var t;return e.showPasswordIcon&&!e.disabled&&!e.readonly&&"password"===(null==(t=e.type)?void 0:t.toLowerCase())}));return{type:l,showPwd:o,toggleShowPwd:()=>{a.value=!a.value,l.value=a.value?"text":e.type}}})(e),{showLimitCount:v}=_(e);return n({focus:()=>c(!0),blur:()=>c(!1)}),()=>{var a,n,d,g;const h=(null==(a=null==l?void 0:l.prefix)?void 0:a.call(l))||e.prefix,y=(null==(n=null==l?void 0:l.suffix)?void 0:n.call(l))||e.suffix,b=(null==(d=null==l?void 0:l.prepend)?void 0:d.call(l))||e.prepend,w=(null==(g=null==l?void 0:l.append)?void 0:g.call(l))||e.append,x=()=>{var a;return t.createVNode("div",{onClick:()=>c(!0),style:{width:e.width},class:u.value},[h&&t.createVNode("div",{class:"m-input-prefix"},[h]),t.createVNode("input",{class:"m-input-base",ref:s,type:p.value,disabled:e.disabled,tabindex:e.tabindex,placeholder:e.placeholder,readonly:e.readonly,value:r.value,autofocus:e.autofocus,autocomplete:e.autocomplete,maxlength:e.maxlength,max:e.max,min:e.min,step:e.step,minlength:e.minlength,name:e.name,onInput:e=>{var t;return i(null==(t=e.target)?void 0:t.value)},onBlur:()=>c(!1),onFocus:()=>c(!0)},null),e.clearable&&r.value&&t.createVNode("span",{class:"m-input-suffix-icon-wrapper m-clearable",onClick:()=>i("")},[t.createVNode(o,{name:"close-circle"},null)]),m.value&&t.createVNode("span",{onClick:f,class:"m-input-suffix-icon-wrapper"},[t.createVNode(o,{name:m.value?"eye":"eye-close"},null)]),v.value&&t.createVNode("span",{class:"m-input-limit-count"},[`${null==(a=r.value)?void 0:a.length}/${e.maxlength}`]),y&&t.createVNode("div",{class:"m-input-suffix"},[y])])};return b||w?t.createVNode("div",{class:{"m-input-wrapper":!0,"has-prepend":b,"has-append":w}},[b&&t.createVNode("div",{class:"m-input-prepend"},[b]),x(),w&&t.createVNode("div",{class:"m-input-append"},[w])]):x()}}}),T=t.defineComponent({name:"MInputNumber",components:{MIcon:o},props:{modelValue:Number,min:Number,max:Number,step:Number,disabled:Boolean,controlsPosition:{type:String,default:""},controls:{type:Boolean,default:!0},size:String,readonly:Boolean,placeholder:String,name:String,id:String,autofocus:Boolean,tabindex:Number,prefix:String,suffix:String,precision:Number},emits:["update:modelValue","change","blur","focus"],setup(e,{emit:a,expose:l,slots:n}){const{domRef:r,isFocus:i,setIsFocus:s}=L(),{showControl:d,isRight:c}=(b=e,{showControl:t.computed((()=>!!b.controls)),isRight:t.computed((()=>"right"===b.controlsPosition))}),{value:u,setValue:p}=z(e,a),{classNames:m}=I(e,i),{increase:f,decrease:v,decreaseDisabled:g,increaseDisabled:h}=((e,a,l)=>{const o=t.computed((()=>a.value>=e.max)),n=t.computed((()=>a.value<=e.min));return{increase:()=>{if(o.value||e.disabled||e.readonly)return;const t=parseFloat(e.step)||1,n=parseInt(e.precision)||0,r=(i=parseFloat(a.value),y(i,t,!0));var i;r>e.max?l(e.max):l(r.toFixed(n))},decrease:()=>{if(n.value||e.disabled||e.readonly)return;const t=parseFloat(e.step)||1,o=parseInt(e.precision)||0,r=(i=parseFloat(a.value),y(i,t,!1));var i;r<e.min?l(e.min):r>e.max?l(e.max):l(r.toFixed(o))},decreaseDisabled:n,increaseDisabled:o}})(e,u,p);var b;return l({focus:()=>s(!0),blur:()=>s(!1)}),()=>{var a,l,i,y;const b=null==(a=n.decreaseIcon)?void 0:a.call(n),w=null==(l=n.increaseIcon)?void 0:l.call(n),x=n.prefix?null==(i=n.prefix)?void 0:i.call(n):e.prefix,N=n.suffix?null==(y=n.suffix)?void 0:y.call(n):e.suffix,V=()=>t.createVNode(t.Fragment,null,[x&&t.createVNode("div",{class:"m-input-prefix"},[x]),t.createVNode("input",{type:"number",name:e.name,value:u.value,autofocus:e.autofocus,tabindex:e.tabindex,class:"m-input-base",ref:r,disabled:e.disabled,placeholder:e.placeholder,readonly:e.readonly,max:e.max,min:e.min,step:e.step,onInput:e=>{var t;return p(null==(t=e.target)?void 0:t.value)},onBlur:()=>s(!1),onFocus:()=>s(!0)},null),N&&t.createVNode("div",{class:"m-input-suffix"},[N])]);return t.createVNode("div",{class:["m-input-number",d.value?c.value?"has-right-control":"has-control":"",...m.value]},[d.value?c.value?t.createVNode("div",{class:"m-input-control-right"},[V(),t.createVNode("div",{class:"m-input-right-control-wrapper"},[t.createVNode("span",{class:"m-input-control-top",onClick:f,"data-disabled":h.value},[b||t.createVNode(o,{name:"up"},null)]),t.createVNode("span",{class:"m-input-control-bottom","data-disabled":g.value,onClick:v},[w||t.createVNode(o,{name:"down"},null)])])]):t.createVNode("div",{class:"m-input-control-default"},[t.createVNode("div",{class:"m-input-number-control-left","data-disabled":g.value,onClick:v},[b||t.createVNode(o,{name:"minus"},null)]),V(),t.createVNode("div",{class:"m-input-number-control-right","data-disabled":h.value,onClick:f},[w||t.createVNode(o,{name:"plus"},null)])]):V()])}}}),E=t.defineComponent({name:"MTextarea",props:{modelValue:String,placeholder:String,disabled:Boolean,readonly:Boolean,maxlength:Number,minlength:Number,rows:[Number,String],cols:[Number,String],autofocus:Boolean,autocomplete:String,showLimitCount:Boolean},emits:["update:modelValue","focus","blur","change"],setup(e,{emit:a}){const{domRef:l,isFocus:o,setIsFocus:n}=L(),{value:r,setValue:i}=z(e,a),{showLimitCount:s}=_(e),{classnames:d}=(c=e,u=s,p=o,{classnames:t.computed((()=>{const e=["m-textarea"];return c.disabled&&e.push("is-disabled"),c.readonly&&e.push("is-readonly"),p.value&&e.push("is-focus"),u.value&&e.push("is-limit"),e}))});var c,u,p;return()=>{var a;return t.createVNode("div",{class:d.value},[t.createVNode("textarea",{class:"m-textarea-content",ref:l,rows:e.rows,cols:e.cols,value:r.value,onInput:e=>i(e.target.value),onFocus:()=>n(!0),onBlur:()=>n(!1),disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder,maxlength:e.maxlength,minlength:e.minlength,autofocus:e.autofocus,autocomplete:e.autocomplete},null),s.value&&t.createVNode("span",{class:"m-textarea-limit"},[(null==(a=r.value)?void 0:a.length)||0,t.createTextVNode("/"),e.maxlength])])}}});function F({type:e}){switch(e){case"success":return t.createVNode(o,{size:"20px",name:"check-circle-fill"},null);case"warning":return t.createVNode(o,{size:"20px",name:"warning-circle-fill"},null);case"danger":return t.createVNode(o,{size:"20px",name:"close-circle-fill"},null);default:return t.createVNode(o,{size:"20px",name:"info-circle-fill"},null)}}const A=t.defineComponent({name:"MAlert",props:{type:{type:String,default:"primary"},icon:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},showClose:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},emits:["close"],setup(e,{slots:a,emit:l}){const o=t.ref(!0),r=()=>{o.value=!1,l("close")};return()=>{const l=a.title?a.title():e.title,i=a.default?a.default():e.description,s=a.icon?a.icon():t.createVNode(F,{type:e.type},null);return t.createVNode("div",{class:`m-alert m-alert-${e.type} ${e.dark?"is-dark":""}`,style:{display:o.value?"block":"none"}},[t.createVNode("main",{class:"m-alert-main"},[e.showIcon&&s&&t.createVNode("div",{class:"m-alert-icon"},[s]),t.createVNode("div",{class:"m-alert-content"},[l&&t.createVNode("div",{class:"m-alert-title"},[l]),i&&t.createVNode("div",{class:"m-alert-description"},[i])]),e.showClose&&t.createVNode("span",{class:"m-alert-close"},[t.createVNode(n,{onClick:r,rightIcon:"close",type:"text",shape:"circle"},null)])])])}}});function R({checked:e,indeterminate:a}){return e?t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-hidden":"true"},[t.createVNode("path",{d:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"},null)]):a?t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor","aria-hidden":"true"},[t.createVNode("path",{d:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"},null)]):t.createVNode("svg",{class:"m-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",role:"img","aria-hidden":"true"},[t.createVNode("path",{d:"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"},null)])}const H=t.defineComponent({name:"MCheckbox",props:{size:String,label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},value:{type:[String,Number],default:""},modelValue:{type:[String,Number,Boolean,Array],default:!1}},emits:["update:modelValue","change","update:indeterminate"],setup(e,{emit:a,slots:o}){const{checked:n,indeterminate:r,toggle:i,classNames:s}=((e,a)=>{var o;const n=t.ref(e.indeterminate),r=t.ref(h(e.modelValue)?null==(o=e.modelValue)?void 0:o.includes(e.value):e.modelValue||e.checked||!1),{size:i}=l(),s=t.computed((()=>{const t=["m-checkbox",`m-checkbox-size-${e.size||i||"small"}`];return e.disabled&&t.push("m-checkbox-disabled"),r.value&&t.push("m-checkbox-checked"),n.value&&t.push("m-checkbox-indeterminate"),t}));return t.watch((()=>[e.checked,e.indeterminate,e.modelValue]),(()=>{var t;r.value=h(e.modelValue)?null==(t=e.modelValue)?void 0:t.includes(e.value):e.modelValue||e.checked||!1,n.value=e.indeterminate})),{toggle:()=>{if(!e.disabled){if(h(e.modelValue)){const t=[...e.modelValue];t.includes(e.value)?(t.splice(t.indexOf(e.value),1),r.value=!1):(t.push(e.value),r.value=!0),a("update:modelValue",t),a("change",t)}else r.value=!r.value,a("update:modelValue",r.value),a("change",r.value);n.value=!1,a("update:indeterminate",n.value)}},indeterminate:n,checked:r,classNames:s}})(e,a);return()=>{const a=o.default?o.default():e.label;return t.createVNode("div",{class:s.value,"data-disabled":e.disabled,"data-checked":n.value,"data-indeterminate":r.value,"data-value":e.value,onClick:i},[t.createVNode("div",{class:"m-checkbox-wrapper"},[t.createVNode("span",{class:"m-checkbox-control-wrapper"},[t.createVNode("div",{class:"m-checkbox-control-main"},[t.createVNode("div",{class:"m-checkbox-control-inner"},[R({checked:n.value,indeterminate:r.value})])])]),t.createVNode("span",{class:"m-checkbox-label"},[a]),t.createVNode("input",{type:"checkbox",class:"m-checkbox-input",checked:n.value,disabled:e.disabled,value:e.value},null)])])}}}),$=t.defineComponent({name:"MAvatar",components:{MIcon:o},props:{src:{type:String,default:""},size:{type:String,default:"36px"},alt:{type:String,default:""},srcSet:{type:String,default:""},fit:{type:String,default:"cover"},icon:{type:String,default:""},shape:{type:String,default:"circle"},loading:{type:String,default:"eager"}},emits:["error"],setup(e,{slots:a,emit:l}){const n=e=>{l("error",e)};return()=>{const l=a.icon?a.icon():e.icon?t.createVNode(o,{name:e.icon,class:"m-avatar-icon",size:String(.6*parseInt(e.size))+"px"},null):"",r=a.default?a.default():"";return t.createVNode("div",{class:{"m-avatar":!0,"m-avatar-shape-square":"square"===e.shape,"m-avatar-shape-circle":"circle"===e.shape},style:{"--size":e.size,"--shape":e.shape}},[l||r||t.createVNode("img",{src:e.src,alt:e.alt,srcset:e.srcSet,class:"m-avatar-image",style:{"object-fit":e.fit||"none"},loading:e.loading,width:e.size,height:e.size,onError:n},null)])}}}),D=[n,r,i,s,d,c,u,b,w,x,k,P,o,A,H,$,T,E].map((e=>(e.install=function(t){t.component(e.name,e)},e))),j={install(e,t){e.provide(a,t||{size:"small",zIndex:1e3}),D.forEach((t=>{e.component(t.name,t)}))}};e.Dialog=M,e.MAlert=A,e.MAnchor=s,e.MAvatar=$,e.MBreadcrumb=c,e.MBreadcrumbItem=u,e.MButton=n,e.MButtonGroup=w,e.MCheckbox=H,e.MConfigProvider=d,e.MDialog=k,e.MDivider=i,e.MDropdown=b,e.MIcon=o,e.MInput=P,e.MInputNumber=T,e.MMTextarea=E,e.MMenuItem=x,e.MSpace=r,e.default=j,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=mostify-ui.umd.cjs.map

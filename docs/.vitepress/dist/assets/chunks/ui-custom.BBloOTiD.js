import{u as d,a as l}from"./theme.Dl99ocuT.js";import{d as p,r as u,w as c,e as f,k as _,l as m,_ as b}from"./framework.ETurg5uu.js";const v=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:i}=d(),a=r.carbonAds,{isAsideEnabled:s}=l(),o=u();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>i.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&f(()=>{s.value?t():c(s,e=>e&&t())}),(e,h)=>(_(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}}),w=b(v,[["__scopeId","data-v-ae645167"]]);export{w as default};

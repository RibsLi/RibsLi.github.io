import{_ as a,u as e}from"./index.9bf0e41f.js";import{r as l,w as t,x as o,f as s,o as r,c as n,b as c,q as u,l as v,z as d,A as h}from"./vendor.1b44fe95.js";const i={key:0,class:"content-box"},p={class:"search-box"},f={key:0,class:"content"};var m=a({setup(a){const{proxy:m}=h(),g=e(),b=l({state:"open",page:1,per_page:"all"});let x=l(),_=l([]);const y=l();let C=l();t((()=>y.value),(a=>{a&&(clearTimeout(C.value),C.value=setTimeout((()=>{k()}),500))})),m.$blogApi.resolve("getArticle",b.value).then((a=>{(null==a?void 0:a.length)&&(a.forEach((a=>{a.created_at=m.$format(a.created_at,"zh_CN").replace(/\s/,"");const e=Math.floor(Math.random()*g.themeColors.length);a.color=g.themeColors[e]})),x.value=a)}));const k=()=>{y.value?async function(a){_.value=[],x.value.forEach((e=>{-1!==e.title.indexOf(a)&&_.value.push(e)})),_.value.length||m.$toast("没有搜索到相关内容")}(y.value):m.$toast("请输入搜索内容")},$=()=>_.value=[];return(a,e)=>{const l=o("van-search"),t=o("CompList"),h=o("Loading");return s(x)?(r(),n("div",i,[c("div",p,[u(l,{class:"search",modelValue:y.value,"onUpdate:modelValue":e[0]||(e[0]=a=>y.value=a),placeholder:"请输入搜索内容",shape:"round",background:"rgba(255, 255, 255, 0)","clear-trigger":"always",onSearch:k,onClear:$},null,8,["modelValue"])]),s(_).length?(r(),n("div",f,[u(t,{list:s(_)},null,8,["list"])])):v("",!0)])):(r(),d(h,{key:1}))}}},[["__scopeId","data-v-afaca3aa"]]);export{m as default};

import{r as a,m as e,q as l,f as t,o,c as r,s,F as u,e as c,x as n,j as d,y as v}from"./vendor.662b62b4.js";import{_ as i,u as p}from"./index.d7cb13df.js";const g={key:0,class:"pt-5"},h={key:0,class:"bg-white/50 p-15 grid gap-15 grid-cols-3 box mt-10"};var m=i({setup(i){const{proxy:m}=v(),f=p(),b=a({state:"open",page:1,per_page:"all"});let x=a(),y=a([]);const _=a();let k=a();e((()=>_.value),(a=>{a&&(clearTimeout(k.value),k.value=setTimeout((()=>$()),500))})),m.$blogApi.resolve("getArticle",b.value).then((a=>{(null==a?void 0:a.length)&&(a.forEach((a=>{a.created_at=m.$format(a.created_at,"zh_CN").replace(/\s/,"");const e=Math.floor(Math.random()*f.palette.length);a.color=f.palette[e]})),x.value=a)}));const $=()=>{return _.value?(a=_.value,y.value=[],x.value.forEach((e=>e.title.includes(a)&&y.value.push(e))),void(!y.value.length&&m.$toast("没有搜索到相关内容"))):m.$toast("请输入搜索内容");var a},j=()=>y.value=[];return(a,e)=>{const v=l("van-search"),i=l("ArticleCard"),p=l("Loading");return t(x)?(o(),r("div",g,[s(v,{class:"mx-auto max-w-800",modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a),placeholder:"请输入搜索内容",shape:"round",background:"rgba(255, 255, 255, 0)","clear-trigger":"always",onSearch:$,onClear:j},null,8,["modelValue"]),t(y).length?(o(),r("div",h,[(o(!0),r(u,null,c(t(y),(a=>(o(),n(i,{key:a.id,article:a},null,8,["article"])))),128))])):d("v-if",!0)])):(o(),n(p,{key:1}))}}},[["__scopeId","data-v-633a08e5"]]);export{m as default};

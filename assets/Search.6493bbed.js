import{r as e,m as a,q as l,f as t,o,c as r,s,F as u,e as c,x as n,j as d,y as v}from"./vendor.662b62b4.js";import{_ as i,u as p}from"./index.e900ce37.js";const g={key:0,class:"pt-5"},h={key:0,class:"bg-white/50 p-15 grid gap-15 grid-cols-3 box mt-10"};var m=i({setup(i){const{proxy:m}=v(),f=p(),b=e({state:"open",page:1,per_page:"all"});let x=e(),y=e([]);const _=e();let k=e();a((()=>_.value),(e=>{e&&(clearTimeout(k.value),k.value=setTimeout((()=>$()),500))})),m.$blogApi.resolve("getArticle",b.value).then((e=>{(null==e?void 0:e.length)&&(e.forEach((e=>{e.created_at=m.$format(e.created_at,"zh_CN").replace(/\s/,"");const a=Math.floor(Math.random()*f.palette.length);e.color=f.palette[a]})),x.value=e)}));const $=()=>{return _.value?(e=_.value,y.value=[],x.value.forEach((a=>a.title.includes(e)&&y.value.push(a))),void(!y.value.length&&m.$toast("没有搜索到相关内容"))):m.$toast("请输入搜索内容");var e},j=()=>y.value=[];return(e,a)=>{const v=l("van-search"),i=l("ArticleCard"),p=l("Loading");return t(x)?(o(),r("div",g,[s(v,{class:"mx-auto max-w-800",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e),placeholder:"请输入搜索内容",shape:"round",background:"rgba(255, 255, 255, 0)","clear-trigger":"always",onSearch:$,onClear:j},null,8,["modelValue"]),t(y).length?(o(),r("div",h,[(o(!0),r(u,null,c(t(y),(e=>(o(),n(i,{key:e.id,article:e},null,8,["article"])))),128))])):d("v-if",!0)])):(o(),n(p,{key:1}))}}},[["__scopeId","data-v-633a08e5"]]);export{m as default};

import{r as e,a3 as a,a4 as l,q as t,o,c as s,s as r,v as n,b as i,F as u,e as c,x as v,f as d,i as p,y as f}from"./vendor.662b62b4.js";import{_ as g,u as h}from"./index.d7cb13df.js";import{q as x}from"./query.132cfc22.js";const m={class:"grid gap-15 grid-cols-3 box"};var _=g({setup(g){const{proxy:_}=f(),b=h(),y=e({state:"open",page:1,per_page:21});let $=e([]),j=e(),q=e(!1),A=e(!1),C=e(!1),T=e(),k=e();a((()=>T.value.scrollTop=k.value)),l((()=>k.value=T.value.scrollTop));const B=()=>{_.$blogApi.resolve("getArticle",y.value).then((e=>{q.value=!1,(null==e?void 0:e.length)?(e.length<21?A.value=!0:y.value.page++,e.forEach((e=>{e.created_at=_.$format(e.created_at,"zh_CN").replace(/\s/,"");const a=Math.floor(Math.random()*b.palette.length);e.color=b.palette[a]})),$.value.push(...e)):(null==e?void 0:e.length)?(C.value=!0,q.value=!1):A.value=!0})).catch((e=>{_.$toast(`请求失败：${e}`),C.value=!0,q.value=!1}))};x().then((e=>j.value=null==e?void 0:e.repository.issues.totalCount));const H=()=>{b.scrollBox=T.value;const e=T.value.scrollHeight-T.value.offsetHeight,a=T.value.scrollTop;b.percentage=parseInt(a/e*100)};return(e,a)=>{const l=t("ArticleCard"),f=t("van-list");return o(),s("div",{class:"select-none vanlist p-15 overflow-auto fixed top-60 left-0 right-0 bottom-0",ref_key:"scrollBox",ref:T,onScroll:H},[r(f,{loading:d(q),"onUpdate:loading":a[0]||(a[0]=e=>p(q)?q.value=e:q=e),error:d(C),"onUpdate:error":a[1]||(a[1]=e=>p(C)?C.value=e:C=e),finished:d(A),"finished-text":`总共 ${d(j)} 条，没有了哦 ฅ ̳͒•ˑ̫• ̳͒ฅ`,"error-text":"请求失败，点击重新加载",onLoad:B},{default:n((()=>[i("div",m,[(o(!0),s(u,null,c(d($),(e=>(o(),v(l,{key:e.id,article:e},null,8,["article"])))),128))])])),_:1},8,["loading","error","finished","finished-text"])],544)}}},[["__scopeId","data-v-13a80313"]]);export{_ as default};

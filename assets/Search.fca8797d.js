import{_ as C,u as S}from"./index.8f25daf0.js";import{r as l,w as b,h as n,o as u,c as v,b as L,i as d,e as p,y as V,k as w,m as B}from"./vendor.6812e6c6.js";const I={key:0,class:"content-box"},N={class:"search-box"},$={key:0,class:"content","data-aos":"fade-up"},E={setup(A){let{proxy:s}=B(),_=S(),m=l({state:"open",page:1,per_page:"all"}),r=l(),o=l([]),t=l(),i=l();localStorage.removeItem("articlePage"),localStorage.removeItem("archivePage"),b(()=>t.value,e=>{e&&(clearTimeout(i.value),i.value=setTimeout(()=>{h()},500))}),s.$blogApi.resolve("getArticle",m.value).then(e=>{console.log("\u6240\u6709\u6587\u7AE0",e),e!=null&&e.length&&(e.forEach(a=>{a.created_at=s.$format(a.created_at,"zh_CN").replace(/\s/,"");const c=Math.floor(Math.random()*_.themeColors.length);a.color=_.themeColors[c]}),r.value=e)});async function g(e){o.value=[],r.value.forEach(a=>{a.title.indexOf(e)!==-1&&o.value.push(a)}),o.value.length||s.$toast("\u6CA1\u6709\u641C\u7D22\u5230\u76F8\u5173\u5185\u5BB9")}let h=()=>{console.log("onSearch"),t.value?(g(t.value),console.log("searchList",o.value)):s.$toast("\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9")},f=()=>o.value=[];return(e,a)=>{const c=n("van-search"),y=n("List"),k=n("Loading");return r.value?(u(),v("div",I,[L("div",N,[d(c,{class:"search",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=x=>t.value=x),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",shape:"round",background:"rgba(255, 255, 255, 0)","clear-trigger":"always",onSearch:p(h),onClear:p(f)},null,8,["modelValue","onSearch","onClear"])]),o.value.length?(u(),v("div",$,[d(y,{list:o.value},null,8,["list"])])):V("",!0)])):(u(),w(k,{key:1}))}}};var T=C(E,[["__scopeId","data-v-48099a38"]]);export{T as default};

import{a as z,r as u,h as N,a2 as B,o as s,c as a,i as h,j as I,F as S,f as A,C as E,b as n,p as U,e as i,t as _,g as M,y as w,m as F}from"./vendor.a16b03f3.js";import{_ as J,u as O}from"./index.30cf3beb.js";import{q as R}from"./query.8a77419a.js";const T={class:"content-box"},G={key:0,class:"content"},H=["onClick"],K={class:"title"},P=["onClick"],Q={class:"info txt-ell-one"},W=["onClick"],X={key:0,class:"label-list"},Y=["onClick"],Z={class:"description txt-ell-one"},ee={setup(te){let{proxy:m}=F(),r=O(),p=z(),y=u({state:"open",page:1,per_page:12}),C=u([]),b=u(),d=u(!1),x=u(!1),f=u(!1);async function L(){m.$blogApi.resolve("getArticle",y.value).then(e=>{console.log("\u6587\u7AE0\u5217\u8868",e),d.value=!1,e!=null&&e.length?(e.length<12?x.value=!0:y.value.page++,e.forEach(o=>{o.created_at=m.$format(o.created_at,"zh_CN").replace(/\s/,"");const v=/^(.+)?\r\n\s*(.+)?\r\n/,k=/^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/,g=v.exec(o.body),t=Math.floor(Math.random()*r.images.length),l=Math.floor(Math.random()*r.defaultDes.length);if(g&&g.length>=2){const c=k.exec(g[1]);c&&c.length===3?(o.description=c[1],o.imgUrl=c[2]):(o.description=r.defaultDes[l],o.imgUrl=r.images[t])}else o.description=r.defaultDes[l],o.imgUrl=r.images[t]}),C.value.push(...e)):e!=null&&e.length?(f.value=!0,d.value=!1):x.value=!0}).catch(e=>{console.log("======\u8BF7\u6C42\u5931\u8D25======",e),m.$toast(`\u8BF7\u6C42\u5931\u8D25${e}`),f.value=!0,d.value=!1})}let V=()=>L();R().then(e=>{console.log("\u6587\u7AE0\u603B\u6570",e),b.value=e==null?void 0:e.repository.issues.totalCount});let D=e=>{localStorage.setItem("content",JSON.stringify(e)),p.push("/articleDetail")},$=()=>p.push("/archives"),j=e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e)),p.push("/listDetail")},q=e=>{console.log(e),localStorage.removeItem("categories"),p.push({path:"/listDetail",query:{name:e.name}})};return(e,o)=>{const v=N("van-icon"),k=N("van-list"),g=B("lazy");return s(),a("div",T,[h(k,{loading:d.value,"onUpdate:loading":o[1]||(o[1]=t=>d.value=t),finished:x.value,"finished-text":`\u5DF2\u7ECF\u52A0\u8F7D ${b.value} \u6761\uFF0C\u6CA1\u6709\u4E86\u54E6 \u0E05 \u0333\u0352\u2022\u02D1\u032B\u2022 \u0333\u0352\u0E05`,error:f.value,"onUpdate:error":o[2]||(o[2]=t=>f.value=t),"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",onLoad:i(V)},{default:I(()=>[C.value.length?(s(),a("div",G,[(s(!0),a(S,null,A(C.value,t=>(s(),a("div",{class:"list","data-aos":"fade-up",key:t.id},[E(n("img",{class:"bg-img cursor hvr-wobble-vertical",onClick:U(l=>i(D)(t),["self"])},null,8,H),[[g,t.imgUrl]]),n("div",K,[n("div",{class:"name cursor txt-ell-one",onClick:U(l=>i(D)(t),["self"])},_(t.title),9,P),n("div",Q,[n("div",{class:"info-item cursor",onClick:o[0]||(o[0]=(...l)=>i($)&&i($)(...l))},[h(v,{name:"notes-o"}),M(" "+_(t.created_at),1)]),n("div",{class:"info-item cursor",onClick:l=>i(j)(t.milestone)},[h(v,{name:"apps-o"}),M(" "+_(t.milestone.title?t.milestone.title:"\u6682\u65E0\u5206\u7C7B"),1)],8,W),t.labels?(s(),a("div",X,[h(v,{name:"label-o"}),(s(!0),a(S,null,A(t.labels,(l,c)=>(s(),a("div",{class:"label-item cursor",key:c,onClick:oe=>i(q)(l)},_(l.name),9,Y))),128))])):w("",!0)]),n("div",Z,_(t.description),1)])]))),128))])):w("",!0)]),_:1},8,["loading","finished","finished-text","error","onLoad"])])}}};var ne=J(ee,[["__scopeId","data-v-2ae3b52e"]]);export{ne as default};

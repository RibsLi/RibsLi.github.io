import{u as e,a,r as t,q as l,o as s,c as o,b as r,g as n,t as i,e as u,s as d,v as c,i as v,F as g,f as p,x as m,y as h}from"./vendor.fdc4af75.js";import{_ as f,u as b}from"./index.947a54e2.js";const y={class:"select-none vanlist"},x={class:"bg-white/80 z-1 lh-60 pl-15 bg-primary mt-15"},_={class:"text-#b854d4 font-bold px-20 py-8 bg-white rounded-5"},q={class:"grid gap-15 grid-cols-3 box p-15"},$={name:"ArticleCategory"};var C=f(Object.assign($,{setup(f){const{proxy:$}=h(),C=b(),I=e(),j=a();let A=t({page:1,per_page:12}),S=t(),T=t(),k=t([]),w=t(!1),z=t(!1),M=t(!1);if(I.query.name)T.value="Tag",S.value=I.query.name,A.value.labels=I.query.name;else{T.value="Category";const e=localStorage.getItem("categories"),a=e?JSON.parse(e):{};A.value.milestone=a.title||"",S.value=a.title||""}document.title=S.value,localStorage.setItem("docTitle",S.value);const N=()=>{$.$blogApi.resolve("giteeIssues",A.value).then((e=>{w.value=!1,(null==e?void 0:e.length)?(e.length<12?z.value=!0:A.value.page++,e.forEach((e=>{e.created_at=$.$format(e.created_at,"zh_CN").replace(/\s/,"");const a=Math.floor(Math.random()*C.palette.length);e.color=C.palette[a]})),k.value.push(...e)):(null==e?void 0:e.length)?(M.value=!0,w.value=!1):(z.value=!0,I.query.name&&($.$toast("当前目录下没有文章"),setTimeout((()=>j.back()),1e3)))})).catch((e=>{$.$toast(`请求失败${e}`),M.value=!0,w.value=!1}))};return(e,a)=>{const t=l("ArticleCard"),h=l("van-list");return s(),o("div",y,[r("div",x,[n(i(u(T))+"： ",1),r("span",_,i(u(S)),1)]),d(h,{loading:u(w),"onUpdate:loading":a[0]||(a[0]=e=>v(w)?w.value=e:w=e),error:u(M),"onUpdate:error":a[1]||(a[1]=e=>v(M)?M.value=e:M=e),finished:u(z),"finished-text":"没有了哦 ฅ ̳͒•ˑ̫• ̳͒ฅ","error-text":"请求失败，点击重新加载",onLoad:N},{default:c((()=>[r("div",q,[(s(!0),o(g,null,p(u(k),(e=>(s(),m(t,{key:e.id,article:e},null,8,["article"])))),128))])])),_:1},8,["loading","error","finished"])])}}}),[["__scopeId","data-v-2d44ac4f"]]);export{C as default};

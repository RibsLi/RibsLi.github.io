import{a as u,r as s,h as i,o as a,c as l,F as g,f as v,l as d,e as m,t as f,k,m as y}from"./vendor.87e019c6.js";import{_ as h}from"./index.eb05d364.js";const x={key:0,class:"content"},C=["onClick"],b={setup(B){let{proxy:n}=y(),r=u(),o=s(),c=s({page:1,per_page:100});n.$blogApi.resolve("getTags",c.value).then(e=>{console.log("\u6807\u7B7E\u5217\u8868",e),e!=null&&e.length&&(o.value=e)});let _=e=>{console.log(e),localStorage.removeItem("categories"),r.push({path:"/listDetail",query:{name:e.name}})};return(e,I)=>{const p=i("Loading");return o.value?(a(),l("div",x,[(a(!0),l(g,null,v(o.value,t=>(a(),l("div",{class:"list cursor txt-ell-one hvr-bounce-to-top","data-aos":"fade-up",style:d({color:`#${t.color}`}),key:t.id,onClick:L=>m(_)(t)},f(t.name),13,C))),128))])):(a(),k(p,{key:1}))}}};var $=h(b,[["__scopeId","data-v-159fbfa0"]]);export{$ as default};

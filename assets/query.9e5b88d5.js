import{g as t,t as s,a as r,r as e}from"./index.e04891c5.js";var a=({username:t,repository:s})=>`\n    query { \n      repository(owner:"${t}", name: "${s}") {\n        issues(states:OPEN) {\n          totalCount\n        }\n      }\n    }\n  `;const n=async r=>{try{const e=JSON.stringify({query:r}),a=await fetch(t,{method:"POST",headers:{Authorization:s},body:e});(t=>{if(t.status>=200&&t.status<300)return t;const s=new Error(t.statusText);throw s.response=t,s})(a);return(await a.json()).data}catch(e){}},o=()=>n(a({username:r,repository:e}));export{o as q};

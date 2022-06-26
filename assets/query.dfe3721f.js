import{g as s,t as a,a as n,r as u}from"./index.5378c7f1.js";var i={queryArticleCount:({username:t,repository:r})=>`
    query { 
      repository(owner:"${t}", name: "${r}") {
        issues(states:OPEN) {
          totalCount
        }
      }
    }
  `,queryInspirationCount:({username:t,repository:r})=>`
    query { 
      repository(owner:"${t}", name: "${r}") {
        issues(states:CLOSED, labels: ["Inspiration"]) {
          totalCount
        }
      }
    }
  `,queryFilterArticleCount:({username:t,repository:r,label:e,milestone:o})=>`
    {
      search(type: ISSUE, query: "
        user:${t} 
        repo:${r} 
        state:open
        ${o?"milestone:"+o:""}  
        ${e?"label:"+e:""} 
      ") {
        issueCount
      }
    }
  `};const c=t=>{if(t.status>=200&&t.status<300)return t;const r=new Error(t.statusText);throw r.response=t,r},y=async t=>{try{const r=JSON.stringify({query:t}),e=await fetch(s,{method:"POST",headers:{Authorization:a},body:r});return c(e),(await e.json()).data}catch(r){console.log(r)}},q=()=>y(i.queryArticleCount({username:n,repository:u}));export{q};

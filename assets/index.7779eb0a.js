import{d as e,u as t,a,r as l,o,c as s,b as n,e as i,F as r,f as c,n as u,g as d,t as m,h as v,i as p,j as h,w as f,k as g,p as y,l as b,D as x,m as k,q as _,s as w,v as I,x as C,y as S,z as E,S as D,A as T,B as $,E as B,C as L,G as A,H as P,T as O,I as j,K as z,J as M,L as U,M as G,N as R,O as F,P as V,Q as q,R as N,U as X,V as H,W,X as K,Y as J,Z as Q,_ as Y,$ as Z,a0 as ee}from"./vendor.61ae407d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const te=e("foo",{state:()=>({access_token:localStorage.getItem("access_token")||"",songDetail:[],songList:[],audio:null,musicIndex:null,isPlay:!1,uid:"1659235548",menuBtn:!1,percentage:null,scrollBox:null,articleCount:0,milestones:[],palette:["#70f3ff","#ff461f","#ff2d51","#44cef6","#3eede7","#ff4777","#177cb0","#065279","#00bc12","#003472","#4b5cc4","#ff7500","#8c4356","#425066","#574266","#8d4bbb","#9d2933","#003371","#56004f","#801dae","#725e82","#392f41","#312520","#6e511e","#424c50","#41555d","#60281e","#66BFBF","#6E85B7","#B28FCE","#86C166","#F596AA","#F19483","#F9BF45","#E79460","#2EA9DF","#FB966E","#BC9F77","#867835","#B9887D","#66CCFF","#66CCCC","#666699","#009966","#444693","#2b4490","#003a6c","#6950a1","#694d9f","#009ad6"],defaultDes:["人生如逆旅，我亦是行人。","世事一场大梦，人生几度秋凉。","追风赶月莫停留，平芙尽处是春山。","我随清风浮云去，雾散之时即归来。","天下风云出我辈，一入江湖岁月催。","人面不知何处去，桃花依旧笑春风。","书山有路勤为径，学海无涯苦作舟。","南柯一梦终须醒，浮生若梦皆是空。","一时逍遥花满楼，半世颠簸孤流离。","最是人间留不住，朱颜辞镜花辞树。","我本将心向明月，奈何明月照沟渠。","岁月静好是片刻，一地鸡毛是日常。","若得青峰三尺剑，醉罢斩天落长虹。","东风吹醒英雄梦，笑对青山万重山。"]}),getters:{},actions:{getGiteeMilestones(e){this.milestones=e||[],this.articleCount=e.reduce(((e,t)=>e+t.open_issues),0)||0},setAccessToken(e){this.access_token=e}}});var ae=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a};const le={class:"menu w-full sticky top-0 left-0 flex justify-between items-center backdrop-blur border-b border-white/30 bg-white/30 select-none z-10"},oe={class:"flex mr-80"},se=["onClick"];var ne=ae({setup(e){const v=te(),p=t(),h=a(),f=l([{name:"首页",path:"/home"},{name:"文章",path:"/article"},{name:"分类",path:"/categories"},{name:"标签",path:"/tags"},{name:"归档",path:"/archives"},{name:"搜索",path:"/search"}]);return(e,t)=>(o(),s("div",le,[n("div",null,[n("div",{class:"menu-btn cursor w-30 h-20 mx-15 my-20 flex flex-col justify-between items-center relative",onClick:t[0]||(t[0]=e=>i(v).menuBtn=!i(v).menuBtn)},[(o(),s(r,null,c(3,((e,t)=>n("div",{class:u(["cursor w-full h-2 bg-white",[{active0:0===t&&i(v).menuBtn},{active1:1===t&&i(v).menuBtn},{active2:2===t&&i(v).menuBtn},{active00:0===t&&!i(v).menuBtn},{active11:1===t&&!i(v).menuBtn},{active22:2===t&&!i(v).menuBtn}]]),key:t},null,2))),64))])]),n("div",oe,[(o(!0),s(r,null,c(f.value,((e,t)=>(o(),s("div",{class:"menu-item",key:t,onClick:()=>i(h).push(e.path)},[n("a",{class:u(["relative block px-20 py-5 mx-5 my-12.5 uppercase text-white font-bold duration-500 hover:text-hover",{active:i(p).path.includes(e.path)}]),href:"javascript:void(0);"},[n("i",{class:u(["cursor mr-5 fa",0===t?"fa-gitlab":"fa-heartbeat"])},null,2),d(m(e.name),1)],2)],8,se)))),128))])]))}},[["__scopeId","data-v-4295d220"]]);const ie={class:"w-full h-full bg-white/60 flex flex-col items-center select-none hidden-scrollbar"},re=["onClick"];var ce=ae({setup(e){const v=t(),p=a(),h=l([{name:"首页",path:"/home"},{name:"文章",path:"/article"},{name:"分类",path:"/categories"},{name:"标签",path:"/tags"},{name:"归档",path:"/archives"},{name:"搜索",path:"/search"}]);return(e,t)=>(o(),s("div",ie,[n("img",{class:"cursor hvr-grow w-80 h-80 rounded-50% overflow-hidden border-3 border-white/50 my-20",src:"https://article.biliimg.com/bfs/article/6a2a5e595f1e10813735ac493fcb22332b6b69e8.gif",onClick:t[0]||(t[0]=e=>i(p).push("/home"))}),(o(!0),s(r,null,c(h.value,((e,t)=>(o(),s("div",{key:t,onClick:()=>i(p).push(e.path)},[n("a",{class:u(["relative block px-20 py-5 mx-15 my-12.5 uppercase text-white font-bold duration-500 hover:text-hover",{active:i(v).path.includes(e.path)}]),href:"javascript:void(0);"},[n("i",{class:u(["cursor fa mr-5",0===t?"fa-gitlab":"fa-heartbeat"])},null,2),d(m(e.name),1)],2)],8,re)))),128))]))}},[["__scopeId","data-v-7d622f5c"]]);const ue=["src"],de=(e=>(y("data-v-19876ccc"),e=e(),b(),e))((()=>n("a",{class:"fa fa-github-alt hvr-grow mr-15 cursor hover:text-hover",href:"https://github.com/RibsLi",target:"_blank"},null,-1))),me=["onClick"];var ve=ae({emits:["switchClick"],setup(e){const t=te(),c=a(),d=l("https://article.biliimg.com/bfs/article/90e2219df048066103e80a184496df2663d853c4.png");let m=l(!1);const y=v((()=>t.songDetail.length?t.songDetail[t.musicIndex].al.picUrl:d.value)),b=()=>{x({title:"退出登录",showCancelButton:!0,confirmButtonText:"退出",closeOnClickOverlay:!0}).then((()=>{localStorage.removeItem("access_token"),t.setAccessToken(""),c.replace("/login")}))};return(e,a)=>(o(),s(r,null,[i(m)?(o(),s("div",{key:0,class:"cursor absolute top-0 left-0 right-0 bottom-0 z-10",onClick:a[0]||(a[0]=e=>p(m)?m.value=!1:m=!1)})):h("v-if",!0),n("div",{class:"fixed bottom-20 right-15 bg-black/50 border border-white/30 z-11 select-none rounded-5 overflow-hidden p-10 flex items-center text-white text-3xl transition-transform duration-300",style:g(i(m)?"transform: translateX(0)":"transform: translateX(82%)")},[n("div",{class:u(["fa hvr-grow cursor hover:text-hover",i(m)?"fa-arrow-circle-right":"fa-arrow-circle-left"]),onClick:a[1]||(a[1]=f((e=>p(m)?m.value=!i(m):m=!i(m)),["stop"]))},null,2),n("div",{class:"hvr-grow rounded-50% overflow-hidden mx-15 border-3 border-white/80 relative hover:text-hover",onClick:a[2]||(a[2]=f((t=>e.$emit("switchClick")),["stop"]))},[n("img",{class:u(["cursor w-25 h-25 rounded-50% box-border",i(t).isPlay&&"switch-active"]),src:i(y)},null,10,ue),n("i",{class:u(["fa cursor absolute top-50% left-50% translate--50% text-xl",i(t).isPlay?"fa-pause-circle":"fa-play-circle"])},null,2)]),de,n("div",{class:"fa fa-power-off hvr-grow cursor hover:text-hover",onClick:f(b,["stop"])},null,8,me)],4)],64))}},[["__scopeId","data-v-19876ccc"]]);const pe=["src"],he={key:0,class:"fixed top-54 left-0 w-80% h-40 lh-40 px-15 text-#666 bg-white font-bold"},fe={key:1,class:"fixed top-54 left-0 w-80% h-40 lh-40 px-15 text-#666 bg-white font-bold"},ge=d("搜 "),ye={style:{color:"#409eff"}},be=d(" 相关的结果(单曲)"),xe={class:"hidden-scrollbar fixed top-90 left-0 w-80% h-270 rounded-rb-10"},ke=["onClick"],_e={class:"cursor"},we={class:"cursor ml-10 text-#bbb text-xs"},Ie={class:"cursor line-clamp-one text-xs text-#bbb ml-20 mt-3"},Ce=["onClick"],Se={class:"box grid gap-10 grid-cols-6"},Ee=["onClick"];var De=ae({emits:["searchDetail","backSongList"],setup(e,{emit:t}){const{proxy:a}=S(),v=te(),h=l("https://article.biliimg.com/bfs/article/90e2219df048066103e80a184496df2663d853c4.png"),f=l({keywords:"",limit:100,type:1,offset:0});let g=l(),y=l(!1),b=l([]),x=l([]),E=l(!1),D=l([{name:"账号",type:"text",msg:"请输入邮箱账号/手机号",data:""},{name:"密码",type:"password",msg:"请输入账号密码",data:""}]),T=l(localStorage.getItem("avatarUrl")?localStorage.getItem("avatarUrl"):h.value),$=l(),B=l([]),L=l(!1),A=l(),P=l({limit:52,cat:"华语",order:"hot",offset:0,pagenum:1}),O=l();const j=l({uid:localStorage.getItem("userId")?localStorage.getItem("userId"):v.uid,limit:30,offset:0});a.$api.resolve("getDefSearch").then((e=>200===(null==e?void 0:e.code)&&(g.value=e.data.realKeyword))),a.$api.resolve("getHotSearch").then((e=>200===(null==e?void 0:e.code)&&(b.value=e.data))),k((()=>f.value.keywords),(()=>{clearTimeout($.value),$.value=setTimeout((()=>U()),500)})),k((()=>v.uid),(()=>{j.value.uid=v.uid,v.songList=[],N()}));const z=()=>{f.value.keywords&&a.$api.resolve("getSearch",f.value).then((e=>200===(null==e?void 0:e.code)&&t("searchDetail",e.result.songs)))},M=()=>{setTimeout((()=>y.value=!1),300)},U=()=>{f.value.keywords&&a.$api.resolve("getSuggest",{keywords:f.value.keywords}).then((e=>200===(null==e?void 0:e.code)&&(x.value=e.result.songs)))},G=()=>{if(!localStorage.getItem("userId"))return E.value=!0;a.$dialog.confirm({message:"确认退出吗？"}).then((()=>{a.$api.resolve("logout").then((e=>{200===(null==e?void 0:e.code)&&(localStorage.removeItem("avatarUrl"),localStorage.removeItem("nickname"),localStorage.removeItem("userId"),v.uid="1659235548",T.value=h.value,a.$toast("退出成功"))}))}))},R=()=>D.value[0].data?D.value[1].data?void(D.value[0].data.includes("@")?a.$api.resolve("loginEmail",{email:D.value[0].data,password:D.value[1].data}).then((e=>{if(200!==(null==e?void 0:e.code))return a.$toast("登录失败"),!1;localStorage.setItem("avatarUrl",e.profile.avatarUrl),localStorage.setItem("nickname",e.profile.nickname),localStorage.setItem("userId",e.profile.userId),v.uid=e.profile.userId,T.value=e.profile.avatarUrl,a.$toast("登录成功"),E.value=!1})):/^1[3-9]\d{9}$/.test(D.value[0].data)&&a.$api.resolve("loginMobile",{phone:D.value[0].data,password:D.value[1].data}).then((e=>{if(200!==(null==e?void 0:e.code))return a.$toast("登录失败"),!1;localStorage.setItem("avatarUrl",e.profile.avatarUrl),localStorage.setItem("nickname",e.profile.nickname),localStorage.setItem("userId",e.profile.userId),v.uid=e.profile.userId,T.value=e.profile.avatarUrl,a.$toast("登录成功"),E.value=!1}))):(a.$toast("请输入账号密码"),!1):(a.$toast("请输入邮箱账号/手机号"),!1),F=()=>{D.value[0].data=null,D.value[1].data=null},V=()=>{L.value?(L.value=!1,A.value.scrollTop=0,setTimeout((()=>document.querySelector(".categories-menu").style.display="none"),700)):L.value||B.value.length?(L.value=!0,document.querySelector(".categories-menu").style.display="block"):(L.value=!0,document.querySelector(".categories-menu").style.display="block",a.$api.resolve("getCatlist").then((e=>{200===(null==e?void 0:e.code)&&(B.value.push({name:"",data:[{name:"推荐歌单"}]}),Object.values(e.categories).forEach((e=>B.value.push({name:e,data:[]}))),e.sub.forEach((e=>B.value[e.category+1].data.push(e))))})))},q=()=>{t("backSongList"),N(),O.value=null,L.value=!1,A.value.scrollTop=0,setTimeout((()=>document.querySelector(".categories-menu").style.display="none"),700)},N=()=>{a.$api.resolve("getUserPlaylist",j.value).then((e=>{200===(null==e?void 0:e.code)&&(v.songList=[],v.songList.push(...e.playlist.slice(1,e.playlist.length))),X()}))};N();const X=()=>{a.$api.resolve("toplist").then((e=>200===(null==e?void 0:e.code)&&v.songList.push(...e.list)))};return(e,l)=>{const h=_("van-search"),k=_("van-icon"),S=_("van-field"),$=_("van-form"),j=_("van-dialog");return o(),s(r,null,[w(h,{class:"w-55%",modelValue:f.value.keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>f.value.keywords=e),placeholder:i(g),shape:"round",background:"rgba(255, 255, 255, 0)",onSearch:z,onFocus:l[1]||(l[1]=e=>p(y)?y.value=!0:y=!0),onBlur:M},null,8,["modelValue","placeholder"]),w(k,{class:"cursor",name:"wap-home-o",color:"#1989fa",size:"26",onClick:q}),w(k,{class:"cursor ml-15",name:"apps-o",color:"#1989fa",size:"26",onClick:V}),n("div",{class:"w-40 h-40 rounded-50% overflow-hidden absolute top-50% right-20 translate-y--50%",onClick:G},[n("img",{class:"cursor hvr-grow w-full h-full rounded-50%",src:i(T)},null,8,pe)]),w(j,{show:i(E),"onUpdate:show":l[2]||(l[2]=e=>p(E)?E.value=e:E=e),title:"请登录网易云音乐","show-confirm-button":!1,"close-on-click-overlay":!0,onClose:F},{default:I((()=>[w($,{"show-error":""},{default:I((()=>[(o(!0),s(r,null,c(i(D),((e,t)=>(o(),C(S,{key:t,modelValue:e.data,"onUpdate:modelValue":t=>e.data=t,clearable:"",required:"",placeholder:e.msg,type:e.type,rules:[{required:!0}]},null,8,["modelValue","onUpdate:modelValue","placeholder","type"])))),128))])),_:1}),n("div",{class:"cursor w-full h-44 lh-44 text-center text-xl text-white bg-hover active:opacity-90",onClick:R},"登录")])),_:1},8,["show"]),n("div",{class:u(["animate__animated hidden-scrollbar fixed top-54 left-0 bg-white w-80% h-300 rounded-rb-10",i(y)?"animate__fadeIn":["animate__fadeOut","display-none"]])},[f.value.keywords?(o(),s("div",fe,[ge,n("span",ye,m(f.value.keywords),1),be])):(o(),s("div",he,"热搜榜")),n("div",xe,[f.value.keywords?(o(!0),s(r,{key:1},c(i(x),(e=>(o(),s("div",{class:"cursor text-sm text-#333 px-15 py-5 hover:bg-#eee",key:e.id,onClick:t=>{return l=e.id,void a.$api.resolve("getSongsDetail",{ids:l}).then((e=>{200===(null==e?void 0:e.code)&&(v.songDetail.push(e.songs[0]),v.musicIndex=0===v.musicIndex||v.musicIndex?v.songDetail.length-1:0)}));var l}},[d(m(e.name),1),n("i",null,m(e.alias[0])+" - ",1),(o(!0),s(r,null,c(e.artists,((e,t)=>(o(),s("span",{class:"cursor",key:t},m(e.name)+"  ",1)))),128))],8,Ce)))),128)):(o(!0),s(r,{key:0},c(i(b),((e,t)=>(o(),s("div",{class:"cursor text-#333 px-15 py-5 hover:bg-#eee",key:t,onClick:t=>(e=>{f.value.keywords=e.searchWord,z()})(e)},[n("span",{class:u(["cursor mr-10",t<3&&"text-#ff0000"])},m(t+1),3),n("span",_e,m(e.searchWord),1),n("span",we,m(e.score),1),n("span",Ie,m(e.content),1)],8,ke)))),128))])],2),n("div",{class:u(["categories-menu display-none animate__animated hidden-scrollbar fixed top-54 left-0 right-0 bottom-60 bg-white/80 text-primary backdrop-blur px-20 py-10",i(L)?"animate__fadeInDown":["animate__fadeOutUp"]]),ref_key:"menuBox",ref:A},[(o(!0),s(r,null,c(i(B),((e,l)=>(o(),s("div",{class:"select-none mt-10",key:l},[d(m(e.name),1),n("div",Se,[(o(!0),s(r,null,c(e.data,((e,l)=>(o(),s("div",{class:u(["truncate cursor text-center hover:text-hover",i(O)===e.name&&"text-hover"]),key:l,onClick:l=>{return o=e,v.songList=[],void("推荐歌单"!==o.name?(P.value.cat=o.name,P.value.offset=0,P.value.pagenum=1,a.$api.resolve("getTopPlayList",P.value).then((e=>{200===(null==e?void 0:e.code)&&(v.songList=e.playlists,O.value=o.name,t("backSongList"),V())}))):a.$api.resolve("getRecommend",{limit:52}).then((e=>{200===(null==e?void 0:e.code)&&(v.songList=e.result,O.value=o.name,t("backSongList"),V())})));var o}},m(e.name),11,Ee)))),128))])])))),128))],2)],64)}}},[["__scopeId","data-v-74b034c5"]]);const Te={class:"flex flex-wrap select-none"},$e=["onClick","onMouseenter"],Be=["src"],Le={class:"cursor absolute bottom-35 left-50% translate-x--50% text-white text-sm"},Ae=["onClick"],Pe={class:"cursor line-clamp-one absolute top-0 left-0 right-0 text-right text-sm px-5 text-#eee play-count"},Oe=(e=>(y("data-v-6c681063"),e=e(),b(),e))((()=>n("span",{class:"iconfont icon-erji101 cursor mr-5"},null,-1))),je={class:"cursor"};var ze=ae({emits:["searchDetail"],setup(e,{emit:t}){const{proxy:a}=S(),v=te();let h=l(),g=l(),y=l(!1);const b=(e,l)=>{a.$api.resolve("getSongDetail",{id:e}).then((e=>{if(200===(null==e?void 0:e.code)){const o=e.playlist.trackIds.map((e=>e.id)).join(",");a.$api.resolve("getSongsDetail",{ids:o}).then((e=>{200===(null==e?void 0:e.code)&&("play"===l?(v.songDetail=e.songs,v.musicIndex=0):"list"===l&&t("searchDetail",e.songs))}))}}))};return(e,t)=>{const a=_("van-notice-bar");return o(),s("div",Te,[(o(!0),s(r,null,c(i(v).songList,((e,l)=>(o(),s("div",{class:"list-item w-160 h-160 mx-5 mb-10 rounded-10 overflow-hidden relative",key:e.id,onClick:t=>b(e.id,"list"),onMouseenter:()=>p(h)?h.value=l:h=l,onMouseleave:t[0]||(t[0]=e=>p(y)?y.value=null:y=null)},[n("img",{class:"cursor w-full h-full rounded-10 overflow-hidden opacity-90",src:e.coverImgUrl||e.picUrl},null,8,Be),w(a,{class:"line-clamp-one cursor name",scrollable:i(h)===l},{default:I((()=>[d(m(e.name),1)])),_:2},1032,["scrollable"]),n("div",Le,m(e.updateFrequency),1),n("div",{class:u(["play iconfont cursor absolute top-50% left-50% translate--50% text-40 text-#a17fe0 display-none",i(g)===l?"icon-zanting":"icon-bofang1"]),onClick:f((t=>((e,t,a)=>{g.value=a,b(e,t)})(e.id,"play",l)),["stop"])},null,10,Ae),n("div",Pe,[Oe,n("span",je,m(e.playCount<1e4?e.playCount:(e.playCount/1e4).toFixed(1)+"万"),1)])],40,$e)))),128))])}}},[["__scopeId","data-v-6c681063"]]);const Me={key:0,class:"hidden-scrollbar w-full h-full text-center text-sm lh-40 text-#434343",id:"content"},Ue=["id"],Ge={key:1,class:"hidden-scrollbar w-full h-full text-center text-sm lh-40 text-#434343"};var Re=ae({setup(e){const{proxy:t}=S(),a=te();let n=l(),d=l([]),v=l("00:00"),p=l();E((()=>p.value=setInterval(g,1e3))),k((()=>a.musicIndex),(()=>{n.value=a.songDetail[a.musicIndex].id,h(),document.getElementById("content")&&(document.getElementById("content").scrollTop=0)}));const h=()=>{t.$api.resolve("getLyric",{id:n.value}).then((e=>{if(200===(null==e?void 0:e.code)){const t=[];e.lrc.lyric.split("\n").filter((e=>null!==e&&""!==e)).forEach((e=>{const a=e.split("]"),l=a[1],o=(a[0].split("[")[1]||"").split(":"),s=60*o[0]+parseInt(o[1]);t.push({time:s,lyc:l})})),d.value=t}}))},f=(e,t)=>(t===d.value.length-1&&(t=0),v.value>e.time&&v.value<d.value[t+1].time),g=()=>{if(a.audio){v.value=a.audio.currentTime;const e=parseInt(v.value);document.getElementById(e)&&(document.getElementById(e).offsetTop>160&&(document.getElementById("content").scrollTop=document.getElementById(e).offsetTop-160),a.audio.addEventListener("ended",(()=>document.getElementById("content").scrollTop=0)))}};return(e,t)=>i(a).songDetail.length?(o(),s("div",Me,[(o(!0),s(r,null,c(i(d),((e,t)=>(o(),s("p",{id:e.time,key:t.id,class:u({activetxt:f(e,t)})},m(e.lyc),11,Ue)))),128))])):(o(),s("div",Ge,"还没有歌曲呢，先去添加一下吧"))}},[["__scopeId","data-v-1c321a7f"]]);const Fe=["src","volume"],Ve={class:"flex justify-between"},qe={class:"flex-1 ml-10 flex items-center"},Ne=["onClick"],Xe={class:"flex justify-center items-center select-none"},He={class:"text-center text-sm text-primary"},We={key:1,class:"min-w-60% max-w-60% h-5 cursor mx-10 bg-#ebedf0 rounded-4"},Ke={class:"text-center text-sm text-primary"},Je={emits:["lyricClick","playlistClick"],setup(e,{emit:t}){const{proxy:a}=S(),d=te(),p=l(["icon-liebiaoxunhuan","icon-shangyishoushangyige","icon-bofang1","icon-xiayigexiayishou","icon-yinle","icon-24gl-volumeMiddle","icon-bofangliebiao"]),h={0:"icon-liebiaoxunhuan",1:"icon-danquxunhuan",2:"icon-suijibofang"},f={0:{volume:.2,icon:"icon-24gl-volumeLow"},.2:{volume:.6,icon:"icon-24gl-volumeMiddle"},.6:{volume:1,icon:"icon-24gl-volumeHigh"},1:{volume:0,icon:"icon-24gl-volumeCross"}};let g=l(),y=l(),b=l(),x=l(0),I=l("00:00"),D=l("00:00"),T=l(0),$=l(.6),B=l();k((()=>d.songDetail),(()=>{d.songDetail.length&&(y.value=d.songDetail[d.musicIndex].id,A(),d.isPlay=!0,setTimeout((()=>{g.value.play(),p.value[2]="icon-zanting"}),300),B.value=setInterval(j,1e3),d.audio=g.value)})),k((()=>x.value),(e=>p.value[0]=h[e])),k((()=>d.musicIndex),(()=>{y.value=d.songDetail[d.musicIndex].id,A(),d.isPlay=!0,setTimeout((()=>{g.value.play(),p.value[2]="icon-zanting"}),300),B.value=setInterval(j,1e3),d.audio=g.value})),E((()=>{g.value.addEventListener("ended",(()=>{if(1!==x.value)return P(3);g.value.loop=!0,g.value.play()}))}));const L=v((()=>d.songDetail.length?d.songDetail[d.musicIndex].name+" - "+d.songDetail[d.musicIndex].ar[0].name:"明月直入，无心可猜。")),A=()=>{a.$api.resolve("getSongURL",{id:y.value}).then((e=>200===(null==e?void 0:e.code)&&(b.value=e.data[0].url)))},P=e=>{if(0===e&&(x.value=x.value+1>2?0:x.value+1),1===e||3===e){if(!d.songDetail.length)return a.$toast("还没有歌曲呢，先去添加一下吧");1===e&&(d.musicIndex<=0?d.musicIndex=d.songDetail.length-1:d.musicIndex--),3===e&&(2===x.value&&(d.musicIndex=Math.floor(Math.random()*d.songDetail.length)),d.musicIndex===d.songDetail.length-1?d.musicIndex=0:d.musicIndex++),y.value=d.songDetail[d.musicIndex].id,A(),setTimeout((()=>{g.value.play(),p.value[2]="icon-zanting"}),300),B.value=setInterval(j,1e3)}if(2===e){if(!d.songDetail.length)return a.$toast("还没有歌曲呢，先去添加一下吧");d.isPlay?(d.isPlay=!1,g.value.pause(),p.value[2]="icon-bofang1",clearInterval(B.value)):(d.isPlay=!0,setTimeout((()=>{g.value.play(),p.value[2]="icon-zanting"}),300),B.value=setInterval(j,1e3))}if(4===e&&t("lyricClick"),5===e){const e=f[$.value];$.value=e.volume,p.value[5]=e.icon}6===e&&t("playlistClick")},O=e=>{if(e){let t="",a="",l="";return(e=parseInt(e))>=0&&e<60?(l=String(e).padStart(2,"0"),`00:${l}`):e>=60&&e<3600?(a=String(Math.floor(e/60)).padStart(2,"0"),l=String(e%60).padStart(2,"0"),`${a}:${l}`):(t=String(Math.floor(e/3600)).padStart(2,"0"),a=String(Math.floor(e%3600/60)).padStart(2,"0"),l=String(e%60).padStart(2,"0"),`${t}:${a}:${l}`)}},j=()=>{g.value&&(I.value=g.value.currentTime,D.value=g.value.duration,T.value=parseInt(I.value/D.value*100))},z=e=>{if(d.songDetail.length&&g.value.currentTime){const t=document.getElementById("progress");let a=0;t&&(a=t.offsetWidth),T.value=e.offsetX/a*100,g.value.currentTime=e.offsetX*D.value/a,t.onmousemove=e=>{e&&(T.value=e.offsetX/a*100,g.value.currentTime=e.offsetX*D.value/a)}}},M=()=>document.getElementById("progress").onmousemove=null;return window.onmouseup=()=>document.getElementById("progress")&&(document.getElementById("progress").onmousemove=null),(e,t)=>{const a=_("van-notice-bar"),l=_("van-progress");return o(),s(r,null,[n("audio",{ref_key:"audio",ref:g,src:i(b),autoplay:"",volume:i($)},null,8,Fe),n("div",Ve,[w(a,{class:"w-30% z-10 line-clamp-one",background:"transparent",color:"#1989fa",text:i(L)},null,8,["text"]),n("div",qe,[(o(!0),s(r,null,c(p.value,((e,t)=>(o(),s("div",{class:"mx-3%",key:t},[n("div",{class:u(["cursor iconfont text-xl font-bold text-primary hover:text-hover",e]),onClick:e=>P(t)},null,10,Ne)])))),128))])]),n("div",Xe,[n("div",He,m(O(i(I))||"00:00"),1),isNaN(parseInt(i(T)))?(o(),s("div",We)):(o(),C(l,{key:0,class:"min-w-60% max-w-60% cursor mx-10",id:"progress","show-pivot":!1,"stroke-width":"5",percentage:i(T),color:"linear-gradient(to right, #be99ff, #7232dd)",onMousedown:z,onMouseup:M},null,8,["percentage"])),n("div",Ke,m(O(i(D))||"00:00"),1)])],64)}}};function Qe(e){const t=Math.floor(e/1e3);return`${Math.floor(t/60).toString().padStart(2,"0")}:${(t%60).toString().padStart(2,"0")}`}const Ye={key:0},Ze={class:"fixed top-0 left-0 right-0 p-10"},et=(e=>(y("data-v-d040993c"),e=e(),b(),e))((()=>n("div",{class:"font-bold"},"当前播放",-1))),tt={class:"flex justify-between text-#333 text-sm mt-5"},at={class:"hidden-scrollbar absolute top-65 left-0 right-0 bottom-0"},lt=["onDblclick"],ot={class:"cursor truncate flex-1"},st={class:"cursor truncate w-30%"},nt={class:"cursor truncate w-50"},it={key:1,class:"text-sm text-#aaa text-center mt-180"};var rt=ae({emits:["emptyClick"],setup(e){const t=te(),a=v((()=>t.songDetail));return(e,l)=>i(t).songDetail.length?(o(),s("div",Ye,[n("div",Ze,[et,n("div",tt,[n("span",null,"总 "+m(i(t).songDetail.length)+" 首",1),n("span",{class:"cursor hover:text-hover",onClick:l[0]||(l[0]=t=>e.$emit("emptyClick"))},"清空列表")])]),n("div",at,[(o(!0),s(r,null,c(i(a),((e,a)=>(o(),s("div",{class:u(["pl-10 flex justify-between text-#222 text-sm lh-25 hover:text-hover hover:bg-white/70",{active:i(t).musicIndex===a}]),key:e.id,onDblclick:()=>i(t).musicIndex=a},[n("div",ot,m(e.name),1),n("div",st,[(o(!0),s(r,null,c(e.ar,(e=>(o(),s("span",{key:e},m(e.name)+"  ",1)))),128))]),n("div",nt,m(i(Qe)(e.dt)),1)],42,lt)))),128))])])):(o(),s("div",it,"还没有歌曲呢，先去添加一下吧"))}},[["__scopeId","data-v-d040993c"]]);const ct={props:{searchData:{type:Array,default:()=>[]}},setup(e){const t=e,{proxy:a}=S(),l=te();return(e,n)=>{const u=_("van-col"),v=_("van-progress"),p=_("van-row");return o(!0),s(r,null,c(t.searchData,((e,t)=>(o(),C(p,{class:"text-#434343 text-sm hover:bg-hover/50 hover:text-white",key:e.id,align:"center",wrap:!1,onDblclick:t=>{return o=e.id,void a.$api.resolve("getSongsDetail",{ids:o}).then((e=>{200===(null==e?void 0:e.code)&&(l.songDetail.push(e.songs[0]),l.musicIndex=0===l.musicIndex||l.musicIndex?l.songDetail.length-1:0)}));var o}},{default:I((()=>[w(u,{class:"lh-30 truncate",span:"2",style:{"text-align":"center"}},{default:I((()=>[d(m(t+1),1)])),_:2},1024),w(u,{class:"lh-30 truncate",span:"6"},{default:I((()=>[d(m(e.name),1)])),_:2},1024),w(u,{class:"lh-30 truncate",span:"5"},{default:I((()=>[d(m(e.ar[0].name),1)])),_:2},1024),w(u,{class:"lh-30 truncate",span:"5"},{default:I((()=>[d(m(e.al.name),1)])),_:2},1024),w(u,{class:"lh-30 truncate",span:"2"},{default:I((()=>[d(m(i(Qe)(e.dt)),1)])),_:2},1024),w(u,{class:"h-30 lh-30 truncate relative",span:"4"},{default:I((()=>[w(v,{class:"absolute top-50% left-0 right-0 translate-y--50% z-1000","show-pivot":!1,percentage:e.pop},null,8,["percentage"])])),_:2},1024)])),_:2},1032,["onDblclick"])))),128)}}},ut={class:"w-full h-full absolute top-0 right-0 backdrop-blur bg-white/30 rounded-10"},dt={class:"w-full bg-white/60 rounded-t-10 flex items-center fixed top-0 left-0 right-0"},mt={class:"hidden-scrollbar fixed top-54 left-0 right-0 bottom-60 px-5 pt-10 z--1"},vt={class:"w-full h-60 bg-white/60 rounded-b-10 fixed bottom-0 left-0 right-0"},pt={setup(e){const t=te();let a=l(!1),c=l(!1),d=l(!1),m=l(),v=l(!1);k((()=>c.value),(e=>{e?document.getElementsByClassName("playlist-content")[0].style.display="block":setTimeout((()=>document.getElementsByClassName("playlist-content")[0].style.display="none"),700)}));const g=()=>{a.value=!a.value,c.value=!1},y=e=>{d.value=!0,a.value=!1,c.value=!1,m.value=e},b=()=>{(d.value||a.value||c.value)&&(c.value=!1,d.value=!1,a.value=!1)};return(e,l)=>{const x=_("van-dialog");return o(),s(r,null,[n("div",ut,[n("div",dt,[w(De,{onSearchDetail:y,onBackSongList:b})]),n("div",mt,[i(a)||i(d)?h("v-if",!0):(o(),C(ze,{key:0,class:u(i(a)?"animate__animated animate__zoomOut":"animate__animated animate__zoomInDown"),onSearchDetail:y},null,8,["class"])),!i(a)&&i(d)?(o(),C(ct,{key:1,"search-data":i(m)},null,8,["search-data"])):h("v-if",!0),w(Re,{class:u(["animate__animated absolute top-0 left-0 z--1",i(a)?["animate__zoomInDown","z-0"]:"animate__zoomOut"])},null,8,["class"])]),n("div",{class:u(["playlist-content animate__animated fixed top-54 bottom-60 left-0 right-0 bg-white/30 display-none",i(c)?"animate__fadeIn":"animate__fadeOut"]),onClick:l[1]||(l[1]=f((e=>p(c)?c.value=!1:c=!1),["self"]))},[n("div",{class:u(["animate__animated w-60% absolute top-0 right-0 bottom-0 backdrop-blur bg-white/80 overflow-hidden",i(c)?"animate__fadeInRight":"animate__fadeOutRight"])},[w(rt,{onEmptyClick:l[0]||(l[0]=e=>p(v)?v.value=!0:v=!0)})],2)],2),n("div",vt,[w(Je,{onLyricClick:g,onPlaylistClick:l[2]||(l[2]=e=>p(c)?c.value=!i(c):c=!i(c))})])]),w(x,{show:i(v),"onUpdate:show":l[3]||(l[3]=e=>p(v)?v.value=e:v=e),title:"确认清空当前列表吗？","show-cancel-button":"",onConfirm:l[4]||(l[4]=e=>i(t).songDetail=[])},null,8,["show"])],64)}}};const ht={class:"w-full h-full object-cover",autoplay:"",loop:"",muted:""},ft=["src"],gt={setup(e){D.use([T]);const t=l(["https://wallpaper-static.cheetahfun.com/wallpaper/sites/dynamics/vm8.mp4","https://pcsource.upupoo.com/theme/2000806170/video_20008061701c03_mark.mp4?end=10","https://pcsource.upupoo.com/theme/2000821157/video_2000821157e70a_mark.mp4?end=10"]);return(e,a)=>(o(),C(i(L),{class:"w-full h-full fixed top-0 left-0 z--2",modules:[i(B)],effect:"fade",loop:"",autoplay:{delay:6e4,disableOnInteraction:!1}},{default:I((()=>[(o(!0),s(r,null,c(t.value,((e,t)=>(o(),C(i($),{key:t},{default:I((()=>[n("video",ht,[n("source",{src:e,type:"video/mp4"},null,8,ft)])])),_:2},1024)))),128))])),_:1},8,["modules"]))}};const yt=(e=>(y("data-v-7ba5bd90"),e=e(),b(),e))((()=>n("img",{class:"w-full h-full object-cover overflow-hidden fixed top-0 left-0 z--3",src:"https://img-baofun.zhhainiao.com/fs/e66dcd28271902a06d72ca8e7513e84d.jpg"},null,-1))),bt={key:3,class:"fixed top-0 left-0 right-0 bottom-0 z-11 display-none",id:"sidebar"},xt={id:"sidebar-content"};var kt=ae({setup(e){const{proxy:a}=S(),c=te(),d=t();let m=l(!1);const v=l({page:1,per_page:100});return k((()=>c.menuBtn),(e=>{e&&(document.getElementById("sidebar").style.display="block",document.getElementById("sidebar-content").className="animate__animated animate__fadeInRight"),e||(document.getElementById("sidebar-content").className="animate__animated animate__fadeOutRight",setTimeout((()=>document.getElementById("sidebar").style.display="none"),600))})),k((()=>d.path),(()=>{c.menuBtn=!1,c.percentage=null,m.value=!1})),k((()=>c.access_token),(e=>{e&&a.$blogApi.resolve("giteeMilestones",v.value).then((e=>{(null==e?void 0:e.length)&&(e.forEach((e=>{const t=Math.floor(Math.random()*c.palette.length),a=Math.floor(Math.random()*c.defaultDes.length);if(e.description){const l=e.description.split("\r\n");l&&l.length>=2?(e.summary=l[0].split("summary:")[1]?l[0].split("summary:")[1]:c.defaultDes[a],e.color=c.palette[t]):(e.summary=c.defaultDes[a],e.color=c.palette[t])}else e.summary=c.defaultDes[a],e.color=c.palette[t]})),c.getGiteeMilestones(e))}))}),{immediate:!0}),(e,t)=>{const a=_("BackTop"),l=_("van-progress"),d=_("router-view");return o(),s(r,null,[i(c).access_token?(o(),C(ne,{key:0})):h("v-if",!0),i(c).access_token?(o(),C(gt,{key:1})):h("v-if",!0),i(c).access_token?(o(),C(a,{key:2})):h("v-if",!0),yt,i(c).access_token?(o(),s("div",bt,[n("div",{class:"w-full h-full bg-black/30",id:"sidebar-mask",onClick:t[0]||(t[0]=e=>i(c).menuBtn=!1)}),n("div",xt,[w(ce)])])):h("v-if",!0),i(c).access_token?(o(),C(ve,{key:4,onSwitchClick:t[1]||(t[1]=e=>p(m)?m.value=!i(m):m=!i(m))})):h("v-if",!0),i(c).access_token?(o(),s("div",{key:5,class:u(["modal w-690 h-500 fixed top-50% left-50% translate--50% rounded-10 overflow-hidden z-11",!i(m)&&"actived"])},[n("div",{class:u(["w-full h-full",i(m)?"one":"out"])},[w(pt)],2)],2)):h("v-if",!0),i(c).access_token?A((o(),C(l,{key:6,class:"!fixed bottom-0 left-0 right-0 z-1",percentage:i(c).percentage,color:"linear-gradient(to right, #b2fefa, #0ed2f7)"},null,8,["percentage"])),[[P,i(c).percentage]]):h("v-if",!0),w(d,null,{default:I((({Component:e})=>[w(O,{name:"fade-transform",mode:"out-in"},{default:I((()=>[(o(),C(z,{exclude:["ArticleDetail","ArticleCategory"]},[(o(),C(j(e)))],1024))])),_:2},1024)])),_:1})],64)}}},[["__scopeId","data-v-7ba5bd90"]]);const _t={},wt=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in _t)return;_t[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":"modulepreload",t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},It=[{path:"",redirect:"/login",meta:{title:"登录",keepAlive:!1}},{path:"/login",name:"Login",component:()=>wt((()=>import("./index.552eb09d.js")),["assets/index.552eb09d.js","assets/index.6f2891c2.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"登录",keepAlive:!1}},{path:"/home",name:"Home",component:()=>wt((()=>import("./index.c0d3c48c.js")),["assets/index.c0d3c48c.js","assets/index.30caef8c.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"首页",keepAlive:!0}},{path:"/article",name:"Article",component:()=>wt((()=>import("./index.e5a569ab.js")),["assets/index.e5a569ab.js","assets/index.8dd66733.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"文章",keepAlive:!0}},{path:"/categories",name:"Categories",component:()=>wt((()=>import("./index.b05201d2.js")),["assets/index.b05201d2.js","assets/index.baf367d3.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"分类",keepAlive:!0}},{path:"/tags",name:"Tags",component:()=>wt((()=>import("./index.ac0caccc.js")),["assets/index.ac0caccc.js","assets/index.599782f9.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css","assets/index.76ecdbef.js"]),meta:{title:"标签",keepAlive:!0}},{path:"/archives",name:"Archives",component:()=>wt((()=>import("./index.fa516478.js")),["assets/index.fa516478.js","assets/index.e7c95eaf.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"归档",keepAlive:!0}},{path:"/search",name:"Search",component:()=>wt((()=>import("./index.b403967c.js")),["assets/index.b403967c.js","assets/index.10310a0e.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css","assets/index.76ecdbef.js"]),meta:{title:"搜索",keepAlive:!0}},{path:"/articleDetail",name:"ArticleDetail",component:()=>wt((()=>import("./index.da20e84c.js")),["assets/index.da20e84c.js","assets/index.cf6bbc96.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"文章详情",keepAlive:!1}},{path:"/articleCategory",name:"ArticleCategory",component:()=>wt((()=>import("./index.82b70d80.js")),["assets/index.82b70d80.js","assets/index.69f85386.css","assets/vendor.61ae407d.js","assets/vendor.5a2f82ce.css"]),meta:{title:"分类或标签详情",keepAlive:!1}}],Ct=M({history:U(),routes:It});Ct.beforeEach(((e,t,a)=>{te().access_token&&localStorage.getItem("access_token")||"/login"===e.path?(document.title=e.matched[0].meta.title,localStorage.setItem("docTitle",e.matched[0].meta.title),a()):a({path:"/login"})}));class St{constructor(e){this.baseProjectUrl=e}async resolve(e,t={},a={params:""}){var l;let[o,s]=function(e,t){return{toplist:["/toplist","GET",1],getSongDetail:["/playlist/detail","GET",1],getSongURL:["/song/url","GET",1],getLyric:["/lyric","GET",1],getSongsDetail:["/song/detail","GET",1],getDefSearch:["/search/default","GET",1],getHotSearch:["/search/hot/detail","GET",1],getSearch:["/cloudsearch","GET",1],getSuggest:["/search/suggest","GET",1],loginEmail:["/login","POST",1],loginMobile:["/login/cellphone","POST",1],logout:["/logout","GET",1],getUserPlaylist:["/user/playlist","GET",1],getRecommend:["/personalized","GET",1],getCatlist:["/playlist/catlist","GET",1],getTopPlayList:["/top/playlist","GET",1],giteeIssues:["/issues","GET",1],giteeIssuesDetail:[`/issues/${null==t?void 0:t.number}`,"GET",1],giteeMilestones:["/milestones","GET",1],giteeLabels:["/labels","GET",1],giteeOauth:["/oauth/token","POST",1]}[e]||""}(e,a.params);!o.includes("http")&&(o=this.baseProjectUrl+o);const n={method:s.toUpperCase()};"GET"===n.method?n.params=t:"POST"===n.method&&(n.data=t);const i=te();o.includes("gitee")?n.params.access_token=i.access_token||localStorage.getItem("access_token")||"":delete n.params.access_token;try{const e=await G(o,n);if(200===(null==e?void 0:e.status)){if(200===(null==(l=null==e?void 0:e.data)?void 0:l.code)||(null==e?void 0:e.data))return Promise.resolve(e.data);R("出错了呢 o(╥﹏╥)o")}}catch(r){}}}const Et=new St("https://musicapi.adicw.cn"),Dt=new St("https://gitee.com/api/v5/repos/RibsLi/Blog");const Tt={class:"w-full h-full fixed top-0 left-0 bg-black/10 flex justify-center items-center"},$t=[n("img",{class:"w-80 h-100",src:"https://i0.hdslb.com/bfs/article/af9e4145b05876118e17e7336aadaec9175860980.gif"},null,-1)];var Bt=ae({},[["render",function(e,t){return o(),s("div",Tt,$t)}]]);const Lt=[n("img",{class:"cursor w-full h-full rounded-50% overflow-hidden",src:"https://article.biliimg.com/bfs/article/69288002a75612bcd4af31f4310af7f8efbd2d82.png"},null,-1)],At={setup(e){const t=te(),a=()=>{const e=t.scrollBox,a=()=>{const t=e.scrollTop;if(t>0){const l=Math.max(50,Math.floor(t/10));e.scrollTop-=l,requestAnimationFrame(a)}};requestAnimationFrame(a)};return(e,l)=>A((o(),s("div",{class:"hvr-grow w-50 h-50 z-11 fixed bottom-90 right-15 rounded-50% overflow-hidden border-3 border-white/80",onClick:a},Lt,512)),[[P,i(t).percentage>20]])}},Pt={class:"flex items-center truncate text-primary lh-60 txt-ell-one"},Ot={key:0,class:"flex items-center hover:text-hover"},jt=["onClick"],zt={props:{article:{type:Object,default:()=>({})}},setup(e){const l=t(),u=a();return(t,a)=>{const v=_("van-icon");return o(),s("div",{class:"hvr-bob select-none w-full h-full bg-white/70 rounded-b-5 rounded-t-2 overflow-hidden shadow-[0_5px_10px_rgba(100,100,100,0.6)] px-15",style:g(`border-top: 8px solid ${e.article.color}`)},[n("div",{class:"cursor w-full truncate lh-70 font-bold text-primary text-xl hover:text-hover border-b-1 border-divider-3",onClick:a[0]||(a[0]=t=>{return a=e.article.number,void u.push({path:"/articleDetail",query:{number:a}});var a})},m(e.article.title),1),n("div",Pt,[n("div",{class:"cursor hover:text-hover",onClick:a[1]||(a[1]=e=>i(u).push("/archives"))},[w(v,{class:"cursor",name:"notes-o"}),d(" "+m(e.article.created_at),1)]),n("div",{class:"cursor mx-15 hover:text-hover",onClick:a[2]||(a[2]=t=>{return a=e.article.milestone,void("/articleCategory"!==l.path&&(localStorage.setItem("categories",JSON.stringify(a)),u.push("/articleCategory")));var a})},[w(v,{class:"cursor",name:"apps-o"}),d(" "+m(e.article.milestone.title||"暂无分类"),1)]),e.article.labels?(o(),s("div",Ot,[w(v,{class:"cursor",name:"label-o"}),(o(!0),s(r,null,c(e.article.labels,(e=>(o(),s("div",{class:"mx-5 cursor",key:e.id,onClick:t=>(e=>{"/articleCategory"!==l.path&&(localStorage.removeItem("categories"),u.push({path:"/articleCategory",query:{name:e.name}}))})(e)},m(e.name),9,jt)))),128))])):h("v-if",!0)])],4)}}},Mt={$api:Et,$blogApi:Dt,$format:ee},Ut=F(kt);for(const Gt in Mt)Ut.config.globalProperties[Gt]=Mt[Gt];Ut.component("Loading",Bt),Ut.component("BackTop",At),Ut.component("ArticleCard",zt),Ut.use(R),Ut.use(V),Ut.use(q),Ut.use(N),Ut.use(x),Ut.use(X),Ut.use(H),Ut.use(W),Ut.use(K),Ut.use(J),Ut.use(Q,{preLoad:1,error:"https://article.biliimg.com/bfs/article/f35cf490710ee8b537bbdcc434a4536dda55130e.gif",loading:"https://article.biliimg.com/bfs/article/f35cf490710ee8b537bbdcc434a4536dda55130e.gif",lazyComponent:!0}),Ut.use(Y),Ut.use(Z()),Ut.use(Ct),Ut.mount("#app");export{ae as _,te as u};

import{d as e,u as t,a,r as l,o,c as s,b as n,F as i,e as r,n as c,f as u,g as d,t as m,h as p,i as v,j as h,w as g,k as f,p as b,l as y,m as x,q as k,s as w,v as _,x as I,y as C,z as D,S,A as E,B,E as L,C as T,D as $,G as A,T as z,H as P,K as j,I as U,J as O,L as R,M as V,N as F,O as q,P as M,Q as N,R as X,U as H,V as K,W,X as G,Y as J,Z as Q,_ as Y,$ as Z,a0 as ee}from"./vendor.662b62b4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const te=e("foo",{state:()=>({songDetail:[],songList:[],audio:null,musicIndex:null,isPlay:!1,uid:"1659235548",menuBtn:!1,percentage:null,scrollBox:null,articleCount:0,palette:["#70f3ff","#ff461f","#ff2d51","#44cef6","#3eede7","#ff4777","#177cb0","#065279","#00bc12","#003472","#4b5cc4","#ff7500","#8c4356","#425066","#574266","#8d4bbb","#9d2933","#003371","#56004f","#801dae","#725e82","#392f41","#312520","#6e511e","#424c50","#41555d","#60281e","#66BFBF","#6E85B7","#B28FCE","#86C166","#F596AA","#F19483","#F9BF45","#E79460","#2EA9DF","#FB966E","#BC9F77","#867835","#B9887D","#66CCFF","#66CCCC","#666699","#009966","#444693","#2b4490","#003a6c","#6950a1","#694d9f","#009ad6"],defaultDes:["人生如逆旅，我亦是行人。","世事一场大梦，人生几度秋凉。","追风赶月莫停留，平芙尽处是春山。","我随清风浮云去，雾散之时即归来。","天下风云出我辈，一入江湖岁月催。","人面不知何处去，桃花依旧笑春风。","书山有路勤为径，学海无涯苦作舟。","南柯一梦终须醒，浮生若梦皆是空。","一时逍遥花满楼，半世颠簸孤流离。","最是人间留不住，朱颜辞镜花辞树。","我本将心向明月，奈何明月照沟渠。","岁月静好是片刻，一地鸡毛是日常。","若得青峰三尺剑，醉罢斩天落长虹。","东风吹醒英雄梦，笑对青山万重山。"]}),getters:{},actions:{}});var ae=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a};const le={class:"menu w-full fixed top-0 left-0 flex justify-between items-center backdrop-blur border-b border-white/30 bg-white/30 select-none z-10"},oe={class:"flex mr-80"},se=["onClick"];var ne=ae({setup(e){const p=te(),v=t(),h=a(),g=l([{name:"首页",path:"/home"},{name:"文章",path:"/article"},{name:"分类",path:"/categories"},{name:"标签",path:"/tags"},{name:"归档",path:"/archives"},{name:"搜索",path:"/search"}]),f=()=>p.menuBtn=!p.menuBtn;return(e,t)=>(o(),s("div",le,[n("div",null,[n("div",{class:"menu-btn cursor w-30 h-20 mx-15 my-20 flex flex-col justify-between items-center relative",onClick:f},[(o(),s(i,null,r(3,((e,t)=>n("div",{class:c(["cursor w-full h-2 bg-white",[{active0:0===t&&u(p).menuBtn},{active1:1===t&&u(p).menuBtn},{active2:2===t&&u(p).menuBtn},{active00:0===t&&!u(p).menuBtn},{active11:1===t&&!u(p).menuBtn},{active22:2===t&&!u(p).menuBtn}]]),key:t},null,2))),64))])]),n("div",oe,[(o(!0),s(i,null,r(g.value,((e,t)=>{return o(),s("div",{class:"menu-item",key:t,onClick:t=>(e=>h.push(e.path))(e)},[n("a",{class:c(["relative block px-20 py-5 mx-5 my-12.5 uppercase text-white font-bold duration-500 hover:text-hover",{active:(a=e.path,v.path.includes(a))}]),href:"javascript:void(0);"},[n("i",{class:c(["cursor mr-5 fa",0===t?"fa-gitlab":"fa-heartbeat"])},null,2),d(m(e.name),1)],2)],8,se);var a})),128))])]))}},[["__scopeId","data-v-4295d220"]]);const ie={class:"w-full h-full bg-white/60 flex flex-col items-center select-none hidden-scrollbar"},re=["onClick"];var ce=ae({setup(e){const u=t(),p=a(),v=l([{name:"首页",path:"/home"},{name:"文章",path:"/article"},{name:"分类",path:"/categories"},{name:"标签",path:"/tags"},{name:"归档",path:"/archives"},{name:"搜索",path:"/search"}]),h=()=>p.push("/home");return(e,t)=>(o(),s("div",ie,[n("img",{class:"cursor hvr-grow w-80 h-80 rounded-50% overflow-hidden border-3 border-white/50 my-20",src:"https://article.biliimg.com/bfs/article/6a2a5e595f1e10813735ac493fcb22332b6b69e8.gif",onClick:h}),(o(!0),s(i,null,r(v.value,((e,t)=>{return o(),s("div",{key:t,onClick:t=>(e=>p.push(e.path))(e)},[n("a",{class:c(["relative block px-20 py-5 mx-15 my-12.5 uppercase text-white font-bold duration-500 hover:text-hover",{active:(a=e.path,u.path.includes(a))}]),href:"javascript:void(0);"},[n("i",{class:c(["cursor fa mr-5",0===t?"fa-gitlab":"fa-heartbeat"])},null,2),d(m(e.name),1)],2)],8,re);var a})),128))]))}},[["__scopeId","data-v-7d622f5c"]]);const ue=["onClick"],de=["src"],me=(e=>(b("data-v-19876ccc"),e=e(),y(),e))((()=>n("a",{class:"fa fa-github-alt hvr-grow cursor hover:text-hover",href:"https://github.com/RibsLi",target:"_blank"},null,-1)));var pe=ae({emits:["switchClick"],setup(e,{emit:t}){const a=te(),r=l("https://article.biliimg.com/bfs/article/90e2219df048066103e80a184496df2663d853c4.png");let d=l(!1);const m=()=>t("switchClick"),b=p((()=>a.songDetail.length?a.songDetail[a.musicIndex].al.picUrl:r.value));return(e,t)=>(o(),s(i,null,[u(d)?(o(),s("div",{key:0,class:"cursor absolute top-0 left-0 right-0 bottom-0 z-10",onClick:t[0]||(t[0]=e=>v(d)?d.value=!1:d=!1)})):h("v-if",!0),n("div",{class:"fixed bottom-20 right-15 bg-black/50 border border-white/30 z-11 select-none rounded-5 overflow-hidden p-10 flex items-center text-white text-3xl transition-transform duration-300",style:f(u(d)?"transform: translateX(0)":"transform: translateX(77%)")},[n("div",{class:c(["fa hvr-grow cursor hover:text-hover",u(d)?"fa-arrow-circle-right":"fa-arrow-circle-left"]),onClick:t[1]||(t[1]=g((e=>v(d)?d.value=!u(d):d=!u(d)),["stop"]))},null,2),n("div",{class:"hvr-grow rounded-50% overflow-hidden mx-15 border-3 border-white/80 relative hover:text-hover",onClick:g(m,["stop"])},[n("img",{class:c(["cursor w-25 h-25 rounded-50% box-border",u(a).isPlay&&"switch-active"]),src:u(b)},null,10,de),n("i",{class:c(["fa cursor absolute top-50% left-50% translate--50% text-xl",u(a).isPlay?"fa-pause-circle":"fa-play-circle"])},null,2)],8,ue),me],4)],64))}},[["__scopeId","data-v-19876ccc"]]);const ve=["src"],he={key:0,class:"fixed top-54 left-0 w-80% h-40 lh-40 px-15 text-#666 bg-white font-bold"},ge={key:1,class:"fixed top-54 left-0 w-80% h-40 lh-40 px-15 text-#666 bg-white font-bold"},fe=d("搜 "),be={style:{color:"#409eff"}},ye=d(" 相关的结果(单曲)"),xe={class:"hidden-scrollbar fixed top-90 left-0 w-80% h-270 rounded-rb-10"},ke=["onClick"],we={class:"cursor"},_e={class:"cursor ml-10 text-#bbb text-xs"},Ie={class:"cursor line-clamp-1 text-xs text-#bbb ml-20 mt-3"},Ce=["onClick"],De={class:"box grid gap-10 grid-cols-6"},Se=["onClick"];var Ee=ae({emits:["searchDetail","backSongList"],setup(e,{emit:t}){const{proxy:a}=C(),p=te(),h=l("https://article.biliimg.com/bfs/article/90e2219df048066103e80a184496df2663d853c4.png"),g=l({keywords:"",limit:100,type:1,offset:0});let f=l(),b=l(!1),y=l([]),D=l([]),S=l(!1),E=l([{name:"账号",type:"text",msg:"请输入邮箱账号/手机号",data:""},{name:"密码",type:"password",msg:"请输入账号密码",data:""}]),B=l(localStorage.getItem("avatarUrl")?localStorage.getItem("avatarUrl"):h.value),L=l(),T=l([]),$=l(!1),A=l(),z=l({limit:52,cat:"华语",order:"hot",offset:0,pagenum:1}),P=l();const j=l({uid:localStorage.getItem("userId")?localStorage.getItem("userId"):p.uid,limit:30,offset:0});a.$api.resolve("getDefSearch").then((e=>200===(null==e?void 0:e.code)&&(f.value=e.data.realKeyword))),a.$api.resolve("getHotSearch").then((e=>200===(null==e?void 0:e.code)&&(y.value=e.data))),x((()=>g.value.keywords),(()=>{clearTimeout(L.value),L.value=setTimeout((()=>V()),500)})),x((()=>p.uid),(()=>{j.value.uid=p.uid,p.songList=[],H()}));const U=()=>{g.value.keywords&&a.$api.resolve("getSearch",g.value).then((e=>200===(null==e?void 0:e.code)&&t("searchDetail",e.result.songs)))},O=()=>b.value=!0,R=()=>{setTimeout((()=>b.value=!1),300)},V=()=>{g.value.keywords&&a.$api.resolve("getSuggest",{keywords:g.value.keywords}).then((e=>200===(null==e?void 0:e.code)&&(D.value=e.result.songs)))},F=()=>{if(!localStorage.getItem("userId"))return S.value=!0;a.$dialog.confirm({message:"确认退出吗？"}).then((()=>{a.$api.resolve("logout").then((e=>{200===(null==e?void 0:e.code)&&(localStorage.removeItem("avatarUrl"),localStorage.removeItem("nickname"),localStorage.removeItem("userId"),p.uid="1659235548",B.value=h.value,a.$toast("退出成功"))}))}))},q=()=>E.value[0].data?E.value[1].data?void(E.value[0].data.includes("@")?a.$api.resolve("loginEmail",{email:E.value[0].data,password:E.value[1].data}).then((e=>{if(200!==(null==e?void 0:e.code))return a.$toast("登录失败"),!1;localStorage.setItem("avatarUrl",e.profile.avatarUrl),localStorage.setItem("nickname",e.profile.nickname),localStorage.setItem("userId",e.profile.userId),p.uid=e.profile.userId,B.value=e.profile.avatarUrl,a.$toast("登录成功"),S.value=!1})):/^1[3-9]\d{9}$/.test(E.value[0].data)&&a.$api.resolve("loginMobile",{phone:E.value[0].data,password:E.value[1].data}).then((e=>{if(200!==(null==e?void 0:e.code))return a.$toast("登录失败"),!1;localStorage.setItem("avatarUrl",e.profile.avatarUrl),localStorage.setItem("nickname",e.profile.nickname),localStorage.setItem("userId",e.profile.userId),p.uid=e.profile.userId,B.value=e.profile.avatarUrl,a.$toast("登录成功"),S.value=!1}))):(a.$toast("请输入账号密码"),!1):(a.$toast("请输入邮箱账号/手机号"),!1),M=()=>{E.value[0].data=null,E.value[1].data=null},N=()=>{$.value?($.value=!1,A.value.scrollTop=0,setTimeout((()=>document.querySelector(".categories-menu").style.display="none"),700)):$.value||T.value.length?($.value=!0,document.querySelector(".categories-menu").style.display="block"):($.value=!0,document.querySelector(".categories-menu").style.display="block",a.$api.resolve("getCatlist").then((e=>{200===(null==e?void 0:e.code)&&(T.value.push({name:"",data:[{name:"推荐歌单"}]}),Object.values(e.categories).forEach((e=>T.value.push({name:e,data:[]}))),e.sub.forEach((e=>T.value[e.category+1].data.push(e))))})))},X=()=>{t("backSongList"),H(),P.value=null,$.value=!1,A.value.scrollTop=0,setTimeout((()=>document.querySelector(".categories-menu").style.display="none"),700)},H=()=>{a.$api.resolve("getUserPlaylist",j.value).then((e=>{200===(null==e?void 0:e.code)&&(p.songList=[],p.songList.push(...e.playlist.slice(1,e.playlist.length))),K()}))};H();const K=()=>{a.$api.resolve("toplist").then((e=>200===(null==e?void 0:e.code)&&p.songList.push(...e.list)))};return(e,l)=>{const h=k("van-search"),x=k("van-icon"),C=k("van-field"),L=k("van-form"),j=k("van-dialog");return o(),s(i,null,[w(h,{class:"w-55%",modelValue:g.value.keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>g.value.keywords=e),placeholder:u(f),shape:"round",background:"rgba(255, 255, 255, 0)",onSearch:U,onFocus:O,onBlur:R},null,8,["modelValue","placeholder"]),w(x,{class:"cursor",name:"wap-home-o",color:"#1989fa",size:"26",onClick:X}),w(x,{class:"cursor ml-15",name:"apps-o",color:"#1989fa",size:"26",onClick:N}),n("div",{class:"w-40 h-40 rounded-50% overflow-hidden absolute top-50% right-20 translate-y--50%",onClick:F},[n("img",{class:"cursor hvr-grow w-full h-full rounded-50%",src:u(B)},null,8,ve)]),w(j,{show:u(S),"onUpdate:show":l[1]||(l[1]=e=>v(S)?S.value=e:S=e),title:"请登录网易云音乐","show-confirm-button":!1,"close-on-click-overlay":!0,onClose:M},{default:_((()=>[w(L,{"show-error":""},{default:_((()=>[(o(!0),s(i,null,r(u(E),((e,t)=>(o(),I(C,{key:t,modelValue:e.data,"onUpdate:modelValue":t=>e.data=t,clearable:"",required:"",placeholder:e.msg,type:e.type,rules:[{required:!0}]},null,8,["modelValue","onUpdate:modelValue","placeholder","type"])))),128))])),_:1}),n("div",{class:"cursor w-full h-44 lh-44 text-center text-xl text-white bg-hover active:opacity-90",onClick:q},"登录")])),_:1},8,["show"]),n("div",{class:c(["animate__animated hidden-scrollbar fixed top-54 left-0 bg-white w-80% h-300 rounded-rb-10",u(b)?"animate__fadeIn":["animate__fadeOut","display-none"]])},[g.value.keywords?(o(),s("div",ge,[fe,n("span",be,m(g.value.keywords),1),ye])):(o(),s("div",he,"热搜榜")),n("div",xe,[g.value.keywords?(o(!0),s(i,{key:1},r(u(D),(e=>(o(),s("div",{class:"cursor text-sm text-#333 px-15 py-5 hover:bg-#eee",key:e.id,onClick:t=>{return l=e.id,void a.$api.resolve("getSongsDetail",{ids:l}).then((e=>{200===(null==e?void 0:e.code)&&(p.songDetail.push(e.songs[0]),p.musicIndex=0===p.musicIndex||p.musicIndex?p.songDetail.length-1:0)}));var l}},[d(m(e.name),1),n("i",null,m(e.alias[0])+" - ",1),(o(!0),s(i,null,r(e.artists,((e,t)=>(o(),s("span",{class:"cursor",key:t},m(e.name)+"  ",1)))),128))],8,Ce)))),128)):(o(!0),s(i,{key:0},r(u(y),((e,t)=>(o(),s("div",{class:"cursor text-#333 px-15 py-5 hover:bg-#eee",key:t,onClick:t=>(e=>{g.value.keywords=e.searchWord,U()})(e)},[n("span",{class:c(["cursor mr-10",t<3&&"text-#ff0000"])},m(t+1),3),n("span",we,m(e.searchWord),1),n("span",_e,m(e.score),1),n("span",Ie,m(e.content),1)],8,ke)))),128))])],2),n("div",{class:c(["categories-menu display-none animate__animated hidden-scrollbar fixed top-54 left-0 right-0 bottom-60 bg-white/80 text-primary backdrop-blur px-20 py-10",u($)?"animate__fadeInDown":["animate__fadeOutUp"]]),ref_key:"menuBox",ref:A},[(o(!0),s(i,null,r(u(T),((e,l)=>(o(),s("div",{class:"select-none mt-10",key:l},[d(m(e.name),1),n("div",De,[(o(!0),s(i,null,r(e.data,((e,l)=>(o(),s("div",{class:c(["truncate cursor text-center hover:text-hover",u(P)===e.name&&"text-hover"]),key:l,onClick:l=>{return o=e,p.songList=[],void("推荐歌单"!==o.name?(z.value.cat=o.name,z.value.offset=0,z.value.pagenum=1,a.$api.resolve("getTopPlayList",z.value).then((e=>{200===(null==e?void 0:e.code)&&(p.songList=e.playlists,P.value=o.name,t("backSongList"),N())}))):a.$api.resolve("getRecommend",{limit:52}).then((e=>{200===(null==e?void 0:e.code)&&(p.songList=e.result,P.value=o.name,t("backSongList"),N())})));var o}},m(e.name),11,Se)))),128))])])))),128))],2)],64)}}},[["__scopeId","data-v-74b034c5"]]);const Be={class:"flex flex-wrap select-none"},Le=["onClick","onMouseenter"],Te=["src"],$e={class:"cursor absolute bottom-35 left-50% translate-x--50% text-white text-sm"},Ae=["onClick"],ze={class:"cursor line-clamp-1 absolute top-0 left-0 right-0 text-right text-sm px-5 text-#eee play-count"},Pe=(e=>(b("data-v-6c681063"),e=e(),y(),e))((()=>n("span",{class:"iconfont icon-erji101 cursor mr-5"},null,-1))),je={class:"cursor"};var Ue=ae({emits:["searchDetail"],setup(e,{emit:t}){const{proxy:a}=C(),p=te();let v=l(),h=l(),f=l(!1);const b=(e,l)=>{a.$api.resolve("getSongDetail",{id:e}).then((e=>{if(200===(null==e?void 0:e.code)){const o=e.playlist.trackIds.map((e=>e.id)).join(",");a.$api.resolve("getSongsDetail",{ids:o}).then((e=>{200===(null==e?void 0:e.code)&&("play"===l?(p.songDetail=e.songs,p.musicIndex=0):"list"===l&&t("searchDetail",e.songs))}))}}))},y=()=>f.value=null;return(e,t)=>{const a=k("van-notice-bar");return o(),s("div",Be,[(o(!0),s(i,null,r(u(p).songList,((e,t)=>(o(),s("div",{class:"list-item w-160 h-160 mx-5 mb-10 rounded-10 overflow-hidden relative",key:e.id,onClick:t=>{return a=e.id,b(a,"list");var a},onMouseenter:e=>(e=>v.value=e)(t),onMouseleave:y},[n("img",{class:"cursor w-full h-full rounded-10 overflow-hidden opacity-90",src:e.coverImgUrl||e.picUrl},null,8,Te),w(a,{class:"line-clamp-1 cursor name",scrollable:u(v)===t},{default:_((()=>[d(m(e.name),1)])),_:2},1032,["scrollable"]),n("div",$e,m(e.updateFrequency),1),n("div",{class:c(["play iconfont cursor absolute top-50% left-50% translate--50% text-40 text-#a17fe0 display-none",u(h)===t?"icon-zanting":"icon-bofang1"]),onClick:g((a=>((e,t,a)=>{h.value=a,b(e,t)})(e.id,"play",t)),["stop"])},null,10,Ae),n("div",ze,[Pe,n("span",je,m(e.playCount<1e4?e.playCount:(e.playCount/1e4).toFixed(1)+"万"),1)])],40,Le)))),128))])}}},[["__scopeId","data-v-6c681063"]]);const Oe={key:0,class:"hidden-scrollbar w-full h-full text-center text-sm lh-40 text-#434343",id:"content"},Re=["id"],Ve={key:1,class:"hidden-scrollbar w-full h-full text-center text-sm lh-40 text-#434343"};var Fe=ae({setup(e){const{proxy:t}=C(),a=te();let n=l(),d=l([]),p=l("00:00"),v=l();D((()=>v.value=setInterval(f,1e3))),x((()=>a.musicIndex),(()=>{n.value=a.songDetail[a.musicIndex].id,h(),document.getElementById("content")&&(document.getElementById("content").scrollTop=0)}));const h=()=>{t.$api.resolve("getLyric",{id:n.value}).then((e=>{if(200===(null==e?void 0:e.code)){const t=[];e.lrc.lyric.split("\n").filter((e=>null!==e&&""!==e)).forEach((e=>{const a=e.split("]"),l=a[1],o=(a[0].split("[")[1]||"").split(":"),s=60*o[0]+parseInt(o[1]);t.push({time:s,lyc:l})})),d.value=t}}))},g=(e,t)=>(t===d.value.length-1&&(t=0),p.value>e.time&&p.value<d.value[t+1].time),f=()=>{if(a.audio){p.value=a.audio.currentTime;const e=parseInt(p.value);document.getElementById(e)&&(document.getElementById(e).offsetTop>160&&(document.getElementById("content").scrollTop=document.getElementById(e).offsetTop-160),a.audio.addEventListener("ended",(()=>document.getElementById("content").scrollTop=0)))}};return(e,t)=>u(a).songDetail.length?(o(),s("div",Oe,[(o(!0),s(i,null,r(u(d),((e,t)=>(o(),s("p",{id:e.time,key:t.id,class:c({activetxt:g(e,t)})},m(e.lyc),11,Re)))),128))])):(o(),s("div",Ve,"还没有歌曲呢，先去添加一下吧"))}},[["__scopeId","data-v-1c321a7f"]]);const qe=["src"],Me={class:"flex justify-between"},Ne={class:"flex-1 ml-10 flex items-center"},Xe=["onClick"],He={class:"flex justify-center items-center select-none"},Ke={class:"w-50 text-center text-sm text-primary"},We={class:"w-50 text-center text-sm text-primary"},Ge={emits:["lyricClick","playlistClick"],setup(e,{emit:t}){const{proxy:a}=C(),d=te(),v=l(["icon-liebiaoxunhuan","icon-shangyishoushangyige","icon-bofang1","icon-xiayigexiayishou","icon-yinle","icon-bofangliebiao"]);let g=l(),f=l(),b=l(),y=l(0),_=l("00:00"),S=l("00:00"),E=l(0),B=l();const L=p((()=>d.songDetail.length?d.songDetail[d.musicIndex].name+" - "+d.songDetail[d.musicIndex].ar[0].name:"明月直入，无心可猜。"));x((()=>d.songDetail),(()=>{d.songDetail.length&&(f.value=d.songDetail[d.musicIndex].id,T(),d.isPlay=!0,setTimeout((()=>{g.value.play(),v.value[2]="icon-zanting"}),300),B.value=setInterval(z,1e3),d.audio=g.value)})),x((()=>y.value),(e=>{v.value[0]=0===e?"icon-liebiaoxunhuan":1===e?"icon-danquxunhuan":"icon-suijibofang"})),x((()=>d.musicIndex),(()=>{f.value=d.songDetail[d.musicIndex].id,T(),d.isPlay=!0,setTimeout((()=>{g.value.play(),v.value[2]="icon-zanting"}),300),B.value=setInterval(z,1e3),d.audio=g.value})),D((()=>{g.value.addEventListener("ended",(()=>{if(1!==y.value)return $(3);g.value.loop=!0,g.value.play()}))}));const T=()=>{a.$api.resolve("getSongURL",{id:f.value}).then((e=>200===(null==e?void 0:e.code)&&(b.value=e.data[0].url)))},$=e=>{if(0===e&&(y.value=y.value+1>2?0:y.value+1),1===e||3===e){if(!d.songDetail.length)return a.$toast("还没有歌曲呢，先去添加一下吧");1===e&&(d.musicIndex<=0?d.musicIndex=d.songDetail.length-1:d.musicIndex--),3===e&&(2===y.value&&(d.musicIndex=Math.floor(Math.random()*d.songDetail.length)),d.musicIndex===d.songDetail.length-1?d.musicIndex=0:d.musicIndex++),f.value=d.songDetail[d.musicIndex].id,T(),setTimeout((()=>{g.value.play(),v.value[2]="icon-zanting"}),300),B.value=setInterval(z,1e3)}if(2===e){if(!d.songDetail.length)return a.$toast("还没有歌曲呢，先去添加一下吧");d.isPlay?(d.isPlay=!1,g.value.pause(),v.value[2]="icon-bofang1",clearInterval(B.value)):(d.isPlay=!0,setTimeout((()=>{g.value.play(),v.value[2]="icon-zanting"}),300),B.value=setInterval(z,1e3))}4===e&&t("lyricClick"),5===e&&t("playlistClick")},A=e=>{if(e){let t="",a="",l="";return(e=parseInt(e))>=0&&e<60?(l=e<10?"0"+e:e,"00:"+l):e>=60&&e<3600?(a=parseInt(e/60),a<10&&(a="0"+a),l=e-parseInt(60*a)<10?"0"+String(e-parseInt(60*a)):e-parseInt(60*a),a+":"+l):t+":"+a+":"+l}},z=()=>{g.value&&(_.value=g.value.currentTime,S.value=g.value.duration,E.value=parseInt(_.value/S.value*100))},P=e=>{if(d.songDetail.length&&g.value.currentTime){const t=document.getElementById("progress");let a=0;t&&(a=t.offsetWidth),E.value=e.offsetX/a*100,g.value.currentTime=e.offsetX*S.value/a,t.onmousemove=e=>{e&&(E.value=e.offsetX/a*100,g.value.currentTime=e.offsetX*S.value/a)}}},j=()=>document.getElementById("progress").onmousemove=null;return window.onmouseup=()=>document.getElementById("progress")&&(document.getElementById("progress").onmousemove=null),(e,t)=>{const a=k("van-notice-bar"),l=k("van-progress");return o(),s(i,null,[n("audio",{ref_key:"audio",ref:g,src:u(b),autoplay:""},null,8,qe),n("div",Me,[w(a,{class:"w-30% z-10 line-clamp-1",background:"transparent",color:"#1989fa",text:u(L)},null,8,["text"]),n("div",Ne,[(o(!0),s(i,null,r(v.value,((e,t)=>(o(),s("div",{class:"mx-3%",key:t},[n("div",{class:c(["cursor iconfont text-xl font-bold text-primary hover:text-hover",e]),onClick:e=>$(t)},null,10,Xe)])))),128))])]),n("div",He,[n("div",Ke,m(A(u(_))),1),isNaN(parseInt(u(E)))?h("v-if",!0):(o(),I(l,{key:0,class:"w-60% cursor",id:"progress","show-pivot":!1,percentage:u(E),color:"linear-gradient(to right, #be99ff, #7232dd)",onMousedown:P,onMouseup:j},null,8,["percentage"])),n("div",We,m(A(u(S))),1)])],64)}}};function Je(e){return Math.floor(e%36e5/6e4).toString().padStart(2,"0")+":"+Math.floor(e%6e4/1e3).toString().padStart(2,"0")}const Qe={key:0},Ye={class:"fixed top-0 left-0 right-0 p-10"},Ze=(e=>(b("data-v-d040993c"),e=e(),y(),e))((()=>n("div",{class:"font-bold"},"当前播放",-1))),et={class:"flex justify-between text-#333 text-sm mt-5"},tt={class:"hidden-scrollbar absolute top-65 left-0 right-0 bottom-0"},at=["onDblclick"],lt={class:"cursor truncate flex-1"},ot={class:"cursor truncate w-30%"},st={class:"cursor truncate w-50"},nt={key:1,class:"text-sm text-#aaa text-center mt-180"};var it=ae({emits:["emptyClick"],setup(e,{emit:t}){const a=te(),l=p((()=>a.songDetail)),d=()=>t("emptyClick");return(e,t)=>u(a).songDetail.length?(o(),s("div",Qe,[n("div",Ye,[Ze,n("div",et,[n("span",null,"总 "+m(u(a).songDetail.length)+" 首",1),n("span",{class:"cursor hover:text-hover",onClick:d},"清空列表")])]),n("div",tt,[(o(!0),s(i,null,r(u(l),((e,t)=>{return o(),s("div",{class:c(["pl-10 flex justify-between text-#222 text-sm lh-25 hover:text-hover hover:bg-white/70",{active:u(a).musicIndex===t}]),key:e.id,onDblclick:e=>(e=>a.musicIndex=e)(t)},[n("div",lt,m(e.name),1),n("div",ot,[(o(!0),s(i,null,r(e.ar,(e=>(o(),s("span",{key:e},m(e.name)+"  ",1)))),128))]),n("div",st,m((l=e.dt,Je(l))),1)],42,at);var l})),128))])])):(o(),s("div",nt,"还没有歌曲呢，先去添加一下吧"))}},[["__scopeId","data-v-d040993c"]]);const rt={props:{searchData:{type:Array,default:()=>[]}},setup(e){const t=e,{proxy:a}=C(),l=te();return(e,n)=>{const c=k("van-col"),u=k("van-progress"),p=k("van-row");return o(!0),s(i,null,r(t.searchData,((e,t)=>(o(),I(p,{class:"text-#434343 text-sm hover:bg-hover/50 hover:text-white",key:e.id,align:"center",wrap:!1,onDblclick:t=>{return o=e.id,void a.$api.resolve("getSongsDetail",{ids:o}).then((e=>{200===(null==e?void 0:e.code)&&(l.songDetail.push(e.songs[0]),l.musicIndex=0===l.musicIndex||l.musicIndex?l.songDetail.length-1:0)}));var o}},{default:_((()=>[w(c,{class:"lh-30 line-clamp-1",span:"2",style:{"text-align":"center"}},{default:_((()=>[d(m(t+1),1)])),_:2},1024),w(c,{class:"lh-30 line-clamp-1",span:"6"},{default:_((()=>[d(m(e.name),1)])),_:2},1024),w(c,{class:"lh-30 line-clamp-1",span:"5"},{default:_((()=>[d(m(e.ar[0].name),1)])),_:2},1024),w(c,{class:"lh-30 line-clamp-1",span:"5"},{default:_((()=>[d(m(e.al.name),1)])),_:2},1024),w(c,{class:"lh-30 line-clamp-1",span:"2"},{default:_((()=>{return[d(m((t=e.dt,Je(t))),1)];var t})),_:2},1024),w(c,{class:"h-30 lh-30 line-clamp-1 relative",span:"4"},{default:_((()=>[w(u,{class:"absolute top-50% left-0 right-0 translate-y--50% z-1000","show-pivot":!1,percentage:e.pop},null,8,["percentage"])])),_:2},1024)])),_:2},1032,["onDblclick"])))),128)}}},ct={class:"w-full h-full absolute top-0 right-0 backdrop-blur bg-white/30 rounded-10"},ut={class:"w-full bg-white/60 rounded-t-10 flex items-center fixed top-0 left-0 right-0"},dt={class:"hidden-scrollbar fixed top-54 left-0 right-0 bottom-60 px-5 pt-10 z--1"},mt=["onClick"],pt={class:"w-full bg-white/60 rounded-b-10 fixed bottom-0 left-0 right-0"},vt={setup(e){const t=te();let a=l(!1),r=l(!1),d=l(!1),m=l(),p=l(!1);x((()=>r.value),(e=>{e?document.getElementsByClassName("playlist-content")[0].style.display="block":setTimeout((()=>document.getElementsByClassName("playlist-content")[0].style.display="none"),700)}));const f=()=>{a.value=!a.value,r.value=!1},b=()=>r.value=!r.value,y=e=>{d.value=!0,a.value=!1,r.value=!1,m.value=e},_=()=>p.value=!0,C=()=>r.value=!1,D=()=>{(d.value||a.value||r.value)&&(r.value=!1,d.value=!1,a.value=!1)},S=()=>t.songDetail=[];return(e,t)=>{const l=k("van-dialog");return o(),s(i,null,[n("div",ct,[n("div",ut,[w(Ee,{onSearchDetail:y,onBackSongList:D})]),n("div",dt,[u(a)||u(d)?h("v-if",!0):(o(),I(Ue,{key:0,class:c(u(a)?"animate__animated animate__zoomOut":"animate__animated animate__zoomInDown"),onSearchDetail:y},null,8,["class"])),!u(a)&&u(d)?(o(),I(rt,{key:1,"search-data":u(m)},null,8,["search-data"])):h("v-if",!0),w(Fe,{class:c(["animate__animated absolute top-0 left-0 z--1",u(a)?["animate__zoomInDown","z-0"]:"animate__zoomOut"])},null,8,["class"])]),n("div",{class:c(["playlist-content animate__animated fixed top-54 bottom-60 left-0 right-0 bg-white/30 display-none",u(r)?"animate__fadeIn":"animate__fadeOut"]),onClick:g(C,["self"])},[n("div",{class:c(["animate__animated w-60% absolute top-0 right-0 bottom-0 backdrop-blur bg-white/80 overflow-hidden",u(r)?"animate__fadeInRight":"animate__fadeOutRight"])},[w(it,{onEmptyClick:_})],2)],10,mt),n("div",pt,[w(Ge,{onLyricClick:f,onPlaylistClick:b})])]),w(l,{show:u(p),"onUpdate:show":t[0]||(t[0]=e=>v(p)?p.value=e:p=e),title:"确认清空当前列表吗？","show-cancel-button":"",onConfirm:S},null,8,["show"])],64)}}};const ht={class:"w-full h-full object-cover",autoplay:"",loop:"",muted:""},gt=["src"],ft={setup(e){S.use([E]);const t=l(["https://wallpaper-static.cheetahfun.com/wallpaper/sites/dynamics/vm8.mp4","https://pcsource.upupoo.com/theme/2000806170/video_20008061701c03_mark.mp4?end=10","https://pcsource.upupoo.com/theme/2000821157/video_2000821157e70a_mark.mp4?end=10"]);return(e,a)=>(o(),I(u(T),{class:"w-full h-full fixed top-0 left-0 z--2",modules:[u(L)],effect:"fade",loop:"",autoplay:{delay:6e4,disableOnInteraction:!1}},{default:_((()=>[(o(!0),s(i,null,r(t.value,((e,t)=>(o(),I(u(B),{key:t},{default:_((()=>[n("video",ht,[n("source",{src:e,type:"video/mp4"},null,8,gt)])])),_:2},1024)))),128))])),_:1},8,["modules"]))}};const bt={class:"w-full h-60"},yt={class:"fixed top-0 left-0 right-0 bottom-0 z-11 display-none",id:"sidebar"},xt={id:"sidebar-content"};var kt=ae({setup(e){const a=te(),r=t();let d=l(!1),m=l(!1);D((()=>m.value=!0)),x((()=>a.menuBtn),(e=>{e&&(document.getElementById("sidebar").style.display="block",document.getElementById("sidebar-content").className="animate__animated animate__fadeInRight"),e||(document.getElementById("sidebar-content").className="animate__animated animate__fadeOutRight",setTimeout((()=>document.getElementById("sidebar").style.display="none"),600))})),x((()=>r.path),(()=>{a.menuBtn=!1,a.percentage=null}));const p=()=>a.menuBtn=!1,v=()=>d.value=!d.value;return(e,t)=>{const l=k("BackTop"),r=k("van-progress"),m=k("router-view");return o(),s(i,null,[n("div",bt,[w(ne)]),w(ft),w(l),n("div",yt,[n("div",{class:"w-full h-full bg-black/30",id:"sidebar-mask",onClick:p}),n("div",xt,[w(ce)])]),w(pe,{onSwitchClick:v}),n("div",{class:c(["modal w-690 h-500 fixed top-50% left-50% translate--50% rounded-10 overflow-hidden z-11",!u(d)&&"actived"])},[n("div",{class:c(["w-full h-full",u(d)?"one":"out"])},[w(vt)],2)],2),$(w(r,{class:"!fixed bottom-0 left-0 right-0 z-1",percentage:u(a).percentage,color:"linear-gradient(to right, #b2fefa, #0ed2f7)"},null,8,["percentage"]),[[A,u(a).percentage]]),w(m,null,{default:_((({Component:e})=>[w(z,{name:"fade-transform",mode:"out-in"},{default:_((()=>[(o(),I(j,{exclude:["ArticleDetail","ArticleCategory"]},[(o(),I(P(e)))],1024))])),_:2},1024)])),_:1})],64)}}},[["__scopeId","data-v-7ba5bd90"]]);const wt={},_t=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in wt)return;wt[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":"modulepreload",t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((t,a)=>{l.addEventListener("load",t),l.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},It=[{path:"",redirect:"/home",meta:{title:"首页",keepAlive:!0}},{path:"/home",name:"Home",component:()=>_t((()=>import("./Home.4a7ea338.js")),["assets/Home.4a7ea338.js","assets/Home.35aa20ac.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"首页",keepAlive:!0}},{path:"/article",name:"Article",component:()=>_t((()=>import("./Article.12ff07bf.js")),["assets/Article.12ff07bf.js","assets/Article.219423c6.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css","assets/query.50c9a048.js"]),meta:{title:"文章",keepAlive:!0}},{path:"/categories",name:"Categories",component:()=>_t((()=>import("./Categories.16853955.js")),["assets/Categories.16853955.js","assets/Categories.1f91491d.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"分类",keepAlive:!0}},{path:"/tags",name:"Tags",component:()=>_t((()=>import("./Tags.ab090fa6.js")),["assets/Tags.ab090fa6.js","assets/Tags.59c82935.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"标签",keepAlive:!0}},{path:"/archives",name:"Archives",component:()=>_t((()=>import("./Archives.72a86496.js")),["assets/Archives.72a86496.js","assets/Archives.ba8aa8a8.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css","assets/query.50c9a048.js"]),meta:{title:"归档",keepAlive:!0}},{path:"/search",name:"Search",component:()=>_t((()=>import("./Search.b29448a9.js")),["assets/Search.b29448a9.js","assets/Search.5be2a68a.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"搜索",keepAlive:!0}},{path:"/articleDetail",name:"ArticleDetail",component:()=>_t((()=>import("./ArticleDetail.3925cc41.js")),["assets/ArticleDetail.3925cc41.js","assets/ArticleDetail.19e3b94d.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"文章详情",keepAlive:!1}},{path:"/articleCategory",name:"ArticleCategory",component:()=>_t((()=>import("./ArticleCategory.d77c1b45.js")),["assets/ArticleCategory.d77c1b45.js","assets/ArticleCategory.c72b19a2.css","assets/vendor.662b62b4.js","assets/vendor.81dd1a6c.css"]),meta:{title:"分类或标签详情",keepAlive:!1}}],Ct=U({history:O(),routes:It});Ct.beforeEach(((e,t,a)=>{document.title=e.matched[0].meta.title,localStorage.setItem("docTitle",e.matched[0].meta.title),a()}));const Dt="https://api.github.com/graphql",St="RibsLi",Et="Blog",Bt="token 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";class Lt{constructor(e){this.baseProjectUrl=e}async resolve(e,t={},a={params:""}){let[l,o]=function(e,t){return{toplist:["/toplist","get",1],getSongDetail:["/playlist/detail","get",1],getSongURL:["/song/url","get",1],getLyric:["/lyric","get",1],getSongsDetail:["/song/detail","get",1],getDefSearch:["/search/default","get",1],getHotSearch:["/search/hot/detail","get",1],getSearch:["/cloudsearch","get",1],getSuggest:["/search/suggest","get",1],loginEmail:["/login","post",1],loginMobile:["/login/cellphone","post",1],logout:["/logout","get",1],getUserPlaylist:["/user/playlist","get",1],getRecommend:["/personalized","get",1],getCatlist:["/playlist/catlist","get",1],getTopPlayList:["/top/playlist","get",1],getArticle:["/issues","get",1],getArticleDetail:[`/issues/${null==t?void 0:t.num}`,"get",1],getCategory:["/milestones","get",1],getTags:["/labels","get",1]}[e]||""}(e,a.params),s=null;!l.includes("http")&&(l=this.baseProjectUrl+l),"get"===o.toLowerCase().trim()?s={method:o,params:t,headers:l.includes("github")?{authorization:Bt}:null}:"post"===o.toLowerCase().trim()&&(s={method:o,data:t});const n=await R(l,s);if(200===(null==n?void 0:n.status)){if(200===(null==n?void 0:n.data.code))return Promise.resolve(n.data);if(null==n?void 0:n.data)return Promise.resolve(n.data);V(n.data)}}}const Tt=new Lt("https://musicapi.adicw.cn"),$t=new Lt("https://api.github.com/repos/RibsLi/Blog");const At={class:"w-full h-full fixed top-0 left-0 bg-black/10 flex justify-center items-center"},zt=[n("img",{class:"w-80 h-100",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-deddf8b2-5b52-4f5f-ac8f-84ebecb88280/5a76cf8f-5f1c-4db7-8552-7c251c3fd449.gif"},null,-1)];var Pt=ae({},[["render",function(e,t){return o(),s("div",At,zt)}]]);const jt=[n("img",{class:"cursor w-full h-full rounded-50% overflow-hidden",src:"https://article.biliimg.com/bfs/article/69288002a75612bcd4af31f4310af7f8efbd2d82.png"},null,-1)],Ut={setup(e){const t=te(),a=()=>{const e=setInterval((()=>{t.scrollBox.scrollTop>0?t.scrollBox.scrollTop-=100:clearInterval(e)}),10)};return(e,l)=>$((o(),s("div",{class:"hvr-grow w-50 h-50 z-11 fixed bottom-90 right-15 rounded-50% overflow-hidden border-3 border-white/80",onClick:a},jt,512)),[[A,u(t).percentage>20]])}},Ot={class:"flex items-center truncate text-primary lh-50 txt-ell-one"},Rt={key:0,class:"flex items-center hover:text-hover"},Vt=["onClick"],Ft={props:{article:{type:Object,default:()=>{}}},setup(e){const l=t(),c=a(),u=()=>c.push("/archives");return(t,a)=>{const p=k("van-icon");return o(),s("div",{class:"hvr-bob select-none w-full h-full bg-white/70 rounded-b-5 rounded-t-2 overflow-hidden shadow-[0_5px_10px_rgba(100,100,100,0.6)] px-15",style:f(`border-top: 8px solid ${e.article.color}`)},[n("div",{class:"cursor w-full truncate lh-60 font-bold text-primary hover:text-hover border-b-1 border-divider-3",onClick:a[0]||(a[0]=t=>{return a=e.article.number,void c.push({path:"/articleDetail",query:{num:a}});var a})},m(e.article.title),1),n("div",Ot,[n("div",{class:"cursor hover:text-hover",onClick:u},[w(p,{name:"notes-o"}),d(" "+m(e.article.created_at),1)]),n("div",{class:"cursor mx-15 hover:text-hover",onClick:a[1]||(a[1]=t=>{return a=e.article.milestone,void("/articleCategory"!==l.path&&(localStorage.setItem("categories",JSON.stringify(a)),c.push("/articleCategory")));var a})},[w(p,{name:"apps-o"}),d(" "+m(e.article.milestone.title?e.article.milestone.title:"暂无分类"),1)]),e.article.labels?(o(),s("div",Rt,[w(p,{name:"label-o"}),(o(!0),s(i,null,r(e.article.labels,(e=>(o(),s("div",{class:"mx-5 cursor",key:e.id,onClick:t=>(e=>{"/articleCategory"!==l.path&&(localStorage.removeItem("categories"),c.push({path:"/articleCategory",query:{name:e.name}}))})(e)},m(e.name),9,Vt)))),128))])):h("v-if",!0)])],4)}}},qt={$api:Tt,$blogApi:$t,$format:ee},Mt=F(kt);for(const Nt in qt)Mt.config.globalProperties[Nt]=qt[Nt];Mt.component("Loading",Pt),Mt.component("BackTop",Ut),Mt.component("ArticleCard",Ft),Mt.use(V),Mt.use(q),Mt.use(M),Mt.use(N),Mt.use(X),Mt.use(H),Mt.use(K),Mt.use(W),Mt.use(G),Mt.use(J),Mt.use(Q,{preLoad:1,error:"https://article.biliimg.com/bfs/article/f35cf490710ee8b537bbdcc434a4536dda55130e.gif",loading:"https://article.biliimg.com/bfs/article/f35cf490710ee8b537bbdcc434a4536dda55130e.gif",lazyComponent:!0}),Mt.use(Y),Mt.use(Z()),Mt.use(Ct),Mt.mount("#app");export{ae as _,Bt as a,St as b,Dt as g,Et as r,te as u};

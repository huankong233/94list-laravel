import"./base-D_zbSILa.js";import{E as z}from"./el-overlay-Y8EFuDuN.js";import{E as L,a as R}from"./el-table-column-ith8tmxL.js";import"./el-popper-DbXAmeiq.js";import{E as j}from"./el-space-BYg-AO4D.js";import{E as I}from"./el-button-DbmDJXiX.js";import{E as M}from"./el-text-DS_sqDKN.js";import{a as w,g as q,e as _,c as $,R as v,w as t,a5 as K,u as a,i as b,n as D,h as A,k as G,b as o,q as c,z as H,a1 as J,A as O}from"./index-DW4GyZFB.js";import{u as Q}from"./UserPannel-Cr4inyBv.js";import{c as S}from"./copy-DZMABk1k.js";import{b as W,t as X,u as Y,f as Z,_ as x,w as ee,i as oe,E as y}from"./request-Ckf9C3Wk.js";import"./vnode-Dqtg7S9T.js";import"./focus-trap-BR6sfOYh.js";import"./scroll-DOTZrInm.js";import"./_initCloneObject-DNAtcZvN.js";import"./use-form-item-BFFxkoHB.js";import"./user-s5hreAlH.js";const te=W({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:X}}),ae={click:r=>r instanceof MouseEvent},le=["href","target"],se=w({name:"ElLink"}),ne=w({...se,props:te,emits:ae,setup(r,{emit:p}){const l=r,s=Y("link"),u=q(()=>[s.b(),s.m(l.type),s.is("disabled",l.disabled),s.is("underline",l.underline&&!l.disabled)]);function m(e){l.disabled||p("click",e)}return(e,h)=>(_(),$("a",{class:D(a(u)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:m},[e.icon?(_(),v(a(Z),{key:0},{default:t(()=>[(_(),v(K(e.icon)))]),_:1})):b("v-if",!0),e.$slots.default?(_(),$("span",{key:1,class:D(a(s).e("inner"))},[A(e.$slots,"default")],2)):b("v-if",!0),e.$slots.icon?A(e.$slots,"icon",{key:2}):b("v-if",!0)],10,le))}});var ie=x(ne,[["__file","link.vue"]]);const re=ee(ie),de=r=>new Promise(p=>setTimeout(p,r)),Ae=w({__name:"downloadDialog",setup(r){const p=Q(),{clientConfig:l,dlinkList:s,downloadDialogVisible:u,selectDownloadFiles:m,aria2ConfigForm:e,aria2ConfigDialogVisible:h}=G(p),C=async(n,i)=>{let f;try{f=await oe.post(`${e.value.host}:${e.value.port}/jsonrpc`,{jsonrpc:"2.0",id:O(),method:"aria2.addUri",params:[`token:${e.value.secret}`,[n],{out:i,header:[`User-Agent: ${l.value.userAgent}`]}]})}catch{y.error("发送失败，请检查控制台输出，自行谷歌搜索或拉起issue"),f="failed"}f!=="failed"&&y.success(`已把${i}任务发送给下载器`)},V=n=>m.value=n,T=()=>h.value=!0,B=async()=>{y.error("请确保最大同时下载文件数在5及以下,否则可能出现下载失败!"),await de(3e3),y.success("开始下载"),m.value.forEach(n=>C(n.dlink,n.server_filename))};return(n,i)=>{const f=M,E=re,k=I,P=j,g=L,U=R,F=z;return _(),v(F,{modelValue:a(u),"onUpdate:modelValue":i[1]||(i[1]=d=>J(u)?u.value=d:null),title:"解析任务列表",width:"80%"},{default:t(()=>[o(P,null,{default:t(()=>[o(f,{class:"mx-1"},{default:t(()=>[c("当前的UA :")]),_:1}),o(E,{type:"danger",onClick:i[0]||(i[0]=d=>a(S)(a(l).userAgent,"已复制UA"))},{default:t(()=>[c(H(a(l).userAgent),1)]),_:1}),o(k,{type:"primary",disabled:a(m).length<=0,onClick:B},{default:t(()=>[c(" 批量下载 ")]),_:1},8,["disabled"]),o(k,{type:"primary",onClick:T},{default:t(()=>[c("下载配置")]),_:1})]),_:1}),o(U,{border:"","show-overflow-tooltip":"",class:"table",data:a(s),onSelectionChange:V},{default:t(()=>[o(g,{type:"selection",width:"40"}),o(g,{prop:"server_filename",label:"文件名"}),o(g,{prop:"dlink",label:"下载链接"}),o(g,{label:"操作",width:"190"},{default:t(d=>[o(k,{type:"primary",size:"small",onClick:N=>a(S)(d.row.dlink,"已将链接复制到粘贴板内")},{default:t(()=>[c(" 复制链接 ")]),_:2},1032,["onClick"]),o(k,{type:"primary",size:"small",onClick:N=>C(d.row.dlink,d.row.server_filename)},{default:t(()=>[c(" 发送Aria2 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue"])}}});export{Ae as default};

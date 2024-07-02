import{b as j,$ as W,a0 as w,r as k,f,c as b,n as a,l,x as r,w as v,k as O,F as G,_ as h,E as M,Y as ee,Z as le,z as ae,X as K,y as X,B as te,A as Y,K as ne,v as Z,o as oe,q as S,t as C,a1 as g,C as A,N as ue,a3 as de,P as se,a2 as ie}from"./.pnpm-DVFgL_l4.js";import{i as E}from"./index-DhkAtlHM.js";import{c as pe}from"./copy-ZJ2NYpOM.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re=i=>E.post("/admin/token",i),ce=i=>E.post("/admin/token/generate",i),_e=i=>E.get(`/admin/token?page=${i.page}&size=${i.size}`),ve=i=>E.patch(`/admin/token/${i.id}`,i),fe=i=>E.delete("/admin/token",{data:{token_ids:[i.id]}}),ye=i=>E.delete("/admin/token",{data:{token_ids:i}}),ge=j({__name:"AddToken",props:{modelValue:{},modelModifiers:{}},emits:W(["getTokens"],["update:modelValue"]),setup(i,{emit:c}){const U=c,T=w(i,"modelValue"),V=k(!1),t=k({type:"single",name:"",count:0,size:0,day:0}),_=k(null),D={name:[{required:!0,message:"请输入卡密名称",trigger:"blur"}],token_count:[{required:!0,message:"请输入卡密个数",trigger:"blur"}],day:[{required:!0,message:"请输入卡密天数",trigger:"blur"}],count:[{required:!0,message:"请输入可下载次数",trigger:"blur"}],size:[{required:!0,message:"请输入可下载大小",trigger:"blur"}]},F=async z=>{if(!(!z||!await z.validate()))try{V.value=!0,t.value.type==="single"?await re({type:"single",name:t.value.name,count:t.value.count,size:t.value.size,day:t.value.day}):await ce({type:"random",token_count:t.value.token_count,count:t.value.count,size:t.value.size,day:t.value.day}),M.success("添加成功")}finally{V.value=!1}},B=z=>{U("getTokens"),z()},q=()=>{T.value=!1,U("getTokens")};return(z,u)=>{const $=ee,L=le,y=ae,n=K,d=X,p=te,s=Y,N=ne,x=Z;return f(),b(N,{title:"添加卡密",width:"60%",modelValue:T.value,"onUpdate:modelValue":u[8]||(u[8]=o=>T.value=o),"before-close":B},{footer:a(()=>[l(s,{type:"info",onClick:u[6]||(u[6]=o=>q())},{default:a(()=>[r("取消")]),_:1}),l(s,{type:"primary",onClick:u[7]||(u[7]=o=>F(_.value))},{default:a(()=>[r("添加")]),_:1})]),default:a(()=>[v((f(),b(p,{ref_key:"addTokenFormRef",ref:_,model:t.value,rules:D,"label-width":"auto"},{default:a(()=>[l(y,{label:"创建方式",prop:"type"},{default:a(()=>[l(L,{modelValue:t.value.type,"onUpdate:modelValue":u[0]||(u[0]=o=>t.value.type=o)},{default:a(()=>[(f(),O(G,null,h(["single","random"],o=>l($,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(y,{label:"可用次数",prop:"count"},{default:a(()=>[l(n,{modelValue:t.value.count,"onUpdate:modelValue":u[1]||(u[1]=o=>t.value.count=o)},null,8,["modelValue"])]),_:1}),l(y,{label:"可用天数",prop:"day"},{default:a(()=>[l(n,{modelValue:t.value.day,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value.day=o)},null,8,["modelValue"])]),_:1}),l(y,{label:"可下大小(GB)",prop:"size"},{default:a(()=>[l(n,{modelValue:t.value.size,"onUpdate:modelValue":u[3]||(u[3]=o=>t.value.size=o)},null,8,["modelValue"])]),_:1}),t.value.type==="single"?(f(),b(y,{key:0,label:"卡密名称",prop:"name"},{default:a(()=>[l(d,{modelValue:t.value.name,"onUpdate:modelValue":u[4]||(u[4]=o=>t.value.name=o)},null,8,["modelValue"])]),_:1})):(f(),b(y,{key:1,label:"卡密个数",prop:"token_count"},{default:a(()=>[l(n,{modelValue:t.value.token_count,"onUpdate:modelValue":u[5]||(u[5]=o=>t.value.token_count=o)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[x,V.value]])]),_:1},8,["modelValue"])}}}),ke=j({__name:"TokenManagement",setup(i){const c=k(!1),U=k(15),T=k(1),V=k(),t=k([]),_=async()=>{try{c.value=!0;const n=await _e({page:T.value,size:U.value});V.value=n.data}finally{c.value=!1}},D=async n=>{n.edit=!(n.edit??!1)},F=async n=>{n.edit=!(n.edit??!0),await B(n)},B=async n=>{try{c.value=!0,await ve(n),M.success("修改卡密成功")}finally{c.value=!1,await _()}},q=async n=>{try{c.value=!0,await fe(n),M.success("删除卡密成功")}finally{c.value=!1,await _()}},z=async()=>{try{c.value=!0;const n=t.value.map(d=>d.id);await ye(n),M.success("删除卡密成功")}finally{c.value=!1,await _()}},u=n=>t.value=n;oe(_);const $=k(!1),L=()=>$.value=!$.value,y=n=>{const p=(n?[n]:t.value).map(s=>[s.name,s.count,s.size,s.day].join(" | "));p.unshift(["卡密","可用次数","可下载量","可用天数"].join(" | ")),pe(p.join(`
`))};return(n,d)=>{var I,P,R;const p=Y,s=ue,N=X,x=K,o=de,H=se,J=ie,Q=Z;return f(),O(G,null,[l(ge,{onGetTokens:_,modelValue:$.value,"onUpdate:modelValue":d[0]||(d[0]=e=>$.value=e)},null,8,["modelValue"]),l(p,{type:"primary",onClick:d[1]||(d[1]=e=>_())},{default:a(()=>[r("刷新列表")]),_:1}),l(p,{type:"primary",onClick:d[2]||(d[2]=e=>L())},{default:a(()=>[r("添加卡密")]),_:1}),l(p,{type:"primary",onClick:d[3]||(d[3]=e=>y())},{default:a(()=>[r("批量复制")]),_:1}),l(p,{type:"danger",disabled:t.value.length<=0,onClick:d[4]||(d[4]=e=>z())},{default:a(()=>[r(" 批量删除 ")]),_:1},8,["disabled"]),v((f(),b(H,{data:((I=V.value)==null?void 0:I.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:u},{default:a(()=>[l(s,{type:"selection",width:"40"}),l(s,{prop:"id",label:"ID"}),l(s,{prop:"name",label:"卡密名称"},{default:a(({row:e})=>[v(S("span",null,C(e.name),513),[[g,!e.edit]]),v(l(N,{modelValue:e.name,"onUpdate:modelValue":m=>e.name=m},null,8,["modelValue","onUpdate:modelValue"]),[[g,e.edit]])]),_:1}),l(s,{prop:"count",label:"可用次数"},{default:a(({row:e})=>[v(S("span",null,C(e.count),513),[[g,!e.edit]]),v(l(x,{modelValue:e.count,"onUpdate:modelValue":m=>e.count=m},null,8,["modelValue","onUpdate:modelValue"]),[[g,e.edit]])]),_:1}),l(s,{prop:"size",label:"可下载大小"},{default:a(({row:e})=>[v(S("span",null,C(e.size),513),[[g,!e.edit]]),v(l(x,{modelValue:e.size,"onUpdate:modelValue":m=>e.size=m},null,8,["modelValue","onUpdate:modelValue"]),[[g,e.edit]])]),_:1}),l(s,{prop:"day",label:"有效期"},{default:a(({row:e})=>[v(S("span",null,C(e.day),513),[[g,!e.edit]]),v(l(x,{modelValue:e.day,"onUpdate:modelValue":m=>e.day=m},null,8,["modelValue","onUpdate:modelValue"]),[[g,e.edit]])]),_:1}),l(s,{prop:"expired_at",label:"到期时间",width:"250"},{default:a(({row:e})=>[v(S("span",null,C(e.expired_at?new Date(e.expired_at).toLocaleString():"未使用"),513),[[g,!e.edit]]),e.edit?(f(),b(o,{key:0,modelValue:e.expired_at,"onUpdate:modelValue":m=>e.expired_at=m,type:"datetime",placeholder:"请选择日期"},null,8,["modelValue","onUpdate:modelValue"])):A("",!0)]),_:1}),l(s,{prop:"created_at",label:"创建时间"},{default:a(({row:e})=>[r(C(new Date(e.created_at).toLocaleString()),1)]),_:1}),l(s,{prop:"updated_at",label:"更新时间"},{default:a(({row:e})=>[r(C(new Date(e.updated_at).toLocaleString()),1)]),_:1}),l(s,{width:"200",label:"操作",fixed:"right"},{default:a(({row:e})=>[e.edit?A("",!0):(f(),b(p,{key:0,size:"small",type:"primary",onClick:m=>D(e)},{default:a(()=>[r(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(f(),b(p,{key:1,size:"small",type:"primary",onClick:m=>F(e)},{default:a(()=>[r(" 保存 ")]),_:2},1032,["onClick"])):A("",!0),l(p,{size:"small",type:"primary",onClick:m=>y(e)},{default:a(()=>[r("复制")]),_:2},1032,["onClick"]),l(p,{size:"small",type:"danger",onClick:m=>q(e)},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,c.value]]),l(J,{"current-page":T.value,"onUpdate:currentPage":d[5]||(d[5]=e=>T.value=e),"page-size":U.value,"onUpdate:pageSize":d[6]||(d[6]=e=>U.value=e),"page-sizes":[15,50,100,500,((P=V.value)==null?void 0:P.total)??100],total:((R=V.value)==null?void 0:R.total)??100,layout:"sizes, prev, pager, next",onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","page-sizes","total"])],64)}}}),Ce=me(ke,[["__scopeId","data-v-107eac3e"]]);export{Ce as default};

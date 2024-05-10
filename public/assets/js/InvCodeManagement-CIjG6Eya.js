import"./base-DzfnSdGl.js";import{v as P}from"./el-loading-Dqc-yn7H.js";import{E as Q}from"./el-pagination-DwvF7Wex.js";import{E as T}from"./el-input-BEQYXOrs.js";import"./el-tag-CUh0AjBU.js";import{E as W,a as X}from"./el-select-CZZ_1tAL.js";import{E as Y,a as Z}from"./el-table-column-BcnOE-AB.js";import{E as w}from"./el-input-number-CGQmo5vN.js";import{E as G}from"./el-button-DtYNY52B.js";import{aa as $,d as K,aK as h,aL as ee,r as v,o as g,e as I,f as t,a,k as _,w as c,c as j,F as H,aE as ae,E as M,O as te,i as D,t as U,a4 as y,n as R}from"./index-niWMSR8p.js";import{E as le}from"./el-overlay-3YP-gJF7.js";import{E as ne,a as oe}from"./el-form-item-Ct3QjCMy.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bbp7VP7R.js";import"./use-form-item-DsYTp4Yb.js";import"./focus-trap-CVuM4905.js";import"./AdminView-Cgf6NGdE.js";import"./el-card-D0AZMfBh.js";import"./user-Cd5hS_vJ.js";import"./vnode-CSQD_1u2.js";import"./scroll-DGkImYz_.js";const ue=s=>$.post("/admin/inv_code",s),se=s=>$.post("/admin/inv_code/generate",s),ie=s=>$.get(`/admin/inv_code?page=${s.page}&size=${s.size}`),pe=s=>$.patch(`/admin/inv_code/${s.id}`,s),re=s=>$.delete("/admin/inv_code",{data:{inv_code_ids:[s.id]}}),me=s=>$.delete("/admin/inv_code",{data:{inv_code_ids:s}}),ce=K({__name:"AddInvCode",props:{modelValue:{},modelModifiers:{}},emits:h(["getInvCodes"],["update:modelValue"]),setup(s,{emit:i}){const E=i,C=ee(s,"modelValue"),V=v(!1),l=v({type:"single",group_id:0,name:"",can_count:10}),p=v(null),x={group_id:[{required:!0,message:"请输入邀请码用户组ID",trigger:"blur"}],name:[{required:!0,message:"请输入邀请码名称",trigger:"blur"}],can_count:[{required:!0,message:"请输入可注册次数",trigger:"blur"}],count:[{required:!0,message:"请输入邀请码个数",trigger:"blur"}]},F=async b=>{if(!(!b||!await b.validate()))try{V.value=!0,l.value.type==="single"?await ue({type:"single",name:l.value.name,can_count:l.value.can_count,group_id:l.value.group_id}):await se({type:"random",count:l.value.count,can_count:l.value.can_count,group_id:l.value.group_id}),M.success("添加成功")}finally{V.value=!1}},L=b=>{E("getInvCodes"),b()},B=()=>{C.value=!1,E("getInvCodes")};return(b,d)=>{const k=W,N=X,n=ne,u=w,f=T,r=oe,S=G,z=le,q=P;return g(),I(z,{title:"添加邀请码",width:"60%",modelValue:C.value,"onUpdate:modelValue":d[7]||(d[7]=o=>C.value=o),"before-close":L},{footer:t(()=>[a(S,{type:"info",onClick:d[5]||(d[5]=o=>B())},{default:t(()=>[_("取消")]),_:1}),a(S,{type:"primary",onClick:d[6]||(d[6]=o=>F(p.value))},{default:t(()=>[_("添加")]),_:1})]),default:t(()=>[c((g(),I(r,{ref_key:"addInvCodeFormRef",ref:p,model:l.value,rules:x,"label-width":"auto"},{default:t(()=>[a(n,{label:"创建方式",prop:"type"},{default:t(()=>[a(N,{modelValue:l.value.type,"onUpdate:modelValue":d[0]||(d[0]=o=>l.value.type=o)},{default:t(()=>[(g(),j(H,null,ae(["single","random"],o=>a(k,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"可用次数",prop:"can_count"},{default:t(()=>[a(u,{modelValue:l.value.can_count,"onUpdate:modelValue":d[1]||(d[1]=o=>l.value.can_count=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"用户组ID",prop:"group_id"},{default:t(()=>[a(u,{modelValue:l.value.group_id,"onUpdate:modelValue":d[2]||(d[2]=o=>l.value.group_id=o)},null,8,["modelValue"])]),_:1}),l.value.type==="single"?(g(),I(n,{key:0,label:"邀请码名称",prop:"name"},{default:t(()=>[a(f,{modelValue:l.value.name,"onUpdate:modelValue":d[3]||(d[3]=o=>l.value.name=o)},null,8,["modelValue"])]),_:1})):(g(),I(n,{key:1,label:"邀请码个数",prop:"count"},{default:t(()=>[a(u,{modelValue:l.value.count,"onUpdate:modelValue":d[4]||(d[4]=o=>l.value.count=o)},null,8,["modelValue"])]),_:1}))]),_:1},8,["model"])),[[q,V.value]])]),_:1},8,["modelValue"])}}}),_e=K({__name:"InvCodeManagement",setup(s){const i=v(!1),E=v(15),C=v(1),V=v(),l=v([]),p=async()=>{try{i.value=!0;const n=await ie({page:C.value,size:E.value});V.value=n.data}finally{i.value=!1}},x=async n=>{n.edit=!(n.edit??!1)},F=async n=>{n.edit=!(n.edit??!0),await L(n)},L=async n=>{try{i.value=!0,await pe(n),M.success("修改邀请码成功")}finally{i.value=!1,await p()}},B=async n=>{try{i.value=!0,await re(n),M.success("删除邀请码成功")}finally{i.value=!1,await p()}},b=async()=>{try{i.value=!0;const n=l.value.map(u=>u.id);await me(n),M.success("删除邀请码成功")}finally{i.value=!1,await p()}},d=n=>l.value=n;te(p);const k=v(!1),N=()=>k.value=!k.value;return(n,u)=>{var A,O;const f=G,r=Y,S=T,z=w,q=Z,o=Q,J=P;return g(),j(H,null,[a(ce,{onGetInvCodes:p,modelValue:k.value,"onUpdate:modelValue":u[0]||(u[0]=e=>k.value=e)},null,8,["modelValue"]),a(f,{type:"primary",onClick:u[1]||(u[1]=e=>p())},{default:t(()=>[_("刷新列表")]),_:1}),a(f,{type:"primary",onClick:u[2]||(u[2]=e=>N())},{default:t(()=>[_("添加邀请码")]),_:1}),a(f,{type:"danger",disabled:l.value.length<=0,onClick:u[3]||(u[3]=e=>b())},{default:t(()=>[_(" 批量删除 ")]),_:1},8,["disabled"]),c((g(),I(q,{data:((A=V.value)==null?void 0:A.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:d},{default:t(()=>[a(r,{type:"selection",width:"40"}),a(r,{prop:"id",label:"ID"}),a(r,{prop:"name",label:"邀请码名称"},{default:t(({row:e})=>[c(D("span",null,U(e.name),513),[[y,!e.edit]]),c(a(S,{modelValue:e.name,"onUpdate:modelValue":m=>e.name=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),a(r,{prop:"group_id",label:"用户组ID"},{default:t(({row:e})=>[c(D("span",null,U(e.group_id),513),[[y,!e.edit]]),c(a(z,{modelValue:e.group_id,"onUpdate:modelValue":m=>e.group_id=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),a(r,{prop:"can_count",label:"可用次数"},{default:t(({row:e})=>[c(D("span",null,U(e.can_count),513),[[y,!e.edit]]),c(a(z,{modelValue:e.can_count,"onUpdate:modelValue":m=>e.can_count=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),a(r,{prop:"use_count",label:"已使用次数"},{default:t(({row:e})=>[c(D("span",null,U(e.use_count),513),[[y,!e.edit]]),c(a(z,{modelValue:e.use_count,"onUpdate:modelValue":m=>e.use_count=m},null,8,["modelValue","onUpdate:modelValue"]),[[y,e.edit]])]),_:1}),a(r,{prop:"created_at",label:"创建时间"},{default:t(({row:e})=>[_(U(new Date(e.created_at).toLocaleString()),1)]),_:1}),a(r,{prop:"updated_at",label:"更新时间"},{default:t(({row:e})=>[_(U(new Date(e.updated_at).toLocaleString()),1)]),_:1}),a(r,{width:"150",label:"操作",fixed:"right"},{default:t(({row:e})=>[e.edit?R("",!0):(g(),I(f,{key:0,size:"small",type:"primary",onClick:m=>x(e)},{default:t(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(g(),I(f,{key:1,size:"small",type:"primary",onClick:m=>F(e)},{default:t(()=>[_(" 保存 ")]),_:2},1032,["onClick"])):R("",!0),a(f,{size:"small",type:"danger",onClick:m=>B(e)},{default:t(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[J,i.value]]),a(o,{"current-page":C.value,"onUpdate:currentPage":u[4]||(u[4]=e=>C.value=e),"page-size":E.value,"onUpdate:pageSize":u[5]||(u[5]=e=>E.value=e),"page-sizes":[15,30,50,100],total:((O=V.value)==null?void 0:O.total)??100,layout:"sizes, prev, pager, next",onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","total"])],64)}}}),qe=de(_e,[["__scopeId","data-v-dbd3f6c9"]]);export{qe as default};
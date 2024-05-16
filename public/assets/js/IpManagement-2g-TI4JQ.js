import{b as J,_ as h,$ as ee,r as m,f as v,c as C,n as l,l as t,s as p,w as b,k as L,F as N,X,E as A,x as Y,y as te,Y as Z,Z as j,A as ae,z as H,J as le,v as K,o as ne,q,t as z,a0 as S,B as G,N as oe,P as se,a1 as de}from"./.pnpm-DD7z4_75.js";import{i as k}from"./index-Dh755jfq.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ue=o=>k.post("/admin/ip",o),pe=o=>k.get(`/admin/ip?page=${o.page}&size=${o.size}`),re=o=>k.patch(`/admin/ip/${o.id}`,o),me=o=>k.delete("/admin/ip",{data:{ip_ids:[o.id]}}),ce=o=>k.delete("/admin/ip",{data:{ip_ids:o}}),fe=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,_e=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))/,Q=o=>fe.test(o)||_e.test(o),ve=J({__name:"AddIp",props:{modelValue:{},modelModifiers:{}},emits:h(["getIps"],["update:modelValue"]),setup(o,{emit:i}){const V=i,g=ee(o,"modelValue"),I=m(!1),F=(c,n,y)=>{if(!n)return y(new Error("请输入IP地址"));Q(n)?y():y(new Error("请输入有效的IP地址"))},d=m({ip:"",mode:0}),$=m(null),U={ip:[{validator:F,message:"请输入IP",trigger:"blur"}]},w=async c=>{if(!(!c||!await c.validate()))try{I.value=!0,await ue(d.value),A.success("添加成功")}finally{I.value=!1}},x=c=>{V("getIps"),c()},M=()=>{g.value=!1,V("getIps")};return(c,n)=>{const y=Y,a=te,s=Z,f=j,r=ae,E=H,B=le,D=K;return v(),C(B,{title:"添加IP",width:"60%",modelValue:g.value,"onUpdate:modelValue":n[4]||(n[4]=u=>g.value=u),"before-close":x},{footer:l(()=>[t(E,{type:"info",onClick:n[2]||(n[2]=u=>M())},{default:l(()=>[p("取消")]),_:1}),t(E,{type:"primary",onClick:n[3]||(n[3]=u=>w($.value))},{default:l(()=>[p("添加")]),_:1})]),default:l(()=>[b((v(),C(r,{ref_key:"addIpFormRef",ref:$,model:d.value,rules:U,"label-width":"auto"},{default:l(()=>[t(a,{label:"IP",prop:"ip"},{default:l(()=>[t(y,{modelValue:d.value.ip,"onUpdate:modelValue":n[0]||(n[0]=u=>d.value.ip=u)},null,8,["modelValue"])]),_:1}),t(a,{label:"模式",prop:"mode"},{default:l(()=>[t(f,{modelValue:d.value.mode,"onUpdate:modelValue":n[1]||(n[1]=u=>d.value.mode=u)},{default:l(()=>[(v(),L(N,null,X(["黑名单","白名单"],(u,P)=>t(s,{key:P,label:u,value:P},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[D,I.value]])]),_:1},8,["modelValue"])}}}),ge=J({__name:"IpManagement",setup(o){const i=m(!1),V=m(15),g=m(1),I=m(),F=m([]),d=async()=>{try{i.value=!0;const a=await pe({page:g.value,size:V.value});I.value=a.data}finally{i.value=!1}},$=async a=>{a.edit=!(a.edit??!1)},U=async a=>{if(!Q(a.ip))return A.error("请输入正确的IP");a.edit=!(a.edit??!0),await w(a)},w=async a=>{try{i.value=!0,await re(a),A.success("修改IP成功")}finally{i.value=!1,await d()}},x=async a=>{try{i.value=!0,await me(a),A.success("删除IP成功")}finally{i.value=!1,await d()}},M=async()=>{try{i.value=!0;const a=F.value.map(s=>s.id);await ce(a),A.success("批量删除IP成功")}finally{i.value=!1,await d()}},c=a=>F.value=a;ne(d);const n=m(!1),y=()=>n.value=!n.value;return(a,s)=>{var R,O;const f=H,r=oe,E=Y,B=Z,D=j,u=se,P=de,W=K;return v(),L(N,null,[t(ve,{onGetIps:d,modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e)},null,8,["modelValue"]),t(f,{type:"primary",onClick:s[1]||(s[1]=e=>d())},{default:l(()=>[p("刷新列表")]),_:1}),t(f,{type:"primary",onClick:s[2]||(s[2]=e=>y())},{default:l(()=>[p("添加IP")]),_:1}),t(f,{type:"danger",disabled:F.value.length<=0,onClick:s[3]||(s[3]=e=>M())},{default:l(()=>[p(" 批量删除 ")]),_:1},8,["disabled"]),b((v(),C(u,{data:((R=I.value)==null?void 0:R.data)??[],border:"","show-overflow-tooltip":"",class:"table",onSelectionChange:c},{default:l(()=>[t(r,{type:"selection",width:"40"}),t(r,{prop:"id",label:"ID"}),t(r,{prop:"ip",label:"IP"},{default:l(({row:e})=>[b(q("span",null,z(e.ip),513),[[S,!e.edit]]),b(t(E,{modelValue:e.ip,"onUpdate:modelValue":_=>e.ip=_},null,8,["modelValue","onUpdate:modelValue"]),[[S,e.edit]])]),_:1}),t(r,{prop:"mode",label:"模式"},{default:l(({row:e})=>[b(q("span",null,z(e.mode?"白名单":"黑名单"),513),[[S,!e.edit]]),b(t(D,{modelValue:e.mode,"onUpdate:modelValue":_=>e.mode=_},{default:l(()=>[(v(),L(N,null,X(["黑名单","白名单"],(_,T)=>t(B,{key:T,label:_,value:T},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),[[S,e.edit]])]),_:1}),t(r,{prop:"created_at",label:"创建时间"},{default:l(({row:e})=>[p(z(new Date(e.created_at).toLocaleString()),1)]),_:1}),t(r,{prop:"updated_at",label:"更新时间"},{default:l(({row:e})=>[p(z(new Date(e.updated_at).toLocaleString()),1)]),_:1}),t(r,{width:"150",label:"操作",fixed:"right"},{default:l(({row:e})=>[e.edit?G("",!0):(v(),C(f,{key:0,size:"small",type:"primary",onClick:_=>$(e)},{default:l(()=>[p(" 编辑 ")]),_:2},1032,["onClick"])),e.edit?(v(),C(f,{key:1,size:"small",type:"primary",onClick:_=>U(e)},{default:l(()=>[p(" 保存 ")]),_:2},1032,["onClick"])):G("",!0),t(f,{size:"small",type:"danger",onClick:_=>x(e)},{default:l(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[W,i.value]]),t(P,{"current-page":g.value,"onUpdate:currentPage":s[4]||(s[4]=e=>g.value=e),"page-size":V.value,"onUpdate:pageSize":s[5]||(s[5]=e=>V.value=e),"page-sizes":[15,30,50,100],total:((O=I.value)==null?void 0:O.total)??100,layout:"sizes, prev, pager, next",onSizeChange:d,onCurrentChange:d},null,8,["current-page","page-size","total"])],64)}}}),be=ie(ge,[["__scopeId","data-v-1c4d83a8"]]);export{be as default};
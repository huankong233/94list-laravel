import"./base-D_zbSILa.js";import{E as V}from"./el-overlay-Y8EFuDuN.js";import{E,a as C}from"./el-form-item-DwZRVgh3.js";import{E as b}from"./el-button-DbmDJXiX.js";import{E as c}from"./el-input-CnT3n_X-.js";import{a as A,k as w,e as F,R,w as n,b as r,u as o,q as U,a1 as x}from"./index-DW4GyZFB.js";import{u as k}from"./UserPannel-Cr4inyBv.js";import"./request-Ckf9C3Wk.js";import"./vnode-Dqtg7S9T.js";import"./focus-trap-BR6sfOYh.js";import"./scroll-DOTZrInm.js";import"./use-form-item-BFFxkoHB.js";import"./_initCloneObject-DNAtcZvN.js";import"./user-s5hreAlH.js";const J=A({__name:"aria2ConfigDialog",setup(q){const m=k(),{aria2ConfigForm:l,aria2ConfigFormRef:u,aria2ConfigDialogVisible:s}=w(m),p={host:[{required:!0,validator:(d,e,a)=>e===""?a(new Error("请输入Aria2 服务器地址")):e.includes("jsonrpc")?a(new Error("地址不需要包含端口或jsonrpc路径")):a(),message:"",trigger:"blur"}],port:[{required:!0,message:"请输入Aria2 端口号",trigger:"blur"}]};return(d,e)=>{const a=c,i=E,f=b,_=C,g=V;return F(),R(g,{modelValue:o(s),"onUpdate:modelValue":e[4]||(e[4]=t=>x(s)?s.value=t:null),title:"Aria2配置",width:"90%"},{default:n(()=>[r(_,{ref_key:"aria2ConfigFormRef",ref:u,model:o(l),rules:p,"label-width":"auto"},{default:n(()=>[r(i,{label:"Aria2 服务器地址",prop:"host"},{default:n(()=>[r(a,{modelValue:o(l).host,"onUpdate:modelValue":e[0]||(e[0]=t=>o(l).host=t)},null,8,["modelValue"])]),_:1}),r(i,{label:"Aria2 端口号",prop:"port"},{default:n(()=>[r(a,{modelValue:o(l).port,"onUpdate:modelValue":e[1]||(e[1]=t=>o(l).port=t)},null,8,["modelValue"])]),_:1}),r(i,{label:"Aria2 下载密钥",prop:"secret"},{default:n(()=>[r(a,{modelValue:o(l).secret,"onUpdate:modelValue":e[2]||(e[2]=t=>o(l).secret=t)},null,8,["modelValue"])]),_:1}),r(i,{label:" "},{default:n(()=>[r(f,{type:"primary",onClick:e[3]||(e[3]=t=>o(m).saveAria2Config(o(u)))},{default:n(()=>[U(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{J as default};
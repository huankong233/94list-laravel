import{l as o,h as s}from"./index-DGLImKVB.js";import{d as n,r as e,E as t}from"./.pnpm-Mf6j6NBF.js";const g=n("aria2Store",()=>{const i=e(!1),r=e(o()),a=e(null);return{aria2ConfigDialogVisible:i,aria2ConfigForm:r,aria2ConfigFormRef:a,saveAria2Config:async()=>{!a.value||!await a.value.validate()||(s(r.value),t.success("保存成功"),i.value=!1)}}});export{g as u};

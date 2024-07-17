import{g as _,u as g,a as w,r as y}from"./index-CQGKQ7TU.js";import{f as C}from"./favicon-BrYC5Vmz.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */const x={class:"container"},b=["src"],k=Vue.defineComponent({__name:"RegisterView",setup(R){const l=VueRouter.useRouter();_()==="1"&&l.push("/admin");const p=()=>l.push("/login"),a=Vue.ref(!1),t=Vue.ref({username:"",password:"",inv_code:""}),u=Vue.ref(null),d={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},V=g();V.config.need_inv_code&&(d.inv_code=[{required:!0,message:"请输入邀请码",trigger:"blur"}]);const r=async s=>{if(!(!s||!await s.validate()))try{a.value=!0,await y({username:t.value.username,password:t.value.password,inv_code:t.value.inv_code}),ElementPlus.ElMessage.success("注册成功"),l.push("/login")}finally{a.value=!1}};return(s,e)=>{const i=Vue.resolveComponent("el-input"),n=Vue.resolveComponent("el-form-item"),m=Vue.resolveComponent("el-button"),c=Vue.resolveComponent("el-form"),v=Vue.resolveComponent("el-card"),f=Vue.resolveDirective("loading");return Vue.openBlock(),Vue.createElementBlock("div",x,[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(v,null,{default:Vue.withCtx(()=>[Vue.createElementVNode("h1",null,[Vue.createElementVNode("img",{src:Vue.unref(C),alt:"logo"},null,8,b)]),Vue.createElementVNode("h2",null,"注册 | "+Vue.toDisplayString(Vue.unref(w)()),1),Vue.createVNode(c,{ref_key:"registerFormRef",ref:u,model:t.value,rules:d,"label-width":"auto"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{label:"用户名",prop:"username"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.value.username,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.username=o),onKeyup:e[1]||(e[1]=Vue.withKeys(o=>r(u.value),["enter"]))},null,8,["modelValue"])]),_:1}),Vue.createVNode(n,{label:"密码",prop:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.password=o),type:"password",onKeyup:e[3]||(e[3]=Vue.withKeys(o=>r(u.value),["enter"]))},null,8,["modelValue"])]),_:1}),Vue.unref(V).config.need_inv_code?(Vue.openBlock(),Vue.createBlock(n,{key:0,label:"邀请码",prop:"inv_code"},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.value.inv_code,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value.inv_code=o),onKeyup:e[5]||(e[5]=Vue.withKeys(o=>r(u.value),["enter"]))},null,8,["modelValue"])]),_:1})):Vue.createCommentVNode("",!0),Vue.createVNode(n,{class:"center"},{default:Vue.withCtx(()=>[Vue.createVNode(m,{type:"primary",onClick:e[6]||(e[6]=o=>p())},{default:Vue.withCtx(()=>[Vue.createTextVNode("登陆")]),_:1}),Vue.createVNode(m,{type:"primary",onClick:e[7]||(e[7]=o=>r(u.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode("注册")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})),[[f,a.value]])])}}}),F=N(k,[["__scopeId","data-v-da197fbf"]]);export{F as default};
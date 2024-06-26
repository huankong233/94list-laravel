import{b as E,r as v,o as M,w as A,f as B,c as F,n,l as a,x as w,E as g,y as $,z as k,V as q,W as N,X as G,Y as I,A as R,B as D,v as L}from"./.pnpm-CR973naf.js";import{i as V,n as S}from"./index-BfIv7Ekj.js";const O=()=>V.get("/admin/config/main"),T=s=>V.patch("/admin/config/main",s),W=s=>V.post("/admin/config/main/testAuth",s),j=E({__name:"ChangeMainConfig",setup(s){const i=v(!1),l=v({front_end_version:"",version:"",sleep:0,max_once:0,password:"",announce:"",user_agent:"",need_inv_code:!1,whitelist_mode:!1,debug:!1,name:"",code:"",main_server:"",show_copyright:!1,parse_mode:1,custom_copyright:"本项目半开源, 项目地址: https://github.com/huankong233/94list-laravel",max_filesize:0,min_single_file:0}),p=v(null),y={name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],sleep:[{required:!0,message:"请输入批量解析时休眠时间(秒)",trigger:"blur"}],max_once:[{required:!0,message:"请输入批量解析时单次最大解析数量",trigger:"blur"}],max_filesize:[{required:!0,message:"请输入单日单个账号最大解析大小",trigger:"blur"}],user_agent:[{required:!0,message:"请输入User_Agent",trigger:"blur"}]},_=async()=>{try{i.value=!0;const e=(await O()).data;l.value={...e,max_filesize:e.max_filesize/1024**3,min_single_file:e.min_single_file/1024**3,front_end_version:await S(),announce:e.announce.replaceAll("[NextLine]",`
`)}}finally{i.value=!1}},x=async d=>{if(!(!d||!await d.validate()))try{i.value=!0,await T({...l.value,max_filesize:l.value.max_filesize*1024**3,min_single_file:l.value.min_single_file*1024**3}),g.success("保存成功")}finally{i.value=!1,await _()}},U=async d=>{if(!(!d||!await d.validate()))try{i.value=!0;const e=await W(l.value);"ip"in e.data?g.error(`未知授权码,当前ip为: ${e.data.ip}`):g.success(`测试通过,有效期至: ${e.data.expired_at}`)}finally{i.value=!1,await _()}};return M(_),(d,e)=>{const u=$,t=k,r=q,m=N,f=G,c=I,b=R,z=D,C=L;return A((B(),F(z,{ref_key:"changeConfigFormRef",ref:p,model:l.value,rules:y,"label-width":"auto"},{default:n(()=>[a(t,{label:"前端版本号",prop:"front_end_version"},{default:n(()=>[a(u,{disabled:"",modelValue:l.value.front_end_version,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.front_end_version=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"后端版本号",prop:"version"},{default:n(()=>[a(u,{disabled:"",modelValue:l.value.version,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.version=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"DEBUG模式开关",prop:"debug"},{default:n(()=>[a(r,{modelValue:l.value.debug,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.debug=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"邀请码开关",prop:"need_inv_code"},{default:n(()=>[a(r,{modelValue:l.value.need_inv_code,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.need_inv_code=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"白名单模式开关",prop:"whitelist_mode"},{default:n(()=>[a(r,{modelValue:l.value.whitelist_mode,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.whitelist_mode=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"站点名称",prop:"name"},{default:n(()=>[a(u,{modelValue:l.value.name,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.name=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"下载使用的 User_Agent",prop:"user_agent"},{default:n(()=>[a(u,{modelValue:l.value.user_agent,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.user_agent=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"批量解析时休眠时间（秒）",prop:"sleep"},{default:n(()=>[a(m,{modelValue:l.value.sleep,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.sleep=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"批量解析时单次最大解析数量（个）",prop:"max_once"},{default:n(()=>[a(m,{modelValue:l.value.max_once,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.max_once=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"单日单个账号最大解析大小（GB）",prop:"max_filesize"},{default:n(()=>[a(m,{modelValue:l.value.max_filesize,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.max_filesize=o),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),a(t,{label:"可解析文件最小需要大小（GB）",prop:"max_filesize"},{default:n(()=>[a(m,{modelValue:l.value.min_single_file,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value.min_single_file=o),style:{width:"300px"}},null,8,["modelValue"])]),_:1}),a(t,{label:"公告内容",prop:"announce"},{default:n(()=>[a(u,{type:"textarea",modelValue:l.value.announce,"onUpdate:modelValue":e[11]||(e[11]=o=>l.value.announce=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"密码",prop:"password"},{default:n(()=>[a(u,{modelValue:l.value.password,"onUpdate:modelValue":e[12]||(e[12]=o=>l.value.password=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"授权服务器",prop:"main_server"},{default:n(()=>[a(u,{modelValue:l.value.main_server,"onUpdate:modelValue":e[13]||(e[13]=o=>l.value.main_server=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"授权码",prop:"code"},{default:n(()=>[a(u,{modelValue:l.value.code,"onUpdate:modelValue":e[14]||(e[14]=o=>l.value.code=o),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(t,{label:"展示版权",prop:"show_copyright"},{default:n(()=>[a(r,{modelValue:l.value.show_copyright,"onUpdate:modelValue":e[15]||(e[15]=o=>l.value.show_copyright=o),size:"large"},null,8,["modelValue"])]),_:1}),a(t,{label:"自定义版权",prop:"custom_copyright"},{default:n(()=>[a(u,{modelValue:l.value.custom_copyright,"onUpdate:modelValue":e[16]||(e[16]=o=>l.value.custom_copyright=o)},null,8,["modelValue"])]),_:1}),a(t,{label:"解析模式",prop:"parse_mode"},{default:n(()=>[a(c,{modelValue:l.value.parse_mode,"onUpdate:modelValue":e[17]||(e[17]=o=>l.value.parse_mode=o)},{default:n(()=>[a(f,{value:1,label:"盘内"}),a(f,{value:2,label:"盘外V1"}),a(f,{value:3,label:"盘外V2(推荐)"})]),_:1},8,["modelValue"])]),_:1}),a(t,{label:" "},{default:n(()=>[a(b,{type:"primary",onClick:e[18]||(e[18]=o=>x(p.value))},{default:n(()=>[w("保存")]),_:1}),a(b,{type:"primary",onClick:e[19]||(e[19]=o=>U(p.value))},{default:n(()=>[w("测试授权")]),_:1})]),_:1})]),_:1},8,["model"])),[[C,i.value]])}}});export{j as default};

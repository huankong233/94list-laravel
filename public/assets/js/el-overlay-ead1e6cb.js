import{ad as de,C as te,p as fe,af as me,D as ve,ai as pe,Q as W,a2 as ye,a7 as H,d as Y,l as z,j as h,m as ge,P as G,c as I,o as P,i as X,e as V,n as k,f as o,t as Ce,w as T,a as _,g as be,h as j,H as se,r as B,R as he,S as Ee,u as ke,V as we,b as Me,a8 as Se,aj as De,v as Te,T as Be,ak as Ie}from"./index-e9c0da99.js";import{P as x,t as Le,u as q,R as ne,S as J,V as Fe,W as $e,X as Ae,b as Z,d as K,i as Pe,F as Oe,E as Ne,_ as le,Y as Re,U as ae,N as ze,Z as Ye,$ as Q,a0 as Ve,a1 as He,a2 as ee,v as oe,w as Xe}from"./request-693c9f28.js";import{P as U}from"./el-text-e4475027.js";import{g as Ue,F as We,E as _e}from"./focus-trap-2e98dfae.js";const je=(...e)=>t=>{e.forEach(l=>{de(l)?l(t):l.value=t})},xe=(e,t,l)=>{let a={offsetX:0,offsetY:0};const u=n=>{const c=n.clientX,v=n.clientY,{offsetX:f,offsetY:g}=a,m=e.value.getBoundingClientRect(),r=m.left,b=m.top,L=m.width,O=m.height,N=document.documentElement.clientWidth,F=document.documentElement.clientHeight,R=-r+f,$=-b+g,w=N-r-L+f,M=F-b-O+g,A=E=>{const s=Math.min(Math.max(f+E.clientX-c,R),w),C=Math.min(Math.max(g+E.clientY-v,$),M);a={offsetX:s,offsetY:C},e.value.style.transform=`translate(${x(s)}, ${x(C)})`},p=()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",p)},d=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};te(()=>{fe(()=>{l.value?d():i()})}),me(()=>{i()})},Ke=(e,t={})=>{ve(e)||Le("[useLockscreen]","You need to pass a ref param to this function");const l=t.ns||q("popup"),a=pe(()=>l.bm("parent","hidden"));if(!ne||J(document.body,a.value))return;let u=0,d=!1,i="0";const n=()=>{setTimeout(()=>{Ae(document==null?void 0:document.body,a.value),d&&document&&(document.body.style.width=i)},200)};W(e,c=>{if(!c){n();return}d=!J(document.body,a.value),d&&(i=document.body.style.width),u=Ue(l.namespace.value);const v=document.documentElement.clientHeight<document.body.scrollHeight,f=Fe(document.body,"overflowY");u>0&&(v||f==="scroll")&&d&&(document.body.style.width=`calc(100% - ${u}px)`),$e(document.body,a.value)}),ye(()=>n())},ie=e=>{if(!e)return{onClick:H,onMousedown:H,onMouseup:H};let t=!1,l=!1;return{onClick:i=>{t&&l&&e(i),t=l=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{l=i.target===i.currentTarget}}},qe=Z({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:K([String,Array,Object])},zIndex:{type:K([String,Number])}}),Ze={click:e=>e instanceof MouseEvent},Ge="overlay";var Je=Y({name:"ElOverlay",props:qe,emits:Ze,setup(e,{slots:t,emit:l}){const a=q(Ge),u=c=>{l("click",c)},{onClick:d,onMousedown:i,onMouseup:n}=ie(e.customMaskEvent?void 0:u);return()=>e.mask?z("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:i,onMouseup:n},[h(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):ge("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(t,"default")])}});const Qe=Je,re=Symbol("dialogInjectionKey"),ue=Z({center:Boolean,alignCenter:Boolean,closeIcon:{type:Pe},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),eo={close:()=>!0},oo=["aria-level"],to=["aria-label"],so=["id"],no=Y({name:"ElDialogContent"}),lo=Y({...no,props:ue,emits:eo,setup(e){const t=e,{t:l}=Oe(),{Close:a}=Re,{dialogRef:u,headerRef:d,bodyId:i,ns:n,style:c}=G(re),{focusTrapRef:v}=G(We),f=I(()=>[n.b(),n.is("fullscreen",t.fullscreen),n.is("draggable",t.draggable),n.is("align-center",t.alignCenter),{[n.m("center")]:t.center},t.customClass]),g=je(v,u),m=I(()=>t.draggable);return xe(u,d,m),(r,b)=>(P(),X("div",{ref:o(g),class:k(o(f)),style:se(o(c)),tabindex:"-1"},[V("header",{ref_key:"headerRef",ref:d,class:k(o(n).e("header"))},[h(r.$slots,"header",{},()=>[V("span",{role:"heading","aria-level":r.ariaLevel,class:k(o(n).e("title"))},Ce(r.title),11,oo)]),r.showClose?(P(),X("button",{key:0,"aria-label":o(l)("el.dialog.close"),class:k(o(n).e("headerbtn")),type:"button",onClick:b[0]||(b[0]=L=>r.$emit("close"))},[z(o(Ne),{class:k(o(n).e("close"))},{default:T(()=>[(P(),_(be(r.closeIcon||o(a))))]),_:1},8,["class"])],10,to)):j("v-if",!0)],2),V("div",{id:o(i),class:k(o(n).e("body"))},[h(r.$slots,"default")],10,so),r.$slots.footer?(P(),X("footer",{key:0,class:k(o(n).e("footer"))},[h(r.$slots,"footer")],2)):j("v-if",!0)],6))}});var ao=le(lo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const io=Z({...ue,appendToBody:Boolean,beforeClose:{type:K(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ro={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>ze(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},uo=(e,t)=>{const a=Ee().emit,{nextZIndex:u}=Ye();let d="";const i=Q(),n=Q(),c=B(!1),v=B(!1),f=B(!1),g=B(e.zIndex||u());let m,r;const b=Ve("namespace",He),L=I(()=>{const y={},D=`--${b.value}-dialog`;return e.fullscreen||(e.top&&(y[`${D}-margin-top`]=e.top),e.width&&(y[`${D}-width`]=x(e.width))),y}),O=I(()=>e.alignCenter?{display:"flex"}:{});function N(){a("opened")}function F(){a("closed"),a(ae,!1),e.destroyOnClose&&(f.value=!1)}function R(){a("close")}function $(){r==null||r(),m==null||m(),e.openDelay&&e.openDelay>0?{stop:m}=ee(()=>p(),e.openDelay):p()}function w(){m==null||m(),r==null||r(),e.closeDelay&&e.closeDelay>0?{stop:r}=ee(()=>E(),e.closeDelay):E()}function M(){function y(D){D||(v.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(y):w()}function A(){e.closeOnClickModal&&M()}function p(){ne&&(c.value=!0)}function E(){c.value=!1}function s(){a("openAutoFocus")}function C(){a("closeAutoFocus")}function S(y){var D;((D=y.detail)==null?void 0:D.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&Ke(c);function ce(){e.closeOnPressEscape&&M()}return W(()=>e.modelValue,y=>{y?(v.value=!1,$(),f.value=!0,g.value=e.zIndex?g.value++:u(),he(()=>{a("open"),t.value&&(t.value.scrollTop=0)})):c.value&&w()}),W(()=>e.fullscreen,y=>{t.value&&(y?(d=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=d)}),te(()=>{e.modelValue&&(c.value=!0,f.value=!0,$())}),{afterEnter:N,afterLeave:F,beforeLeave:R,handleClose:M,onModalClick:A,close:w,doClose:E,onOpenAutoFocus:s,onCloseAutoFocus:C,onCloseRequested:ce,onFocusoutPrevented:S,titleId:i,bodyId:n,closed:v,style:L,overlayDialogStyle:O,rendered:f,visible:c,zIndex:g}},co=["aria-label","aria-labelledby","aria-describedby"],fo=Y({name:"ElDialog",inheritAttrs:!1}),mo=Y({...fo,props:io,emits:ro,setup(e,{expose:t}){const l=e,a=ke();oe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!a.title)),oe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!l.customClass));const u=q("dialog"),d=B(),i=B(),n=B(),{visible:c,titleId:v,bodyId:f,style:g,overlayDialogStyle:m,rendered:r,zIndex:b,afterEnter:L,afterLeave:O,beforeLeave:N,handleClose:F,onModalClick:R,onOpenAutoFocus:$,onCloseAutoFocus:w,onCloseRequested:M,onFocusoutPrevented:A}=uo(l,d);we(re,{dialogRef:d,headerRef:i,bodyId:f,ns:u,rendered:r,style:g});const p=ie(R),E=I(()=>l.draggable&&!l.fullscreen);return t({visible:c,dialogContentRef:n}),(s,C)=>(P(),_(Ie,{to:"body",disabled:!s.appendToBody},[z(Be,{name:"dialog-fade",onAfterEnter:o(L),onAfterLeave:o(O),onBeforeLeave:o(N),persisted:""},{default:T(()=>[Me(z(o(Qe),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":o(b)},{default:T(()=>[V("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:o(v),"aria-describedby":o(f),class:k(`${o(u).namespace.value}-overlay-dialog`),style:se(o(m)),onClick:C[0]||(C[0]=(...S)=>o(p).onClick&&o(p).onClick(...S)),onMousedown:C[1]||(C[1]=(...S)=>o(p).onMousedown&&o(p).onMousedown(...S)),onMouseup:C[2]||(C[2]=(...S)=>o(p).onMouseup&&o(p).onMouseup(...S))},[z(o(_e),{loop:"",trapped:o(c),"focus-start-el":"container",onFocusAfterTrapped:o($),onFocusAfterReleased:o(w),onFocusoutPrevented:o(A),onReleaseRequested:o(M)},{default:T(()=>[o(r)?(P(),_(ao,Se({key:0,ref_key:"dialogContentRef",ref:n},s.$attrs,{"custom-class":s.customClass,center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:o(E),fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,"aria-level":s.headerAriaLevel,onClose:o(F)}),De({header:T(()=>[s.$slots.title?h(s.$slots,"title",{key:1}):h(s.$slots,"header",{key:0,close:o(F),titleId:o(v),titleClass:o(u).e("title")})]),default:T(()=>[h(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:T(()=>[h(s.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,co)]),_:3},8,["mask","overlay-class","z-index"]),[[Te,o(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var vo=le(mo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const bo=Xe(vo);export{bo as E};
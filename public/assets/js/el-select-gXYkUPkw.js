import{a as Q,g as d,e as f,c as O,p as E,h as D,n as u,u as R,R as B,w as $,b as z,a6 as F,i as V,j as Z,a3 as _t,E as ge,Y as X,ao as st,G as q,I as Te,N as ye,al as ot,a9 as el,H as U,P as ae,Q as Ve,z as P,r as I,o as ke,a7 as J,ab as N,T as tl,ap as we,L as ll,K as at,aq as H,ar as nl,F as xe,an as _e,af as oe,as as sl,a5 as Ie}from"./index-DW4GyZFB.js";import{i as ol,u as al,E as il}from"./el-input-CnT3n_X-.js";import{t as rl,b as ul,i as he,d as dl,u as cl,E as pl,a as fl,c as vl,C as ml}from"./el-popper-DbXAmeiq.js";import{b as it,v as bl,u as x,j as et,f as Ee,_ as ie,w as rt,a3 as j,a as G,D as gl,C as hl,a4 as yl,K as Sl,l as Cl,n as Ol,k as wl,y as Il,d as be,t as tt,a5 as El,F as Tl,a6 as Vl,q as ut}from"./request-Ckf9C3Wk.js";import{u as dt,a as kl,c as $l}from"./use-form-item-BFFxkoHB.js";import{e as Ml}from"./strings-Bwax4eHl.js";import{a as ct,d as Rl,U as K,C as pt}from"./base-D_zbSILa.js";import{s as Dl}from"./scroll-DOTZrInm.js";var lt=1/0,Bl=17976931348623157e292;function Ll(e){if(!e)return e===0?e:0;if(e=rl(e),e===lt||e===-lt){var n=e<0?-1:1;return n*Bl}return e===e?e:0}function Fl(e){var n=Ll(e),o=n%1;return n===n?o?n-o:n:0}function Nl(e,n,o,v){for(var i=e.length,p=o+(v?1:-1);v?p--:++p<i;)if(n(e[p],p,e))return p;return-1}var zl=Math.max,Wl=Math.min;function Kl(e,n,o){var v=e==null?0:e.length;if(!v)return-1;var i=v-1;return o!==void 0&&(i=Fl(o),i=o<0?zl(v+i,0):Wl(i,v-1)),Nl(e,ul(n),i,!0)}const ft=it({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:bl},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Pl={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Al=Q({name:"ElTag"}),Hl=Q({...Al,props:ft,emits:Pl,setup(e,{emit:n}){const o=e,v=dt(),i=x("tag"),p=d(()=>{const{type:r,hit:h,effect:c,closable:T,round:w}=o;return[i.b(),i.is("closable",T),i.m(r||"primary"),i.m(v.value),i.m(c),i.is("hit",h),i.is("round",w)]}),l=r=>{n("close",r)},b=r=>{n("click",r)};return(r,h)=>r.disableTransitions?(f(),O("span",{key:0,class:u(R(p)),style:Z({backgroundColor:r.color}),onClick:b},[E("span",{class:u(R(i).e("content"))},[D(r.$slots,"default")],2),r.closable?(f(),B(R(Ee),{key:0,class:u(R(i).e("close")),onClick:F(l,["stop"])},{default:$(()=>[z(R(et))]),_:1},8,["class","onClick"])):V("v-if",!0)],6)):(f(),B(_t,{key:1,name:`${R(i).namespace.value}-zoom-in-center`,appear:""},{default:$(()=>[E("span",{class:u(R(p)),style:Z({backgroundColor:r.color}),onClick:b},[E("span",{class:u(R(i).e("content"))},[D(r.$slots,"default")],2),r.closable?(f(),B(R(Ee),{key:0,class:u(R(i).e("close")),onClick:F(l,["stop"])},{default:$(()=>[z(R(et))]),_:1},8,["class","onClick"])):V("v-if",!0)],6)]),_:3},8,["name"]))}});var Ul=ie(Hl,[["__file","tag.vue"]]);const Gl=rt(Ul),vt=Symbol("ElSelectGroup"),Se=Symbol("ElSelect");function jl(e,n){const o=ge(Se),v=ge(vt,{disabled:!1}),i=d(()=>o.props.multiple?c(o.props.modelValue,e.value):c([o.props.modelValue],e.value)),p=d(()=>{if(o.props.multiple){const g=o.props.modelValue||[];return!i.value&&g.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),l=d(()=>e.label||(X(e.value)?"":e.value)),b=d(()=>e.value||e.label||""),r=d(()=>e.disabled||n.groupDisabled||p.value),h=Te(),c=(g=[],y)=>{if(X(e.value)){const a=o.props.valueKey;return g&&g.some(M=>st(j(M,a))===j(y,a))}else return g&&g.includes(y)},T=()=>{!e.disabled&&!v.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(h.proxy))},w=g=>{const y=new RegExp(Ml(g),"i");n.visible=y.test(l.value)||e.created};return q(()=>l.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),q(()=>e.value,(g,y)=>{const{remote:a,valueKey:M}=o.props;if(he(g,y)||(o.onOptionDestroy(y,h.proxy),o.onOptionCreate(h.proxy)),!e.created&&!a){if(M&&X(g)&&X(y)&&g[M]===y[M])return;o.setSelected()}}),q(()=>v.disabled,()=>{n.groupDisabled=v.disabled},{immediate:!0}),{select:o,currentLabel:l,currentValue:b,itemSelected:i,isDisabled:r,hoverItem:T,updateOption:w}}const ql=Q({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=x("select"),o=ct(),v=d(()=>[n.be("dropdown","item"),n.is("disabled",R(b)),n.is("selected",R(l)),n.is("hovering",R(w))]),i=ye({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:p,itemSelected:l,isDisabled:b,select:r,hoverItem:h,updateOption:c}=jl(e,i),{visible:T,hover:w}=ot(i),g=Te().proxy;r.onOptionCreate(g),el(()=>{const a=g.value,{selected:M}=r.states,re=(r.props.multiple?M:[M]).some(ue=>ue.value===g.value);U(()=>{r.states.cachedOptions.get(a)===g&&!re&&r.states.cachedOptions.delete(a)}),r.onOptionDestroy(a,g)});function y(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(g)}return{ns:n,id:o,containerKls:v,currentLabel:p,itemSelected:l,isDisabled:b,select:r,hoverItem:h,updateOption:c,visible:T,hover:w,selectOptionClick:y,states:i}}}),Ql=["id","aria-disabled","aria-selected"];function Yl(e,n,o,v,i,p){return ae((f(),O("li",{id:e.id,class:u(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=F((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[D(e.$slots,"default",{},()=>[E("span",null,P(e.currentLabel),1)])],42,Ql)),[[Ve,e.visible]])}var $e=ie(ql,[["render",Yl],["__file","option.vue"]]);const Xl=Q({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ge(Se),n=x("select"),o=d(()=>e.props.popperClass),v=d(()=>e.props.multiple),i=d(()=>e.props.fitInputWidth),p=I("");function l(){var b;p.value=`${(b=e.selectRef)==null?void 0:b.offsetWidth}px`}return ke(()=>{l(),G(e.selectRef,l)}),{ns:n,minWidth:p,popperClass:o,isMultiple:v,isFitInputWidth:i}}});function Jl(e,n,o,v,i,p){return f(),O("div",{class:u([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Z({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(f(),O("div",{key:0,class:u(e.ns.be("dropdown","header"))},[D(e.$slots,"header")],2)):V("v-if",!0),D(e.$slots,"default"),e.$slots.footer?(f(),O("div",{key:1,class:u(e.ns.be("dropdown","footer"))},[D(e.$slots,"footer")],2)):V("v-if",!0)],6)}var Zl=ie(Xl,[["render",Jl],["__file","select-dropdown.vue"]]);function xl(e){const n=I(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:p=>{const l=p.target.value,b=l[l.length-1]||"";n.value=!ol(b)},handleCompositionEnd:p=>{n.value&&(n.value=!1,J(e)&&e(p))}}}const _l=11,en=(e,n)=>{const{t:o}=gl(),v=ct(),i=x("select"),p=x("input"),l=ye({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),b=I(null),r=I(null),h=I(null),c=I(null),T=I(null),w=I(null),g=I(null),y=I(null),a=I(null),M=I(null),_=I(null),re=I(null),{wrapperRef:ue,isFocused:Me,handleFocus:bt,handleBlur:Re}=al(T,{afterFocus(){e.automaticDropdown&&!C.value&&(C.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var s,m;return((s=h.value)==null?void 0:s.isFocusInsideContent(t))||((m=c.value)==null?void 0:m.isFocusInsideContent(t))},afterBlur(){C.value=!1,l.menuVisibleOnFocus=!1}}),C=I(!1),ee=I(),{form:De,formItem:te}=kl(),{inputId:gt}=$l(e,{formItemContext:te}),de=d(()=>e.disabled||(De==null?void 0:De.disabled)),ht=d(()=>k.value.some(t=>t.value==="")),Ce=d(()=>e.multiple?N(e.modelValue)&&e.modelValue.length>0:!hl(e.modelValue)&&(e.modelValue!==""||ht.value)),yt=d(()=>e.clearable&&!de.value&&l.inputHovering&&Ce.value),Be=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),St=d(()=>i.is("reverse",Be.value&&C.value)),Le=d(()=>(te==null?void 0:te.validateState)||""),Ct=d(()=>yl[Le.value]),Ot=d(()=>e.remote?300:0),Fe=d(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&le.value===0?e.noMatchText||o("el.select.noMatch"):l.options.size===0?e.noDataText||o("el.select.noData"):null),le=d(()=>k.value.filter(t=>t.visible).length),k=d(()=>{const t=Array.from(l.options.values()),s=[];return l.optionValues.forEach(m=>{const S=t.findIndex(W=>W.value===m);S>-1&&s.push(t[S])}),s.length>=t.length?s:t}),wt=d(()=>Array.from(l.cachedOptions.values())),It=d(()=>{const t=k.value.filter(s=>!s.created).some(s=>s.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),Ne=()=>{e.filterable&&J(e.filterMethod)||e.filterable&&e.remote&&J(e.remoteMethod)||k.value.forEach(t=>{t.updateOption(l.inputValue)})},ze=dt(),Et=d(()=>["small"].includes(ze.value)?"small":"default"),Tt=d({get(){return C.value&&Fe.value!==!1},set(t){C.value=t}}),Vt=d(()=>N(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),kt=d(()=>{var t;const s=(t=e.placeholder)!=null?t:o("el.select.placeholder");return e.multiple||!Ce.value?s:l.selectedLabel});q(()=>e.modelValue,(t,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",ce("")),pe(),!he(t,s)&&e.validateEvent&&(te==null||te.validate("change").catch(m=>Rl()))},{flush:"post",deep:!0}),q(()=>C.value,t=>{t?ce(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),q(()=>l.options.entries(),()=>{var t;if(!Sl)return;const s=((t=b.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!Cl(e.modelValue)||!Array.from(s).includes(document.activeElement))&&pe(),e.defaultFirstOption&&(e.filterable||e.remote)&&le.value&&We()},{flush:"post"}),q(()=>l.hoveringIndex,t=>{Ol(t)&&t>-1?ee.value=k.value[t]||{}:ee.value={},k.value.forEach(s=>{s.hover=ee.value===s})}),tl(()=>{l.isBeforeHide||Ne()});const ce=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&J(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&J(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&le.value?U(We):U($t))},We=()=>{const t=k.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=t.find(S=>S.created),m=t[0];l.hoveringIndex=Qe(k.value,s||m)},pe=()=>{if(e.multiple)l.selectedLabel="";else{const s=Ke(e.modelValue);l.selectedLabel=s.currentLabel,l.selected=s;return}const t=[];N(e.modelValue)&&e.modelValue.forEach(s=>{t.push(Ke(s))}),l.selected=t},Ke=t=>{let s;const m=we(t).toLowerCase()==="object",S=we(t).toLowerCase()==="null",W=we(t).toLowerCase()==="undefined";for(let A=l.cachedOptions.size-1;A>=0;A--){const L=wt.value[A];if(m?j(L.value,e.valueKey)===j(t,e.valueKey):L.value===t){s={value:t,currentLabel:L.currentLabel,isDisabled:L.isDisabled};break}}if(s)return s;const Y=m?t.label:!S&&!W?t:"";return{value:t,currentLabel:Y}},$t=()=>{e.multiple?l.hoveringIndex=k.value.findIndex(t=>l.selected.some(s=>se(s)===se(t))):l.hoveringIndex=k.value.findIndex(t=>se(t)===se(l.selected))},Mt=()=>{l.selectionWidth=r.value.getBoundingClientRect().width},Pe=()=>{l.calculatorWidth=w.value.getBoundingClientRect().width},Rt=()=>{l.collapseItemWidth=_.value.getBoundingClientRect().width},Oe=()=>{var t,s;(s=(t=h.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ae=()=>{var t,s;(s=(t=c.value)==null?void 0:t.updatePopper)==null||s.call(t)},He=()=>{l.inputValue.length>0&&!C.value&&(C.value=!0),ce(l.inputValue)},Ue=t=>{if(l.inputValue=t.target.value,e.remote)Ge();else return He()},Ge=dl(()=>{He()},Ot.value),ne=t=>{he(e.modelValue,t)||n(pt,t)},Dt=t=>Kl(t,s=>!l.disabledOptions.has(s)),Bt=t=>{if(e.multiple&&t.code!==wl.delete&&t.target.value.length<=0){const s=e.modelValue.slice(),m=Dt(s);if(m<0)return;s.splice(m,1),n(K,s),ne(s)}},Lt=(t,s)=>{const m=l.selected.indexOf(s);if(m>-1&&!de.value){const S=e.modelValue.slice();S.splice(m,1),n(K,S),ne(S),n("remove-tag",s.value)}t.stopPropagation(),ve()},je=t=>{t.stopPropagation();const s=e.multiple?[]:void 0;if(e.multiple)for(const m of l.selected)m.isDisabled&&s.push(m.value);n(K,s),ne(s),l.hoveringIndex=-1,C.value=!1,n("clear"),ve()},qe=t=>{if(e.multiple){const s=(e.modelValue||[]).slice(),m=Qe(s,t.value);m>-1?s.splice(m,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(t.value),n(K,s),ne(s),t.created&&ce(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(K,t.value),ne(t.value),C.value=!1;ve(),!C.value&&U(()=>{fe(t)})},Qe=(t=[],s)=>{if(!X(s))return t.indexOf(s);const m=e.valueKey;let S=-1;return t.some((W,Y)=>st(j(W,m))===j(s,m)?(S=Y,!0):!1),S},fe=t=>{var s,m,S,W,Y;const me=N(t)?t[0]:t;let A=null;if(me!=null&&me.value){const L=k.value.filter(Ze=>Ze.value===me.value);L.length>0&&(A=L[0].$el)}if(h.value&&A){const L=(W=(S=(m=(s=h.value)==null?void 0:s.popperRef)==null?void 0:m.contentRef)==null?void 0:S.querySelector)==null?void 0:W.call(S,`.${i.be("dropdown","wrap")}`);L&&Dl(L,A)}(Y=re.value)==null||Y.handleScroll()},Ft=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},Nt=(t,s)=>{l.options.get(t)===s&&l.options.delete(t)},{handleCompositionStart:zt,handleCompositionUpdate:Wt,handleCompositionEnd:Kt}=xl(t=>Ue(t)),Pt=d(()=>{var t,s;return(s=(t=h.value)==null?void 0:t.popperRef)==null?void 0:s.contentRef}),At=()=>{U(()=>fe(l.selected))},ve=()=>{var t;(t=T.value)==null||t.focus()},Ht=()=>{Ye()},Ut=t=>{je(t)},Ye=t=>{if(C.value=!1,Me.value){const s=new FocusEvent("focus",t);U(()=>Re(s))}},Gt=()=>{l.inputValue.length>0?l.inputValue="":C.value=!1},Xe=()=>{de.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:C.value=!C.value)},jt=()=>{C.value?k.value[l.hoveringIndex]&&qe(k.value[l.hoveringIndex]):Xe()},se=t=>X(t.value)?j(t.value,e.valueKey):t.value,qt=d(()=>k.value.filter(t=>t.visible).every(t=>t.disabled)),Qt=d(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),Yt=d(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),Je=t=>{if(!C.value){C.value=!0;return}if(!(l.options.size===0||le.value===0)&&!qt.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const s=k.value[l.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Je(t),U(()=>fe(ee.value))}},Xt=()=>{if(!r.value)return 0;const t=window.getComputedStyle(r.value);return Number.parseFloat(t.gap||"6px")},Jt=d(()=>{const t=Xt();return{maxWidth:`${_.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),Zt=d(()=>({maxWidth:`${l.selectionWidth}px`})),xt=d(()=>({width:`${Math.max(l.calculatorWidth,_l)}px`}));return e.multiple&&!N(e.modelValue)&&n(K,[]),!e.multiple&&N(e.modelValue)&&n(K,""),G(r,Mt),G(w,Pe),G(a,Oe),G(ue,Oe),G(M,Ae),G(_,Rt),ke(()=>{pe()}),{inputId:gt,contentId:v,nsSelect:i,nsInput:p,states:l,isFocused:Me,expanded:C,optionsArray:k,hoverOption:ee,selectSize:ze,filteredOptionsCount:le,resetCalculatorWidth:Pe,updateTooltip:Oe,updateTagTooltip:Ae,debouncedOnInputChange:Ge,onInput:Ue,deletePrevTag:Bt,deleteTag:Lt,deleteSelected:je,handleOptionSelect:qe,scrollToOption:fe,hasModelValue:Ce,shouldShowPlaceholder:Vt,currentPlaceholder:kt,showClose:yt,iconComponent:Be,iconReverse:St,validateState:Le,validateIcon:Ct,showNewOption:It,updateOptions:Ne,collapseTagSize:Et,setSelected:pe,selectDisabled:de,emptyText:Fe,handleCompositionStart:zt,handleCompositionUpdate:Wt,handleCompositionEnd:Kt,onOptionCreate:Ft,onOptionDestroy:Nt,handleMenuEnter:At,handleFocus:bt,focus:ve,blur:Ht,handleBlur:Re,handleClearClick:Ut,handleClickOutside:Ye,handleEsc:Gt,toggleMenu:Xe,selectOption:jt,getValueKey:se,navigateOptions:Je,dropdownMenuVisible:Tt,showTagList:Qt,collapseTagList:Yt,tagStyle:Jt,collapseTagStyle:Zt,inputStyle:xt,popperRef:Pt,inputRef:T,tooltipRef:h,tagTooltipRef:c,calculatorRef:w,prefixRef:g,suffixRef:y,selectRef:b,wrapperRef:ue,selectionRef:r,scrollbarRef:re,menuRef:a,tagMenuRef:M,collapseItemRef:_}};var tn=Q({name:"ElOptions",setup(e,{slots:n}){const o=ge(Se);let v=[];return()=>{var i,p;const l=(i=n.default)==null?void 0:i.call(n),b=[];function r(h){N(h)&&h.forEach(c=>{var T,w,g,y;const a=(T=(c==null?void 0:c.type)||{})==null?void 0:T.name;a==="ElOptionGroup"?r(!ll(c.children)&&!N(c.children)&&J((w=c.children)==null?void 0:w.default)?(g=c.children)==null?void 0:g.default():c.children):a==="ElOption"?b.push((y=c.props)==null?void 0:y.value):N(c.children)&&r(c.children)})}return l.length&&r((p=l[0])==null?void 0:p.children),he(b,v)||(v=b,o&&(o.states.optionValues=b)),l}}});const ln=it({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Il,effect:{type:be(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:be(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:cl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:tt,default:El},fitInputWidth:Boolean,suffixIcon:{type:tt,default:Tl},tagType:{...ft.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:be(String),values:pl,default:"bottom-start"},fallbackPlacements:{type:be(Array),default:["bottom-start","top-start","right","left"]},ariaLabel:{type:String,default:void 0}}),nt="ElSelect",nn=Q({name:nt,componentName:nt,components:{ElInput:il,ElSelectMenu:Zl,ElOption:$e,ElOptions:tn,ElTag:Gl,ElScrollbar:fl,ElTooltip:vl,ElIcon:Ee},directives:{ClickOutside:ml},props:ln,emits:[K,pt,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=en(e,n);return at(Se,ye({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),sn=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],on=["textContent"];function an(e,n,o,v,i,p){const l=H("el-tag"),b=H("el-tooltip"),r=H("el-icon"),h=H("el-option"),c=H("el-options"),T=H("el-scrollbar"),w=H("el-select-menu"),g=nl("click-outside");return ae((f(),O("div",{ref:"selectRef",class:u([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[14]||(n[14]=y=>e.states.inputHovering=!0),onMouseleave:n[15]||(n[15]=y=>e.states.inputHovering=!1),onClick:n[16]||(n[16]=F((...y)=>e.toggleMenu&&e.toggleMenu(...y),["stop"]))},[z(b,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[13]||(n[13]=y=>e.states.isBeforeHide=!1)},{default:$(()=>{var y;return[E("div",{ref:"wrapperRef",class:u([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(f(),O("div",{key:0,ref:"prefixRef",class:u(e.nsSelect.e("prefix"))},[D(e.$slots,"prefix")],2)):V("v-if",!0),E("div",{ref:"selectionRef",class:u([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?D(e.$slots,"tag",{key:0},()=>[(f(!0),O(xe,null,_e(e.showTagList,a=>(f(),O("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[z(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Z(e.tagStyle),onClose:M=>e.deleteTag(M,a)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))},P(a.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(f(),B(b,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:$(()=>[E("div",{ref:"collapseItemRef",class:u(e.nsSelect.e("selected-item"))},[z(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:Z(e.collapseTagStyle)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))}," + "+P(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:$(()=>[E("div",{ref:"tagMenuRef",class:u(e.nsSelect.e("selection"))},[(f(!0),O(xe,null,_e(e.collapseTagList,a=>(f(),O("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[z(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:M=>e.deleteTag(M,a)},{default:$(()=>[E("span",{class:u(e.nsSelect.e("tags-text"))},P(a.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):V("v-if",!0)]):V("v-if",!0),e.selectDisabled?V("v-if",!0):(f(),O("div",{key:1,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ae(E("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:u([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Z(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((y=e.hoverOption)==null?void 0:y.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=oe(F(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=oe(F(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=oe(F((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=oe(F((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=oe(F((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=F((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,sn),[[sl,e.states.inputValue]]),e.filterable?(f(),O("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:u(e.nsSelect.e("input-calculator")),textContent:P(e.states.inputValue)},null,10,on)):V("v-if",!0)],2)),e.shouldShowPlaceholder?(f(),O("div",{key:2,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[E("span",null,P(e.currentPlaceholder),1)],2)):V("v-if",!0)],2),E("div",{ref:"suffixRef",class:u(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(f(),B(r,{key:0,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:$(()=>[(f(),B(Ie(e.iconComponent)))]),_:1},8,["class"])):V("v-if",!0),e.showClose&&e.clearIcon?(f(),B(r,{key:1,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:$(()=>[(f(),B(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):V("v-if",!0),e.validateState&&e.validateIcon?(f(),B(r,{key:2,class:u([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:$(()=>[(f(),B(Ie(e.validateIcon)))]),_:1},8,["class"])):V("v-if",!0)],2)],2)]}),content:$(()=>[z(w,{ref:"menuRef"},{default:$(()=>[e.$slots.header?(f(),O("div",{key:0,class:u(e.nsSelect.be("dropdown","header"))},[D(e.$slots,"header")],2)):V("v-if",!0),ae(z(T,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:u([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:$(()=>[e.showNewOption?(f(),B(h,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):V("v-if",!0),z(c,null,{default:$(()=>[D(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ve,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(f(),O("div",{key:1,class:u(e.nsSelect.be("dropdown","loading"))},[D(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(f(),O("div",{key:2,class:u(e.nsSelect.be("dropdown","empty"))},[D(e.$slots,"empty",{},()=>[E("span",null,P(e.emptyText),1)])],2)):V("v-if",!0),e.$slots.footer?(f(),O("div",{key:3,class:u(e.nsSelect.be("dropdown","footer"))},[D(e.$slots,"footer")],2)):V("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[g,e.handleClickOutside,e.popperRef]])}var rn=ie(nn,[["render",an],["__file","select.vue"]]);const un=Q({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=x("select"),o=I(null),v=Te(),i=I([]);at(vt,ye({...ot(e)}));const p=d(()=>i.value.some(r=>r.visible===!0)),l=r=>{const h=[];return N(r.children)&&r.children.forEach(c=>{var T,w;c.type&&c.type.name==="ElOption"&&c.component&&c.component.proxy?h.push(c.component.proxy):(T=c.children)!=null&&T.length?h.push(...l(c)):(w=c.component)!=null&&w.subTree&&h.push(...l(c.component.subTree))}),h},b=()=>{i.value=l(v.subTree)};return ke(()=>{b()}),Vl(o,b,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:p,ns:n}}});function dn(e,n,o,v,i,p){return ae((f(),O("ul",{ref:"groupRef",class:u(e.ns.be("group","wrap"))},[E("li",{class:u(e.ns.be("group","title"))},P(e.label),3),E("li",null,[E("ul",{class:u(e.ns.b("group"))},[D(e.$slots,"default")],2)])],2)),[[Ve,e.visible]])}var mt=ie(un,[["render",dn],["__file","option-group.vue"]]);const yn=rt(rn,{Option:$e,OptionGroup:mt}),Sn=ut($e);ut(mt);export{Sn as E,yn as a};

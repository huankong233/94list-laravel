import{a as i,r as c,o as l,a9 as d,c as r,p as s,z as _,u as p,m as u,e as h}from"./index-DW4GyZFB.js";const v="/assets/png/qrcode-39AXYHGT.png",m={class:"page"},f={class:"container"},g=s("div",{class:"font-h1"},":(",-1),B=s("div",{class:"tip"},"你的电脑遇到问题，需要重新启动",-1),x=s("div",{class:"tip"},"我们只收集某些错误信息，然后自动为你重新启动",-1),E={class:"complete"},M={class:"percentage"},R=s("span",null,"% 完成",-1),T={class:"details"},k={class:"qr-image"},q=["src"],C=s("div",{class:"stopcode"},[s("div",{class:"stopcode-text"}," 有关问题的详细信息和可能的解决方法，请访问 https://cutt.ly/kwErLg0w "),s("div",{class:"stopcode-text"},[s("p",null,"如需致电支持人员，请向他们提供以下信息:"),s("p",null,"终止代码: BE TRICKED BY RICKROLL")])],-1),D=i({__name:"404NotFound",setup(I){const a=u(),t=c(0),e=c(0);function n(){t.value+=Math.floor(Math.random()*30),t.value>=100?(t.value=100,a.push("/")):o()}function o(){e.value=setTimeout(n,Math.random()*500+500)}return l(()=>{o()}),d(()=>{clearTimeout(e.value)}),(L,w)=>(h(),r("div",m,[s("div",f,[g,B,x,s("div",E,[s("span",M,_(t.value),1),R]),s("div",T,[s("div",k,[s("img",{src:p(v)},null,8,q)]),C])])]))}});export{D as default};
import{_ as f,e as v,u as g,f as x,o as B,g as k,w as _,b as e,t,h as C,d as L,i as r,r as F}from"./app.1b44763e.js";import{C as A}from"./Common.433bd337.js";const D={class:"theme-container"},M={class:"not-found"},b={class:"emoji"},y=v({setup(N){var n,u,c;const l=g(),o=x(),a=(n=o.value.notFound)!=null?n:["Not Found"],m=()=>a[Math.floor(Math.random()*a.length)],i=(u=o.value.home)!=null?u:l.value,h=(c=o.value.backToHome)!=null?c:"Back to home",s=["\\(o_o)/","(o^^)o","(\u02DA\u0394\u02DA)b","(^-^*)","(^_^)b","(\u256F\u2035\u25A1\u2032)\u256F","(='X'=)","(>_<)","\\(\xB0\u02CA\u0414\u02CB\xB0)/","\u311F(\u2594\u25BD\u2594)\u310F"],d=()=>s[Math.floor(Math.random()*s.length)];return(T,j)=>{const p=F("RouterLink");return B(),k(A,null,{page:_(()=>[e("div",D,[e("div",M,[e("p",b,t(d()),1),e("h1",null,"404 - "+t(m()),1),C(p,{to:r(i)},{default:_(()=>[L(t(r(h)),1)]),_:1},8,["to"])])])]),_:1})}}});var w=f(y,[["__file","404.vue"]]);export{w as default};
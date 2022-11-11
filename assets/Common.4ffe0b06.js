import{j as K,_ as w,o as l,a as h,b as f,d as P,e as S,u as re,k as se,f as B,l as oe,m as v,r as M,g as L,w as N,h as y,i as a,t as I,n as x,p as T,q as te,s as _e,C as fe,v as V,x as H,y as j,z as ae,A as m,B as W,D as ge,T as me,E as C,G as le,F as D,H as E,I as q,J as ke,K as $e,L as ue,M as ye,N as Le,O as ie,P as we,Q as Se}from"./app.0a5e9105.js";const Te=c=>/^mailto:/.test(c),Ne=c=>/^tel:/.test(c),ne=c=>decodeURI(c).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Be=(c,u)=>{if(u.hash===c)return!0;const t=ne(u.path),s=ne(c);return t===s},ce=(c,u)=>c.link&&Be(c.link,u)?!0:c.children?c.children.some(t=>ce(t,u)):!1,Ie=c=>!K(c)||/github\.com/.test(c)?"GitHub":/bitbucket\.org/.test(c)?"Bitbucket":/gitlab\.com/.test(c)?"GitLab":/gitee\.com/.test(c)?"Gitee":null,xe={},Ce={class:"footer"},Re=f("span",null,[P(" \xA9 "),f("a",{target:"blank",href:"https://github.com/zongkx"},"Raynor"),P(" 2020-2022, powered by "),f("a",{target:"blank",href:"https://v2.vuepress.vuejs.org"},"VuePress")],-1),De=[Re];function Me(c,u){return l(),h("footer",Ce,De)}var Ae=w(xe,[["render",Me],["__file","Footer.vue"]]);const Oe=S({setup(c){const u=re(),t=se(),s=B(),e=oe(),b=v(()=>s.value.home||u.value),o=v(()=>t.value.title),n=v(()=>e.value&&s.value.logoDark!==void 0?s.value.logoDark:s.value.logo),i=()=>{if(!n.value)return null;const r=te("img",{class:"logo",src:_e(n.value),alt:o.value});return s.value.logoDark===void 0?r:te(fe,()=>r)};return(r,d)=>{const p=M("RouterLink");return l(),L(p,{to:a(b)},{default:N(()=>[y(i),a(o)?(l(),h("span",{key:0,class:x(["site-name",{"can-hide":a(n)}])},I(a(o)),3)):T("",!0)]),_:1},8,["to"])}}});var Pe=w(Oe,[["__file","NavbarBrand.vue"]]);const Ee=["title"],Fe=S({setup(c){const u=B(),t=oe(),s=()=>{t.value=!t.value};return(e,b)=>{const o=M("VIcon");return l(),h("button",{class:"toggle-dark-button",title:a(u).toggleDarkMode,onClick:s},[V(y(o,{focusable:"false",name:"ri-sun-line"},null,512),[[H,!a(t)]]),V(y(o,{focusable:"false",name:"ri-moon-line"},null,512),[[H,a(t)]])],8,Ee)}}});var Ve=w(Fe,[["__file","ToggleDarkModeButton.vue"]]);const He={class:"navbar-buttons"},We=["href"],Ke=["href"],je=S({setup(c){const u=B(),t=v(()=>u.value.darkMode),s=v(()=>u.value.authorLink),e={github:"ri-github-line",gitee:"si-gitee",gitlab:"si-gitlab",bitbucket:"si-bitbucket"},o=(()=>{const n=B(),i=v(()=>n.value.repo),r=v(()=>i.value?Ie(i.value):null),d=v(()=>i.value&&!K(i.value)?`https://github.com/${i.value}`:i.value),p=v(()=>d.value?n.value.repoLabel?n.value.repoLabel:r.value===null?"Source":r.value:null),k=v(()=>p.value?p.value==="Source"?e.github:e[p.value.toLowerCase()]:null);return v(()=>!d.value||!p.value||!k.value?null:{text:p.value,icon:k.value,link:d.value})})();return(n,i)=>{const r=M("VIcon");return l(),h("div",He,[a(o)?(l(),h("a",{key:0,rel:"noopener noreferrer",target:"_blank",href:a(o).link},[y(r,{name:a(o).icon,scale:"1.05"},null,8,["name"])],8,We)):T("",!0),a(s)?(l(),h("a",{key:1,rel:"noopener noreferrer",target:"_blank",href:a(s)},[y(r,{name:"ri-share-line"})],8,Ke)):T("",!0),a(t)?(l(),L(Ve,{key:2})):T("",!0)])}}});var qe=w(je,[["__file","NavbarButtons.vue"]]);const ze=["href","rel","target","aria-label"],Ge=S({inheritAttrs:!1}),Ue=S({...Ge,props:{item:{type:Object,required:!0}},setup(c){const u=c,t=W(),s=ge(),{item:e}=j(u),b=v(()=>K(e.value.link)),o=v(()=>Te(e.value.link)||Ne(e.value.link)),n=v(()=>{if(!o.value){if(e.value.target)return e.value.target;if(b.value)return"_blank"}}),i=v(()=>n.value==="_blank"),r=v(()=>!b.value&&!o.value&&!i.value),d=v(()=>{if(!o.value){if(e.value.rel)return e.value.rel;if(i.value)return"noopener noreferrer"}}),p=v(()=>e.value.ariaLabel||e.value.text),k=v(()=>{const $=Object.keys(s.value.locales);return $.length?!$.some(A=>A===e.value.link):e.value.link!=="/"}),_=v(()=>k.value?t.path.startsWith(e.value.link):!1),g=v(()=>r.value?e.value.activeMatch?new RegExp(e.value.activeMatch).test(t.path):_.value:!1);return($,A)=>{const R=M("RouterLink");return a(r)?(l(),L(R,ae({key:0,class:{"router-link-active":a(g)},to:a(e).link,"aria-label":a(p)},$.$attrs),{default:N(()=>[m($.$slots,"before"),P(" "+I(a(e).text)+" ",1),m($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(l(),h("a",ae({key:1,class:"external-link",href:a(e).link,rel:a(d),target:a(n),"aria-label":a(p)},$.$attrs),[m($.$slots,"before"),P(" "+I(a(e).text)+" ",1),m($.$slots,"after")],16,ze))}}});var O=w(Ue,[["__file","AutoLink.vue"]]);const Xe=S({setup(c){const u=s=>{s.style.height=s.scrollHeight+"px"},t=s=>{s.style.height=""};return(s,e)=>(l(),L(me,{name:"dropdown",onEnter:u,onAfterEnter:t,onBeforeLeave:u},{default:N(()=>[m(s.$slots,"default")]),_:3}))}});var ve=w(Xe,[["__file","DropdownTransition.vue"]]);const Ye=["aria-label"],Je={class:"title"},Qe=f("span",{class:"arrow down"},null,-1),Ze=["aria-label"],et={class:"title"},tt={class:"navbar-dropdown"},at={class:"navbar-dropdown-subtitle"},nt={key:1},rt={class:"navbar-dropdown-subitem-wrapper"},st=S({props:{item:{type:Object,required:!0}},setup(c){const u=c,{item:t}=j(u),s=v(()=>t.value.ariaLabel||t.value.text),e=C(!1),b=W();le(()=>b.path,()=>{e.value=!1});const o=i=>{i.detail===0?e.value=!e.value:e.value=!1},n=(i,r)=>r[r.length-1]===i;return(i,r)=>(l(),h("div",{class:x(["navbar-dropdown-wrapper",{open:e.value}])},[f("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(s),onClick:o},[f("span",Je,I(a(t).text),1),Qe],8,Ye),f("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(s),onClick:r[0]||(r[0]=d=>e.value=!e.value)},[f("span",et,I(a(t).text),1),f("span",{class:x(["arrow",e.value?"down":"right"])},null,2)],8,Ze),y(ve,null,{default:N(()=>[V(f("ul",tt,[(l(!0),h(D,null,E(a(t).children,d=>(l(),h("li",{key:d.text,class:"navbar-dropdown-item"},[d.children?(l(),h(D,{key:0},[f("h4",at,[d.link?(l(),L(O,{key:0,item:d,onFocusout:p=>n(d,a(t).children)&&d.children.length===0&&(e.value=!1)},null,8,["item","onFocusout"])):(l(),h("span",nt,I(d.text),1))]),f("ul",rt,[(l(!0),h(D,null,E(d.children,p=>(l(),h("li",{key:p.link,class:"navbar-dropdown-subitem"},[y(O,{item:p,onFocusout:k=>n(p,d.children)&&n(d,a(t).children)&&(e.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(l(),L(O,{key:1,item:d,onFocusout:p=>n(d,a(t).children)&&(e.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[H,e.value]])]),_:1})],2))}});var ot=w(st,[["__file","NavbarDropdown.vue"]]);const lt={key:0,class:"navbar-items"},ut=S({setup(c){const u=()=>{const n=q(),i=re(),r=se(),d=B();return v(()=>{var $,A;const p=Object.keys(r.value.locales);if(p.length<2)return[];const k=n.currentRoute.value.path,_=n.currentRoute.value.fullPath;return[{text:($=d.value.selectLanguageText)!=null?$:"unknown language",ariaLabel:(A=d.value.selectLanguageAriaLabel)!=null?A:"unkown language",children:p.map(R=>{var U,X,Y,J,Q,Z;const be=(X=(U=r.value.locales)==null?void 0:U[R])!=null?X:{},z=(J=(Y=d.value.locales)==null?void 0:Y[R])!=null?J:{},G=`${be.lang}`,pe=(Q=z.selectLanguageName)!=null?Q:G;let F;if(G===r.value.lang)F=_;else{const ee=k.replace(i.value,R);n.getRoutes().some(he=>he.path===ee)?F=ee:F=(Z=z.home)!=null?Z:R}return{text:pe,link:F}})}]})},t=n=>ke(n)?$e(n):n.children?{...n,children:n.children.map(t)}:n,e=(()=>{const n=B();return v(()=>(n.value.navbar||[]).map(t))})(),b=u(),o=v(()=>[...e.value,...b.value]);return(n,i)=>a(o).length?(l(),h("nav",lt,[(l(!0),h(D,null,E(a(o),r=>(l(),h("div",{key:r.text,class:"navbar-item"},[r.children?(l(),L(ot,{key:0,item:r},null,8,["item"])):(l(),L(O,{key:1,item:r},null,8,["item"]))]))),128))])):T("",!0)}});var de=w(ut,[["__file","NavbarItems.vue"]]);const it=["title"],ct=f("div",{class:"icon","aria-hidden":"true"},[f("span"),f("span"),f("span")],-1),vt=[ct],dt=S({emits:["toggle"],setup(c){const u=B();return(t,s)=>(l(),h("div",{class:"toggle-sidebar-button",title:a(u).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:s[0]||(s[0]=e=>t.$emit("toggle"))},vt,8,it))}});var bt=w(dt,[["__file","ToggleSidebarButton.vue"]]);const pt=S({emits:["toggle-sidebar"],setup(c){const u=C(null),t=C(null),s=C(0),e=v(()=>s.value?{maxWidth:s.value+"px"}:{});ue(()=>{const n=b(u.value,"paddingLeft")+b(u.value,"paddingRight"),i=()=>{var r;window.innerWidth<=719?s.value=0:s.value=u.value.offsetWidth-n-(((r=t.value)==null?void 0:r.offsetWidth)||0)};i(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1)});function b(o,n){var d,p,k;const i=(k=(p=(d=o==null?void 0:o.ownerDocument)==null?void 0:d.defaultView)==null?void 0:p.getComputedStyle(o,null))==null?void 0:k[n],r=Number.parseInt(i,10);return Number.isNaN(r)?0:r}return(o,n)=>{const i=M("NavbarSearch");return l(),h("header",{ref_key:"navbar",ref:u,class:"navbar"},[y(bt,{onToggle:n[0]||(n[0]=r=>o.$emit("toggle-sidebar"))}),f("span",{ref_key:"navbarBrand",ref:t},[y(Pe)],512),f("div",{class:"navbar-items-wrapper",style:ye(a(e))},[m(o.$slots,"before"),y(de,{class:"can-hide"}),m(o.$slots,"after"),y(qe),y(i)],4)],512)}}});var ht=w(pt,[["__file","Navbar.vue"]]);const _t={class:"sidebar-item-children"},ft=S({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(c){const u=c,{item:t,depth:s}=j(u),e=W(),b=q(),o=v(()=>ce(t.value,e)),n=v(()=>({"sidebar-item":!0,"sidebar-heading":s.value===0,active:o.value,collapsible:t.value.collapsible})),i=C(!0),r=C(void 0);return t.value.collapsible&&(i.value=o.value,r.value=()=>{i.value=!i.value},b.afterEach(()=>{i.value=o.value})),(d,p)=>{var _;const k=M("SidebarItem",!0);return l(),h("li",null,[a(t).link?(l(),L(O,{key:0,class:x(a(n)),item:a(t)},null,8,["class","item"])):(l(),h("p",{key:1,tabindex:"0",class:x(a(n)),onClick:p[0]||(p[0]=(...g)=>r.value&&r.value(...g)),onKeydown:p[1]||(p[1]=Le((...g)=>r.value&&r.value(...g),["enter"]))},[P(I(a(t).text)+" ",1),a(t).collapsible?(l(),h("span",{key:0,class:x(["arrow",i.value?"down":"right"])},null,2)):T("",!0)],34)),(_=a(t).children)!=null&&_.length?(l(),L(ve,{key:2},{default:N(()=>[V(f("ul",_t,[(l(!0),h(D,null,E(a(t).children,g=>(l(),L(k,{key:`${a(s)}${g.text}${g.link}`,item:g,depth:a(s)+1},null,8,["item","depth"]))),128))],512),[[H,i.value]])]),_:1})):T("",!0)])}}});var gt=w(ft,[["__file","SidebarItem.vue"]]);const mt={key:0,class:"sidebar-items"},kt=S({setup(c){const u=W(),t=ie();return le(()=>u.hash,s=>{const e=document.querySelector(".sidebar");if(!e)return;const b=document.querySelector(`.sidebar a.sidebar-item[href="${u.path}${s}"]`);if(!b)return;const o=e.getBoundingClientRect().top,n=e.getBoundingClientRect().height,i=b.getBoundingClientRect().top,r=b.getBoundingClientRect().height;i<o?b.scrollIntoView(!0):i+r>o+n&&b.scrollIntoView(!1)}),(s,e)=>a(t).length?(l(),h("ul",mt,[(l(!0),h(D,null,E(a(t),b=>(l(),L(gt,{key:b.link||b.text,item:b},null,8,["item"]))),128))])):T("",!0)}});var $t=w(kt,[["__file","SidebarItems.vue"]]);const yt={class:"sidebar"},Lt=S({setup(c){return(u,t)=>(l(),h("aside",yt,[y(de),m(u.$slots,"top"),y($t),m(u.$slots,"bottom")]))}});var wt=w(Lt,[["__file","Sidebar.vue"]]);const St={class:"page-content"},Tt=S({setup(c){const u=we(),t=B(),s=v(()=>u.value.navbar!==!1&&t.value.navbar!==!1),e=ie(),b=C(!1),o=_=>{b.value=typeof _=="boolean"?_:!b.value},n={x:0,y:0},i=_=>{n.x=_.changedTouches[0].clientX,n.y=_.changedTouches[0].clientY},r=_=>{const g=_.changedTouches[0].clientX-n.x,$=_.changedTouches[0].clientY-n.y;Math.abs(g)>Math.abs($)&&Math.abs(g)>40&&(g>0&&n.x<=80?o(!0):o(!1))},d=v(()=>e.value.length===0),p=v(()=>[{"no-navbar":!s.value,"no-sidebar":!e.value.length,"sidebar-open":b.value},u.value.pageClass]);let k;return ue(()=>{k=q().afterEach(()=>{o(!1)})}),Se(()=>{k()}),(_,g)=>(l(),h("div",{class:x(["theme-container",a(p)]),onTouchstart:i,onTouchend:r},[m(_.$slots,"navbar",{},()=>[a(s)?(l(),L(ht,{key:0,onToggleSidebar:o},{before:N(()=>[m(_.$slots,"navbar-before")]),after:N(()=>[m(_.$slots,"navbar-after")]),_:3})):T("",!0)]),f("div",{class:"sidebar-mask",onClick:g[0]||(g[0]=$=>o(!1))}),m(_.$slots,"sidebar",{},()=>[y(wt,null,{top:N(()=>[m(_.$slots,"sidebar-top")]),bottom:N(()=>[m(_.$slots,"sidebar-bottom")]),_:3})]),f("div",St,[m(_.$slots,"page")]),a(d)?(l(),L(Ae,{key:0})):T("",!0)],34))}});var Bt=w(Tt,[["__file","Common.vue"]]);export{O as A,Bt as C,Ie as r};

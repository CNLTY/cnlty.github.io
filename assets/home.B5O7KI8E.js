import{n as z,o as T,_ as F,p as q,s as L,q as V,r as R,t as G,v as O,w as W,e as X,f as Q}from"./app.D3x6rB8S.js";import"./chunks/@vueuse/motion.CpyOKRAK.js";import{a9 as m,b3 as o,Z as r,_ as a,be as S,c6 as E,Y as u,bb as b,aX as D,bt as y,X as g,b_ as x,aO as h,aQ as H,bB as c,F as k,bd as M,a6 as i,H as N,U as w,bf as U}from"./framework.BKJYaCLv.js";import"./chunks/dayjs.BEF9oILy.js";import{g as P}from"./animation.CvE32Dn8.js";import{a as Z}from"./chunks/vue-router.BRKblZ0f.js";import"./chunks/vue-i18n.wVZg5Iio.js";import"./chunks/pinia.DTIoGjQ4.js";import"./chunks/nprogress.COmiaX7O.js";const J={class:"w-full px-4 flex-center"},K={class:"yun-notice w-full"},ee=["innerHTML"],te=m({__name:"YunNotice",props:{content:{}},setup(l){return(e,t)=>(o(),r("div",J,[a("div",K,[a("span",{innerHTML:e.content},null,8,ee),S(e.$slots,"default")])]))}}),ne={},se={class:"grid-bg"};function oe(l,e){return o(),r("div",se,[u(" <YunAEFrame /> "),u(" <YunAERect /> ")])}const ae=E(ne,[["render",oe]]),re={class:"say"},ie={key:0,class:"say-content animate-fade-in animate-iteration-1"},ce={key:1,class:"say-author"},le={key:2,class:"say-from"},ue=m({__name:"YunSay",setup(l){const e=z(),t=b(""),n=b(""),s=b("");function f(){const _=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;_&&fetch(_).then(d=>{if(d.ok)d.json().then(v=>{if(e.value.say.hitokoto.enable)t.value=v.hitokoto,n.value=v.from_who,s.value=v.from;else{const p=v[Math.floor(Math.random()*v.length)];p.content?(t.value=p.content,n.value=p.author,s.value=p.from):t.value=p}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${d.status}`)}).catch(d=>{console.error(d.message)})}return D(()=>{f()}),(_,d)=>(o(),r("div",re,[t.value?(o(),r("span",ie,y(t.value),1)):u("v-if",!0),n.value?(o(),r("span",ce,y(n.value),1)):u("v-if",!0),s.value?(o(),r("span",le,y(s.value),1)):u("v-if",!0)]))}}),_e=m({__name:"YunSiteLinkItem",props:{page:{}},setup(l){const e=T();return(t,n)=>{const s=F;return o(),g(s,{class:"link-item inline-flex-center gap-2 transition rounded-lg text-xl p-2 md:text-lg md:p-2 lg:text-xl lg:p-3 text-$va-c-text",bg:"white/5 dark:black/5","inline-flex":"",to:t.page.url,title:t.page.name,style:H(`color:${t.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=f=>c(e).fullscreenMenu.isOpen=!1)},{default:x(()=>[a("div",{class:h([t.page.icon,"icon"])},null,2),a("span",null,y(t.page.name),1)]),_:1},8,["to","title","style"])}}}),pe={key:0,class:"site-description text-$va-c-text text-sm"},me=m({__name:"YunSiteDescription",setup(l){const e=q();return(t,n)=>c(e).description?(o(),r("div",pe,y(c(e).description),1)):u("v-if",!0)}}),fe={key:0,class:"site-subtitle block text-$va-c-text op-80 font-medium",text:"sm"},de=m({__name:"YunSiteSubtitle",setup(l){const e=q();return(t,n)=>c(e).subtitle?(o(),r("h4",fe,y(c(e).subtitle),1)):u("v-if",!0)}}),ve=m({__name:"YunAnimLineDraw",setup(l){const e=b(!1);return D(()=>{e.value=!0}),(t,n)=>(o(),r("div",{class:h(["line",{enter:e.value}])},null,2))}}),he=E(ve,[["__scopeId","data-v-3207662b"]]),be={key:0,class:"site-author-intro",m:"t-0 b-4"},ye=m({__name:"YunAuthorIntro",setup(l){const e=q();return(t,n)=>c(e).author.intro?(o(),r("div",be,y(c(e).author.intro),1)):u("v-if",!0)}}),ge={key:0,class:"line-burst-effects absolute"},$e=m({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(l){const e=l,t=b(!0);return D(async()=>{await L(e.delay),t.value=!1,await L(e.duration),t.value=!0}),(n,s)=>t.value?u("v-if",!0):(o(),r("div",ge,[(o(),r(k,null,M(8,f=>a("div",{key:f,class:"line"},s[0]||(s[0]=[a("div",null,[a("span")],-1)]))),64))]))}}),xe={flex:"~ col",class:"yun-square-container items-center justify-center text-center max-w-2xl"},ke={flex:"~ col",class:"yun-square square-rotate z-1 bg-white/80"},we={class:"py-4 md:py-5 lg:pt-6"},Ye={flex:"~ col",class:"gap-2 items-center justify-center"},Se={class:"scale-x--100 py-4 md:py-5 lg:pb-6"},Ce={class:"mt-4 flex-center w-72 md:w-150 m-auto gap-2",flex:"~ wrap"},Ae=m({__name:"YunPrologueSquare",setup(l){const e=z(),t=b(!1);return(n,s)=>{const f=$e,_=V,d=R,v=ye,p=he,C=G,$=de,Y=me,I=O,A=_e;return o(),r("div",xe,[S(n.$slots,"default",{},void 0,!0),a("div",{flex:"~ col center",class:h(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:t.value}])},[i(N,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:s[0]||(s[0]=B=>t.value=!0)},{default:x(()=>[a("div",ke,[i(f,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),i(N,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:x(()=>[i(_)]),_:1})])]),_:1}),a("div",{class:h(["info",{show:t.value}])},[i(d,{class:"mt-3"}),i(v),a("div",we,[i(p)]),a("div",Ye,[i(C),i($),i(Y)]),a("div",Se,[i(p)]),i(I),a("div",Ce,[i(A,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),S(n.$slots,"default",{},void 0,!0),(o(!0),r(k,null,M(c(e).pages,(B,j)=>(o(),g(A,{key:j,page:B},null,8,["page"]))),128))])],2)],2)])}}}),Be=E(Ae,[["__scopeId","data-v-8a507115"]]),Le=m({__name:"YunGoDown",setup(l){return(e,t)=>(o(),r("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:t[0]||(t[0]=(...n)=>c(P)&&c(P)(...n))},t[1]||(t[1]=[a("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),Ne={class:"banner-char-container"},ze={class:"char"},De=m({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup(l){return(e,t)=>(o(),r("div",Ne,[(o(!0),r(k,null,M(e.title,(n,s)=>(o(),r("div",{key:s,class:"char-box"},[a("span",{class:h([s%2!==0?"char-right":"char-left"]),style:H({"--banner-char-size":`${e.chars[s]}rem`})},[a("span",ze,y(n),1)],6)]))),128))]))}});function Ie(l){const e=w(()=>{const n=[];for(let s=0;s<l.title.length;s++){const f=W(1.5,3.5);n.push(f)}return n}),t=w(()=>e.value.reduce((n,s)=>n+s,0));return{chars:e,totalCharHeight:t}}const Te={class:"banner-line-container"},qe={class:"banner-line-container bottom"},Ee=m({__name:"YunBanner",setup(l){const e=T(),t=z(),{totalCharHeight:n,chars:s}=Ie(t.value.banner),f=w(()=>{const p={"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"};return e.isStrato&&(p.borderBottom="1px solid var(--banner-line-color)"),p}),_=b("enter"),d=w(()=>_.value),v=b("banner");return D(async()=>{await L(500),_.value="active",e.isNimbo&&(await L(500),_.value="exit",v.value="prologue")}),(p,C)=>{const $=De,Y=Le;return o(),r("div",{id:"yun-banner",border:"b-1px b-solid b-$banner-line-color",style:H(f.value)},[a("div",Te,[a("div",{class:h(["banner-line vertical-line-top",d.value])},null,2)]),c(e).isNimbo?(o(),r(k,{key:0},[v.value==="banner"?(o(),g($,{key:0,title:c(t).banner.title,chars:c(s)},null,8,["title","chars"])):u("v-if",!0)],64)):u("v-if",!0),c(e).isStrato?(o(),g($,{key:1,title:c(t).banner.title,chars:c(s)},null,8,["title","chars"])):u("v-if",!0),a("div",qe,[a("div",{class:h(["banner-line vertical-line-bottom",d.value])},null,2)]),i(Y)],4)}}}),He={class:"absolute top-0 left-5 right-5 bottom-0 flex-center"},Xe=m({__name:"home",setup(l){const e=T(),t=Z(),n=z(),s=w(()=>t.path.startsWith("/page")),f=w(()=>{const _=n.value.notice;return _.enable&&(s.value?!_.hideInPages:!0)});return(_,d)=>{const v=Ee,p=Be,C=ue,$=ae,Y=te,I=U("RouterView"),A=X,B=Q;return o(),r(k,null,[i(A,{class:h(["items-center flex-col",{"mt-0!":!s.value}])},{default:x(()=>[s.value?u("v-if",!0):(o(),r(k,{key:0},[i(v),i(N,{"enter-from-class":"scale-60","enter-to-class":"scale-100","enter-active-class":"transition-300 transition-cubic-bezier-ease-in-out delay-1000",appear:""},{default:x(()=>[a("div",He,[i(N,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-800 delay-1000",appear:""},{default:x(()=>[i(p,{class:"z-1"})]),_:1})])]),_:1}),c(n).say.enable?(o(),g(C,{key:0,w:"full"})):u("v-if",!0),c(e).isNimbo?(o(),g($,{key:1,class:"absolute left-0 top-0 right-0 bottom-0"})):u("v-if",!0)],64)),f.value?(o(),g(Y,{key:1,class:h(["mb-2 md:mb-6",{"mt-4":!s.value}]),content:c(n).notice.content},null,8,["class","content"])):u("v-if",!0),S(_.$slots,"board"),S(_.$slots,"default",{},()=>[i(I)])]),_:3},8,["class"]),i(B)],64)}}});export{Xe as default};

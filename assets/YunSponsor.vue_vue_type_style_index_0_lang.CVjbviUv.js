import"./chunks/@vueuse/motion.CpyOKRAK.js";import{p as m}from"./app.D3x6rB8S.js";import"./chunks/dayjs.BEF9oILy.js";import{a9 as f,bb as _,U as v,b3 as n,Z as r,_ as e,bB as i,bt as x,Y as b,F as y,bd as h,aO as c,aQ as g}from"./framework.BKJYaCLv.js";import{u as k}from"./chunks/vue-i18n.wVZg5Iio.js";const C={class:"yun-sponsor-container flex-center flex-col"},w=["title"],B={key:0,class:"sponsor-description",mb:"4",text:"sm"},S={class:"flex justify-around"},z=["href"],q=["src","title"],j=f({__name:"YunSponsor",setup(F){const{t:d}=k(),o=m(),a=_(!1),u=v(()=>{var l;return((l=o.value.sponsor)==null?void 0:l.title)??d("reward.donate")});return(l,t)=>(n(),r("div",C,[e("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=s=>a.value=!a.value)},t[1]||(t[1]=[e("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),e("div",{class:c(["qrcode-container qrcode flex-center flex-col",a.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",B,x(i(o).sponsor.description),1)):b("v-if",!0),e("div",S,[(n(!0),r(y,null,h(i(o).sponsor.methods,(s,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:s.url,target:"_blank",style:g(`color:${s.color}`)},[e("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:s.url,title:s.name},null,8,q),e("div",{text:"xl",m:"2",class:c(s.icon)},null,2)],12,z))),128))])],2)]))}});export{j as _};

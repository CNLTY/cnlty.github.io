import{e as d}from"./app.D3x6rB8S.js";import"./chunks/@vueuse/motion.CpyOKRAK.js";import{bb as f,a9 as l,bf as i,b3 as e,X as o,b_ as t,a5 as b,a6 as k,bh as h,_ as C,Z as g,F as w,bd as x,bB as B}from"./framework.BKJYaCLv.js";import"./chunks/dayjs.BEF9oILy.js";import"./chunks/vue-router.BRKblZ0f.js";import"./chunks/vue-i18n.wVZg5Iio.js";import"./chunks/pinia.DTIoGjQ4.js";import"./chunks/nprogress.COmiaX7O.js";function v(){return{collections:f([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const L=l({__name:"YunCollectionItem",props:{collection:{}},setup(a){return(n,r)=>{const s=i("RouterLink");return e(),o(s,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${n.collection.id}`},{default:t(()=>r[0]||(r[0]=[b(" Book ")])),_:1},8,["to"])}}}),R={flex:"~ wrap",gap:"4"},E=l({__name:"collections",setup(a){const{collections:n}=v();return(r,s)=>{const p=L,u=i("RouterView"),_=d;return e(),o(_,null,{default:t(()=>[k(u,null,{default:t(({Component:m})=>[(e(),o(h(m),null,{default:t(()=>[C("div",R,[(e(!0),g(w,null,x(B(n),c=>(e(),o(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})]),_:1})}}});export{E as default};
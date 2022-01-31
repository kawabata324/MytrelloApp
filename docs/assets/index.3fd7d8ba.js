import{d as V,r as h,c as x,o as u,a as p,w as b,v as _,b as d,n as y,u as c,e as w,f as S,t as v,g as f,h as L,i as z,j as I,k as A,l as k,m as O,p as F}from"./vendor.cb0f26aa.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};J();const N=localStorage.getItem("trello-lists"),g=V("store",{state:()=>({lists:N?JSON.parse(N):[]}),getters:{totalCardCounts(o){let t=0;for(const n of o.lists)t+=n.cards.length;return t}},actions:{addList(o){this.lists.push({title:o,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(o){this.lists.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(o,t){this.lists[t].cards.push({body:o}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(o,t){this.lists[t].cards.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(o){this.lists=o,localStorage.setItem("trello-lists",JSON.stringify(this.lists))}}}),q=["onSubmit"],C={setup(o){const t=h(""),n=h(!1),l=g(),e=()=>{l.addList(t.value),t.value=""},s=x(()=>{const i=[];return n.value&&i.push("active"),t.value.length&&i.push("addable"),i});return(i,r)=>(u(),p("form",{class:y([c(s),"addlist"]),onSubmit:S(e,["prevent"])},[b(d("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=a=>t.value=a),class:"text-input",placeholder:"Add new list",onFocusin:r[1]||(r[1]=a=>n.value=!0),onFocusout:r[2]||(r[2]=a=>n.value=!1)},null,544),[[_,t.value]]),n.value||t.value.length?(u(),p("button",{key:0,type:"submit",class:y([c(s),"add-button"])}," Add ",2)):w("",!0)],42,q))}},U=["onSubmit"],E={key:0,type:"submit",class:"add-button"},T={props:{listIndex:{type:Number,required:!0}},setup(o){const t=o,n=h(""),l=h(!1),e=g(),s=()=>{e.addCardToList(n.value,t.listIndex),n.value=""},i=x(()=>{const r=[];return l.value&&r.push("active"),n.value.length&&r.push("addable"),r});return(r,a)=>(u(),p("form",{class:y([c(i),"addcard"]),onSubmit:S(s,["prevent"])},[b(d("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=m=>n.value=m),class:"text-input",placeholder:"Add new card",onFocusin:a[1]||(a[1]=m=>l.value=!0),onFocusout:a[2]||(a[2]=m=>l.value=!1)},null,544),[[_,n.value]]),l.value||n.value.length>0?(u(),p("button",E," Add ")):w("",!0)],42,U))}},M={class:"card"},j={class:"body"},B={props:{body:{type:String,required:!0},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(o){const t=o,n=g(),l=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&n.removeCardFromList(t.cardIndex,t.listIndex)};return(e,s)=>(u(),p("div",M,[d("button",{class:"close-button",onClick:l},"\u2716\uFE0F"),d("div",j,v(t.body),1)]))}},P={class:"list"},D={class:"listheader"},H={class:"list-title"},K={class:"list-counter"},R={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(o,{emit:t}){const n=o,l=g(),e=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&l.removeList(n.listIndex)},s=x(()=>n.cards.length),i=x({get:()=>n.cards,set:r=>{t("update:cards",r)}});return(r,a)=>(u(),p("div",P,[d("div",D,[d("p",H,v(n.title),1),d("p",K,"total:"+v(c(s)),1),d("div",{class:"deletelist",onClick:e},"\u2716\uFE0F")]),f(c(I),{modelValue:c(i),"onUpdate:modelValue":a[0]||(a[0]=m=>z(i)?i.value=m:null),"item-key":"id",group:"cards"},{item:L(({element:m,index:$})=>[f(B,{body:m.body,cardIndex:$,listIndex:n.listIndex},null,8,["body","cardIndex","listIndex"])]),_:1},8,["modelValue"]),f(T,{listIndex:n.listIndex},null,8,["listIndex"])]))}},G=d("header",null,"My Trello",-1),Q={class:"info-line"},W={setup(o){const t=g(),n=x(()=>t.totalCardCounts);A(t.lists,()=>{t.updateLists(t.lists)});const l=()=>{t.updateLists(t.lists)};return(e,s)=>(u(),p("div",null,[G,d("main",null,[d("p",Q,"All: "+v(c(n))+" tasks",1),d("div",null,[f(c(I),{modelValue:c(t).lists,"onUpdate:modelValue":s[0]||(s[0]=i=>c(t).lists=i),"item-key":"id",class:"list-index",onEnd:l},{item:L(({element:i,index:r})=>[d("div",null,[f(R,{title:i.title,listIndex:r,cards:i.cards,"onUpdate:cards":a=>i.cards=a},null,8,["title","listIndex","cards","onUpdate:cards"]),b(f(C,null,null,512),[[k,r===c(t).lists.length-1]])])]),_:1},8,["modelValue"]),b(f(C,null,null,512),[[k,c(t).lists.length===0]])])])]))}},X={id:"app"},Y={setup(o){return(t,n)=>(u(),p("div",X,[f(W)]))}};var Z=`html {
  background: orange;
  font-family: 'Avenir', Helvetica, Arial, 'system-ui', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}

header {
  background: orange;
  height: 70px;
  color: white;
  font-style: italic;
  font-size: 40px;
  text-align: left;
  padding: 20px;
}

main {
  padding: 0 10px;
  width: calc(100% - 40px);
  height: 100%;
}

.info-line {
  margin: 20px;
  font-size: 20px;
}

.list-index {
  display: flex;
}

.addlist {
  margin: 0 10px auto;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  width: 320px;
}

.text-input {
  padding: 20px 15px;
  width: calc(100% - 30px);
  background-color: #ccc;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-family: "Noto Sans Japanese", "Noto Sans", 'system-ui', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #242424;
  cursor: pointer;
  overflow: overlay;
}

.text-input:focus {
  outline: 0;
  cursor: initial;
}

.add-button {
  margin-top: 15px;
  padding: 15px 18px;
  background-color: #999;
  border: none;
  border-radius: 8px;
  font-family: "Noto Sans Japanese", "Noto Sans", 'system-ui', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}

.add-button:hover {
  opacity: 0.8;
  cursor: pointer;
}

.active .text-input {
  background-color: #fff;
}
.addable .add-button {
  background-color: #00d78f;
  pointer-events: auto;
  cursor: pointer;
}

.add-button:active {
  background-color: #00d78f;
}

.list {
  margin: 0 5px auto;
  position: relative;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 290px;
  width: 290px;
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  border: solid #ddd 1px;
  color: gray;
  vertical-align: top;
}

.listheader {
  width: 290px;
  display: inline-flex;
  justify-content: space-between;
}

.list-title {
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
}

.list-counter {
  color: rgb(0, 140, 255);
  padding: 15px;
}

.deletelist {
  position: absolute;
  top: 6px;
  right: 14px;
  font-size: 28px;
}

.deletelist:hover {
  opacity: 0.8;
  cursor: pointer;
}

.card {
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  padding: 30px 15px 40px;
  background-color: #fff;
  border-radius: 8px;
  width: 260px;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 8px;
  border-color: red;
  border-style: solid;
  background-color: red;
  color: white;
  margin: 5px;
}

.body {
  font-size: 18px;
  width: 100%;
  word-wrap: break-word;
}
`;const tt=O();F(Y).use(Z).use(tt).mount("#app");

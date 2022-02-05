import{d as W,r as f,c as w,o as E,a as $,b as S,w as v,v as _,e as n,t as y,f as j,g as F,h as z,n as A,u as h,i as M,F as O,j as N,k as X,l as Y,m as Z,p as k,q as nn,s as en,x as U,y as D,z as tn,A as on,B as sn,_ as rn,C as an,D as ln,E as dn}from"./vendor.77357ac0.js";const cn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};cn();const V=localStorage.getItem("trello-lists"),K=localStorage.getItem("countID"),L=W("store",{state:()=>({lists:V?JSON.parse(V):[],countID:K?JSON.parse(K):0}),getters:{totalCardCounts(o){let e=0;for(const t of o.lists)e+=t.cards.filter(s=>s.done!==!0).length;return e}},actions:{addList(o){this.lists.push({title:o,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(o){this.lists.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(o,e){this.countID++,this.lists[e].cards.push({id:this.countID,body:o}),localStorage.setItem("countID",JSON.stringify(this.countID)),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(o,e){this.lists[e].cards.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(o){this.lists=o,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},editCard(o,e,t,a,s,i){this.lists[o].cards[e].body=t,this.lists[o].cards[e].contents=a,this.lists[o].cards[e].date=s,this.lists[o].cards[e].done=i,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},searchListFromListIndex(o){return this.lists[o]}}}),un={class:"relative w-64"},pn=n("i",{class:"fas fa-plus"},null,-1),gn=M(" Add List "),fn=[pn,gn],mn={class:"flex flex-col justify-center items-start mx-3"},hn=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"ListTitle")],-1),bn={class:"text-red-500"},vn=["onKeydown"],xn={class:"flex my-3 justify-between w-10/12"},wn=["onClick"],yn=["onClick"],q={setup(o){const e=f(""),t=f(!1),a=f(!1),s=f(""),i=f(null),l=L(),x=()=>{a.value=!a.value},g=p=>{p.keyCode&&p.keyCode!==13||(e.value?(l.addList(e.value),e.value="",a.value=!1):s.value="\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u304C\u7A7A\u3067\u3059")},m=w(()=>{const p=[];return t.value&&p.push("active"),e.value.length&&p.push("addable"),p}),d=()=>{a.value=!1};return E(()=>{i.value.focus()}),(p,c)=>($(),S("div",un,[v(n("div",{class:"flex items-center justify-center border border-dashed bg-gray-600 gap-2 opacity-50",onClick:x},fn,512),[[_,!a.value]]),v(n("form",{class:A([h(m),"flex flex-col items-center ml-4 w-72 bg-gray-700 rounded-md border"])},[n("div",mn,[hn,n("p",bn,y(s.value),1),v(n("input",{type:"text",for:"title",ref_key:"titleInput",ref:i,"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),class:"text-input mt-1 py-3 px-4 w-full text-black",placeholder:"Add new list",onKeydown:j(g,["enter"]),onFocusin:c[1]||(c[1]=u=>t.value=!0),onFocusout:c[2]||(c[2]=u=>t.value=!1)},null,40,vn),[[F,e.value]])]),n("div",xn,[n("button",{onClick:z(d,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,wn),n("button",{onClick:z(g,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,yn)])],2),[[_,a.value]])]))}},_n=n("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),kn=M(" Add Card "),Cn=[_n,kn],In={class:"flex flex-col justify-center items-start w-full p-3"},$n=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),Sn=["onKeydown"],zn={class:"flex m-3 justify-between w-10/12"},Ln=["onClick"],jn=["onClick"],Fn={props:{listIndex:{type:Number,required:!0}},setup(o){const e=o,t=f(""),a=f(!1),s=f(!1),i=f(""),l=f(null),x=L(),g=p=>{p.keyCode&&p.keyCode!==13||(t.value!==""?(x.addCardToList(t.value,e.listIndex),t.value="",i.value="",s.value=!1):i.value="\u30BF\u30A4\u30C8\u30EB\u306B\u306F\u5FC5\u305A\u6587\u5B57\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044")},m=()=>{t.value="",i.value=!1,s.value=!1},d=w(()=>{const p=[];return a.value&&p.push("active"),t.value.length&&p.push("addable"),p});return E(()=>{l.value.focus()}),(p,c)=>($(),S(O,null,[n("div",{class:"relative",onClick:c[0]||(c[0]=u=>s.value=!s.value)},Cn),v(n("form",{class:A([h(d),"flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"])},[n("div",In,[$n,v(n("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u),ref_key:"cardTitleInput",ref:l,class:"text-input mt-1 py-3 px-4 text-black w-full",onKeydown:j(g,["enter"]),onFocusin:c[2]||(c[2]=u=>a.value=!0),onFocusout:c[3]||(c[3]=u=>a.value=!1),for:"title"},null,40,Sn),[[F,t.value]]),v(n("p",{class:"text-red-500"},y(i.value),513),[[_,i.value]])]),n("div",zn,[n("button",{onClick:z(m,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Ln),n("button",{onClick:z(g,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,jn)])],2),[[_,s.value]])],64))}},Nn={class:"flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"},Rn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Tn={class:"mt-4"},En=n("label",{id:"title",class:"mt-3 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),An={class:"text-red-500"},Mn=["onKeydown"],On=n("p",{class:"text-xl"},"More Option",-1),Un={class:"fas fa-chevron-down"},Dn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Vn={class:"w-full"},Kn=n("label",{id:"date",class:"mt-1 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-clock"}),n("p",null,"DeadLine")],-1),qn=["onKeydown"],Bn={class:"w-full"},Jn=n("label",{id:"contents",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"Contents")],-1),Pn={class:"w-full"},Hn=n("label",{id:"done",class:"mt-1 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-check-circle"}),n("p",null,"Done")],-1),Gn=["onKeydown"],Qn=n("option",{value:!1},"In progress",-1),Wn=n("option",{value:!0},"Done",-1),Xn=[Qn,Wn],Yn={class:"flex m-4 justify-between w-10/12"},Zn=["onClick"],ne=["onClick"],ee={props:{openEditRef:{type:Boolean},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(o,{emit:e}){const t=o,a=f(""),s=f(""),i=f(""),l=f(!1),x=f(""),g=f(!1),m=f(null),d=L(),p=w({get:()=>t.openEditRef,set:r=>e("update:openEditRef",r)}),c=w({get:()=>{const r=d.lists[t.listIndex].cards[t.cardIndex].body;return a.value=r,r},set:r=>{a.value=r}}),u=w({get:()=>{const r=d.lists[t.listIndex].cards[t.cardIndex].contents;return s.value=r,r},set:r=>{s.value=r}}),C=w({get:()=>{const r=d.lists[t.listIndex].cards[t.cardIndex].date;return i.value=r,r!==void 0?r:null},set:r=>{i.value=r}}),T=w({get:()=>{const r=d.lists[t.listIndex].cards[t.cardIndex].done;return l.value=r,r!==void 0?r:!1},set:r=>{l.value=r}}),R=r=>{r.keyCode&&r.keyCode!==13||(a.value!==""?(d.editCard(t.listIndex,t.cardIndex,a.value,s.value,i.value,l.value),p.value=!1):x.value="CardTitle\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093")},H=()=>{p.value=!1},G=w(()=>g.value),Q=w(()=>{const r=10,b=d.searchListFromListIndex(t.listIndex).title;return b.length>r?`${b.substring(0,r)}...`:b});return E(()=>{m.value.focus()}),(r,b)=>v(($(),S("form",Nn,[n("div",Rn,[n("div",Tn,[n("p",null,"\u30EA\u30B9\u30C8:"+y(h(Q)),1)]),En,n("p",An,y(x.value),1),v(n("input",{type:"text",ref_key:"titleInput",ref:m,"onUpdate:modelValue":b[0]||(b[0]=I=>N(c)?c.value=I:null),class:"text-input mt-2 py-3 px-4 w-full text-black",onKeydown:j(R,["enter"]),onFocusin:b[1]||(b[1]=I=>r.isEditing=!0),onFocusout:b[2]||(b[2]=I=>r.isEditing=!1),for:"title"},null,40,Mn),[[F,h(c)]])]),n("div",{class:"text-gray-900 flex items-center gap-2",onClick:b[3]||(b[3]=I=>g.value=!g.value)},[On,v(n("i",Un,null,512),[[_,h(G)===!1]])]),v(n("div",Dn,[n("div",Vn,[Kn,v(n("input",{type:"date",for:"date","onUpdate:modelValue":b[4]||(b[4]=I=>N(C)?C.value=I:null),onKeydown:j(R,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},null,40,qn),[[F,h(C)]])]),n("div",Bn,[Jn,v(n("textarea",{type:"text","onUpdate:modelValue":b[5]||(b[5]=I=>N(u)?u.value=I:null),class:"text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"},null,512),[[F,h(u)]])]),n("div",Pn,[Hn,v(n("select",{for:"done","onUpdate:modelValue":b[6]||(b[6]=I=>N(T)?T.value=I:null),onKeydown:j(R,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},Xn,40,Gn),[[X,h(T)]])])],512),[[_,g.value]]),n("div",Yn,[n("button",{onClick:z(H,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Zn),n("button",{type:"submit",onClick:z(R,["prevent"]),class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Edit ",8,ne)])],512)),[[_,h(p)]])}},te={class:"p-1 absolute mt-1 bg-gray-600 opacity-70 text-xs rounded-md tracking-wider"},oe={class:"horizon"},B={props:{showTooltip:{type:Boolean},tooltipText:{type:String}},setup(o){const e=o;return(t,a)=>v(($(),S("div",te,[n("p",oe,y(e.tooltipText),1)],512)),[[_,e.showTooltip]])}};var J=(o,e)=>{const t=o.__vccOpts||o;for(const[a,s]of e)t[a]=s;return t};const P=o=>(nn("data-v-bad4085c"),o=o(),en(),o),se={class:"flex justify-between items-center"},ie={class:"flex gap-1 items-center"},re={class:"fas fa-clock text-white"},ae={class:"flex items-center text-white mt-2"},le={class:"body"},de={class:"text-xs"},ce={class:"flex gap-2"},ue=P(()=>n("i",{class:"fas fa-check-circle bg-green-500 rounded-md"},null,-1)),pe=P(()=>n("i",{class:"fas fa-trash rounded-full text-red-500"},null,-1)),ge={props:{id:{type:Number},body:{type:String,required:!0},contents:{type:String},date:{type:String},done:{type:Boolean,default:!1},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(o){const e=o,t=L(),a=w(()=>{const c=20;return e.body.length>c?`${e.body.substring(0,c)}...`:e.body}),s=w(()=>{const c=15;if(e.contents)return e.contents.length>c?`${e.contents.substring(0,c)}...`:e.contents}),i=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&t.removeCardFromList(e.cardIndex,e.listIndex)},l=f(!1),x=f(!1),g=f(!1),m=f(!1),d=f(""),p=()=>{m.value=!m.value,m.value?d.value="bg-green-800":m.value||(d.value="bg-gray-800"),t.editCard(e.listIndex,e.cardIndex,e.body,e.contents,e.date,m.value)};return Y(()=>{m.value=e.done,m.value?d.value="bg-green-800":m.value||(d.value="bg-gray-800")}),Z(()=>{m.value=e.done,m.value?d.value="bg-green-800":m.value||(d.value="bg-gray-800")}),(c,u)=>($(),S(O,null,[k(ee,{openEditRef:l.value,"onUpdate:openEditRef":u[0]||(u[0]=C=>l.value=C),listIndex:e.listIndex,cardIndex:e.cardIndex},null,8,["openEditRef","listIndex","cardIndex"]),n("div",{class:A(["rounded-md w-64 my-2 py-3 px-3",d.value])},[n("div",se,[n("p",null,"#"+y(e.id),1),n("div",ie,[v(n("i",re,null,512),[[_,e.date]]),n("p",null,y(e.date),1)])]),n("div",ae,[n("div",le,[n("p",{class:"text-blue-600 hover:cursor-pointer text-lg",onClick:u[1]||(u[1]=C=>l.value=!0)},y(h(a)),1),n("a",de,y(h(s)),1)]),n("div",ce,[n("div",{onClick:p,class:"shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"},[n("div",{class:"relative",onMouseenter:u[2]||(u[2]=C=>g.value=!0),onMouseleave:u[3]||(u[3]=C=>g.value=!1)},[ue,k(B,{showTooltip:g.value,tooltipText:"Done"},null,8,["showTooltip"])],32)]),n("div",{onClick:i,class:"shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"},[n("div",{class:"relative",onMouseenter:u[4]||(u[4]=C=>x.value=!0),onMouseleave:u[5]||(u[5]=C=>x.value=!1)},[pe,k(B,{showTooltip:x.value,tooltipText:"Delete"},null,8,["showTooltip"])],32)])])])],2)],64))}};var fe=J(ge,[["__scopeId","data-v-bad4085c"]]);const me={class:"list bg-black list-border-width border-white"},he={class:"w-72 flex justify-start items-center"},be={class:"list-title"},ve={class:"inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"},xe={class:"text-sm font-medium leading-none text-white"},we={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(o,{emit:e}){const t=o,a=L(),s=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&a.removeList(t.listIndex)},i=w(()=>t.cards.length),l=w({get:()=>t.cards,set:g=>{e("update:cards",g)}}),x=w(()=>{const g=10;return t.title.length>g?`${t.title.substring(0,g)}...`:t.title});return(g,m)=>($(),S("div",me,[n("div",he,[n("p",be,y(h(x)),1),n("span",ve,[n("span",xe,y(h(i)),1)]),n("div",{class:"deletelist",onClick:s},"\u2716\uFE0F")]),k(h(D),{modelValue:h(l),"onUpdate:modelValue":m[0]||(m[0]=d=>N(l)?l.value=d:null),"item-key":"id",group:"cards"},{item:U(({element:d,index:p})=>[n("div",null,[k(fe,{id:d.id,body:d.body,contents:d.contents,date:d.date,done:d.done,cardIndex:p,listIndex:t.listIndex},null,8,["id","body","contents","date","done","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),k(Fn,{listIndex:t.listIndex},null,8,["listIndex"])]))}};var ye=J(we,[["__scopeId","data-v-ae3f4b40"]]);const _e=n("header",null,"KeepMakingEfforts",-1),ke={class:"info-line text-white"},Ce={class:"flex gap-1"},Ie={setup(o){const e=L(),t=w(()=>e.totalCardCounts);tn(e.lists,()=>{e.updateLists(e.lists)});const a=()=>{e.updateLists(e.lists)};return(s,i)=>($(),S("div",null,[_e,n("main",null,[n("p",ke,"All: "+y(h(t))+" tasks",1),n("div",null,[k(h(D),{modelValue:h(e).lists,"onUpdate:modelValue":i[0]||(i[0]=l=>h(e).lists=l),"item-key":"id",class:"list-index",onEnd:a},{item:U(({element:l,index:x})=>[n("div",Ce,[k(ye,{title:l.title,listIndex:x,cards:l.cards,"onUpdate:cards":g=>l.cards=g},null,8,["title","listIndex","cards","onUpdate:cards"]),v(k(q,null,null,512),[[_,x===h(e).lists.length-1]])])]),_:1},8,["modelValue"]),v(k(q,null,null,512),[[_,h(e).lists.length===0]])])])]))}},$e={id:"app"},Se={setup(o){return(e,t)=>($(),S("div",$e,[k(Ie)]))}};var ze=`/*
! tailwindcss v3.0.18 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.right-0\\.5 {
  right: 0.125rem;
}
.-bottom-48 {
  bottom: -12rem;
}
.right-0 {
  right: 0px;
}
.top-0 {
  top: 0px;
}
.z-50 {
  z-index: 50;
}
.m-3 {
  margin: 0.75rem;
}
.m-4 {
  margin: 1rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.ml-4 {
  margin-left: 1rem;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.contents {
  display: contents;
}
.h-6 {
  height: 1.5rem;
}
.h-96 {
  height: 24rem;
}
.w-64 {
  width: 16rem;
}
.w-6 {
  width: 1.5rem;
}
.w-72 {
  width: 18rem;
}
.w-full {
  width: 100%;
}
.w-10\\/12 {
  width: 83.333333%;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border {
  border-width: 1px;
}
.border-dashed {
  border-style: dashed;
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
.p-4 {
  padding: 1rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-1 {
  padding: 0.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-medium {
  font-weight: 500;
}
.font-light {
  font-weight: 300;
}
.leading-none {
  line-height: 1;
}
.leading-relaxed {
  line-height: 1.625;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-70 {
  opacity: 0.7;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

html {
  background: #18181b;
  font-family: "Avenir", Helvetica, Arial, "system-ui", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}

header {
  background: #18181b;
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
  align-items: flex-start;
  min-width: 320px;
  width: 320px;
}

.text-input {
  background-color: #e2e8f0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  overflow: overlay;
}

.text-input:focus {
  outline: 0;
  cursor: initial;
}

.add-button:hover {
  opacity: 0.8;
  cursor: pointer;
}

.active .text-input {
  background-color: #fff;
}
.addable .add-button {
  background-color: #15803d;
  pointer-events: auto;
  cursor: pointer;
}

.add-button:active {
  background-color: #15803d;
}

.list {
  margin: 0 5px auto;
  position: relative;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 290px;
  width: 290px;
  border-radius: 8px;
  padding: 15px;
  color: gray;
  vertical-align: top;
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

.body {
  font-size: 18px;
  width: 100%;
  word-wrap: break-word;
}

.hover\\:cursor-pointer:hover {
  cursor: pointer;
}

.hover\\:bg-green-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
`;const Le=on();sn.add(rn);an.watch();ln(Se).use(ze).use(Le).component("font-awesome-icon",dn).mount("#app");

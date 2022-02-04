import{d as q,r as h,c as f,o as C,a as I,w as b,v as _,b as n,t as x,e as z,f as L,g as S,n as F,u as m,h as N,F as A,i as j,j as v,p as D,k as J,l as E,m as R,q as P,s as B,x as H,_ as G,y as Q,z as W,P as X,A as Y}from"./vendor.8b5ee2e8.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};Z();const O=localStorage.getItem("trello-lists"),U=localStorage.getItem("countID"),$=q("store",{state:()=>({lists:O?JSON.parse(O):[],countID:U?JSON.parse(U):0}),getters:{totalCardCounts(s){let t=0;for(const e of s.lists)t+=e.cards.length;return t}},actions:{addList(s){this.lists.push({title:s,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(s){this.lists.splice(s,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(s,t){this.countID++,this.lists[t].cards.push({id:this.countID,body:s}),localStorage.setItem("countID",JSON.stringify(this.countID)),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(s,t){this.lists[t].cards.splice(s,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(s){this.lists=s,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},editCard(s,t,e,r,o){this.lists[s].cards[t].body=e,this.lists[s].cards[t].contents=r,this.lists[s].cards[t].date=o,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},searchListFromListIndex(s){return this.lists[s]}}}),nn={class:"relative"},tn=n("i",{class:"fas fa-plus"},null,-1),en=N(" Add List "),on=[tn,en],sn={class:"flex flex-col justify-center items-start mx-3"},rn=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"ListTitle")],-1),an={class:"text-red-500"},ln=["onKeydown"],dn={class:"flex my-3 justify-between w-10/12"},cn=["onClick"],un=["onClick"],M={setup(s){const t=h(""),e=h(!1),r=h(!1),o=h(""),i=$(),a=()=>{t.value?(i.addList(t.value),t.value="",r.value=!1):o.value="\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u304C\u7A7A\u3067\u3059"},d=f(()=>{const g=[];return e.value&&g.push("active"),t.value.length&&g.push("addable"),g}),c=()=>{r.value=!1};return(g,l)=>(C(),I("div",nn,[b(n("div",{class:"flex items-center justify-center border border-dashed mt-3",onClick:l[0]||(l[0]=p=>r.value=!r.value)},on,512),[[_,!r.value]]),b(n("form",{class:F([m(d),"flex flex-col items-center absolute -top-32 left-72 ml-4 mt-3 w-72 bg-gray-700 rounded-md border"])},[n("div",sn,[rn,n("p",an,x(o.value),1),b(n("input",{type:"text",for:"title","onUpdate:modelValue":l[1]||(l[1]=p=>t.value=p),class:"text-input mt-1 py-3 px-4 w-full text-black",placeholder:"Add new list",onKeydown:z(a,["enter"]),onFocusin:l[2]||(l[2]=p=>e.value=!0),onFocusout:l[3]||(l[3]=p=>e.value=!1)},null,40,ln),[[L,t.value]])]),n("div",dn,[n("button",{onClick:S(c,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,cn),n("button",{onClick:S(a,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,un)])],2),[[_,r.value]])]))}},pn=n("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),mn=N(" Add item "),gn=[pn,mn],hn={class:"flex flex-col justify-center items-start w-full p-3"},fn=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),bn=["onKeydown"],xn={class:"flex m-3 justify-between w-10/12"},wn=["onClick"],yn=["onClick"],vn={props:{listIndex:{type:Number,required:!0}},setup(s){const t=s,e=h(""),r=h(!1),o=h(!1),i=h(""),a=$(),d=()=>{e.value!==""?(a.addCardToList(e.value,t.listIndex),e.value="",o.value=!1):i.value="\u30BF\u30A4\u30C8\u30EB\u306B\u306F\u5FC5\u305A\u6587\u5B57\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044"},c=()=>{e.value="",i.value=!1,o.value=!1},g=f(()=>{const l=[];return r.value&&l.push("active"),e.value.length&&l.push("addable"),l});return(l,p)=>(C(),I(A,null,[n("div",{class:"relative",onClick:p[0]||(p[0]=y=>o.value=!o.value)},gn),b(n("form",{class:F([m(g),"flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"])},[n("div",hn,[fn,b(n("input",{type:"text","onUpdate:modelValue":p[1]||(p[1]=y=>e.value=y),class:"text-input mt-1 py-3 px-4 text-black w-full",onKeydown:z(d,["enter"]),onFocusin:p[2]||(p[2]=y=>r.value=!0),onFocusout:p[3]||(p[3]=y=>r.value=!1),for:"title"},null,40,bn),[[L,e.value]]),b(n("p",{class:"text-red-500"},x(i.value),513),[[_,i.value]])]),n("div",xn,[n("button",{onClick:S(c,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,wn),n("button",{onClick:S(d,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,yn)])],2),[[_,o.value]])],64))}},_n={class:"flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"},kn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Cn=n("label",{id:"title",class:"mt-10 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),In={class:"text-red-500"},Sn=["onKeydown"],$n={class:"mt-4"},zn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Ln=n("label",{id:"date",class:"mt-1 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"DeadLine")],-1),jn=["onKeydown"],Fn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Nn=n("label",{id:"contents",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"Contents")],-1),An=["onKeydown"],En={class:"flex m-8 justify-between w-10/12"},Rn=["onClick"],On=["onClick"],Un={props:{openEditRef:{type:Boolean},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(s,{emit:t}){const e=s,r=h(""),o=h(""),i=h(""),a=h(""),d=$(),c=f({get:()=>e.openEditRef,set:u=>t("update:openEditRef",u)}),g=f({get:()=>{const u=d.lists[e.listIndex].cards[e.cardIndex].body;return r.value=u,u},set:u=>{r.value=u}}),l=f({get:()=>{const u=d.lists[e.listIndex].cards[e.cardIndex].contents;return o.value=u,u},set:u=>{o.value=u}}),p=f({get:()=>{const u=d.lists[e.listIndex].cards[e.cardIndex].date;return i.value=u,u!==void 0?u:null},set:u=>{i.value=u}}),y=()=>{r.value!==""?(d.editCard(e.listIndex,e.cardIndex,r.value,o.value,i.value),c.value=!1):a.value="CardTitle\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"},T=()=>{c.value=!1},K=f(()=>d.searchListFromListIndex(e.listIndex).title);return(u,w)=>b((C(),I("form",_n,[n("div",kn,[Cn,n("p",In,x(a.value),1),b(n("input",{type:"text","onUpdate:modelValue":w[0]||(w[0]=k=>j(g)?g.value=k:null),class:"text-input mt-2 py-3 px-4 w-full text-black",onKeydown:z(y,["enter"]),onFocusin:w[1]||(w[1]=k=>u.isEditing=!0),onFocusout:w[2]||(w[2]=k=>u.isEditing=!1),for:"title"},null,40,Sn),[[L,m(g)]]),n("div",$n,[n("p",null,"\u30EA\u30B9\u30C8:"+x(m(K)),1)])]),n("div",zn,[Ln,b(n("input",{type:"date",form:"date","onUpdate:modelValue":w[3]||(w[3]=k=>j(p)?p.value=k:null),onKeydown:z(y,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},null,40,jn),[[L,m(p)]])]),n("div",Fn,[Nn,b(n("textarea",{type:"text","onUpdate:modelValue":w[4]||(w[4]=k=>j(l)?l.value=k:null),onKeydown:z(y,["enter"]),class:"text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"},null,40,An),[[L,m(l)]])]),n("div",En,[n("button",{onClick:S(T,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Rn),n("button",{type:"submit",onClick:S(y,["prevent"]),class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Edit ",8,On)])],512)),[[_,m(c)]])}};var V=(s,t)=>{const e=s.__vccOpts||s;for(const[r,o]of t)e[r]=o;return e};const Mn=s=>(D("data-v-5b73e647"),s=s(),J(),s),Vn={class:"bg-gray-800 rounded-md w-64 my-2 py-3 px-3"},Tn={class:"flex justify-between items-center"},Kn={class:"flex gap-1 items-center"},qn={class:"fas fa-clock text-white"},Dn={class:"flex items-center text-white mt-2"},Jn={class:"body"},Pn={class:"text-sm"},Bn=Mn(()=>n("i",{class:"fas fa-trash rounded-full text-red-500"},null,-1)),Hn=[Bn],Gn={props:{id:{type:Number},body:{type:String,required:!0},contents:{type:String},date:{type:String},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(s){const t=s,e=$(),r=f(()=>{const d=10;return t.body.length>d?`${t.body.substring(0,d)}...`:t.body}),o=f(()=>{const d=10;if(t.contents)return t.contents.length>d?`${t.contents.substring(0,d)}...`:t.contents}),i=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&e.removeCardFromList(t.cardIndex,t.listIndex)},a=h(!1);return(d,c)=>(C(),I(A,null,[v(Un,{openEditRef:a.value,"onUpdate:openEditRef":c[0]||(c[0]=g=>a.value=g),listIndex:t.listIndex,cardIndex:t.cardIndex},null,8,["openEditRef","listIndex","cardIndex"]),n("div",Vn,[n("div",Tn,[n("p",null,"#"+x(t.id),1),n("div",Kn,[b(n("i",qn,null,512),[[_,t.date]]),n("p",null,x(t.date),1)])]),n("div",Dn,[n("div",Jn,[n("p",{class:"text-blue-500 hover:cursor-pointer text-2xl",onClick:c[1]||(c[1]=g=>a.value=!0)},x(m(r)),1),n("a",Pn,x(m(o)),1)]),n("div",{onClick:i,class:"shadow rounded-xl w-6 h-6 bg-gray-900 flex items-center justify-center p-4"},Hn)])])],64))}};var Qn=V(Gn,[["__scopeId","data-v-5b73e647"]]);const Wn={class:"list bg-black list-border-width border-white"},Xn={class:"w-72 flex justify-start items-center"},Yn={class:"list-title"},Zn={class:"inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"},nt={class:"text-sm font-medium leading-none text-white"},tt={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(s,{emit:t}){const e=s,r=$(),o=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&r.removeList(e.listIndex)},i=f(()=>e.cards.length),a=f({get:()=>e.cards,set:c=>{t("update:cards",c)}}),d=f(()=>{const c=10;return e.title.length>c?`${e.title.substring(0,c)}...`:e.title});return(c,g)=>(C(),I("div",Wn,[n("div",Xn,[n("p",Yn,x(m(d)),1),n("span",Zn,[n("span",nt,x(m(i)),1)]),n("div",{class:"deletelist",onClick:o},"\u2716\uFE0F")]),v(m(R),{modelValue:m(a),"onUpdate:modelValue":g[0]||(g[0]=l=>j(a)?a.value=l:null),"item-key":"id",group:"cards"},{item:E(({element:l,index:p})=>[n("div",null,[v(Qn,{id:l.id,body:l.body,contents:l.contents,date:l.date,cardIndex:p,listIndex:e.listIndex},null,8,["id","body","contents","date","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),v(vn,{listIndex:e.listIndex},null,8,["listIndex"])]))}};var et=V(tt,[["__scopeId","data-v-5d2ffb49"]]);const ot=n("header",null,"My Trello",-1),st={class:"info-line text-white"},it={setup(s){const t=$(),e=f(()=>t.totalCardCounts);P(t.lists,()=>{t.updateLists(t.lists)});const r=()=>{t.updateLists(t.lists)};return(o,i)=>(C(),I("div",null,[ot,n("main",null,[n("p",st,"All: "+x(m(e))+" tasks",1),n("div",null,[v(m(R),{modelValue:m(t).lists,"onUpdate:modelValue":i[0]||(i[0]=a=>m(t).lists=a),"item-key":"id",class:"list-index",onEnd:r},{item:E(({element:a,index:d})=>[n("div",null,[v(et,{title:a.title,listIndex:d,cards:a.cards,"onUpdate:cards":c=>a.cards=c},null,8,["title","listIndex","cards","onUpdate:cards"]),b(v(M,null,null,512),[[_,d===m(t).lists.length-1]])])]),_:1},8,["modelValue"]),b(v(M,null,null,512),[[_,m(t).lists.length===0]])])])]))}},rt={id:"app"},at={setup(s){return(t,e)=>(C(),I("div",rt,[v(it)]))}};var lt=`/*
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
.-top-32 {
  top: -8rem;
}
.left-72 {
  left: 18rem;
}
.z-50 {
  z-index: 50;
}
.m-3 {
  margin: 0.75rem;
}
.m-8 {
  margin: 2rem;
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
.mt-10 {
  margin-top: 2.5rem;
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
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
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
.p-4 {
  padding: 1rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-2 {
  padding: 0.5rem;
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
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-lg {
  font-size: 1.125rem;
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
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
`;const dt=B();H.add(G);Q.watch();W(at).use(lt).use(dt).use(X).component("font-awesome-icon",Y).mount("#app");

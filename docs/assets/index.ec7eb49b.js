import{d as J,r as b,c as x,o as C,a as I,w as f,v as y,b as n,t as w,e as z,f as L,g as S,n as N,u as p,h as E,F as R,i as F,j as v,p as P,k as B,l as A,m as O,q as H,s as G,x as Q,_ as W,y as X,z as Y,P as Z,A as nn}from"./vendor.8b5ee2e8.js";const tn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};tn();const U=localStorage.getItem("trello-lists"),M=localStorage.getItem("countID"),$=J("store",{state:()=>({lists:U?JSON.parse(U):[],countID:M?JSON.parse(M):0}),getters:{totalCardCounts(s){let t=0;for(const e of s.lists)t+=e.cards.length;return t}},actions:{addList(s){this.lists.push({title:s,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(s){this.lists.splice(s,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(s,t){this.countID++,this.lists[t].cards.push({id:this.countID,body:s}),localStorage.setItem("countID",JSON.stringify(this.countID)),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(s,t){this.lists[t].cards.splice(s,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(s){this.lists=s,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},editCard(s,t,e,r,o){this.lists[s].cards[t].body=e,this.lists[s].cards[t].contents=r,this.lists[s].cards[t].date=o,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},searchListFromListIndex(s){return this.lists[s]}}}),en={class:"relative"},on=n("i",{class:"fas fa-plus"},null,-1),sn=E(" Add List "),rn=[on,sn],an={class:"flex flex-col justify-center items-start mx-3"},ln=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"ListTitle")],-1),dn={class:"text-red-500"},cn=["onKeydown"],un={class:"flex my-3 justify-between w-10/12"},pn=["onClick"],mn=["onClick"],V={setup(s){const t=b(""),e=b(!1),r=b(!1),o=b(""),i=$(),a=()=>{t.value?(i.addList(t.value),t.value="",r.value=!1):o.value="\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u304C\u7A7A\u3067\u3059"},u=x(()=>{const g=[];return e.value&&g.push("active"),t.value.length&&g.push("addable"),g}),c=()=>{r.value=!1};return(g,l)=>(C(),I("div",en,[f(n("div",{class:"flex items-center justify-center border border-dashed mt-3",onClick:l[0]||(l[0]=m=>r.value=!r.value)},rn,512),[[y,!r.value]]),f(n("form",{class:N([p(u),"flex flex-col items-center absolute -top-32 left-72 ml-4 mt-3 w-72 bg-gray-700 rounded-md border"])},[n("div",an,[ln,n("p",dn,w(o.value),1),f(n("input",{type:"text",for:"title","onUpdate:modelValue":l[1]||(l[1]=m=>t.value=m),class:"text-input mt-1 py-3 px-4 w-full text-black",placeholder:"Add new list",onKeydown:z(a,["enter"]),onFocusin:l[2]||(l[2]=m=>e.value=!0),onFocusout:l[3]||(l[3]=m=>e.value=!1)},null,40,cn),[[L,t.value]])]),n("div",un,[n("button",{onClick:S(c,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,pn),n("button",{onClick:S(a,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,mn)])],2),[[y,r.value]])]))}},gn=n("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),hn=E(" Add item "),fn=[gn,hn],bn={class:"flex flex-col justify-center items-start w-full p-3"},xn=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),wn=["onKeydown"],yn={class:"flex m-3 justify-between w-10/12"},vn=["onClick"],_n=["onClick"],kn={props:{listIndex:{type:Number,required:!0}},setup(s){const t=s,e=b(""),r=b(!1),o=b(!1),i=b(""),a=$(),u=()=>{e.value!==""?(a.addCardToList(e.value,t.listIndex),e.value="",o.value=!1):i.value="\u30BF\u30A4\u30C8\u30EB\u306B\u306F\u5FC5\u305A\u6587\u5B57\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044"},c=()=>{e.value="",i.value=!1,o.value=!1},g=x(()=>{const l=[];return r.value&&l.push("active"),e.value.length&&l.push("addable"),l});return(l,m)=>(C(),I(R,null,[n("div",{class:"relative",onClick:m[0]||(m[0]=_=>o.value=!o.value)},fn),f(n("form",{class:N([p(g),"flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"])},[n("div",bn,[xn,f(n("input",{type:"text","onUpdate:modelValue":m[1]||(m[1]=_=>e.value=_),class:"text-input mt-1 py-3 px-4 text-black w-full",onKeydown:z(u,["enter"]),onFocusin:m[2]||(m[2]=_=>r.value=!0),onFocusout:m[3]||(m[3]=_=>r.value=!1),for:"title"},null,40,wn),[[L,e.value]]),f(n("p",{class:"text-red-500"},w(i.value),513),[[y,i.value]])]),n("div",yn,[n("button",{onClick:S(c,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,vn),n("button",{onClick:S(u,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,_n)])],2),[[y,o.value]])],64))}},Cn={class:"flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"},In={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Sn={class:"mt-4"},$n=n("label",{id:"title",class:"mt-3 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),zn={class:"text-red-500"},Ln=["onKeydown"],jn=n("p",{class:"text-xl"},"More Option",-1),Fn={class:"fas fa-chevron-down"},Nn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},En={class:"w-full"},Rn=n("label",{id:"date",class:"mt-1 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"DeadLine")],-1),An=["onKeydown"],On={class:"w-full"},Un=n("label",{id:"contents",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"Contents")],-1),Mn=["onKeydown"],Vn={class:"flex m-4 justify-between w-10/12"},Kn=["onClick"],Tn=["onClick"],qn={props:{openEditRef:{type:Boolean},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(s,{emit:t}){const e=s,r=b(""),o=b(""),i=b(""),a=b(""),u=b(!1),c=$(),g=x({get:()=>e.openEditRef,set:d=>t("update:openEditRef",d)}),l=x({get:()=>{const d=c.lists[e.listIndex].cards[e.cardIndex].body;return r.value=d,d},set:d=>{r.value=d}}),m=x({get:()=>{const d=c.lists[e.listIndex].cards[e.cardIndex].contents;return o.value=d,d},set:d=>{o.value=d}}),_=x({get:()=>{const d=c.lists[e.listIndex].cards[e.cardIndex].date;return i.value=d,d!==void 0?d:null},set:d=>{i.value=d}}),j=()=>{r.value!==""?(c.editCard(e.listIndex,e.cardIndex,r.value,o.value,i.value),g.value=!1):a.value="CardTitle\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"},T=()=>{g.value=!1},q=x(()=>u.value),D=x(()=>{const d=10,h=c.searchListFromListIndex(e.listIndex).title;return h.length>d?`${h.substring(0,d)}...`:h});return(d,h)=>f((C(),I("form",Cn,[n("div",In,[n("div",Sn,[n("p",null,"\u30EA\u30B9\u30C8:"+w(p(D)),1)]),$n,n("p",zn,w(a.value),1),f(n("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=k=>F(l)?l.value=k:null),class:"text-input mt-2 py-3 px-4 w-full text-black",onKeydown:z(j,["enter"]),onFocusin:h[1]||(h[1]=k=>d.isEditing=!0),onFocusout:h[2]||(h[2]=k=>d.isEditing=!1),for:"title"},null,40,Ln),[[L,p(l)]])]),n("div",{class:"text-gray-900 flex items-center gap-2",onClick:h[3]||(h[3]=k=>u.value=!u.value)},[jn,f(n("i",Fn,null,512),[[y,p(q)===!1]])]),f(n("div",Nn,[n("div",En,[Rn,f(n("input",{type:"date",form:"date","onUpdate:modelValue":h[4]||(h[4]=k=>F(_)?_.value=k:null),onKeydown:z(j,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},null,40,An),[[L,p(_)]])]),n("div",On,[Un,f(n("textarea",{type:"text","onUpdate:modelValue":h[5]||(h[5]=k=>F(m)?m.value=k:null),onKeydown:z(j,["enter"]),class:"text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"},null,40,Mn),[[L,p(m)]])])],512),[[y,u.value]]),n("div",Vn,[n("button",{onClick:S(T,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Kn),n("button",{type:"submit",onClick:S(j,["prevent"]),class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Edit ",8,Tn)])],512)),[[y,p(g)]])}};var K=(s,t)=>{const e=s.__vccOpts||s;for(const[r,o]of t)e[r]=o;return e};const Dn=s=>(P("data-v-5b73e647"),s=s(),B(),s),Jn={class:"bg-gray-800 rounded-md w-64 my-2 py-3 px-3"},Pn={class:"flex justify-between items-center"},Bn={class:"flex gap-1 items-center"},Hn={class:"fas fa-clock text-white"},Gn={class:"flex items-center text-white mt-2"},Qn={class:"body"},Wn={class:"text-sm"},Xn=Dn(()=>n("i",{class:"fas fa-trash rounded-full text-red-500"},null,-1)),Yn=[Xn],Zn={props:{id:{type:Number},body:{type:String,required:!0},contents:{type:String},date:{type:String},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(s){const t=s,e=$(),r=x(()=>{const u=10;return t.body.length>u?`${t.body.substring(0,u)}...`:t.body}),o=x(()=>{const u=10;if(t.contents)return t.contents.length>u?`${t.contents.substring(0,u)}...`:t.contents}),i=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&e.removeCardFromList(t.cardIndex,t.listIndex)},a=b(!1);return(u,c)=>(C(),I(R,null,[v(qn,{openEditRef:a.value,"onUpdate:openEditRef":c[0]||(c[0]=g=>a.value=g),listIndex:t.listIndex,cardIndex:t.cardIndex},null,8,["openEditRef","listIndex","cardIndex"]),n("div",Jn,[n("div",Pn,[n("p",null,"#"+w(t.id),1),n("div",Bn,[f(n("i",Hn,null,512),[[y,t.date]]),n("p",null,w(t.date),1)])]),n("div",Gn,[n("div",Qn,[n("p",{class:"text-blue-500 hover:cursor-pointer text-2xl",onClick:c[1]||(c[1]=g=>a.value=!0)},w(p(r)),1),n("a",Wn,w(p(o)),1)]),n("div",{onClick:i,class:"shadow rounded-xl w-6 h-6 bg-gray-900 flex items-center justify-center p-4"},Yn)])])],64))}};var nt=K(Zn,[["__scopeId","data-v-5b73e647"]]);const tt={class:"list bg-black list-border-width border-white"},et={class:"w-72 flex justify-start items-center"},ot={class:"list-title"},st={class:"inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"},it={class:"text-sm font-medium leading-none text-white"},rt={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(s,{emit:t}){const e=s,r=$(),o=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&r.removeList(e.listIndex)},i=x(()=>e.cards.length),a=x({get:()=>e.cards,set:c=>{t("update:cards",c)}}),u=x(()=>{const c=10;return e.title.length>c?`${e.title.substring(0,c)}...`:e.title});return(c,g)=>(C(),I("div",tt,[n("div",et,[n("p",ot,w(p(u)),1),n("span",st,[n("span",it,w(p(i)),1)]),n("div",{class:"deletelist",onClick:o},"\u2716\uFE0F")]),v(p(O),{modelValue:p(a),"onUpdate:modelValue":g[0]||(g[0]=l=>F(a)?a.value=l:null),"item-key":"id",group:"cards"},{item:A(({element:l,index:m})=>[n("div",null,[v(nt,{id:l.id,body:l.body,contents:l.contents,date:l.date,cardIndex:m,listIndex:e.listIndex},null,8,["id","body","contents","date","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),v(kn,{listIndex:e.listIndex},null,8,["listIndex"])]))}};var at=K(rt,[["__scopeId","data-v-01487522"]]);const lt=n("header",null,"KeepMakingEfforts",-1),dt={class:"info-line text-white"},ct={setup(s){const t=$(),e=x(()=>t.totalCardCounts);H(t.lists,()=>{t.updateLists(t.lists)});const r=()=>{t.updateLists(t.lists)};return(o,i)=>(C(),I("div",null,[lt,n("main",null,[n("p",dt,"All: "+w(p(e))+" tasks",1),n("div",null,[v(p(O),{modelValue:p(t).lists,"onUpdate:modelValue":i[0]||(i[0]=a=>p(t).lists=a),"item-key":"id",class:"list-index",onEnd:r},{item:A(({element:a,index:u})=>[n("div",null,[v(at,{title:a.title,listIndex:u,cards:a.cards,"onUpdate:cards":c=>a.cards=c},null,8,["title","listIndex","cards","onUpdate:cards"]),f(v(V,null,null,512),[[y,u===p(t).lists.length-1]])])]),_:1},8,["modelValue"]),f(v(V,null,null,512),[[y,p(t).lists.length===0]])])])]))}},ut={id:"app"},pt={setup(s){return(t,e)=>(C(),I("div",ut,[v(ct)]))}};var mt=`/*
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
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
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
`;const gt=G();Q.add(W);X.watch();Y(pt).use(mt).use(gt).use(Z).component("font-awesome-icon",nn).mount("#app");

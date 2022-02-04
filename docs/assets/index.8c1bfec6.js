import{d as J,r as f,c as b,o as _,a as k,w as h,v as C,b as n,t as w,e as j,f as z,g as S,n as F,u as p,h as N,F as A,i as L,j as y,p as P,k as B,l as E,m as R,q as K,s as H,x as G,_ as Q,y as W,z as X,P as Y,A as Z}from"./vendor.8b5ee2e8.js";const nn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}};nn();const O=localStorage.getItem("trello-lists"),U=localStorage.getItem("countID"),$=J("store",{state:()=>({lists:O?JSON.parse(O):[],countID:U?JSON.parse(U):0}),getters:{totalCardCounts(o){let t=0;for(const e of o.lists)t+=e.cards.length;return t}},actions:{addList(o){this.lists.push({title:o,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(o){this.lists.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(o,t){this.countID++,this.lists[t].cards.push({id:this.countID,body:o}),localStorage.setItem("countID",JSON.stringify(this.countID)),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(o,t){this.lists[t].cards.splice(o,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(o){this.lists=o,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},editCard(o,t,e,r,s){this.lists[o].cards[t].body=e,this.lists[o].cards[t].contents=r,this.lists[o].cards[t].date=s,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},searchListFromListIndex(o){return this.lists[o]}}}),tn={class:"relative"},en=n("i",{class:"fas fa-plus"},null,-1),sn=N(" Add List "),on=[en,sn],rn={class:"flex flex-col justify-center items-start mx-3"},an=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"ListTitle")],-1),ln={class:"text-red-500"},dn=["onKeydown"],cn={class:"flex my-3 justify-between w-10/12"},un=["onClick"],pn=["onClick"],M={setup(o){const t=f(""),e=f(!1),r=f(!1),s=f(""),i=$(),a=()=>{t.value?(i.addList(t.value),t.value="",r.value=!1):s.value="\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u304C\u7A7A\u3067\u3059"},l=b(()=>{const m=[];return e.value&&m.push("active"),t.value.length&&m.push("addable"),m}),g=()=>{r.value=!1};return(m,c)=>(_(),k("div",tn,[h(n("div",{class:"flex items-center justify-center border border-dashed mt-3",onClick:c[0]||(c[0]=u=>r.value=!r.value)},on,512),[[C,!r.value]]),h(n("form",{class:F([p(l),"flex flex-col items-center absolute -top-32 left-72 ml-4 mt-3 w-72 bg-gray-700 rounded-md border"])},[n("div",rn,[an,n("p",ln,w(s.value),1),h(n("input",{type:"text",for:"title","onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u),class:"text-input mt-1 py-3 px-4 w-full text-black",placeholder:"Add new list",onKeydown:j(a,["enter"]),onFocusin:c[2]||(c[2]=u=>e.value=!0),onFocusout:c[3]||(c[3]=u=>e.value=!1)},null,40,dn),[[z,t.value]])]),n("div",cn,[n("button",{onClick:S(g,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,un),n("button",{onClick:S(a,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,pn)])],2),[[C,r.value]])]))}},mn=n("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),gn=N(" Add item "),fn=[mn,gn],hn={class:"flex flex-col justify-center items-start w-full p-3"},bn=n("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),xn=["onKeydown"],wn={class:"flex m-3 justify-between w-10/12"},yn=["onClick"],vn=["onClick"],_n={props:{listIndex:{type:Number,required:!0}},setup(o){const t=o,e=f(""),r=f(!1),s=f(!1),i=f(""),a=$(),l=()=>{e.value!==""?(a.addCardToList(e.value,t.listIndex),e.value="",s.value=!1):i.value="\u30BF\u30A4\u30C8\u30EB\u306B\u306F\u5FC5\u305A\u6587\u5B57\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044"},g=()=>{e.value="",i.value=!1,s.value=!1},m=b(()=>{const c=[];return r.value&&c.push("active"),e.value.length&&c.push("addable"),c});return(c,u)=>(_(),k(A,null,[n("div",{class:"relative",onClick:u[0]||(u[0]=I=>s.value=!s.value)},fn),h(n("form",{class:F([p(m),"flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"])},[n("div",hn,[bn,h(n("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=I=>e.value=I),class:"text-input mt-1 py-3 px-4 text-black w-full",onKeydown:j(l,["enter"]),onFocusin:u[2]||(u[2]=I=>r.value=!0),onFocusout:u[3]||(u[3]=I=>r.value=!1),for:"title"},null,40,xn),[[z,e.value]]),h(n("p",{class:"text-red-500"},w(i.value),513),[[C,i.value]])]),n("div",wn,[n("button",{onClick:S(g,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,yn),n("button",{onClick:S(l,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,vn)])],2),[[C,s.value]])],64))}},kn={class:"flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"},Cn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},In=n("label",{id:"title",class:"mt-10 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-signature"}),n("p",null,"CardTitle")],-1),Sn={class:"text-red-500"},$n={class:"mt-4"},zn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Ln=n("label",{id:"date",class:"mt-1 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"DeadLine")],-1),jn={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},Fn=n("label",{id:"contents",class:"mt-2 text-white text-lg flex gap-2 items-center"},[n("i",{class:"fas fa-align-right"}),n("p",null,"Contents")],-1),Nn={class:"flex m-8 justify-between w-10/12"},An=["onClick"],En=["onClick"],Rn={props:{openEditRef:{type:Boolean},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(o,{emit:t}){const e=o,r=f(""),s=f(""),i=f(""),a=f(""),l=$(),g=b({get:()=>e.openEditRef,set:d=>t("update:openEditRef",d)}),m=b({get:()=>{const d=l.lists[e.listIndex].cards[e.cardIndex].body;return r.value=d,d},set:d=>{r.value=d}}),c=b({get:()=>{const d=l.lists[e.listIndex].cards[e.cardIndex].contents;return s.value=d,d},set:d=>{s.value=d}}),u=b({get:()=>{const d=l.lists[e.listIndex].cards[e.cardIndex].date;return i.value=d,d!==void 0?d:null},set:d=>{i.value=d}}),I=()=>{r.value!==""?(l.editCard(e.listIndex,e.cardIndex,r.value,s.value,i.value),g.value=!1):a.value="CardTitle\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"},T=()=>{g.value=!1},q=b(()=>l.searchListFromListIndex(e.listIndex).title);return(d,x)=>h((_(),k("form",kn,[n("div",Cn,[In,n("p",Sn,w(a.value),1),h(n("input",{type:"text","onUpdate:modelValue":x[0]||(x[0]=v=>L(m)?m.value=v:null),class:"text-input mt-2 py-3 px-4 w-full text-black",onFocusin:x[1]||(x[1]=v=>d.isEditing=!0),onFocusout:x[2]||(x[2]=v=>d.isEditing=!1),for:"title"},null,544),[[z,p(m)]]),n("div",$n,[n("p",null,"\u30EA\u30B9\u30C8:"+w(p(q)),1)])]),n("div",zn,[Ln,h(n("input",{type:"date",form:"date","onUpdate:modelValue":x[3]||(x[3]=v=>L(u)?u.value=v:null),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},null,512),[[z,p(u)]])]),n("div",jn,[Fn,h(n("textarea",{type:"text","onUpdate:modelValue":x[4]||(x[4]=v=>L(c)?c.value=v:null),class:"text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"},null,512),[[z,p(c)]])]),n("div",Nn,[n("button",{onClick:S(T,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,An),n("button",{type:"submit",onClick:S(I,["prevent"]),class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Edit ",8,En)])],512)),[[C,p(g)]])}};var V=(o,t)=>{const e=o.__vccOpts||o;for(const[r,s]of t)e[r]=s;return e};const D=o=>(P("data-v-c67f20a6"),o=o(),B(),o),On={class:"bg-gray-800 rounded-md w-64 my-2 py-6 px-3"},Un={class:"flex items-center text-white"},Mn={class:"body"},Vn={class:"text-sm"},Dn=D(()=>n("i",{class:"fas fa-trash bg-black text-red-500 w-1"},null,-1)),Tn=D(()=>n("p",{class:"text-sm"},"Delete",-1)),qn=[Dn,Tn],Jn={props:{id:{type:Number},body:{type:String,required:!0},contents:{type:String},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(o){const t=o,e=$(),r=b(()=>{const a=10;if(t.contents)return t.contents.length>a?`${t.contents.substring(0,a)}...`:t.contents}),s=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&e.removeCardFromList(t.cardIndex,t.listIndex)},i=f(!1);return(a,l)=>(_(),k(A,null,[y(Rn,{openEditRef:i.value,"onUpdate:openEditRef":l[0]||(l[0]=g=>i.value=g),listIndex:t.listIndex,cardIndex:t.cardIndex},null,8,["openEditRef","listIndex","cardIndex"]),n("div",On,[n("p",null,"#"+w(t.id),1),n("div",Un,[n("div",Mn,[n("p",{class:"text-blue-500 hover:cursor-pointer",onClick:l[1]||(l[1]=g=>i.value=!i.value)},w(t.body),1),n("a",Vn,w(p(r)),1)]),n("div",{onClick:s,class:"bg-gray-800 shadow sm:rounded-lg flex justify-between items-center p-2 w-32"},qn)])])],64))}};var Pn=V(Jn,[["__scopeId","data-v-c67f20a6"]]);const Bn={class:"list bg-black list-border-width border-white"},Kn={class:"w-72 flex justify-start items-center"},Hn={class:"list-title"},Gn={class:"inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500"},Qn={class:"text-sm font-medium leading-none text-white"},Wn={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(o,{emit:t}){const e=o,r=$(),s=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&r.removeList(e.listIndex)},i=b(()=>e.cards.length),a=b({get:()=>e.cards,set:l=>{t("update:cards",l)}});return(l,g)=>(_(),k("div",Bn,[n("div",Kn,[n("p",Hn,w(e.title),1),n("span",Gn,[n("span",Qn,w(p(i)),1)]),n("div",{class:"deletelist",onClick:s},"\u2716\uFE0F")]),y(p(R),{modelValue:p(a),"onUpdate:modelValue":g[0]||(g[0]=m=>L(a)?a.value=m:null),"item-key":"id",group:"cards"},{item:E(({element:m,index:c})=>[n("div",null,[y(Pn,{id:m.id,body:m.body,contents:m.contents,cardIndex:c,listIndex:e.listIndex},null,8,["id","body","contents","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),y(_n,{listIndex:e.listIndex},null,8,["listIndex"])]))}};var Xn=V(Wn,[["__scopeId","data-v-11eee838"]]);const Yn=n("header",null,"My Trello",-1),Zn={class:"info-line text-white"},nt={setup(o){const t=$(),e=b(()=>t.totalCardCounts);K(t.lists,()=>{t.updateLists(t.lists)});const r=()=>{t.updateLists(t.lists)};return(s,i)=>(_(),k("div",null,[Yn,n("main",null,[n("p",Zn,"All: "+w(p(e))+" tasks",1),n("div",null,[y(p(R),{modelValue:p(t).lists,"onUpdate:modelValue":i[0]||(i[0]=a=>p(t).lists=a),"item-key":"id",class:"list-index",onEnd:r},{item:E(({element:a,index:l})=>[n("div",null,[y(Xn,{title:a.title,listIndex:l,cards:a.cards,"onUpdate:cards":g=>a.cards=g},null,8,["title","listIndex","cards","onUpdate:cards"]),h(y(M,null,null,512),[[C,l===p(t).lists.length-1]])])]),_:1},8,["modelValue"]),h(y(M,null,null,512),[[C,p(t).lists.length===0]])])])]))}},tt={id:"app"},et={setup(o){return(t,e)=>(_(),k("div",tt,[y(nt)]))}};var st=`/*
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
.h-96 {
  height: 24rem;
}
.h-8 {
  height: 2rem;
}
.w-64 {
  width: 16rem;
}
.w-32 {
  width: 8rem;
}
.w-1 {
  width: 0.25rem;
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
.w-8 {
  width: 2rem;
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
.gap-2 {
  gap: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
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
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
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

@media (min-width: 640px) {

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }
}
`;const ot=H();G.add(Q);W.watch();X(et).use(st).use(ot).use(Y).component("font-awesome-icon",Z).mount("#app");

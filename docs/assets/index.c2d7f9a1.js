import{d as j,r as b,c as w,o as p,a as m,w as g,v as y,b as i,e as k,n as _,u,f as S,g as C,h as z,F as O,t as x,p as R,i as U,j as h,k as I,l as E,m as L,q as M,s as V,x as q,_ as T,y as J,z as P,A as B}from"./vendor.41e4e855.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}};D();const $=localStorage.getItem("trello-lists"),v=j("store",{state:()=>({lists:$?JSON.parse($):[]}),getters:{totalCardCounts(t){let n=0;for(const e of t.lists)n+=e.cards.length;return n}},actions:{addList(t){this.lists.push({title:t,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(t){this.lists.splice(t,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(t,n){this.lists[n].cards.push({body:t}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(t,n){this.lists[n].cards.splice(t,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(t){this.lists=t,localStorage.setItem("trello-lists",JSON.stringify(this.lists))}}}),H=i("i",{class:"fas fa-plus"},null,-1),K=z(" Add List "),G=[H,K],Q=["onSubmit"],A={setup(t){const n=b(""),e=b(!1),s=b(!1),o=v(),r=()=>{o.addList(n.value),n.value="",s.value=!1},a=w(()=>{const c=[];return e.value&&c.push("active"),n.value.length&&c.push("addable"),c});return(c,l)=>(p(),m("div",null,[g(i("div",{class:"flex items-center justify-center border border-dashed mt-3",onClick:l[0]||(l[0]=d=>s.value=!s.value)},G,512),[[y,!s.value]]),g(i("form",{class:_([u(a),"addlist flex m-5 mx-auto align-middle"]),onSubmit:C(r,["prevent"])},[g(i("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=d=>n.value=d),class:"text-input",placeholder:"Add new list",onFocusin:l[2]||(l[2]=d=>e.value=!0),onFocusout:l[3]||(l[3]=d=>e.value=!1)},null,544),[[k,n.value]]),e.value||n.value.length?(p(),m("button",{key:0,type:"submit",class:_([u(a),"add-button p-3 ml-2 rounded-md bg-gray-400"])}," Add ",2)):S("",!0)],42,Q),[[y,s.value]])]))}},W=i("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),X=z(" Add item "),Y=[W,X],Z=["onSubmit"],nn={key:0,type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white"},en={props:{listIndex:{type:Number,required:!0}},setup(t){const n=t,e=b(""),s=b(!1),o=b(!1),r=v(),a=()=>{r.addCardToList(e.value,n.listIndex),e.value="",o.value=!1},c=w(()=>{const l=[];return s.value&&l.push("active"),e.value.length&&l.push("addable"),l});return(l,d)=>(p(),m(O,null,[i("div",{onClick:d[0]||(d[0]=f=>o.value=!0)},Y),g(i("form",{class:_([u(c),"flex items-center"]),onSubmit:C(a,["prevent"])},[g(i("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=f=>e.value=f),class:"text-input",placeholder:"Add new card",onFocusin:d[2]||(d[2]=f=>s.value=!0),onFocusout:d[3]||(d[3]=f=>s.value=!1)},null,544),[[k,e.value]]),s.value||e.value.length>0?(p(),m("button",nn," Add ")):S("",!0)],42,Z),[[y,o.value]])],64))}};var F=(t,n)=>{const e=t.__vccOpts||t;for(const[s,o]of n)e[s]=o;return e};const N=t=>(R("data-v-57c51e23"),t=t(),U(),t),tn={class:"bg-gray-800 rounded-md w-64 my-2 py-6 px-3"},on={class:"flex items-center text-white"},sn={class:"body"},rn=N(()=>i("i",{class:"fas fa-trash bg-black text-red-500 w-1"},null,-1)),an=N(()=>i("p",{class:"text-sm"},"Delete",-1)),ln=[rn,an],dn={props:{body:{type:String,required:!0},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(t){const n=t,e=v(),s=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&e.removeCardFromList(n.cardIndex,n.listIndex)};return(o,r)=>(p(),m("div",tn,[i("p",null,"#"+x(t.cardIndex),1),i("div",on,[i("div",sn,x(n.body),1),i("div",{onClick:s,class:"bg-gray-800 shadow sm:rounded-lg flex justify-between items-center p-2 w-40 border-width"},ln)])]))}};var cn=F(dn,[["__scopeId","data-v-57c51e23"]]);const un={class:"list bg-black list-border-width border-white"},pn={class:"w-72 flex justify-start items-center"},mn={class:"list-title"},hn={class:"inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500"},gn={class:"text-sm font-medium leading-none text-white"},fn={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(t,{emit:n}){const e=t,s=v(),o=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&s.removeList(e.listIndex)},r=w(()=>e.cards.length),a=w({get:()=>e.cards,set:c=>{n("update:cards",c)}});return(c,l)=>(p(),m("div",un,[i("div",pn,[i("p",mn,x(e.title),1),i("span",hn,[i("span",gn,x(u(r)),1)]),i("div",{class:"deletelist",onClick:o},"\u2716\uFE0F")]),h(u(L),{modelValue:u(a),"onUpdate:modelValue":l[0]||(l[0]=d=>E(a)?a.value=d:null),"item-key":"id",group:"cards"},{item:I(({element:d,index:f})=>[i("div",null,[h(cn,{body:d.body,cardIndex:f,listIndex:e.listIndex},null,8,["body","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),h(en,{listIndex:e.listIndex},null,8,["listIndex"])]))}};var bn=F(fn,[["__scopeId","data-v-14660572"]]);const wn=i("header",null,"My Trello",-1),yn={class:"info-line text-white"},xn={setup(t){const n=v(),e=w(()=>n.totalCardCounts);M(n.lists,()=>{n.updateLists(n.lists)});const s=()=>{n.updateLists(n.lists)};return(o,r)=>(p(),m("div",null,[wn,i("main",null,[i("p",yn,"All: "+x(u(e))+" tasks",1),i("div",null,[h(u(L),{modelValue:u(n).lists,"onUpdate:modelValue":r[0]||(r[0]=a=>u(n).lists=a),"item-key":"id",class:"list-index",onEnd:s},{item:I(({element:a,index:c})=>[i("div",null,[h(bn,{title:a.title,listIndex:c,cards:a.cards,"onUpdate:cards":l=>a.cards=l},null,8,["title","listIndex","cards","onUpdate:cards"]),g(h(A,null,null,512),[[y,c===u(n).lists.length-1]])])]),_:1},8,["modelValue"]),g(h(A,null,null,512),[[y,u(n).lists.length===0]])])])]))}},vn={id:"app"},_n={setup(t){return(n,e)=>(p(),m("div",vn,[h(xn)]))}};var kn=`/*
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
.m-5 {
  margin: 1.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.ml-2 {
  margin-left: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.h-8 {
  height: 2rem;
}
.w-64 {
  width: 16rem;
}
.w-40 {
  width: 10rem;
}
.w-1 {
  width: 0.25rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
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
.align-middle {
  vertical-align: middle;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-medium {
  font-weight: 500;
}
.leading-none {
  line-height: 1;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
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
  padding: 10px 15px;
  width: calc(100% - 30px);
  background-color: #ccc;
  border-radius: 8px;
  border: none;
  font-family: "Noto Sans Japanese", "Noto Sans", "system-ui", sans-serif;
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


@media (min-width: 640px) {

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }
}
`;const Sn=V();q.add(T);J.watch();P(_n).use(kn).use(Sn).component("font-awesome-icon",B).mount("#app");

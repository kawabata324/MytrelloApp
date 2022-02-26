import{c as I,a as y,r as M,o as $,d as se,b as f,e as b,f as O,w as x,v as k,g as e,t as C,h as U,i as T,j as N,n as D,u as p,k as P,F as J,l as z,m as ie,p as H,q as re,s as ae,x as le,y as K,z as Y,A as de,B as F,C as ce,D as ue,E as G,G as E,H as pe,I as ge,J as me,K as fe,_ as he,L as be,M as we,N as xe,O as ve}from"./vendor.25a376ec.js";const ye=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};ye();var V=(i,n)=>{const t=i.__vccOpts||i;for(const[s,o]of n)t[s]=o;return t};const _e={},ke={id:"app"};function Ce(i,n){const t=M("router-view"),s=M("notifications");return $(),I("div",ke,[y(t),y(s,{position:"bottom right"})])}var Ie=V(_e,[["render",Ce]]),$e=`/*
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
.static {
  position: static;
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
.mx-auto {
  margin-left: auto;
  margin-right: auto;
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
.mt-20 {
  margin-top: 5rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-8 {
  margin-top: 2rem;
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
.w-96 {
  width: 24rem;
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
.gap-3 {
  gap: 0.75rem;
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
.rounded-lg {
  border-radius: 0.5rem;
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
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
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
.bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
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
.p-10 {
  padding: 2.5rem;
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
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pt-8 {
  padding-top: 2rem;
}
.text-center {
  text-align: center;
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
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.font-medium {
  font-weight: 500;
}
.font-light {
  font-weight: 300;
}
.font-bold {
  font-weight: 700;
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
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-90 {
  opacity: 0.9;
}
.opacity-70 {
  opacity: 0.7;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
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
`;const W=localStorage.getItem("trello-lists"),Q=localStorage.getItem("countID"),R=se("store",{state:()=>({lists:W?JSON.parse(W):[],countID:Q?JSON.parse(Q):0}),getters:{totalCardCounts(i){let n=0;for(const t of i.lists)n+=t.cards.filter(o=>o.done!==!0).length;return n}},actions:{addList(i){this.lists.push({title:i,cards:[]}),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeList(i){this.lists.splice(i,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},addCardToList(i,n){this.countID++,this.lists[n].cards.push({id:this.countID,body:i}),localStorage.setItem("countID",JSON.stringify(this.countID)),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},removeCardFromList(i,n){this.lists[n].cards.splice(i,1),localStorage.setItem("trello-lists",JSON.stringify(this.lists))},updateLists(i){this.lists=i,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},editCard(i,n,t,s,o,r){this.lists[i].cards[n].body=t,this.lists[i].cards[n].contents=s,this.lists[i].cards[n].date=o,this.lists[i].cards[n].done=r,localStorage.setItem("trello-lists",JSON.stringify(this.lists))},searchListFromListIndex(i){return this.lists[i]}}}),Se={class:"relative w-64"},Le=e("i",{class:"fas fa-plus"},null,-1),ze=P(" Add List "),Ne=[Le,ze],Ue={class:"flex flex-col justify-center items-start mx-3"},Te=e("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-signature"}),e("p",null,"ListTitle")],-1),Re={class:"text-red-500"},Ee=["onKeydown"],je={class:"flex my-3 justify-between w-10/12"},Ae=["onClick"],Fe=["onClick"],X={setup(i){const n=f(""),t=f(!1),s=f(!1),o=f(""),r=f(null),a=R(),u=()=>{s.value=!s.value},l=m=>{m.keyCode&&m.keyCode!==13||(n.value?(a.addList(n.value),n.value="",s.value=!1):o.value="\u30EA\u30B9\u30C8\u30BF\u30A4\u30C8\u30EB\u304C\u7A7A\u3067\u3059")},h=b(()=>{const m=[];return t.value&&m.push("active"),n.value.length&&m.push("addable"),m}),g=()=>{s.value=!1};return O(()=>{r.value.focus()}),(m,d)=>($(),I("div",Se,[x(e("div",{class:"flex items-center justify-center border border-dashed bg-gray-600 gap-2 opacity-50",onClick:u},Ne,512),[[k,!s.value]]),x(e("form",{class:D([p(h),"flex flex-col items-center ml-4 w-72 bg-gray-700 rounded-md border"])},[e("div",Ue,[Te,e("p",Re,C(o.value),1),x(e("input",{type:"text",for:"title",ref_key:"titleInput",ref:r,"onUpdate:modelValue":d[0]||(d[0]=w=>n.value=w),class:"text-input mt-1 py-3 px-4 w-full text-black",placeholder:"Add new list",onKeydown:U(l,["enter"]),onFocusin:d[1]||(d[1]=w=>t.value=!0),onFocusout:d[2]||(d[2]=w=>t.value=!1)},null,40,Ee),[[T,n.value]])]),e("div",je,[e("button",{onClick:N(g,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Ae),e("button",{onClick:N(l,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,Fe)])],2),[[k,s.value]])]))}},Me=e("span",{class:"text-sm font-medium leading-none text-white"},"+",-1),Oe=P(" Add Card "),De=[Me,Oe],Pe={class:"flex flex-col justify-center items-start w-full p-3"},Ke=e("label",{id:"title",class:"mt-2 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-signature"}),e("p",null,"CardTitle")],-1),Ve=["onKeydown"],qe={class:"flex m-3 justify-between w-10/12"},Be=["onClick"],Je=["onClick"],He={props:{listIndex:{type:Number,required:!0}},setup(i){const n=i,t=f(""),s=f(!1),o=f(!1),r=f(""),a=f(null),u=R(),l=m=>{m.keyCode&&m.keyCode!==13||(t.value!==""?(u.addCardToList(t.value,n.listIndex),t.value="",r.value="",o.value=!1):r.value="\u30BF\u30A4\u30C8\u30EB\u306B\u306F\u5FC5\u305A\u6587\u5B57\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044")},h=()=>{t.value="",r.value=!1,o.value=!1},g=b(()=>{const m=[];return s.value&&m.push("active"),t.value.length&&m.push("addable"),m});return O(()=>{a.value.focus()}),(m,d)=>($(),I(J,null,[e("div",{class:"relative",onClick:d[0]||(d[0]=w=>o.value=!o.value)},De),x(e("form",{class:D([p(g),"flex flex-col items-center absolute right-0.5 -bottom-48 w-72 z-50 bg-gray-700 rounded-md border"])},[e("div",Pe,[Ke,x(e("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=w=>t.value=w),ref_key:"cardTitleInput",ref:a,class:"text-input mt-1 py-3 px-4 text-black w-full",onKeydown:U(l,["enter"]),onFocusin:d[2]||(d[2]=w=>s.value=!0),onFocusout:d[3]||(d[3]=w=>s.value=!1),for:"title"},null,40,Ve),[[T,t.value]]),x(e("p",{class:"text-red-500"},C(r.value),513),[[k,r.value]])]),e("div",qe,[e("button",{onClick:N(h,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,Be),e("button",{onClick:N(l,["prevent"]),type:"submit",class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Add ",8,Je)])],2),[[k,o.value]])],64))}},Ye={class:"flex flex-col items-center fixed top-0 right-0 w-72 z-50 bg-gray-700 rounded-md border"},Ge={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},We={class:"mt-4"},Qe=e("label",{id:"title",class:"mt-3 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-signature"}),e("p",null,"CardTitle")],-1),Xe={class:"text-red-500"},Ze=["onKeydown"],et=e("p",{class:"text-xl"},"More Option",-1),tt={class:"fas fa-chevron-down"},nt={class:"flex flex-col justify-center items-start mx-3 w-full p-3"},ot={class:"w-full"},st=e("label",{id:"date",class:"mt-1 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-clock"}),e("p",null,"DeadLine")],-1),it=["onKeydown"],rt={class:"w-full"},at=e("label",{id:"contents",class:"mt-2 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-align-right"}),e("p",null,"Contents")],-1),lt={class:"w-full"},dt=e("label",{id:"done",class:"mt-1 text-white text-lg flex gap-2 items-center"},[e("i",{class:"fas fa-check-circle"}),e("p",null,"Done")],-1),ct=["onKeydown"],ut=e("option",{value:!1},"In progress",-1),pt=e("option",{value:!0},"Done",-1),gt=[ut,pt],mt={class:"flex m-4 justify-between w-10/12"},ft=["onClick"],ht=["onClick"],bt={props:{openEditRef:{type:Boolean},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(i,{emit:n}){const t=i,s=f(""),o=f(""),r=f(""),a=f(!1),u=f(""),l=f(!1),h=f(null),g=R(),m=b({get:()=>t.openEditRef,set:c=>n("update:openEditRef",c)}),d=b({get:()=>{const c=g.lists[t.listIndex].cards[t.cardIndex].body;return s.value=c,c},set:c=>{s.value=c}}),w=b({get:()=>{const c=g.lists[t.listIndex].cards[t.cardIndex].contents;return o.value=c,c},set:c=>{o.value=c}}),_=b({get:()=>{const c=g.lists[t.listIndex].cards[t.cardIndex].date;return r.value=c,c!==void 0?c:null},set:c=>{r.value=c}}),S=b({get:()=>{const c=g.lists[t.listIndex].cards[t.cardIndex].done;return a.value=c,c!==void 0?c:!1},set:c=>{a.value=c}}),A=c=>{c.keyCode&&c.keyCode!==13||(s.value!==""?(g.editCard(t.listIndex,t.cardIndex,s.value,o.value,r.value,a.value),m.value=!1):u.value="CardTitle\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093")},te=()=>{m.value=!1},ne=b(()=>l.value),oe=b(()=>{const c=10,v=g.searchListFromListIndex(t.listIndex).title;return v.length>c?`${v.substring(0,c)}...`:v});return O(()=>{h.value.focus()}),(c,v)=>x(($(),I("form",Ye,[e("div",Ge,[e("div",We,[e("p",null,"\u30EA\u30B9\u30C8:"+C(p(oe)),1)]),Qe,e("p",Xe,C(u.value),1),x(e("input",{type:"text",ref_key:"titleInput",ref:h,"onUpdate:modelValue":v[0]||(v[0]=L=>z(d)?d.value=L:null),class:"text-input mt-2 py-3 px-4 w-full text-black",onKeydown:U(A,["enter"]),onFocusin:v[1]||(v[1]=L=>c.isEditing=!0),onFocusout:v[2]||(v[2]=L=>c.isEditing=!1),for:"title"},null,40,Ze),[[T,p(d)]])]),e("div",{class:"text-gray-900 flex items-center gap-2",onClick:v[3]||(v[3]=L=>l.value=!l.value)},[et,x(e("i",tt,null,512),[[k,p(ne)===!1]])]),x(e("div",nt,[e("div",ot,[st,x(e("input",{type:"date",for:"date","onUpdate:modelValue":v[4]||(v[4]=L=>z(_)?_.value=L:null),onKeydown:U(A,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},null,40,it),[[T,p(_)]])]),e("div",rt,[at,x(e("textarea",{type:"text","onUpdate:modelValue":v[5]||(v[5]=L=>z(w)?w.value=L:null),class:"text-input w-full mt-1 h-96 font-light text-black leading-relaxed tracking-wider px-2"},null,512),[[T,p(w)]])]),e("div",lt,[dt,x(e("select",{for:"done","onUpdate:modelValue":v[6]||(v[6]=L=>z(S)?S.value=L:null),onKeydown:U(A,["enter"]),class:"text-input w-full mt-2 font-light text-black leading-relaxed tracking-wider px-2"},gt,40,ct),[[ie,p(S)]])])],512),[[k,l.value]]),e("div",mt,[e("button",{onClick:N(te,["prevent"]),class:"p-2 rounded-md bg-gray-400 text-white"}," Cancel ",8,ft),e("button",{type:"submit",onClick:N(A,["prevent"]),class:"add-button p-2 ml-2 rounded-md bg-gray-400 text-white hover:bg-green-500"}," Edit ",8,ht)])],512)),[[k,p(m)]])}},wt={class:"p-1 absolute mt-1 bg-gray-600 opacity-70 text-xs rounded-md tracking-wider"},xt={class:"horizon"},Z={props:{showTooltip:{type:Boolean},tooltipText:{type:String}},setup(i){const n=i;return(t,s)=>x(($(),I("div",wt,[e("p",xt,C(n.tooltipText),1)],512)),[[k,n.showTooltip]])}};const ee=i=>(ae("data-v-68db8c28"),i=i(),le(),i),vt={class:"flex justify-between items-center"},yt={class:"flex gap-1 items-center"},_t={class:"fas fa-clock text-white"},kt={class:"flex items-center text-white mt-2"},Ct={class:"body"},It={class:"text-xs"},$t={class:"flex gap-2"},St=ee(()=>e("i",{class:"fas fa-check-circle bg-green-500 rounded-md"},null,-1)),Lt=ee(()=>e("i",{class:"fas fa-trash rounded-full text-red-500"},null,-1)),zt={props:{id:{type:Number},body:{type:String,required:!0},contents:{type:String},date:{type:String},done:{type:Boolean,default:!1},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},setup(i){const n=i,t=R(),s=b(()=>{const w=20;return n.body.length>w?`${n.body.substring(0,w)}...`:n.body}),o=b(()=>{const w=15;if(n.contents)return n.contents.length>w?`${n.contents.substring(0,w)}...`:n.contents}),r=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30AB\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&t.removeCardFromList(n.cardIndex,n.listIndex)},a=f(!1),u=f(!1),l=f(!1),h=f(!1),g=f(""),m=()=>{h.value=!h.value,h.value?g.value="bg-green-800":h.value||(g.value="bg-gray-800"),t.editCard(n.listIndex,n.cardIndex,n.body,n.contents,n.date,h.value)};H(()=>{h.value=n.done,h.value?g.value="bg-green-800":h.value||(g.value="bg-gray-800")}),re(()=>{h.value=n.done,h.value?g.value="bg-green-800":h.value||(g.value="bg-gray-800")});const d=b({get:()=>t.lists[n.listIndex].cards[n.cardIndex].date!==void 0,set:()=>{}});return(w,_)=>($(),I(J,null,[y(bt,{openEditRef:a.value,"onUpdate:openEditRef":_[0]||(_[0]=S=>a.value=S),listIndex:n.listIndex,cardIndex:n.cardIndex},null,8,["openEditRef","listIndex","cardIndex"]),e("div",{class:D(["rounded-md w-64 my-2 py-3 px-3",g.value])},[e("div",vt,[e("p",null,"#"+C(n.id),1),e("div",yt,[x(e("i",_t,null,512),[[k,p(d)]]),e("p",null,C(n.date),1)])]),e("div",kt,[e("div",Ct,[e("p",{class:"text-blue-600 hover:cursor-pointer text-lg",onClick:_[1]||(_[1]=S=>a.value=!0)},C(p(s)),1),e("a",It,C(p(o)),1)]),e("div",$t,[e("div",{onClick:m,class:"shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"},[e("div",{class:"relative",onMouseenter:_[2]||(_[2]=S=>l.value=!0),onMouseleave:_[3]||(_[3]=S=>l.value=!1)},[St,y(Z,{showTooltip:l.value,tooltipText:"Done"},null,8,["showTooltip"])],32)]),e("div",{onClick:r,class:"shadow rounded-xl w-6 h-6 bg-gray-900 opacity-75 flex items-center justify-center p-4"},[e("div",{class:"relative",onMouseenter:_[4]||(_[4]=S=>u.value=!0),onMouseleave:_[5]||(_[5]=S=>u.value=!1)},[Lt,y(Z,{showTooltip:u.value,tooltipText:"Delete"},null,8,["showTooltip"])],32)])])])],2)],64))}};var Nt=V(zt,[["__scopeId","data-v-68db8c28"]]);const Ut={class:"list bg-black list-border-width border-white"},Tt={class:"w-72 flex justify-start gap-2 items-center"},Rt=["onKeydown"],Et={class:"inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"},jt={class:"text-sm font-medium leading-none text-white"},At={props:{title:{type:String,required:!0},listIndex:{type:Number,required:!0},cards:{type:Array}},setup(i,{emit:n}){const t=i,s=R(),o=()=>{confirm("\u672C\u5F53\u306B\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F")&&s.removeList(t.listIndex)},r=b(()=>t.cards.length),a=b({get:()=>t.cards,set:g=>{n("update:cards",g)}}),u=f(!1),l=b({get:()=>{const g=10;return t.title.length>g?`${t.title.substring(0,g)}...`:t.title},set:g=>{s.lists[t.listIndex].title=g}}),h=g=>{g.keyCode===13&&(u.value=!1)};return(g,m)=>($(),I("div",Ut,[e("div",Tt,[x(e("p",{class:"text-lg font-bold p-15",onClick:m[0]||(m[0]=d=>u.value=!u.value)},C(p(l)),513),[[k,!u.value]]),x(e("input",{"onUpdate:modelValue":m[1]||(m[1]=d=>z(l)?l.value=d:null),class:"font-sm bg-black border-blue-500",onKeydown:U(h,["enter"])},null,40,Rt),[[k,u.value],[T,p(l)]]),e("span",Et,[e("span",jt,C(p(r)),1)]),e("div",{class:"deletelist",onClick:o},"\u2716\uFE0F")]),y(p(Y),{modelValue:p(a),"onUpdate:modelValue":m[2]||(m[2]=d=>z(a)?a.value=d:null),"item-key":"id",group:"cards"},{item:K(({element:d,index:w})=>[e("div",null,[y(Nt,{id:d.id,body:d.body,contents:d.contents,date:d.date,done:d.done,cardIndex:w,listIndex:t.listIndex},null,8,["id","body","contents","date","done","cardIndex","listIndex"])])]),_:1},8,["modelValue"]),y(He,{listIndex:t.listIndex},null,8,["listIndex"])]))}};var Ft=V(At,[["__scopeId","data-v-c1baba1a"]]),q=de.create({baseURL:"https://obscure-peak-03119.herokuapp.com"});F();class B{static async registerUser(n){await q.post("/v1/auth",{email:n.email,password:n.password,name:n.name}).then(t=>{localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers.client),localStorage.setItem("uid",t.headers.uid)}).catch(t=>{console.log(t)})}static async loginUser(n){await q.post("v1/auth/sign_in",{email:n.email,password:n.password}).then(t=>(localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers.client),localStorage.setItem("uid",t.headers.uid),t))}static async validated(){await q.get("v1/auth/validate_token",{headers:{uid:localStorage.getItem("uid"),client:localStorage.getItem("client"),"access-token":localStorage.getItem("access-token")}}).then(n=>console.log(n)).catch(n=>{console.log(n)})}}const Mt=e("header",null,"KeepMakingEfforts",-1),Ot={class:"info-line text-white"},Dt={class:"flex gap-1"},Pt={setup(i){const n=R(),t=F(),s=b(()=>n.totalCardCounts);ce(n.lists,()=>{n.updateLists(n.lists)});const o=()=>{n.updateLists(n.lists)};return H(async()=>{if(localStorage.getItem("client")!==null&localStorage.getItem("access-token")!==null&localStorage.getItem("uid")!==null)try{await B.validated()}catch{console.log("\u8A8D\u8A3C\u306B\u5931\u6557"),t.push("/login")}else console.log("\u8A8D\u8A3C\u306B\u5931\u6557"),t.push("/login")}),(r,a)=>($(),I("div",null,[Mt,e("main",null,[e("p",Ot,"All: "+C(p(s))+" tasks",1),e("div",null,[y(p(Y),{modelValue:p(n).lists,"onUpdate:modelValue":a[0]||(a[0]=u=>p(n).lists=u),"item-key":"id",class:"list-index",onEnd:o},{item:K(({element:u,index:l})=>[e("div",Dt,[y(Ft,{title:u.title,listIndex:l,cards:u.cards,"onUpdate:cards":h=>u.cards=h},null,8,["title","listIndex","cards","onUpdate:cards"]),x(y(X,null,null,512),[[k,l===p(n).lists.length-1]])])]),_:1},8,["modelValue"]),x(y(X,null,null,512),[[k,p(n).lists.length===0]])])])]))}},Kt={class:"flex flex-col gap-2"},Vt=["for"],qt=["id","type","name","placeholder","required"],j={props:{labelName:{type:String},inputType:{type:String},inputName:{type:String},inputId:{type:String},inputPlaceholder:{type:String},inputRequired:{type:Boolean,default:!0},value:{type:String}},emits:["update:value"],setup(i,{emit:n}){const t=i,s=b({get:()=>t.value,set:o=>n("update:value",o)});return(o,r)=>($(),I("div",Kt,[e("label",{for:t.inputId,class:"text-white"},C(t.labelName),9,Vt),x(e("input",{id:t.inputId,type:t.inputType,name:t.inputName,class:"border shadow-lg border-gray-300 px-5 py-2 text-black rounded-lg",placeholder:t.inputPlaceholder,"onUpdate:modelValue":r[0]||(r[0]=a=>z(s)?s.value=a:null),required:t.inputRequired},null,8,qt),[[ue,p(s)]])]))}},Bt={class:"mt-20"},Jt=e("h1",{class:"text-2xl font-bold text-center"},"Keep Making Effort",-1),Ht={class:"bg-black opacity-90 shadow-md w-96 p-10 border border-gray-800 rounded-md mx-auto mt-10"},Yt=e("div",null,[e("h3",{class:"text-gray-300 pb-8 text-2xl font-bold text-center"}," Register Your Account ")],-1),Gt={class:"flex flex-col gap-3"},Wt=["onClick"],Qt={setup(i){const n=F(),t=G({email:"",password:"",name:""}),s=b({get:()=>t.name,set:a=>t.name=a}),o=b({get:()=>t.password,set:a=>t.password=a});b({get:()=>t.email,set:a=>t.email=a});const r=async()=>{if(t.name&&t.email&&t.password)try{await B.registerUser(t),n.push("/"),E({type:"success",title:"\u767B\u9332\u6210\u529F",text:"\u767B\u9332\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002"})}catch{E({type:"error",title:"\u767B\u9332\u5931\u6557",text:"\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u77ED\u3059\u304E\u308B\u304B\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059"})}else E({type:"error",title:"\u767B\u9332\u5931\u6557",text:"\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u77ED\u3059\u304E\u308B\u304B\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059"})};return(a,u)=>($(),I("div",Bt,[Jt,e("form",Ht,[Yt,e("div",Gt,[y(j,{labelName:"Name",inputId:"name",inputType:"text",inputName:"name",inputPlaceholder:"Name",value:p(s),"onUpdate:value":u[0]||(u[0]=l=>z(s)?s.value=l:null)},null,8,["value"]),y(j,{labelName:"Email",inputId:"email",inputType:"email",inputName:"email",inputPlaceholder:"Email",value:p(t).email,"onUpdate:value":u[1]||(u[1]=l=>p(t).email=l)},null,8,["value"]),y(j,{labelName:"Password",inputId:"password",inputType:"password",inputName:"password",inputPlaceholder:"Password",value:p(o),"onUpdate:value":u[2]||(u[2]=l=>z(o)?o.value=l:null)},null,8,["value"])]),e("button",{class:"mt-8 bg-blue-900 w-full py-2 rounded-md",onClick:N(r,["prevent"])}," Create Account ",8,Wt)])]))}},Xt={class:"mt-20"},Zt=e("div",{class:""},[e("h1",{class:"text-2xl font-bold text-center"},"Keep Making Effort")],-1),en={class:"bg-black opacity-90 shadow-md w-96 p-10 border border-gray-800 rounded-md mx-auto mt-10"},tn=e("div",null,[e("h3",{class:"text-gray-300 pb-8 text-2xl font-bold text-center"}," Login Your Account ")],-1),nn={class:"flex flex-col gap-3"},on=["onClick"],sn={class:"flex flex-col items-center pt-8 gap-2"},rn=e("p",null,"or",-1),an=P(" register "),ln={setup(i){const n=F(),t=G({email:"",password:""}),s=b({get:()=>t.password,set:r=>t.password=r});b({get:()=>t.email,set:r=>t.email=r});const o=async()=>{try{await B.loginUser(t),n.push("/"),E({type:"success",title:"\u30ED\u30B0\u30A4\u30F3\u6210\u529F",text:"\u30ED\u30B0\u30A4\u30F3\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002"})}catch{E({type:"error",title:"\u30ED\u30B0\u30A4\u30F3\u5931\u6557",text:"\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30D1\u30B9\u30EF\u30FC\u30C9\u304B\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u9593\u9055\u3063\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059"})}};return(r,a)=>{const u=M("router-link");return $(),I("div",Xt,[Zt,e("form",en,[tn,e("div",nn,[y(j,{labelName:"Email",inputId:"email",inputType:"email",inputName:"email",inputPlaceholder:"Email",value:p(t).email,"onUpdate:value":a[0]||(a[0]=l=>p(t).email=l)},null,8,["value"]),y(j,{labelName:"Password",inputId:"password",inputType:"password",inputName:"password",inputPlaceholder:"Password",value:p(s),"onUpdate:value":a[1]||(a[1]=l=>z(s)?s.value=l:null)},null,8,["value"])]),e("button",{class:"mt-8 bg-blue-900 w-full py-2 rounded-md",onClick:N(o,["prevent"])}," Login ",8,on),e("div",sn,[rn,y(u,{to:"/register",class:"bg-blue-900 w-full rounded-md py-2 text-center"},{default:K(()=>[an]),_:1})])])])}}},dn=[{path:"/",name:"Board",component:Pt},{path:"/register",name:"Register",component:Qt},{path:"/login",name:"Login",component:ln}],cn=pe({history:ge(),routes:dn}),un=me();fe.add(he);be.watch();we(Ie).use($e).use(un).use(cn).use(xe).component("font-awesome-icon",ve).mount("#app");

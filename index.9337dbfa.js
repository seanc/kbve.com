import{r as o}from"./chunks/index.a8ca6e14.js";import{j as e}from"./chunks/jsx-runtime.0a896785.js";import"./chunks/_commonjsHelpers.37791fd4.js";const p=await fetch("https://kbve.com/application/application.json").then(l=>l.json()),m=()=>{const l=o.exports.useRef(0),[r,a]=o.exports.useState(0),t=o.exports.useRef(null),i=()=>{r>0&&a(s=>s-1)},c=()=>{t.current!==null&&t.current.offsetWidth*r<=l.current&&a(s=>s+1)},n=s=>s==="prev"?r<=0:s==="next"&&t.current!==null?t.current.offsetWidth*r>=l.current:!1;return o.exports.useEffect(()=>{t!==null&&t.current!==null&&(t.current.scrollLeft=t.current.offsetWidth*r)},[r]),o.exports.useEffect(()=>{l.current=t.current?t.current.scrollWidth-t.current.offsetWidth:0},[]),e.exports.jsxs("div",{className:"carousel my-1 mx-auto",id:"applications",children:[e.exports.jsx("h2",{className:"text-4xl leading-8 font-semibold mb-12 light:text-slate-700",children:"Applications - Our ToolBelt."}),e.exports.jsxs("div",{className:"relative overflow-hidden",children:[e.exports.jsxs("div",{className:"flex justify-between absolute top left w-full h-full",children:[e.exports.jsxs("button",{onClick:i,className:"hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300",disabled:n("prev"),children:[e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-20 -ml-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),e.exports.jsx("span",{className:"sr-only",children:"Prev"})]}),e.exports.jsxs("button",{onClick:c,className:"hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300",disabled:n("next"),children:[e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-20 -ml-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.exports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),e.exports.jsx("span",{className:"sr-only",children:"Next"})]})]}),e.exports.jsx("div",{ref:t,className:"carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0",children:p.map((s,x)=>e.exports.jsx("div",{className:"carousel-item text-center relative w-64 h-64 snap-start rounded shadow-sm",children:e.exports.jsxs("div",{className:"h-full w-full aspect-square rounded-md shadow-md bg-offset",children:[e.exports.jsxs("div",{className:"flex items-center justify-between p-3",children:[e.exports.jsxs("div",{className:"flex items-center space-x-2",children:[e.exports.jsx("img",{src:s.img,alt:"",className:"object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"}),e.exports.jsxs("div",{className:"-space-y-1",children:[e.exports.jsxs("a",{href:s.slug,children:[e.exports.jsx("h2",{className:"text-sm font-semibold leading-none",children:s.title}),"                                  "]}),e.exports.jsx("span",{className:"inline-block text-xs leading-none dark:text-gray-400",children:s.category})]})]}),e.exports.jsx("button",{title:"Open options",type:"button",children:e.exports.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-5 h-5 fill-current",children:[e.exports.jsx("path",{d:"M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"}),e.exports.jsx("path",{d:"M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"}),e.exports.jsx("path",{d:"M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"})]})})]}),e.exports.jsx("img",{src:s.img,alt:"",className:"px-2 object-cover object-center w-full h-fit dark:bg-gray-500"}),e.exports.jsx("div",{className:"p-3",children:e.exports.jsxs("div",{className:"flex items-center justify-between",children:[e.exports.jsxs("div",{className:"flex items-center space-x-3",children:[e.exports.jsx("button",{type:"button",title:"Like post",className:"flex items-center justify-center",children:e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-5 h-5 fill-current",children:e.exports.jsx("path",{d:"M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"})})}),e.exports.jsx("button",{type:"button",title:"Add a comment",className:"flex items-center justify-center",children:e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-5 h-5 fill-current",children:e.exports.jsx("path",{d:"M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"})})}),e.exports.jsx("button",{type:"button",title:"Share post",className:"flex items-center justify-center",children:e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-5 h-5 fill-current",children:e.exports.jsx("path",{d:"M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"})})})]}),e.exports.jsx("button",{type:"button",title:"Bookmark post",className:"flex items-center justify-center",children:e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-5 h-5 fill-current",children:e.exports.jsx("path",{d:"M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"})})})]})})]})},x))})]})]})};export{m as default};
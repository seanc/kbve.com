import{r as e}from"./chunks/index.a8ca6e14.js";import{r as y}from"./chunks/index.ad1499c9.js";import"./chunks/_commonjsHelpers.37791fd4.js";var l,f,u=y.exports;f=u.createRoot,l=u.hydrateRoot;const a=({value:t,name:r})=>t?e.exports.createElement("astro-slot",{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}}):null;a.shouldComponentUpdate=()=>!1;function x(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}const H=t=>(r,n,{default:o,...p},{client:m})=>{if(!t.hasAttribute("ssr"))return;for(const[c,d]of Object.entries(p))n[c]=e.exports.createElement(a,{value:d,name:c});const s=e.exports.createElement(r,n,o!=null?e.exports.createElement(a,{value:o}):o),i=x(t);return i&&delete t[i],m==="only"?e.exports.startTransition(()=>{f(t).render(s)}):e.exports.startTransition(()=>{l(t,s)})};export{H as default};
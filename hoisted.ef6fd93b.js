import{_ as d,a as c,b as l,c as u,S as s,d as m,e as r,f as i,g as f,l as a}from"./chunks/theme-switcher.astro_astro_type_script_index_0_lang.c89d79a0.js";import"./chunks/_commonjsHelpers.37791fd4.js";const n=localStorage.getItem("theme");document.documentElement.dataset.theme=n||"dark",window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{localStorage.getItem("theme")||(document.documentElement.dataset.theme=e.matches?"dark":"light")})),new d({plugins:[new c({}),new l,new u,new s,new m,new r,new i,new f({globalInstance:!0})]});const t="menu-modal";document.querySelector("#page-header");const h=document.querySelector(`#${t} ul`),w=document.querySelector("#open-nav-button"),g=document.querySelector("#close-nav-button"),S=()=>{a.show(t,{disableScroll:!0})},o=()=>{a.close(t)};w.addEventListener("click",S),g.addEventListener("click",o),h.addEventListener("click",(e=>{"A"===e.target.tagName&&o()}));
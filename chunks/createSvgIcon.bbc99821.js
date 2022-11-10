import{C as D,b as c,D as S,E as N,F as E,G as q,o as T,H as O,I as U,j as w,q as G,p as L,t as H,i as W,h as $,g as A,s as h,_ as n,m as _,k as M,d as B,e as F,f as P}from"./utils.eedf65de.js";import{r as b}from"./index.a8ca6e14.js";import{j as g}from"./jsx-runtime.0a896785.js";import{u as V,B as Y}from"./ButtonBase.70782ed2.js";import{a as J}from"./_commonjsHelpers.37791fd4.js";function K(e,o){return()=>null}function Q(e,o){return()=>null}function X(e,o,t,a,r){return null}const Z={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),D.configure(e)}},ee=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:Z,capitalize:c,createChainedFunction:S,createSvgIcon:N,debounce:E,deprecatedPropType:K,isMuiElement:q,ownerDocument:T,ownerWindow:O,requirePropFactory:Q,setRef:U,unstable_useEnhancedEffect:w,unstable_useId:G,unsupportedProp:X,useControlled:L,useEventCallback:H,useForkRef:W,useIsFocusVisible:V},Symbol.toStringTag,{value:"Module"}));function oe(e){return A("MuiIconButton",e)}const te=$("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ae=te,re=["edge","children","className","color","disabled","disableFocusRipple","size"],se=e=>{const{classes:o,disabled:t,color:a,edge:r,size:i}=e,l={root:["root",t&&"disabled",a!=="default"&&`color${c(a)}`,r&&`edge${c(r)}`,`size${c(i)}`]};return P(l,oe,o)},ne=h(Y,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="default"&&o[`color${c(t.color)}`],t.edge&&o[`edge${c(t.edge)}`],o[`size${c(t.size)}`]]}})(({theme:e,ownerState:o})=>n({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:_(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>n({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&n({color:(e.vars||e).palette[o.color].main},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${ae.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})),ie=b.exports.forwardRef(function(o,t){const a=M({props:o,name:"MuiIconButton"}),{edge:r=!1,children:i,className:l,color:s="default",disabled:u=!1,disableFocusRipple:v=!1,size:d="medium"}=a,p=B(a,re),m=n({},a,{edge:r,color:s,disabled:u,disableFocusRipple:v,size:d}),x=se(m);return g.exports.jsx(ne,n({className:F(x.root,l),centerRipple:!0,focusRipple:!v,disabled:u,ref:t,ownerState:m},p,{children:i}))}),ze=ie,le=N(g.exports.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ce(e){return A("MuiAvatar",e)}$("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ue=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],de=e=>{const{classes:o,variant:t,colorDefault:a}=e;return P({root:["root",t,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ce,o)},pe=h("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:e,ownerState:o})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),fe=h("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ge=h(le,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function ve({crossOrigin:e,referrerPolicy:o,src:t,srcSet:a}){const[r,i]=b.exports.useState(!1);return b.exports.useEffect(()=>{if(!t&&!a)return;i(!1);let l=!0;const s=new Image;return s.onload=()=>{!l||i("loaded")},s.onerror=()=>{!l||i("error")},s.crossOrigin=e,s.referrerPolicy=o,s.src=t,a&&(s.srcset=a),()=>{l=!1}},[e,o,t,a]),r}const me=b.exports.forwardRef(function(o,t){const a=M({props:o,name:"MuiAvatar"}),{alt:r,children:i,className:l,component:s="div",imgProps:u,sizes:v,src:d,srcSet:p,variant:m="circular"}=a,x=B(a,ue);let f=null;const j=ve(n({},u,{src:d,srcSet:p})),I=d||p,z=I&&j!=="error",R=n({},a,{colorDefault:!z,component:s,variant:m}),y=de(R);return z?f=g.exports.jsx(fe,n({alt:r,src:d,srcSet:p,sizes:v,ownerState:R,className:y.img},u)):i!=null?f=i:I&&r?f=r[0]:f=g.exports.jsx(ge,{className:y.fallback}),g.exports.jsx(pe,n({as:s,ownerState:R,className:F(y.root,l),ref:t},x,{children:f}))}),_e=me;var be={exports:{}};(function(e){function o(t){return t&&t.__esModule?t:{default:t}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(be);var C={};const he=J(ee);var k;function ke(){return k||(k=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=he}(C)),C}export{_e as A,ze as I,be as i,ke as r};
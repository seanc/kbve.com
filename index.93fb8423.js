import{R as s}from"./chunks/index.a8ca6e14.js";import"./chunks/index.ad1499c9.js";import{a as T,H as A,B as D}from"./chunks/Button.3d584658.js";import{j as e}from"./chunks/jsx-runtime.0a896785.js";import{u as O}from"./chunks/useCookies.7df288f7.js";import{S as f}from"./chunks/Stack.0c1a4710.js";import{P as U}from"./chunks/utils.eedf65de.js";import{T as d}from"./chunks/TextField.a53d1886.js";import{C as $}from"./chunks/Collapse.22289fc5.js";import"./chunks/_commonjsHelpers.37791fd4.js";import"./chunks/ButtonBase.70782ed2.js";import"./chunks/Menu.0c769ed4.js";//! [IMPORT] -> [START]
const B=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)//! [CORE] -> [START];
function I(e,t){s.useEffect((()=>{let s=!0;return e().then((e=>{s?t(e):console.log("aborted setState on unmounted component")})),()=>{s=!1}}),[e,t])}const L=()=>{const[t,r]=s.useState("loading (4 sec)...");return I(W,r),e.exports.jsx(z,{})},V=()=>(s.useState(!0),e.exports.jsx("div",{children:e.exports.jsx(L,{})})),W=()=>new Promise((e=>setTimeout((()=>e("data fetched")),4e3)));class te extends s.Component{constructor(e){super(e),this.state={load:!1,hasError:!1,captchaRef:null},this.listRef=s.createRef()}static getDerivedStateFromError(e){return{hasError:!0}}componentWillUnmount(){this.state.load=!1}componentDidMount(){this.state.load=!0}render(){return this.state.hasError?e.exports.jsx("h1",{children:"Something went wrong."}):e.exports.jsx(V,{})}}const z=({url:t="https://api.kbve.com/api/auth/local/register",display:r=!0})=>{const o=s.useRef(null),[n,a]=s.useState(!1),[i,c]=s.useState(""),[l,u]=s.useState(""),[p,m]=s.useState(""),[h,x]=s.useState(""),[j,g]=O(["user"]),[k,S]=s.useState(!1);//! Core -> [START] -> EOF
//! [CORE] -> {Function} -> [ReactRegister] -> [END]
return e.exports.jsx(f,{direction:"column",alignItems:"center",children:e.exports.jsx(U,{variant:"outlined",children:e.exports.jsx(T,{component:"form",maxWidth:"sm",children:e.exports.jsxs(f,{direction:"column",justifyContent:"center",spacing:2,p:2,sx:{flex:1},children:[e.exports.jsx(d,{id:"username-input",type:"username",label:"Username",value:i,error:""!==i,onChange:e=>c(e.target.value),disabled:k}),e.exports.jsx(d,{id:"email-input",type:"email",label:"Email",value:l,error:""!==l&&!B(l),onChange:e=>u(e.target.value),disabled:k}),e.exports.jsx(d,{id:"password-input",type:"password",label:"Password",value:p,error:""!==p&&p!==h,onChange:e=>m(e.target.value),disabled:k}),e.exports.jsx(d,{id:"confirm-password-input",type:"password",label:"Confirm Password",value:h,error:""!==h&&p!==h,onChange:e=>x(e.target.value),disabled:k}),e.exports.jsx(A,{ref:o,sitekey:"e77af3f6-a0e3-44b7-82f8-b7c098d38022",onVerify:(e,s)=>((e,s)=>{console.log({token:e,eKey:s}),a(e)})(e,s)}),e.exports.jsx($,{in:!!n,children:e.exports.jsx(f,{direction:"column",alignItems:"flex-end",children:e.exports.jsx(D,{variant:"contained",fullWidth:!0,onClick:async e=>{e.preventDefault(),S(!0),await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,email:l,password:p,token:n})}).then((async e=>{if(!e.ok)return S(!1),o.current?.resetCaptcha(),console.error(`\tRegisterConfirmation::An Error Occurred (${e.statusText})`),console.log(`Error: ${e}`),new Error(e.statusText);const s=await e.json().then((e=>{new Promise(((s,t)=>{s((e=>{g("user",e,{path:"/",domain:".kbve.com",secure:!0,sameSite:"strict"})})(e.user))})).then(window.location="https://kbve.com/profile")}));console.log(`\tRegisterConfirmation::Success:\n${JSON.stringify(s,null,2)}`)}))},disabled:k,children:"Sign Up"})})})]})})})})};export{te as default};
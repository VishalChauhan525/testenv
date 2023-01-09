import{o as a,r as b,j as e,aX as t,aZ as i,ag as n,ae as d,af as s,aY as c,aj as N,ak as o,W as g,al as C,E as v,ah as K,U as x,D as A,t as k,v as m,B as w}from"./index.b8b13c58.js";import{B as P}from"./index.4c823db6.js";import{v as F,h as I,J as S,R as T,a4 as z}from"./App.e1b9a34b.js";import{S as B}from"./react-select.esm.68638e53.js";import{u as D,C as M}from"./index.esm.9d4e4ccc.js";import{i as R}from"./pricing-Illustration.cc247962.js";import"./emotion-memoize.esm.06f0e458.js";const j=[{type:"Full Access",name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",date:"Created on 28 Apr 2020, 18:20 GTM+4:10"},{type:"Read Only",name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",date:"Created on 12 Feb 2020, 10:30 GTM+2:30"},{type:"Full Access",name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",date:"Created on 28 Apr 2020, 12:21 GTM+4:10"}],h=[{value:"full-control",label:"Full Control"},{value:"modify",label:"Modify"},{value:"read-execute",label:"Read & Execute"},{value:"list-folder",label:"List Folder Contents"},{value:"read-only",label:"Read Only"},{value:"read-write",label:"Read Write"}],E={apiKeyName:""},W=()=>{const{control:p,setError:y,handleSubmit:u,formState:{errors:l}}=D({defaultValues:E}),f=r=>{if(r.apiKeyName.length)return null;y("apiKeyName",{type:"manual"})};return a(b.exports.Fragment,{children:[e(P,{title:"Create an API Key",data:[{title:"Pages"},{title:"Create an API Key"}]}),a(t,{children:[e(i,{className:"pb-0",children:e(n,{tag:"h4",children:"Create an API Key"})}),a(d,{children:[e(s,{md:{size:5,order:0},xs:{size:12,order:1},children:e(c,{children:a(N,{onSubmit:u(f),children:[a("div",{className:"mb-2",children:[e(o,{className:"form-label",children:"Choose the Api key type you want to create"}),e(B,{isClearable:!1,options:h,className:"react-select",classNamePrefix:"select",theme:F,defaultValue:h[0]})]}),a("div",{className:"mb-2",children:[e(o,{className:"form-label",for:"apiKeyName",children:"Name the API key"}),e(M,{name:"apiKeyName",control:p,render:({field:r})=>e(g,{id:"apiKeyName",placeholder:"Server Key",invalid:l.apiKeyName&&!0,...r})}),l&&l.apiKeyName&&e(C,{children:"Please enter a valid API key name"})]}),e("div",{children:e(v,{block:!0,type:"submit",color:"primary",children:"Create Key"})})]})})}),e(s,{md:{size:7,order:1},xs:{size:12,order:0},children:e("div",{className:"text-center",children:e("img",{className:"img-fluid text-center",src:R,alt:"illustration",width:"310"})})})]})]}),a(t,{children:[e(i,{children:e(n,{tag:"h4",children:"API Key List & Access"})}),a(c,{children:[e(K,{children:"An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing."}),e(d,{className:"gy-2",children:j.map(r=>e(s,{sm:12,children:a("div",{className:"bg-light-secondary position-relative rounded p-2",children:[a(x,{className:"btn-pinned",children:[e(A,{tag:"span",className:"cursor-pointer",children:e(I,{size:18})}),a(k,{children:[a(m,{className:"d-flex align-items-center",children:[e(S,{size:14,className:"me-50"}),e("span",{children:"Edit"})]}),a(m,{className:"d-flex align-items-center",children:[e(T,{size:14,className:"me-50"}),e("span",{children:"Delete"})]})]})]}),a("div",{className:"d-flex align-items-center flex-wrap",children:[e("h4",{className:"mb-1 me-1",children:r.name}),e(w,{className:"mb-1",color:"light-primary",children:r.type})]}),a("h6",{className:"d-flex align-items-center fw-bolder",children:[e("span",{className:"me-50",children:r.key}),e("span",{children:e(z,{size:14})})]}),e("span",{children:r.date})]})},r.key))})]})]})]})};export{W as default};

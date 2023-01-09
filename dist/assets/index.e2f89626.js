import{o as l,r as o,j as e,aj as N,ae as m,af as r,ak as i,W as d,E as h,al as u}from"./index.b8b13c58.js";import{W as A}from"./index.a27bb953.js";import{aG as g,aH as w,v as S,aq as L,U as I,aI as E,aa as D,k as U}from"./App.e1b9a34b.js";import{S as $}from"./react-select.esm.68638e53.js";import{u as z,C as b}from"./index.esm.9d4e4ccc.js";import{c as Y,a as y,b as B,o as V}from"./yup.module.132a3c3b.js";import{B as W}from"./index.4c823db6.js";import"./emotion-memoize.esm.06f0e458.js";import"./upperFirst.9d61b781.js";const P=({stepper:t,type:a})=>l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Address"}),e("small",{children:"Enter Your Address."})]}),l(N,{onSubmit:c=>c.preventDefault(),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`address-${a}`,children:"Address"}),e(d,{type:"text",id:`address-${a}`,name:`address-${a}`,placeholder:"98  Borough bridge Road, Birmingham"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`landmark-${a}`,children:"Landmark"}),e(d,{type:"text",name:`landmark-${a}`,id:`landmark-${a}`,placeholder:"Borough bridge"})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`pincode-${a}`,children:"Pincode"}),e(d,{type:"text",name:`pincode-${a}`,id:`pincode-${a}`,placeholder:"658921"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`city-${a}`,children:"City"}),e(d,{type:"text",name:`city-${a}`,id:`city-${a}`,placeholder:"Birmingham"})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{color:"primary",className:"btn-next",onClick:()=>t.next(),children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]}),F=({stepper:t,type:a})=>l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Social Links"}),e("small",{children:"Enter Your Social Links."})]}),l(N,{onSubmit:c=>c.preventDefault(),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`twitter-${a}`,children:"Twitter"}),e(d,{type:"text",id:`twitter-${a}`,name:"twitter",placeholder:"https://twitter.com/abc"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`facebook-${a}`,children:"Facebook"}),e(d,{type:"text",id:`facebook-${a}`,name:"facebook",placeholder:"https://facebook.com/abc"})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`google-${a}`,children:"Google+"}),e(d,{type:"text",id:`google-${a}`,name:"google",placeholder:"https://plus.google.com/abc"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`linkedin-${a}`,children:"Linkedin"}),e(d,{type:"text",id:`linkedin-${a}`,name:"linkedin",placeholder:"https://linkedin.com/abc"})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),e(h,{color:"success",className:"btn-submit",onClick:()=>alert("submitted"),children:"Submit"})]})]})]}),j=({stepper:t,type:a})=>{const c=[{value:"UK",label:"UK"},{value:"USA",label:"USA"},{value:"Spain",label:"Spain"},{value:"France",label:"France"},{value:"Italy",label:"Italy"},{value:"Australia",label:"Australia"}],p=[{value:"English",label:"English"},{value:"French",label:"French"},{value:"Spanish",label:"Spanish"},{value:"Italian",label:"Italian"},{value:"Japanese",label:"Japanese"}];return l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Personal Info"}),e("small",{children:"Enter Your Personal Info."})]}),l(N,{onSubmit:s=>s.preventDefault(),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`first-name-${a}`,children:"First Name"}),e(d,{type:"text",name:"first-name",id:`first-name-${a}`,placeholder:"John"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`last-name-${a}`,children:"Last Name"}),e(d,{type:"text",name:"last-name",id:`last-name-${a}`,placeholder:"Doe"})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`country-${a}`,children:"Country"}),e($,{theme:S,isClearable:!1,id:`country-${a}`,className:"react-select",classNamePrefix:"select",options:c,defaultValue:c[0]})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`language-${a}`,children:"Language"}),e($,{isMulti:!0,isClearable:!1,theme:S,id:`language-${a}`,options:p,className:"react-select",classNamePrefix:"select"})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{color:"primary",className:"btn-next",onClick:()=>t.next(),children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},C=({stepper:t,type:a})=>l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Account Details"}),e("small",{className:"text-muted",children:"Enter Your Account Details."})]}),l(N,{onSubmit:c=>c.preventDefault(),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`username-${a}`,children:"Username"}),e(d,{type:"text",name:`username-${a}`,id:`username-${a}`,placeholder:"johndoe"})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:`email-${a}`,children:"Email"}),e(d,{type:"email",name:`email-${a}`,id:`email-${a}`,placeholder:"john.doe@email.com","aria-label":"john.doe"})]})]}),l(m,{children:[l("div",{className:"form-password-toggle col-md-6 mb-1",children:[e(i,{className:"form-label",for:`password-${a}`,children:"Password"}),e(d,{type:"password",id:`password-${a}`})]}),l("div",{className:"form-password-toggle col-md-6 mb-1",children:[e(i,{className:"form-label",for:`confirm-password-${a}`,children:"Confirm Password"}),e(d,{type:"password",id:`confirm-password-${a}`})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"secondary",className:"btn-prev",outline:!0,disabled:!0,children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{color:"primary",className:"btn-next",onClick:()=>t.next(),children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]}),O=()=>{const t=o.exports.useRef(null),[a,c]=o.exports.useState(null);return e("div",{className:"modern-horizontal-wizard",children:e(A,{type:"modern-horizontal",ref:t,steps:[{id:"account-details",title:"Account Details",subtitle:"Enter Your Account Details.",icon:e(L,{size:18}),content:e(C,{stepper:a,type:"wizard-modern"})},{id:"personal-info",title:"Personal Info",subtitle:"Add Personal Info",icon:e(I,{size:18}),content:e(j,{stepper:a,type:"wizard-modern"})},{id:"step-address",title:"Address",subtitle:"Add Address",icon:e(E,{size:18}),content:e(P,{stepper:a,type:"wizard-modern"})},{id:"social-links",title:"Social Links",subtitle:"Add Social Links",icon:e(D,{size:18}),content:e(F,{stepper:a,type:"wizard-modern"})}],options:{linear:!1},instance:s=>c(s)})})},R=()=>{const t=o.exports.useRef(null),[a,c]=o.exports.useState(null);return e("div",{className:"vertical-wizard",children:e(A,{type:"vertical",ref:t,steps:[{id:"account-details",title:"Account Details",subtitle:"Enter Your Account Details.",content:e(C,{stepper:a,type:"wizard-vertical"})},{id:"personal-info",title:"Personal Info",subtitle:"Add Personal Info",content:e(j,{stepper:a,type:"wizard-vertical"})},{id:"step-address",title:"Address",subtitle:"Add Address",content:e(P,{stepper:a,type:"wizard-vertical"})},{id:"social-links",title:"Social Links",subtitle:"Add Social Links",content:e(F,{stepper:a,type:"wizard-vertical"})}],options:{linear:!1},instance:s=>c(s)})})},J={city:"",pincode:"",address:"",landmark:""},q=({stepper:t})=>{const{control:a,setError:c,handleSubmit:p,formState:{errors:s}}=z({defaultValues:J}),v=n=>{if(Object.values(n).every(f=>f.length>0))t.next();else for(const f in n)n[f].length===0&&c(f,{type:"manual",message:`Please enter a valid ${f}`})};return l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Address"}),e("small",{children:"Enter Your Address."})]}),l(N,{onSubmit:p(v),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"address",children:"Address"}),e(b,{id:"address",name:"address",control:a,render:({field:n})=>e(d,{placeholder:"98  Borough bridge Road, Birmingham",invalid:s.address&&!0,...n})}),s.address&&e(u,{children:s.address.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"landmark",children:"Landmark"}),e(b,{id:"landmark",name:"landmark",control:a,render:({field:n})=>e(d,{placeholder:"Borough bridge",invalid:s.landmark&&!0,...n})}),s.landmark&&e(u,{children:s.landmark.message})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"pincode",children:"Pincode"}),e(b,{id:"pincode",name:"pincode",control:a,render:({field:n})=>e(d,{placeholder:"658921",invalid:s.pincode&&!0,...n})}),s.pincode&&e(u,{children:s.pincode.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"city",children:"City"}),e(b,{id:"city",name:"city",control:a,render:({field:n})=>e(d,{placeholder:"Birmingham",invalid:s.city&&!0,...n})}),s.city&&e(u,{children:s.city.message})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{type:"button",color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{type:"submit",color:"primary",className:"btn-next",children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},M={google:"",twitter:"",facebook:"",linkedin:""},K=({stepper:t})=>{const{control:a,setError:c,handleSubmit:p,formState:{errors:s}}=z({defaultValues:M}),v=n=>{if(Object.values(n).every(f=>f.length>0))alert("submitted");else for(const f in n)n[f].length===0&&c(f,{type:"manual",message:`Please enter a valid ${f} url`})};return l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Social Links"}),e("small",{children:"Enter Your Social Links."})]}),l(N,{onSubmit:p(v),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"twitter",children:"Twitter"}),e(b,{id:"twitter",name:"twitter",control:a,render:({field:n})=>e(d,{placeholder:"https://twitter.com/johndoe",invalid:s.twitter&&!0,...n})}),s.twitter&&e(u,{children:s.twitter.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"facebook",children:"Facebook"}),e(b,{id:"facebook",name:"facebook",control:a,render:({field:n})=>e(d,{placeholder:"https://facebook.com/johndoe",invalid:s.facebook&&!0,...n})}),s.facebook&&e(u,{children:s.facebook.message})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"google",children:"Google+"}),e(b,{id:"google",name:"google",control:a,render:({field:n})=>e(d,{placeholder:"https://plus.google.com/johndoe",invalid:s.google&&!0,...n})}),s.google&&e(u,{children:s.google.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"linkedin",children:"Linkedin"}),e(b,{id:"linkedin",name:"linkedin",control:a,render:({field:n})=>e(d,{placeholder:"https://linkedin.com/johndoe",invalid:s.linkedin&&!0,...n})}),s.linkedin&&e(u,{children:s.linkedin.message})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),e(h,{type:"submit",color:"success",className:"btn-submit",children:"Submit"})]})]})]})},T={lastName:"",firstName:""},G=({stepper:t})=>{const{control:a,setError:c,handleSubmit:p,formState:{errors:s}}=z({defaultValues:T}),v=k=>{if(Object.values(k).every(x=>x.length>0))t.next();else for(const x in k)k[x].length===0&&c(x,{type:"manual",message:`Please enter a valid ${x}`})},n=[{value:"UK",label:"UK"},{value:"USA",label:"USA"},{value:"Spain",label:"Spain"},{value:"France",label:"France"},{value:"Italy",label:"Italy"},{value:"Australia",label:"Australia"}],f=[{value:"English",label:"English"},{value:"French",label:"French"},{value:"Spanish",label:"Spanish"},{value:"Italian",label:"Italian"},{value:"Japanese",label:"Japanese"}];return l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Personal Info"}),e("small",{children:"Enter Your Personal Info."})]}),l(N,{onSubmit:p(v),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"firstName",children:"First Name"}),e(b,{id:"firstName",name:"firstName",control:a,render:({field:k})=>e(d,{placeholder:"John",invalid:s.firstName&&!0,...k})}),s.firstName&&e(u,{children:s.firstName.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"lastName",children:"Last Name"}),e(b,{id:"lastName",name:"lastName",control:a,render:({field:k})=>e(d,{placeholder:"Doe",invalid:s.lastName&&!0,...k})}),s.lastName&&e(u,{children:s.lastName.message})]})]}),l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"country",children:"Country"}),e($,{theme:S,isClearable:!1,id:"country",className:"react-select",classNamePrefix:"select",options:n,defaultValue:n[0]})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"language",children:"Language"}),e($,{isMulti:!0,isClearable:!1,theme:S,id:"language",options:f,className:"react-select",classNamePrefix:"select"})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{type:"button",color:"primary",className:"btn-prev",onClick:()=>t.previous(),children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{type:"submit",color:"primary",className:"btn-next",children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},H={email:"",username:"",password:"",confirmPassword:""},Q=({stepper:t})=>{const a=Y().shape({username:y().required(),email:y().email().required(),password:y().required(),confirmPassword:y().required().oneOf([B("password"),null],"Passwords must match")}),{control:c,handleSubmit:p,formState:{errors:s}}=z({defaultValues:H,resolver:V(a)}),v=()=>{U(s)&&t.next()};return l(o.exports.Fragment,{children:[l("div",{className:"content-header",children:[e("h5",{className:"mb-0",children:"Account Details"}),e("small",{className:"text-muted",children:"Enter Your Account Details."})]}),l(N,{onSubmit:p(v),children:[l(m,{children:[l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"username",children:"Username"}),e(b,{id:"username",name:"username",control:c,render:({field:n})=>e(d,{placeholder:"johndoe",invalid:s.username&&!0,...n})}),s.username&&e(u,{children:s.username.message})]}),l(r,{md:"6",className:"mb-1",children:[e(i,{className:"form-label",for:"email",children:"Email"}),e(b,{control:c,id:"email",name:"email",render:({field:n})=>e(d,{type:"email",placeholder:"john.doe@email.com",invalid:s.email&&!0,...n})}),s.email&&e(u,{children:s.email.message})]})]}),l(m,{children:[l("div",{className:"form-password-toggle col-md-6 mb-1",children:[e(i,{className:"form-label",for:"password",children:"Password"}),e(b,{id:"password",name:"password",control:c,render:({field:n})=>e(d,{type:"password",invalid:s.password&&!0,...n})}),s.password&&e(u,{children:s.password.message})]}),l("div",{className:"form-password-toggle col-md-6 mb-1",children:[e(i,{className:"form-label",for:"confirmPassword",children:"Confirm Password"}),e(b,{control:c,id:"confirmPassword",name:"confirmPassword",render:({field:n})=>e(d,{type:"password",invalid:s.confirmPassword&&!0,...n})}),s.confirmPassword&&e(u,{children:s.confirmPassword.message})]})]}),l("div",{className:"d-flex justify-content-between",children:[l(h,{color:"secondary",className:"btn-prev",outline:!0,disabled:!0,children:[e(g,{size:14,className:"align-middle me-sm-25 me-0"}),e("span",{className:"align-middle d-sm-inline-block d-none",children:"Previous"})]}),l(h,{type:"submit",color:"primary",className:"btn-next",children:[e("span",{className:"align-middle d-sm-inline-block d-none",children:"Next"}),e(w,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})},X=()=>{const t=o.exports.useRef(null),[a,c]=o.exports.useState(null);return e("div",{className:"horizontal-wizard",children:e(A,{instance:s=>c(s),ref:t,steps:[{id:"account-details",title:"Account Details",subtitle:"Enter Your Account Details.",content:e(Q,{stepper:a})},{id:"personal-info",title:"Personal Info",subtitle:"Add Personal Info",content:e(G,{stepper:a})},{id:"step-address",title:"Address",subtitle:"Add Address",content:e(q,{stepper:a})},{id:"social-links",title:"Social Links",subtitle:"Add Social Links",content:e(K,{stepper:a})}]})})},Z=()=>{const t=o.exports.useRef(null),[a,c]=o.exports.useState(null);return e("div",{className:"modern-vertical-wizard",children:e(A,{type:"modern-vertical",ref:t,steps:[{id:"account-details",title:"Account Details",subtitle:"Enter Your Account Details.",icon:e(L,{size:18}),content:e(C,{stepper:a,type:"modern-vertical"})},{id:"personal-info",title:"Personal Info",subtitle:"Add Personal Info",icon:e(I,{size:18}),content:e(j,{stepper:a,type:"modern-vertical"})},{id:"step-address",title:"Address",subtitle:"Add Address",icon:e(E,{size:18}),content:e(P,{stepper:a,type:"modern-vertical"})},{id:"social-links",title:"Social Links",subtitle:"Add Social Links",icon:e(D,{size:18}),content:e(F,{stepper:a,type:"modern-vertical"})}],options:{linear:!1},instance:s=>c(s)})})},te=()=>l(o.exports.Fragment,{children:[e(W,{title:"Form Wizard",data:[{title:"Form"},{title:"Form Wizard"}]}),l(m,{children:[e(r,{sm:"12",children:e(X,{})}),e(r,{sm:"12",children:e(R,{})}),e(r,{sm:"12",children:e(O,{})}),e(r,{sm:"12",children:e(Z,{})})]})]});export{te as default};

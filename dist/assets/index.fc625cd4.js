import{r as a,o,j as e,ae as l,af as t,aX as m,aZ as C,ag as h,aY as u,W as b,E as y,ao as x}from"./index.b8b13c58.js";import{l as f}from"./index.7db64dc2.js";import{E as g}from"./index.7e8188ae.js";const R=()=>{const[r,i]=a.exports.useState("Copy Me!"),[d,s]=a.exports.useState(!1),n=({target:{value:p}})=>{i(p),d&&s(!1)},c=()=>{s(!0),x.success("Copied To Clipboard !")};return o(a.exports.Fragment,{children:[e(g,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),e(l,{children:e(t,{sm:"12",children:o(m,{children:[e(C,{children:e(h,{tag:"h4",children:"Clipboard"})}),e(u,{children:o(l,{children:[e(t,{xl:"3",md:"4",sm:"6",className:"pe-sm-0 mb-md-0 mb-1",children:e(b,{value:r,onChange:n})}),e(t,{md:"2",sm:"12",children:e(f.CopyToClipboard,{onCopy:c,text:r,children:e(y,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})};export{R as default};

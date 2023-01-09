import{o as a,aX as p,aZ as f,j as e,ag as g,ah as v,aY as u,r as i,M as w,U as C,D as z,t as S,v as k,k as y,cx as A,ae as m,af as l}from"./index.b8b13c58.js";import{B as j}from"./index.4c823db6.js";import{S as R,A as M,a as F}from"./SupportTracker.9bcc0371.js";import{_ as b}from"./react-apexcharts.min.a793d200.js";import{at as D,aR as T,b5 as x,b3 as _,b1 as B}from"./App.e1b9a34b.js";import{R as I,G as L,E as $}from"./RevenueReport.a9c658ad.js";/* empty css                    */const E=s=>{const n={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[s.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"},formatter(o){return o>999?`${(o/1e3).toFixed(1)}k`:o}}},tooltip:{x:{show:!1}}};return a(p,{children:[a(f,{className:"align-items-start",children:[a("div",{children:[e(g,{className:"mb-25",tag:"h4",children:"Sales"}),e(v,{className:"mb-0",children:"2020 Total Sales: 12.84k"})]}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),e(u,{className:"pb-0",children:e(b,{options:n,series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],type:"line",height:240})})]})},P=s=>{const[n,c]=i.exports.useState(null);i.exports.useEffect(()=>{w.get("/card/card-analytics/revenue").then(t=>c(t.data))},[]);const o={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[s.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter(t){return t>999?`${(t/1e3).toFixed(0)}k`:t}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}};return n!==null?a(p,{children:[a(f,{children:[e(g,{tag:"h4",children:"Revenue"}),e(D,{size:18,className:"text-muted cursor-pointer"})]}),a(u,{children:[a("div",{className:"d-flex justify-content-start mb-3",children:[a("div",{className:"me-2",children:[e(v,{className:"mb-50",children:"This Month"}),a("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{className:"text-primary",children:"86,589"})]})]}),a("div",{children:[e(v,{className:"mb-50",children:"Last Month"}),a("h3",{className:"fw-bolder",children:[e("sup",{className:"font-medium-1 fw-bold me-25",children:"$"}),e("span",{children:"73,683"})]})]})]}),e(b,{options:o,series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],type:"line",height:240})]})]}):null},O=s=>{const[n,c]=i.exports.useState(null);i.exports.useEffect(()=>{w.get("/card/card-analytics/customers").then(r=>c(r.data))},[]);const o={chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[s.primary,s.warning,s.danger]},d=[690,258,149],t=()=>n.listData.map((r,h)=>{const N=T[r.icon];return a("div",{className:y("d-flex justify-content-between",{"mb-1":h!==n.listData.length-1}),children:[a("div",{className:"d-flex align-items-center",children:[e(N,{size:15,className:y({[r.iconColor]:r.iconColor})}),e("span",{className:"fw-bold ms-75",children:r.text})]}),e("span",{children:r.result})]},h)});return n!==null?a(p,{children:[a(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Customers"}),a(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:n.last_days.map(r=>e(k,{className:"w-100",children:r},r))})]})]}),a(u,{children:[e(b,{options:o,series:d,type:"pie",height:325}),e("div",{className:"pt-25",children:t()})]})]}):null},J=s=>{const[n,c]=i.exports.useState(null);i.exports.useEffect(()=>{w.get("/card/card-analytics/product-orders").then(t=>c(t.data))},[]);const o={labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter(){return 42459}}}}},colors:[s.primary,s.warning,s.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}},d=[70,52,26];return n!==null?a(p,{children:[a(f,{children:[e(g,{tag:"h4",children:"Product Orders"}),a(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:n.last_days.map(t=>e(k,{className:"w-100",children:t},t))})]})]}),a(u,{children:[e(b,{options:o,series:d,type:"radialBar",height:325}),a("div",{className:"d-flex justify-content-between mb-1",children:[a("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-primary"}),e("span",{className:"fw-bold ms-75",children:"Finished"})]}),e("span",{children:n.chart_info.finished})]}),a("div",{className:"d-flex justify-content-between mb-1",children:[a("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-warning"}),e("span",{className:"fw-bold ms-75",children:"Pending"})]}),e("span",{children:n.chart_info.pending})]}),a("div",{className:"d-flex justify-content-between",children:[a("div",{className:"d-flex align-items-center",children:[e(x,{size:15,className:"text-danger"}),e("span",{className:"fw-bold ms-75",children:"Rejected"})]}),e("span",{children:n.chart_info.rejected})]})]})]}):null},U=s=>{const[n,c]=i.exports.useState(null);i.exports.useEffect(()=>{w.get("/card/card-analytics/sessions-device").then(r=>c(r.data))},[]);const o={chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[s.primary,s.warning,s.danger]},d=[58.6,34.9,6.5],t=()=>n.chart_info.map((r,h)=>{const N=T[r.icon];return a("div",{className:y("d-flex justify-content-between",{"mb-1":h!==n.chart_info.length-1}),children:[a("div",{className:"d-flex align-items-center",children:[e(N,{size:17,className:y({[r.iconColor]:r.iconColor})}),e("span",{className:"fw-bold ms-75 me-25",children:r.name}),a("span",{children:["- ",r.usage,"%"]})]}),a("div",{children:[a("span",{children:[r.upDown,"%"]}),r.upDown>0?e(_,{size:14,className:"ms-25 text-success"}):e(B,{size:14,className:"ms-25 text-danger"})]})]},h)});return n!==null?a(p,{children:[a(f,{className:"align-items-end",children:[e(g,{tag:"h4",children:"Session By Device"}),a(C,{className:"chart-dropdown",children:[e(z,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(S,{end:!0,children:n.last_days.map(r=>e(k,{className:"w-100",children:r},r))})]})]}),a(u,{children:[e(b,{className:"my-1",options:o,series:d,type:"donut",height:300}),t()]})]}):null},K=()=>{const s=i.exports.useContext(A);return a(i.exports.Fragment,{children:[e(j,{title:"Analytics Cards",data:[{title:"Cards"},{title:"Analytics Actions"}]}),a(m,{className:"match-height",children:[e(l,{lg:"6",sm:"12",children:e(R,{primary:s.colors.primary.main,danger:s.colors.danger.main})}),e(l,{lg:"6",sm:"12",children:e(M,{primary:s.colors.primary.main})})]}),a(m,{className:"match-height",children:[e(l,{lg:"8",sm:"12",children:e(I,{primary:s.colors.primary.main,warning:s.colors.warning.main})}),e(l,{lg:"4",sm:"12",children:e(L,{success:s.colors.success.main})})]}),a(m,{className:"match-height",children:[e(l,{lg:"8",sm:"12",children:e(P,{primary:s.colors.primary.main})}),e(l,{lg:"4",sm:"12",children:e(F,{primary:s.colors.primary.main,info:s.colors.info.main})})]}),a(m,{className:"match-height",children:[e(l,{lg:"8",sm:"12",children:a(m,{className:"match-height",children:[e(l,{sm:"12",children:e(E,{primary:s.colors.primary.main})}),e(l,{md:"6",sm:"12",children:e(U,{primary:s.colors.primary.main,warning:s.colors.warning.main,danger:s.colors.danger.main})}),e(l,{md:"6",sm:"12",children:e(O,{primary:s.colors.primary.main,warning:s.colors.warning.main,danger:s.colors.danger.main})})]})}),e(l,{lg:"4",sm:"12",children:a(m,{className:"match-height",children:[e(l,{sm:"12",children:e(J,{primary:s.colors.primary.main,warning:s.colors.warning.main,danger:s.colors.danger.main})}),e(l,{sm:"12",children:e($,{success:s.colors.success.main})})]})})]})]})};export{K as default};

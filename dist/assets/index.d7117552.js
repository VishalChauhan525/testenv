import{j as e,o as a,k as p,ae as $,af as A,aX as W,aY as F,W as h,ak as N,E as v,L as P,ah as S,B as z,b0 as G,D as H,t as R,v as x,bC as O,aq as E,ar as j,r as f,bD as M,bE as B,bF as T,h as q,bG as D,bH as J,z as K,bI as U,C as X,bJ as Y}from"./index.b8b13c58.js";import{$ as Q,q as V,ab as Z,ac as _,e as ee,ad as ae,ae as te,S as se,a as re}from"./App.e1b9a34b.js";import{i as le,w as ie}from"./noui-slider.9d25ada5.js";import{B as ce}from"./index.4c823db6.js";const ne=o=>{const{sidebarOpen:t}=o,[l]=Q(),i=[{id:"appliances",title:"Appliances",defaultChecked:!0},{id:"audio",title:"Audio"},{id:"camera-camcorders",title:"Camera & Camcorders"},{id:"car-electronics",title:"Car Electronics & Gps"},{id:"cellphones",title:"Cell Phones"},{id:"computers",title:"Computers & Tablets"},{id:"health-fitness-beauty",title:"Health, Fitness & Beauty"},{id:"office-school",title:"Office & School Supplies"},{id:"tv-home-theater",title:"TV & Home Theater"},{id:"video-games",title:"Video Games"}],c=[{title:"Insignia\u2122",total:746},{title:"Samsung",total:633,checked:!0},{title:"Metra",total:591},{title:"HP",total:530},{title:"Apple",total:422,checked:!0},{title:"GE",total:394},{title:"Sony",total:350},{title:"Incipio",total:320},{title:"KitchenAid",total:318},{title:"Whirlpool",total:298}],n=[{ratings:4,total:160},{ratings:3,total:176},{ratings:2,total:291},{ratings:1,total:190}];return e("div",{className:"sidebar-detached sidebar-left",children:e("div",{className:"sidebar",children:a("div",{className:p("sidebar-shop",{show:t}),children:[e($,{children:e(A,{sm:"12",children:e("h6",{className:"filter-heading d-none d-lg-block",children:"Filters"})})}),e(W,{children:a(F,{children:[a("div",{className:"multi-range-price",children:[e("h6",{className:"filter-title mt-0",children:"Multi Range"}),a("ul",{className:"list-unstyled price-range",children:[e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:"all",name:"price-range-radio",defaultChecked:!0}),e(N,{className:"form-check-label",for:"all",children:"All"})]})}),e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:"10-dollars-below",name:"price-range-radio"}),e(N,{className:"form-check-label",for:"10-dollars-below",children:"<=$10"})]})}),e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:"10-100-dollars",name:"price-range-radio"}),e(N,{className:"form-check-label",for:"10-100-dollars",children:"$10-$100"})]})}),e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:"100-500-dollars",name:"price-range-radio"}),e(N,{className:"form-check-label",for:"100-500-dollars",children:"$100-$500"})]})}),e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:"500-dollars-above",name:"price-range-radio"}),e(N,{className:"form-check-label",for:"500-dollars-above",children:">=$500"})]})})]})]}),a("div",{className:"price-slider",children:[e("h6",{className:"filter-title",children:"Price Range"}),e("div",{className:"price-slider",children:e(le,{className:"range-slider mt-2",direction:l?"rtl":"ltr",start:[1500,3500],connect:!0,tooltips:[!0,!0],format:ie({decimals:0}),range:{min:51,max:5e3}})})]}),a("div",{id:"product-categories",children:[e("h6",{className:"filter-title",children:"Categories"}),e("ul",{className:"list-unstyled categories-list",children:i.map(s=>e("li",{children:a("div",{className:"form-check",children:[e(h,{type:"radio",id:s.id,name:"category-radio",defaultChecked:s.defaultChecked}),e(N,{className:"form-check-label",for:s.id,children:s.title})]})},s.id))})]}),a("div",{className:"brands",children:[e("h6",{className:"filter-title",children:"Brands"}),e("ul",{className:"list-unstyled brand-list",children:c.map(s=>a("li",{children:[a("div",{className:"form-check",children:[e(h,{type:"checkbox",id:s.title,defaultChecked:s.checked}),e(N,{className:"form-check-label",for:s.title,children:s.title})]}),e("span",{children:s.total})]},s.title))})]}),a("div",{id:"ratings",children:[e("h6",{className:"filter-title",children:"Ratings"}),n.map(s=>a("div",{className:"ratings-list",children:[e("a",{href:"/",onClick:m=>m.preventDefault(),children:a("ul",{className:"unstyled-list list-inline",children:[new Array(5).fill().map((m,u)=>e("li",{className:"ratings-list-item me-25",children:e(V,{className:p({"filled-star":u+1<=s.ratings,"unfilled-star":u+1>s.ratings})})},u)),e("li",{children:"& up"})]})}),e("div",{className:"stars-received",children:s.total})]},s.total))]}),e("div",{id:"clear-filters",children:e(v,{color:"primary",block:!0,children:"Clear All Filters"})})]})})]})})})},de=o=>{const{store:t,products:l,dispatch:i,addToCart:c,activeView:n,getProducts:s,getCartItems:m,addToWishlist:u,deleteWishlistItem:w}=o,y=(r,g)=>{g===!1&&i(c(r)),i(m()),i(s(t.params))},b=(r,g)=>{i(g?w(r):u(r)),i(s(t.params))},I=()=>{if(l.length)return l.map(r=>{const g=r.isInCart?P:"button";return a(W,{className:"ecommerce-card",children:[e("div",{className:"item-img text-center mx-auto",children:e(P,{to:`/apps/ecommerce/product-detail/${r.slug}`,children:e("img",{className:"img-fluid card-img-top",src:r.image,alt:r.name})})}),a(F,{children:[a("div",{className:"item-wrapper",children:[e("div",{className:"item-rating",children:e("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((C,d)=>e("li",{className:"ratings-list-item me-25",children:e(V,{className:p({"filled-star":d+1<=r.rating,"unfilled-star":d+1>r.rating})})},d))})}),e("div",{className:"item-cost",children:a("h6",{className:"item-price",children:["$",r.price]})})]}),a("h6",{className:"item-name",children:[e(P,{className:"text-body",to:`/apps/ecommerce/product-detail/${r.slug}`,children:r.name}),a(S,{tag:"span",className:"item-company",children:["By"," ",e("a",{className:"company-name",href:"/",onClick:C=>C.preventDefault(),children:r.brand})]})]}),e(S,{className:"item-description",children:r.description})]}),a("div",{className:"item-options text-center",children:[e("div",{className:"item-wrapper",children:a("div",{className:"item-cost",children:[a("h4",{className:"item-price",children:["$",r.price]}),r.hasFreeShipping?e(S,{className:"shipping",children:e(z,{color:"light-success",children:"Free Shipping"})}):null]})}),a(v,{className:"btn-wishlist",color:"light",onClick:()=>b(r.id,r.isInWishlist),children:[e(Z,{className:p("me-50",{"text-danger":r.isInWishlist}),size:14}),e("span",{children:"Wishlist"})]}),a(v,{color:"primary",tag:g,className:"btn-cart move-cart",onClick:()=>y(r.id,r.isInCart),...r.isInCart?{to:"/apps/ecommerce/checkout"}:{},children:[e(_,{className:"me-50",size:14}),e("span",{children:r.isInCart?"View In Cart":"Add To Cart"})]})]})]},r.name)})};return e("div",{className:p({"grid-view":n==="grid","list-view":n==="list"}),children:I()})},oe=o=>{const{activeView:t,setActiveView:l,dispatch:i,getProducts:c,store:n,setSidebarOpen:s}=o,m={"price-desc":"Highest","price-asc":"Lowest",featured:"Featured"};return e("div",{className:"ecommerce-header",children:e($,{children:e(A,{sm:"12",children:a("div",{className:"ecommerce-header-items",children:[a("div",{className:"result-toggler",children:[e("button",{className:"navbar-toggler shop-sidebar-toggler",onClick:()=>s(!0),children:e("span",{className:"navbar-toggler-icon d-block d-lg-none",children:e(ee,{size:14})})}),a("span",{className:"search-results",children:[n.totalProducts," Results Found"]})]}),a("div",{className:"view-options d-flex",children:[a(G,{className:"dropdown-sort",children:[e(H,{className:"text-capitalize me-1",color:"primary",outline:!0,caret:!0,children:m[n.params.sortBy]}),a(R,{children:[e(x,{className:"w-100",onClick:()=>i(c({...n.params,sortBy:"featured"})),children:"Featured"}),e(x,{className:"w-100",onClick:()=>i(c({...n.params,sortBy:"price-asc"})),children:"Lowest"}),e(x,{className:"w-100",onClick:()=>i(c({...n.params,sortBy:"price-desc"})),children:"Highest"})]})]}),a(O,{children:[e(v,{tag:"label",className:p("btn-icon view-btn grid-view-btn",{active:t==="grid"}),color:"primary",outline:!0,onClick:()=>l("grid"),children:e(ae,{size:18})}),e(v,{tag:"label",className:p("btn-icon view-btn list-view-btn",{active:t==="list"}),color:"primary",outline:!0,onClick:()=>l("list"),children:e(te,{size:18})})]})]})]})})})})},me=o=>{const{dispatch:t,getProducts:l,store:i}=o;return e("div",{id:"ecommerce-searchbar",className:"ecommerce-searchbar",children:e($,{className:"mt-1",children:e(A,{sm:"12",children:a(E,{className:"input-group-merge",children:[e(h,{className:"search-product",placeholder:"Search Product",onChange:c=>t(l({...i.params,q:c.target.value}))}),e(j,{children:e(se,{className:"text-muted",size:14})})]})})})})},he=o=>{const{store:t,dispatch:l,addToCart:i,activeView:c,sidebarOpen:n,getProducts:s,getCartItems:m,addToWishlist:u,setActiveView:w,deleteCartItem:y,setSidebarOpen:b,deleteWishlistItem:I}=o,r=d=>{l(s(d==="next"?{...t.params,page:t.params.page+1}:d==="prev"?{...t.params,page:t.params.page-1}:{...t.params,page:d}))},g=()=>{const d=t.totalProducts!==0&&t.products.length!==0?Number(t.totalProducts)/t.products.length:3;return new Array(Math.trunc(d)).fill().map((pe,k)=>e(B,{active:t.params.page===k+1,onClick:()=>r(k+1),children:e(T,{href:"/",onClick:L=>L.preventDefault(),children:k+1})},k))},C=()=>{t.params.page!==Number(t.totalProducts)/t.products.length&&r("next")};return e("div",{className:"content-detached content-right",children:a("div",{className:"content-body",children:[e(oe,{store:t,dispatch:l,activeView:c,getProducts:s,setActiveView:w,setSidebarOpen:b}),e("div",{className:p("body-content-overlay",{show:n}),onClick:()=>b(!1)}),e(me,{dispatch:l,getProducts:s,store:t}),t.products.length?a(f.exports.Fragment,{children:[e(de,{store:t,dispatch:l,addToCart:i,activeView:c,products:t.products,getProducts:s,getCartItems:m,addToWishlist:u,deleteCartItem:y,deleteWishlistItem:I}),a(M,{className:"d-flex justify-content-center ecommerce-shop-pagination mt-2",children:[e(B,{disabled:t.params.page===1,className:"prev-item",onClick:()=>t.params.page!==1?r("prev"):null,children:e(T,{href:"/",onClick:d=>d.preventDefault()})}),g(),e(B,{className:"next-item",onClick:()=>C(),disabled:t.params.page===Number(t.totalProducts)/t.products.length,children:e(T,{href:"/",onClick:d=>d.preventDefault()})})]})]}):e("div",{className:"d-flex justify-content-center mt-2",children:e("p",{children:"No Results"})})]})})};const ve=()=>{const[o,t]=f.exports.useState("grid"),[l,i]=f.exports.useState(!1),c=re(),n=q(s=>s.ecommerce);return f.exports.useEffect(()=>{c(D({q:"",sortBy:"featured",perPage:9,page:1}))},[c]),a(f.exports.Fragment,{children:[e(ce,{title:"Shop",data:[{title:"eCommerce"},{title:"Shop"}]}),e(he,{store:n,dispatch:c,addToCart:J,activeView:o,getProducts:D,sidebarOpen:l,getCartItems:K,setActiveView:t,addToWishlist:U,setSidebarOpen:i,deleteCartItem:X,deleteWishlistItem:Y}),e(ne,{sidebarOpen:l})]})};export{ve as default};

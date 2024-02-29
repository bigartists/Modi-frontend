import{K as J,j as o,r as f,a as H,g as U,s as P,_ as i,u as z,b as L,c as M,d as D,l as A,a8 as Se,N as ee,a9 as ke,w as Me,I as F,aa as ye,ab as Le,M as le,E as de,ac as Ne,ad as Ae,Q as He,A as Z,y as Ue,T as G,S as Te,a3 as ze,e as O,f as De,B as _e,ae as Fe,a7 as Oe,af as pe,z as Ee,i as We,C as Ve,h as Ke,W as Xe}from"./index-D-TrM5Yy.js";import{l as ue,L as qe}from"./label-_8UvKj5u.js";import{C as je}from"./Checkbox-ELUkxHn8.js";const Ge=J(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Je=J(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Qe=f.createContext(),Ce=Qe;function Ye(e){return H("MuiTable",e)}U("MuiTable",["root","stickyHeader"]);const Ze=["className","component","padding","size","stickyHeader"],et=e=>{const{classes:t,stickyHeader:s}=e;return D({root:["root",s&&"stickyHeader"]},Ye,t)},tt=P("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>i({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":i({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),ge="table",ot=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTable"}),{className:a,component:l=ge,padding:c="normal",size:d="medium",stickyHeader:r=!1}=n,x=L(n,Ze),p=i({},n,{component:l,padding:c,size:d,stickyHeader:r}),v=et(p),m=f.useMemo(()=>({padding:c,size:d,stickyHeader:r}),[c,d,r]);return o.jsx(Ce.Provider,{value:m,children:o.jsx(tt,i({as:l,role:l===ge?null:"table",ref:s,className:M(v.root,a),ownerState:p},x))})}),st=ot,nt=f.createContext(),te=nt;function at(e){return H("MuiTableBody",e)}U("MuiTableBody",["root"]);const lt=["className","component"],rt=e=>{const{classes:t}=e;return D({root:["root"]},at,t)},it=P("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),ct={variant:"body"},be="tbody",dt=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableBody"}),{className:a,component:l=be}=n,c=L(n,lt),d=i({},n,{component:l}),r=rt(d);return o.jsx(te.Provider,{value:ct,children:o.jsx(it,i({className:M(r.root,a),as:l,ref:s,role:l===be?null:"rowgroup",ownerState:d},c))})}),pt=dt;function ut(e){return H("MuiTableCell",e)}const gt=U("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),bt=gt,xt=["align","className","component","padding","scope","size","sortDirection","variant"],ht=e=>{const{classes:t,variant:s,align:n,padding:a,size:l,stickyHeader:c}=e,d={root:["root",s,c&&"stickyHeader",n!=="inherit"&&`align${A(n)}`,a!=="normal"&&`padding${A(a)}`,`size${A(l)}`]};return D(d,ut,t)},ft=P("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${A(s.size)}`],s.padding!=="normal"&&t[`padding${A(s.padding)}`],s.align!=="inherit"&&t[`align${A(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>i({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Se(ee(e.palette.divider,1),.88):ke(ee(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${bt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),vt=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableCell"}),{align:a="inherit",className:l,component:c,padding:d,scope:r,size:x,sortDirection:p,variant:v}=n,m=L(n,xt),y=f.useContext(Ce),T=f.useContext(te),N=T&&T.variant==="head";let R;c?R=c:R=N?"th":"td";let h=r;R==="td"?h=void 0:!h&&N&&(h="col");const C=v||T&&T.variant,B=i({},n,{align:a,component:R,padding:d||(y&&y.padding?y.padding:"normal"),size:x||(y&&y.size?y.size:"medium"),sortDirection:p,stickyHeader:C==="head"&&y&&y.stickyHeader,variant:C}),g=ht(B);let b=null;return p&&(b=p==="asc"?"ascending":"descending"),o.jsx(ft,i({as:R,ref:s,className:M(g.root,l),"aria-sort":b,scope:h,ownerState:B},m))}),w=vt;function mt(e){return H("MuiTableContainer",e)}U("MuiTableContainer",["root"]);const yt=["className","component"],Tt=e=>{const{classes:t}=e;return D({root:["root"]},mt,t)},jt=P("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Ct=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableContainer"}),{className:a,component:l="div"}=n,c=L(n,yt),d=i({},n,{component:l}),r=Tt(d);return o.jsx(jt,i({ref:s,as:l,className:M(r.root,a),ownerState:d},c))}),Pt=Ct;function Rt(e){return H("MuiTableHead",e)}U("MuiTableHead",["root"]);const wt=["className","component"],Bt=e=>{const{classes:t}=e;return D({root:["root"]},Rt,t)},It=P("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),$t={variant:"head"},xe="thead",St=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableHead"}),{className:a,component:l=xe}=n,c=L(n,wt),d=i({},n,{component:l}),r=Bt(d);return o.jsx(te.Provider,{value:$t,children:o.jsx(It,i({as:l,className:M(r.root,a),ref:s,role:l===xe?null:"rowgroup",ownerState:d},c))})}),kt=St,Mt=J(o.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Lt=J(o.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),Nt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],At=f.forwardRef(function(t,s){var n,a,l,c,d,r,x,p;const{backIconButtonProps:v,count:m,disabled:y=!1,getItemAriaLabel:T,nextIconButtonProps:N,onPageChange:R,page:h,rowsPerPage:C,showFirstButton:B,showLastButton:g,slots:b={},slotProps:u={}}=t,I=L(t,Nt),j=Me(),se=_=>{R(_,0)},ne=_=>{R(_,h-1)},E=_=>{R(_,h+1)},$=_=>{R(_,Math.max(0,Math.ceil(m/C)-1))},S=(n=b.firstButton)!=null?n:F,W=(a=b.lastButton)!=null?a:F,V=(l=b.nextButton)!=null?l:F,Q=(c=b.previousButton)!=null?c:F,K=(d=b.firstButtonIcon)!=null?d:Ge,Y=(r=b.lastButtonIcon)!=null?r:Je,k=(x=b.nextButtonIcon)!=null?x:Lt,re=(p=b.previousButtonIcon)!=null?p:Mt,Pe=j.direction==="rtl"?W:S,Re=j.direction==="rtl"?V:Q,we=j.direction==="rtl"?Q:V,Be=j.direction==="rtl"?S:W,Ie=j.direction==="rtl"?u.lastButton:u.firstButton,ie=j.direction==="rtl"?u.nextButton:u.previousButton,ce=j.direction==="rtl"?u.previousButton:u.nextButton,$e=j.direction==="rtl"?u.firstButton:u.lastButton;return o.jsxs("div",i({ref:s},I,{children:[B&&o.jsx(Pe,i({onClick:se,disabled:y||h===0,"aria-label":T("first",h),title:T("first",h)},Ie,{children:j.direction==="rtl"?o.jsx(Y,i({},u.lastButtonIcon)):o.jsx(K,i({},u.firstButtonIcon))})),o.jsx(Re,i({onClick:ne,disabled:y||h===0,color:"inherit","aria-label":T("previous",h),title:T("previous",h)},ie??v,{children:j.direction==="rtl"?o.jsx(k,i({},u.nextButtonIcon)):o.jsx(re,i({},u.previousButtonIcon))})),o.jsx(we,i({onClick:E,disabled:y||(m!==-1?h>=Math.ceil(m/C)-1:!1),color:"inherit","aria-label":T("next",h),title:T("next",h)},ce??N,{children:j.direction==="rtl"?o.jsx(re,i({},u.previousButtonIcon)):o.jsx(k,i({},u.nextButtonIcon))})),g&&o.jsx(Be,i({onClick:$,disabled:y||h>=Math.ceil(m/C)-1,"aria-label":T("last",h),title:T("last",h)},$e,{children:j.direction==="rtl"?o.jsx(K,i({},u.firstButtonIcon)):o.jsx(Y,i({},u.lastButtonIcon))}))]}))}),Ht=At;function Ut(e){return H("MuiTablePagination",e)}const zt=U("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),q=zt;var he;const Dt=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],_t=P(w,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),Ft=P(ye,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>i({[`& .${q.actions}`]:t.actions},t.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${q.actions}`]:{flexShrink:0,marginLeft:20}})),Ot=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),Et=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})(({theme:e})=>i({},e.typography.body2,{flexShrink:0})),Wt=P(Le,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>i({[`& .${q.selectIcon}`]:t.selectIcon,[`& .${q.select}`]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${q.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),Vt=P(le,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),Kt=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})(({theme:e})=>i({},e.typography.body2,{flexShrink:0}));function Xt({from:e,to:t,count:s}){return`${e}–${t} of ${s!==-1?s:`more than ${t}`}`}function qt(e){return`Go to ${e} page`}const Gt=e=>{const{classes:t}=e;return D({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},Ut,t)},Jt=f.forwardRef(function(t,s){var n;const a=z({props:t,name:"MuiTablePagination"}),{ActionsComponent:l=Ht,backIconButtonProps:c,className:d,colSpan:r,component:x=w,count:p,disabled:v=!1,getItemAriaLabel:m=qt,labelDisplayedRows:y=Xt,labelRowsPerPage:T="Rows per page:",nextIconButtonProps:N,onPageChange:R,onRowsPerPageChange:h,page:C,rowsPerPage:B,rowsPerPageOptions:g=[10,25,50,100],SelectProps:b={},showFirstButton:u=!1,showLastButton:I=!1,slotProps:j={},slots:se={}}=a,ne=L(a,Dt),E=a,$=Gt(E),S=(n=j==null?void 0:j.select)!=null?n:b,W=S.native?"option":Vt;let V;(x===w||x==="td")&&(V=r||1e3);const Q=de(S.id),K=de(S.labelId),Y=()=>p===-1?(C+1)*B:B===-1?p:Math.min(p,(C+1)*B);return o.jsx(_t,i({colSpan:V,ref:s,as:x,ownerState:E,className:M($.root,d)},ne,{children:o.jsxs(Ft,{className:$.toolbar,children:[o.jsx(Ot,{className:$.spacer}),g.length>1&&o.jsx(Et,{className:$.selectLabel,id:K,children:T}),g.length>1&&o.jsx(Wt,i({variant:"standard"},!S.variant&&{input:he||(he=o.jsx(Ne,{}))},{value:B,onChange:h,id:Q,labelId:K},S,{classes:i({},S.classes,{root:M($.input,$.selectRoot,(S.classes||{}).root),select:M($.select,(S.classes||{}).select),icon:M($.selectIcon,(S.classes||{}).icon)}),disabled:v,children:g.map(k=>f.createElement(W,i({},!Ae(W)&&{ownerState:E},{className:$.menuItem,key:k.label?k.label:k,value:k.value?k.value:k}),k.label?k.label:k))})),o.jsx(Kt,{className:$.displayedRows,children:y({from:p===0?0:C*B+1,to:Y(),count:p===-1?-1:p,page:C})}),o.jsx(l,{className:$.actions,backIconButtonProps:c,count:p,nextIconButtonProps:N,onPageChange:R,page:C,rowsPerPage:B,showFirstButton:u,showLastButton:I,slotProps:j.actions,slots:se.actions,getItemAriaLabel:m,disabled:v})]})}))}),Qt=Jt;function Yt(e){return H("MuiTableRow",e)}const Zt=U("MuiTableRow",["root","selected","hover","head","footer"]),fe=Zt,eo=["className","component","hover","selected"],to=e=>{const{classes:t,selected:s,hover:n,head:a,footer:l}=e;return D({root:["root",s&&"selected",n&&"hover",a&&"head",l&&"footer"]},Yt,t)},oo=P("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${fe.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${fe.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ee(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ee(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ve="tr",so=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableRow"}),{className:a,component:l=ve,hover:c=!1,selected:d=!1}=n,r=L(n,eo),x=f.useContext(te),p=i({},n,{component:l,hover:c,selected:d,head:x&&x.variant==="head",footer:x&&x.variant==="footer"}),v=to(p);return o.jsx(oo,i({as:l,ref:s,className:M(v.root,a),role:l===ve?null:"row",ownerState:p},r))}),oe=so,no=J(o.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function ao(e){return H("MuiTableSortLabel",e)}const lo=U("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),ae=lo,ro=["active","children","className","direction","hideSortIcon","IconComponent"],io=e=>{const{classes:t,direction:s,active:n}=e,a={root:["root",n&&"active"],icon:["icon",`iconDirection${A(s)}`]};return D(a,ao,t)},co=P(He,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.active&&t.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${ae.icon}`]:{opacity:.5}},[`&.${ae.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${ae.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),po=P("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.icon,t[`iconDirection${A(s.direction)}`]]}})(({theme:e,ownerState:t})=>i({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},t.direction==="desc"&&{transform:"rotate(0deg)"},t.direction==="asc"&&{transform:"rotate(180deg)"})),uo=f.forwardRef(function(t,s){const n=z({props:t,name:"MuiTableSortLabel"}),{active:a=!1,children:l,className:c,direction:d="asc",hideSortIcon:r=!1,IconComponent:x=no}=n,p=L(n,ro),v=i({},n,{active:a,direction:d,hideSortIcon:r,IconComponent:x}),m=io(v);return o.jsxs(co,i({className:M(m.root,c),component:"span",disableRipple:!0,ownerState:v,ref:s},p,{children:[l,r&&!a?null:o.jsx(po,{as:x,className:M(m.icon),ownerState:v})]}))}),go=uo,X=[...Array(24)].map((e,t)=>({id:Z.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${t+1}.jpg`,name:Z.person.fullName(),company:Z.company.name(),isVerified:Z.datatype.boolean(),status:ue.sample(["active","banned"]),role:ue.sample(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}));function bo({query:e}){return o.jsx(oe,{children:o.jsx(w,{align:"center",colSpan:6,sx:{py:3},children:o.jsxs(Ue,{sx:{textAlign:"center"},children:[o.jsx(G,{variant:"h6",paragraph:!0,children:"Not found"}),o.jsxs(G,{variant:"body2",children:["No results found for  ",o.jsxs("strong",{children:['"',e,'"']}),".",o.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}function xo({selected:e,name:t,avatarUrl:s,company:n,role:a,isVerified:l,status:c,handleClick:d}){const[r,x]=f.useState(null),p=m=>{x(m.currentTarget)},v=()=>{x(null)};return o.jsxs(o.Fragment,{children:[o.jsxs(oe,{hover:!0,tabIndex:-1,role:"checkbox",selected:e,children:[o.jsx(w,{padding:"checkbox",children:o.jsx(je,{disableRipple:!0,checked:e,onChange:d})}),o.jsx(w,{component:"th",scope:"row",padding:"none",children:o.jsxs(Te,{direction:"row",alignItems:"center",spacing:2,children:[o.jsx(ze,{alt:t,src:s}),o.jsx(G,{variant:"subtitle2",noWrap:!0,children:t})]})}),o.jsx(w,{children:n}),o.jsx(w,{children:a}),o.jsx(w,{align:"center",children:l?"Yes":"No"}),o.jsx(w,{children:o.jsx(qe,{color:c==="banned"&&"error"||"success",children:c})}),o.jsx(w,{align:"right",children:o.jsx(F,{onClick:p,children:o.jsx(O,{icon:"eva:more-vertical-fill"})})})]}),o.jsxs(De,{open:!!r,anchorEl:r,onClose:v,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[o.jsxs(le,{onClick:v,children:[o.jsx(O,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),o.jsxs(le,{onClick:v,sx:{color:"error.main"},children:[o.jsx(O,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}const ho={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function fo(e,t,s){return e?Math.max(0,(1+e)*t-s):0}function me(e,t,s){return e[s]===null?1:t[s]===null||t[s]<e[s]?-1:t[s]>e[s]?1:0}function vo(e,t){return e==="desc"?(s,n)=>me(s,n,t):(s,n)=>-me(s,n,t)}function mo({inputData:e,comparator:t,filterName:s}){const n=e.map((a,l)=>[a,l]);return n.sort((a,l)=>{const c=t(a[0],l[0]);return c!==0?c:a[1]-l[1]}),e=n.map(a=>a[0]),s&&(e=e.filter(a=>a.name.toLowerCase().indexOf(s.toLowerCase())!==-1)),e}function yo({order:e,orderBy:t,rowCount:s,headLabel:n,numSelected:a,onRequestSort:l,onSelectAllClick:c}){const d=r=>x=>{l(x,r)};return o.jsx(kt,{children:o.jsxs(oe,{children:[o.jsx(w,{padding:"checkbox",children:o.jsx(je,{indeterminate:a>0&&a<s,checked:s>0&&a===s,onChange:c})}),n.map(r=>o.jsx(w,{align:r.align||"left",sortDirection:t===r.id?e:!1,sx:{width:r.width,minWidth:r.minWidth},children:o.jsxs(go,{hideSortIcon:!0,active:t===r.id,direction:t===r.id?e:"asc",onClick:d(r.id),children:[r.label,t===r.id?o.jsx(_e,{sx:{...ho},children:e==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))]})})}function To({emptyRows:e,height:t}){return e?o.jsx(oe,{sx:{...t&&{height:t*e}},children:o.jsx(w,{colSpan:9})}):null}function jo({numSelected:e,filterName:t,onFilterName:s}){return o.jsxs(ye,{sx:{height:96,display:"flex",justifyContent:"space-between",p:n=>n.spacing(0,1,0,3),...e>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[e>0?o.jsxs(G,{component:"div",variant:"subtitle1",children:[e," selected"]}):o.jsx(Fe,{value:t,onChange:s,placeholder:"Search user...",startAdornment:o.jsx(Oe,{position:"start",children:o.jsx(O,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e>0?o.jsx(pe,{title:"Delete",children:o.jsx(F,{children:o.jsx(O,{icon:"eva:trash-2-fill"})})}):o.jsx(pe,{title:"Filter list",children:o.jsx(F,{children:o.jsx(O,{icon:"ic:round-filter-list"})})})]})}function Co(){const[e,t]=f.useState(0),[s,n]=f.useState("asc"),[a,l]=f.useState([]),[c,d]=f.useState("name"),[r,x]=f.useState(""),[p,v]=f.useState(5),m=(g,b)=>{b!==""&&(n(c===b&&s==="asc"?"desc":"asc"),d(b))},y=g=>{if(g.target.checked){const b=X.map(u=>u.name);l(b);return}l([])},T=(g,b)=>{const u=a.indexOf(b);let I=[];u===-1?I=I.concat(a,b):u===0?I=I.concat(a.slice(1)):u===a.length-1?I=I.concat(a.slice(0,-1)):u>0&&(I=I.concat(a.slice(0,u),a.slice(u+1))),l(I)},N=(g,b)=>{t(b)},R=g=>{t(0),v(parseInt(g.target.value,10))},h=g=>{t(0),x(g.target.value)},C=mo({inputData:X,comparator:vo(s,c),filterName:r}),B=!C.length&&!!r;return o.jsxs(Ee,{children:[o.jsxs(Te,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[o.jsx(G,{variant:"h4",children:"Users"}),o.jsx(We,{variant:"contained",color:"inherit",startIcon:o.jsx(O,{icon:"eva:plus-fill"}),children:"New User"})]}),o.jsxs(Ve,{children:[o.jsx(jo,{numSelected:a.length,filterName:r,onFilterName:h}),o.jsx(Ke,{children:o.jsx(Pt,{sx:{overflow:"unset"},children:o.jsxs(st,{sx:{minWidth:800},children:[o.jsx(yo,{order:s,orderBy:c,rowCount:X.length,numSelected:a.length,onRequestSort:m,onSelectAllClick:y,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),o.jsxs(pt,{children:[C.slice(e*p,e*p+p).map(g=>o.jsx(xo,{name:g.name,role:g.role,status:g.status,company:g.company,avatarUrl:g.avatarUrl,isVerified:g.isVerified,selected:a.indexOf(g.name)!==-1,handleClick:b=>T(b,g.name)},g.id)),o.jsx(To,{height:77,emptyRows:fo(e,p,X.length)}),B&&o.jsx(bo,{query:r})]})]})})}),o.jsx(Qt,{page:e,component:"div",count:X.length,rowsPerPage:p,onPageChange:N,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:R})]})]})}function Bo(){return o.jsxs(o.Fragment,{children:[o.jsx(Xe,{children:o.jsx("title",{children:" User | Modi "})}),o.jsx(Co,{})]})}export{Bo as default};
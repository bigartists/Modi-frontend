import{a as D,g as G,s as y,Q as J,_ as a,ai as E,r as B,b as O,F as X,ag as Y,j as i,c as U,l as x,d as H,K as S,aw as R,N as Z,u as ee,ax as oe}from"./index-D-TrM5Yy.js";function te(e){return D("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=e=>{const{classes:o,checked:t,disabled:r,edge:s}=e,c={root:["root",t&&"checked",r&&"disabled",s&&`edge${x(s)}`],input:["input"]};return H(c,te,o)},ne=y(J)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ae=y("input",{shouldForwardProp:E})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=B.forwardRef(function(o,t){const{autoFocus:r,checked:s,checkedIcon:c,className:u,defaultChecked:C,disabled:I,disableFocusRipple:d=!1,edge:b=!1,icon:z,id:p,inputProps:F,inputRef:P,name:g,onBlur:h,onChange:f,onFocus:m,readOnly:L,required:M=!1,tabIndex:V,type:v,value:j}=o,q=O(o,se),[w,K]=X({controlled:s,default:!!C,name:"SwitchBase",state:"checked"}),l=Y(),Q=n=>{m&&m(n),l&&l.onFocus&&l.onFocus(n)},T=n=>{h&&h(n),l&&l.onBlur&&l.onBlur(n)},W=n=>{if(n.nativeEvent.defaultPrevented)return;const _=n.target.checked;K(_),f&&f(n,_)};let k=I;l&&typeof k>"u"&&(k=l.disabled);const A=v==="checkbox"||v==="radio",$=a({},o,{checked:w,disabled:k,disableFocusRipple:d,edge:b}),N=ce($);return i.jsxs(ne,a({component:"span",className:U(N.root,u),centerRipple:!0,focusRipple:!d,disabled:k,tabIndex:null,role:void 0,onFocus:Q,onBlur:T,ownerState:$,ref:t},q,{children:[i.jsx(ae,a({autoFocus:r,checked:s,defaultChecked:C,className:N.input,disabled:k,id:A?p:void 0,name:g,onChange:W,readOnly:L,ref:P,required:M,ownerState:$,tabIndex:V,type:v},v==="checkbox"&&j===void 0?{}:{value:j},F)),w?c:z]}))}),re=ie,le=S(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),de=S(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ue=S(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),pe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],he=e=>{const{classes:o,indeterminate:t,color:r,size:s}=e,c={root:["root",t&&"indeterminate",`color${x(r)}`,`size${x(s)}`]},u=H(c,oe,o);return a({},o,u)},fe=y(re,{shouldForwardProp:e=>E(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${R.checked}, &.${R.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${R.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),me=i.jsx(de,{}),ke=i.jsx(le,{}),xe=i.jsx(ue,{}),Ce=B.forwardRef(function(o,t){var r,s;const c=ee({props:o,name:"MuiCheckbox"}),{checkedIcon:u=me,color:C="primary",icon:I=ke,indeterminate:d=!1,indeterminateIcon:b=xe,inputProps:z,size:p="medium",className:F}=c,P=O(c,pe),g=d?b:I,h=d?b:u,f=a({},c,{color:C,indeterminate:d,size:p}),m=he(f);return i.jsx(fe,a({type:"checkbox",inputProps:a({"data-indeterminate":d},z),icon:B.cloneElement(g,{fontSize:(r=g.props.fontSize)!=null?r:p}),checkedIcon:B.cloneElement(h,{fontSize:(s=h.props.fontSize)!=null?s:p}),ownerState:f,ref:t,className:U(m.root,F)},P,{classes:m}))}),ge=Ce;export{ge as C,re as S};
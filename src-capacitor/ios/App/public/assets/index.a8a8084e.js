var Xe=Object.defineProperty,Ye=Object.defineProperties;var Je=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var be=(e,t,a)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,T=(e,t)=>{for(var a in t||(t={}))et.call(t,a)&&be(e,a,t[a]);if(ye)for(var a of ye(t))tt.call(t,a)&&be(e,a,t[a]);return e},V=(e,t)=>Ye(e,Je(t));import{m as O,f as P,p as S,q as b,d as v,a9 as te,aa as W,G as ae,Q,j as $,l as at,k as q,a6 as R,x as h,r as C,u as Le,H as He,N as Oe,y as D,c as w,h as H,B as le,al as ie,c6 as ot,am as ue,c7 as nt,g as N,c8 as Fe,a3 as Me,c9 as rt,ca as lt,cb as Pe,a4 as it,cc as xe,w as L,o as ut,z as se,cd as st,ce as oe,cf as ke,cg as ct,ch as dt,ci as mt,cj as ft,ck as vt,cl as ht,cm as gt,cn as pt,co as yt,cp as bt,cq as Pt,cr as Ce,cs as xt,ct as kt,cu as Ct,cv as wt,cw as qt,cx as St,A as Tt,a5 as _t,af as we,cy as $t,c5 as Bt,ae as Et,F as Lt,ab as Ht,cz as Ot,cA as Ft,a7 as G,cB as Mt,ad as qe,b as Y}from"./index.3f04a291.js";import"./Events.0c3c3b8f.js";import{a as At}from"./ProvidersActions.8433c3a2.js";import{g as Vt}from"./ProductsActions.f612ad44.js";import{Q as ne}from"./QImg.0df2fd1c.js";import{Q as Qt}from"./style.b43d0c68.js";import{Q as Rt}from"./QForm.e0ad6fb4.js";/* empty css               *//* empty css                */import{_ as Wt}from"./BaseLoading.132b2af5.js";import{D as Se}from"./didperu-dark.b27a34e1.js";import{D as zt}from"./didperu.774c3852.js";import{c as It}from"./confirmBeforeExit.05973b79.js";const Dt=O({__name:"SearchBar",props:{placeholder:null,queryValue:null},emits:["update:queryValue","onSearch","onClear"],setup(e){return(t,a)=>(P(),S(Rt,{class:"SearchBar__form",onSubmit:a[2]||(a[2]=o=>t.$emit("onSearch"))},{default:b(()=>[v(ae,{"bg-color":"secondary",outlined:"",placeholder:e.placeholder,"onUpdate:modelValue":a[1]||(a[1]=o=>t.$emit("update:queryValue",o)),"model-value":e.queryValue,class:"SearchBar__input",rounded:!1},{append:b(()=>{var o;return[(o=e.queryValue)!=null&&o.length?(P(),S(te,{key:0,name:"close",onClick:a[0]||(a[0]=n=>t.$emit("onClear")),class:"cursor-pointer"})):W("",!0)]}),_:1},8,["placeholder","model-value"]),v(Q,{unelevated:"",type:"submit",color:"primary",icon:"search",class:"providerHeader__form_button"})]),_:1}))}}),Nt=["width","height"],Gt=at('<g id="Grupo_13260" data-name="Grupo 13260" transform="translate(-28.358 0.5)"><g id="Grupo_11172" data-name="Grupo 11172" transform="translate(28.861)"><g id="shopping-bag_1_" data-name="shopping-bag (1)" transform="translate(0)"><g id="Grupo_11169" data-name="Grupo 11169" transform="translate(0)"><g id="Grupo_11168" data-name="Grupo 11168"><path id="Trazado_31565" data-name="Trazado 31565" d="M76.793,24.739,75.453,7.858a2.11,2.11,0,0,0-2.094-1.94H70.712V5.8a5.8,5.8,0,1,0-11.6,0v.119H56.468a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886A4.885,4.885,0,0,0,57.9,30H71.922a4.885,4.885,0,0,0,4.87-5.261ZM60.872,5.8a4.042,4.042,0,1,1,8.083,0v.119H60.872ZM74.217,27.241a3.1,3.1,0,0,1-2.295,1H57.9a3.127,3.127,0,0,1-3.119-3.364l1.34-16.886a.345.345,0,0,1,.342-.317h2.646V9.839a.879.879,0,1,0,1.757,0V7.675h8.083V9.839a.879.879,0,0,0,1.757,0V7.675h2.646a.345.345,0,0,1,.342.319l1.34,16.882A3.1,3.1,0,0,1,74.217,27.241Z" transform="translate(-53.02)" stroke-width="1"></path></g></g><g id="Grupo_11171" data-name="Grupo 11171" transform="translate(7.678 14.642)"><g id="Grupo_11170" data-name="Grupo 11170" transform="translate(0)"><path id="Trazado_31566" data-name="Trazado 31566" d="M192.226,250.15a.878.878,0,0,0-1.242,0l-3.923,3.923-1.509-1.509a.879.879,0,0,0-1.243,1.243l2.13,2.13a.878.878,0,0,0,1.242,0l4.544-4.544A.879.879,0,0,0,192.226,250.15Z" transform="translate(-184.052 -249.893)" stroke-width="1"></path></g></g></g></g></g>',1),Ut=[Gt],jt={__name:"shoppingCartIcon",props:{width:{type:Number,default:24.792},height:{type:Number,default:31}},setup(e){return(t,a)=>(P(),$("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:"0 0 24.792 31",fill:"currentColor"},Ut,8,Nt))}},Kt={class:"header-with-search-bar"},Zt={class:"header-with-search-bar__top-container"},Xt={key:1,class:"header-with-search-bar__title"},Yt=O({__name:"HeaderWithSearchBar",props:{queryValue:null,logoUrl:null,title:null,showShoppingCart:{type:Boolean},hasProductsOnCart:{type:Boolean}},emits:["update:queryValue","onClear","onSearch"],setup(e){return(t,a)=>(P(),$("div",Kt,[q("div",Zt,[e.logoUrl?(P(),S(ne,{key:0,class:"header-with-search-bar__img",src:e.logoUrl},null,8,["src"])):(P(),$("h2",Xt,R(e.title),1)),e.showShoppingCart?(P(),S(Q,{key:2,class:"header-with-search-bar__cart-btn",onClick:a[0]||(a[0]=o=>t.$router.push({name:"shoppingCart"})),size:"10px",round:"",color:"accent"},{default:b(()=>[v(jt,{width:15.67,height:19.76},null,8,["width","height"]),e.hasProductsOnCart?(P(),S(Qt,{key:0,class:"header-with-search-bar__btn-badge",floating:"",rounded:"",color:"red"})):W("",!0)]),_:1})):W("",!0)]),v(h(Dt),{onOnSearch:a[1]||(a[1]=o=>t.$emit("onSearch")),onOnClear:a[2]||(a[2]=o=>t.$emit("onClear")),"onUpdate:queryValue":a[3]||(a[3]=o=>t.$emit("update:queryValue",o==null?void 0:o.toString())),queryValue:e.queryValue,placeholder:"Buscar producto...",class:"header-with-search-bar__input"},null,8,["queryValue"])]))}}),Jt=async()=>{const e=C(),a=Le().params.provider;return await At(a).then(o=>{if(e.value=o,!e.value){const n=He();Oe.create({message:"Tuvimos problemas para encontrar al proveedor",type:"negative"}),n.back()}}),{id:a,provider:e}},ea=()=>{const e=C([]),t=C(""),a=C(""),o=C(!1),n=C(),m=C();return{getProductLists:async(c,u)=>{if(!c){const i=He();Oe.create({message:"Ocurri\xF3 un error, asegurate de que el Proveedor que seleccionaste existe",type:"negative"}),i.back();return}o.value=!0,await Vt(c,u).then(i=>{t.value=a.value,e.value=i,o.value=!1})},maxPriceFilter:n,minPriceFilter:m,query:t,products:e,searchText:a,isLoading:o}};var J=D({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>H("div",{class:a.value},le(t.default))}}),ee=D({name:"QItem",props:V(T(T({},ie),ot),{tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:o}}=N(),n=ue(e,o),{hasRouterLink:m,hasLink:r,linkProps:c,linkClass:u,linkTag:i,navigateToRouterLink:f}=nt(),s=C(null),x=C(null),l=w(()=>e.clickable===!0||r.value===!0||e.tag==="label"),g=w(()=>e.disable!==!0&&l.value===!0),F=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?u.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=w(()=>{if(e.insetLevel===void 0)return null;const p=o.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function y(p){g.value===!0&&(x.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===s.value?x.value.focus():document.activeElement===x.value&&s.value.focus()),m.value===!0&&f(p),a("click",p))}function k(p){if(g.value===!0&&Fe(p,13)===!0){Me(p),p.qKeyEvent=!0;const M=new MouseEvent("click",p);M.qKeyEvent=!0,s.value.dispatchEvent(M)}a("keyup",p)}function U(){const p=rt(t.default,[]);return g.value===!0&&p.unshift(H("div",{class:"q-focus-helper",tabindex:-1,ref:x})),p}return()=>{const p={ref:s,class:F.value,style:B.value,onClick:y,onKeyup:k};return g.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,c.value)):l.value===!0&&(p["aria-disabled"]="true"),H(i.value,p,U())}}}),ta=D({name:"QList",props:V(T({},ie),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:t}){const a=N(),o=ue(e,a.proxy.$q),n=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>H("div",{class:n.value},le(t.default))}});function aa(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),lt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const oa={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function na({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:o,proxy:n,emit:m}=N(),r=C(null);let c;function u(l){return r.value===null?!1:l===void 0||l.touches===void 0||l.touches.length<=1}const i={};a===void 0&&(Object.assign(i,{hide(l){n.hide(l)},toggle(l){n.toggle(l),l.qAnchorHandled=!0},toggleKey(l){Fe(l,13)===!0&&i.toggle(l)},contextClick(l){n.hide(l),Pe(l),it(()=>{n.show(l),l.qAnchorHandled=!0})},prevent:Pe,mobileTouch(l){if(i.mobileCleanup(l),u(l)!==!0)return;n.hide(l),r.value.classList.add("non-selectable");const g=l.target;xe(i,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{n.show(l),l.qAnchorHandled=!0},300)},mobileCleanup(l){r.value.classList.remove("non-selectable"),clearTimeout(c),e.value===!0&&l!==void 0&&aa()}}),a=function(l=o.contextMenu){if(o.noParentEvent===!0||r.value===null)return;let g;l===!0?n.$q.platform.is.mobile===!0?g=[[r.value,"touchstart","mobileTouch","passive"]]:g=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:g=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],xe(i,"anchor",g)});function f(){st(i,"anchor")}function s(l){for(r.value=l;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;a()}function x(){if(o.target===!1||o.target==="")r.value=null;else if(o.target===!0)s(n.$el.parentNode);else{let l=o.target;if(typeof o.target=="string")try{l=document.querySelector(o.target)}catch{l=void 0}l!=null?(r.value=l.$el||l,a()):(r.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return L(()=>o.contextMenu,l=>{r.value!==null&&(f(),a(l))}),L(()=>o.target,()=>{r.value!==null&&f(),x()}),L(()=>o.noParentEvent,l=>{r.value!==null&&(l===!0?f():a())}),ut(()=>{x(),t!==!0&&o.modelValue===!0&&r.value===null&&m("update:modelValue",!1)}),se(()=>{clearTimeout(c),f()}),{anchorEl:r,canShow:u,anchorEvents:i}}function ra(e,t){const a=C(null);let o;function n(c,u){const i=`${u!==void 0?"add":"remove"}EventListener`,f=u!==void 0?u:o;c!==window&&c[i]("scroll",f,oe.passive),window[i]("scroll",f,oe.passive),o=u}function m(){a.value!==null&&(n(a.value),a.value=null)}const r=L(()=>e.noParentEvent,()=>{a.value!==null&&(m(),t())});return se(r),{localScrollTarget:a,unconfigureScrollTarget:m,changeScrollEvent:n}}let Ae;const{notPassiveCapture:z}=oe,_=[];function I(e){clearTimeout(Ae);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=ke.length-1;for(;a>=0;){const o=ke[a].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;a--}for(let o=_.length-1;o>=0;o--){const n=_[o];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function la(e){_.push(e),_.length===1&&(document.addEventListener("mousedown",I,z),document.addEventListener("touchstart",I,z))}function Te(e){const t=_.findIndex(a=>a===e);t>-1&&(_.splice(t,1),_.length===0&&(clearTimeout(Ae),document.removeEventListener("mousedown",I,z),document.removeEventListener("touchstart",I,z)))}let _e,$e;function Be(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ia(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function Ee(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:re[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function ua(e,t){let{top:a,left:o,right:n,bottom:m,width:r,height:c}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],o-=t[0],m+=t[1],n+=t[0],r+=t[0],c+=t[1]),{top:a,left:o,right:n,bottom:m,width:r,height:c,middle:o+(n-o)/2,center:a+(m-a)/2}}function sa(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ca(e){if(ct.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:u,offsetTop:i}=window.visualViewport;u!==_e&&(c.setProperty("--q-pe-left",u+"px"),_e=u),i!==$e&&(c.setProperty("--q-pe-top",i+"px"),$e=i)}let t;const{scrollLeft:a,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=ua(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:c,left:u}=e.anchorEl.getBoundingClientRect(),i=c+e.absoluteOffset.top,f=u+e.absoluteOffset.left;t={top:i,left:f,width:1,height:1,right:f+1,center:i,middle:f,bottom:i+1}}let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=t.width+"px",e.cover===!0&&(n.minHeight=t.height+"px")),Object.assign(e.el.style,n);const m=sa(e.el),r={top:t[e.anchorOrigin.vertical]-m[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-m[e.selfOrigin.horizontal]};da(r,t,m,e.anchorOrigin,e.selfOrigin),n={top:r.top+"px",left:r.left+"px"},r.maxHeight!==void 0&&(n.maxHeight=r.maxHeight+"px",t.height>r.maxHeight&&(n.minHeight=n.maxHeight)),r.maxWidth!==void 0&&(n.maxWidth=r.maxWidth+"px",t.width>r.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function da(e,t,a,o,n){const m=a.bottom,r=a.right,c=dt(),u=window.innerHeight-c,i=document.body.clientWidth;if(e.top<0||e.top+m>u)if(n.vertical==="center")e.top=t[o.vertical]>u/2?Math.max(0,u-m):0,e.maxHeight=Math.min(m,u);else if(t[o.vertical]>u/2){const f=Math.min(u,o.vertical==="center"?t.center:o.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(m,f),e.top=Math.max(0,f-m)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(m,u-e.top);if(e.left<0||e.left+r>i)if(e.maxWidth=Math.min(r,i),n.horizontal==="middle")e.left=t[o.horizontal]>i/2?Math.max(0,i-r):0;else if(t[o.horizontal]>i/2){const f=Math.min(i,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(r,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(r,i-e.left)}var ma=D({name:"QMenu",inheritAttrs:!1,props:V(T(T(T(T({},oa),mt),ie),ft),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Be},self:{type:String,validator:Be},offset:{type:Array,validator:ia},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...vt,"click","escape-key"],setup(e,{slots:t,emit:a,attrs:o}){let n=null,m,r,c;const u=N(),{proxy:i}=u,{$q:f}=i,s=C(null),x=C(!1),l=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),g=ue(e,f),{registerTick:F,removeTick:B}=ht(),{registerTimeout:y,removeTimeout:k}=gt(),{transition:U,transitionStyle:p}=pt(e,x),{localScrollTarget:M,changeScrollEvent:Ve,unconfigureScrollTarget:Qe}=ra(e,ge),{anchorEl:E,canShow:Re}=na({showing:x}),{hide:ce}=yt({showing:x,canShow:Re,handleShow:Ne,handleHide:Ge,hideOnRouteChange:l,processOnMount:!0}),{showPortal:de,hidePortal:me,renderPortal:We}=bt(u,s,je),j={anchorEl:E,innerRef:s,onClickOutside(d){if(e.persistent!==!0&&x.value===!0)return ce(d),(d.type==="touchstart"||d.target.classList.contains("q-dialog__backdrop"))&&Me(d),!0}},fe=w(()=>Ee(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),ze=w(()=>e.cover===!0?fe.value:Ee(e.self||"top start",f.lang.rtl)),Ie=w(()=>(e.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),De=w(()=>e.autoClose===!0?{onClick:Ue}:{}),ve=w(()=>x.value===!0&&e.persistent!==!0);L(ve,d=>{d===!0?(Pt(Z),la(j)):(Ce(Z),Te(j))});function K(){_t(()=>{let d=s.value;d&&d.contains(document.activeElement)!==!0&&(d=d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))})}function Ne(d){if(B(),k(),n=e.noRefocus===!1?document.activeElement:null,xt(pe),de(),ge(),m=void 0,d!==void 0&&(e.touchPosition||e.contextMenu)){const X=kt(d);if(X.left!==void 0){const{top:Ke,left:Ze}=E.value.getBoundingClientRect();m={left:X.left-Ze,top:X.top-Ke}}}r===void 0&&(r=L(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,A)),e.noFocus!==!0&&document.activeElement.blur(),F(()=>{A(),e.noFocus!==!0&&K()}),y(()=>{f.platform.is.ios===!0&&(c=e.autoClose,s.value.click()),A(),de(!0),a("show",d)},e.transitionDuration)}function Ge(d){B(),k(),me(),he(!0),n!==null&&(d===void 0||d.qClickOutside!==!0)&&(n.focus(),n=null),y(()=>{me(!0),a("hide",d)},e.transitionDuration)}function he(d){m=void 0,r!==void 0&&(r(),r=void 0),(d===!0||x.value===!0)&&(Ct(pe),Qe(),Te(j),Ce(Z)),d!==!0&&(n=null)}function ge(){(E.value!==null||e.scrollTarget!==void 0)&&(M.value=wt(E.value,e.scrollTarget),Ve(M.value,A))}function Ue(d){c!==!0?(qt(i,d),a("click",d)):c=!1}function pe(d){ve.value===!0&&e.noFocus!==!0&&St(s.value,d.target)!==!0&&K()}function Z(d){a("escape-key"),ce(d)}function A(){const d=s.value;d===null||E.value===null||ca({el:d,offset:e.offset,anchorEl:E.value,anchorOrigin:fe.value,selfOrigin:ze.value,absoluteOffset:m,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function je(){return H(Tt,{name:U.value,appear:!0},()=>x.value===!0?H("div",T(V(T({},o),{ref:s,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,o.class],style:[o.style,p.value]}),De.value),le(t.default)):null)}return se(he),Object.assign(i,{focus:K,updatePosition:A}),We}}),fa="assets/addCart.b612da50.svg";const va={class:"ProviderProduct__imgContainer"},ha={class:"ProviderProduct__name"},ga={class:"ProviderProduct__price"},pa=O({__name:"ProviderProduct",props:{product:null,isProductInCart:{type:Boolean}},emits:["onAddToShoppingCart","clickOnProduct"],setup(e){return(t,a)=>(P(),S(Et,{onClick:a[1]||(a[1]=o=>t.$emit("clickOnProduct",e.product.id)),class:"ProviderProduct"},{default:b(()=>[v(we,{class:"ProviderProduct__card",horizontal:""},{default:b(()=>[q("div",va,[v(ne,{class:"ProviderProduct__img",ratio:"4/3",src:e.product.image_url||h(Se)},{error:b(()=>[v(ne,{src:h(Se)},null,8,["src"])]),_:1},8,["src"])]),q("div",ha,[q("p",null,R(e.product.name),1)]),v(we,{class:"q-p-none ProviderProduct__checkoutInfo"},{default:b(()=>[q("span",ga,[q("strong",null,"S./ "+R(e.product.base_price_sol),1)]),v($t,{class:"ProviderProduct__cart-button-container"},{default:b(()=>[v(Q,{class:"ProviderProduct__cart-button",color:e.isProductInCart?"negative":"accent",icon:e.isProductInCart?"remove_shopping_cart":`img:${h(fa)}`,onClick:a[0]||(a[0]=Bt(o=>t.$emit("onAddToShoppingCart",e.product),["stop"]))},null,8,["color","icon"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),ya={class:"ProviderProducts"},ba=O({__name:"ProviderProducts",props:{products:null,cartProducts:null},emits:["onAddToShoppingCart","clickOnProduct"],setup(e){return(t,a)=>(P(),$("div",ya,[(P(!0),$(Lt,null,Ht(e.products,o=>(P(),S(h(pa),{key:o.id,product:o,"is-product-in-cart":h(Ot)(o.id,e.cartProducts),onOnAddToShoppingCart:a[0]||(a[0]=n=>t.$emit("onAddToShoppingCart",n)),onClickOnProduct:a[1]||(a[1]=n=>t.$emit("clickOnProduct",n))},null,8,["product","is-product-in-cart"]))),128))]))}});const Pa={class:"Provider"},xa={class:"Provider__container"},ka={class:"Provider__filter-btn-content"},Ca=G(" Filtrar "),wa=G(" Precio maximo "),qa=G(" Precio minimo "),Sa=G("Buscar"),Ta={key:2,class:"Provider__no-products"},_a={class:"Provider__no-products-text"},$a=["href"],Ba=O({__name:"Provider.layout",props:{id:null,provider:null,products:null,searchText:null,currentQuery:null,isLoading:{type:Boolean},cartProducts:null,maxPriceFilter:null,minPriceFilter:null},emits:["update:searchText","onSearch","onClear","onAddToShoppingCart","clickOnProduct","update:maxPriceFilter","update:minPriceFilter"],setup(e){const t=e,a=w(()=>t!=null&&t.currentQuery?"No se encontraron los productos que buscas, puedes contactar al proveedor directamente para preguntarle: ":"Este proveedor aun no a\xF1ade productos a su lista, puedes contactarlo para saber m\xE1s: ");return(o,n)=>{var m,r,c,u,i,f;return P(),$("div",Pa,[v(h(Yt),{"logo-url":((m=e.provider)==null?void 0:m.logo_url)||h(zt),title:(r=e.provider)==null?void 0:r.commercial_name,"query-value":e.searchText||"","has-products-on-cart":!!((c=e.cartProducts)!=null&&c.length),"show-search-bar":"","show-shopping-cart":"","onUpdate:queryValue":n[0]||(n[0]=s=>o.$emit("update:searchText",s==null?void 0:s.toString())),onOnSearch:n[1]||(n[1]=s=>o.$emit("onSearch")),onOnClear:n[2]||(n[2]=s=>o.$emit("onClear"))},null,8,["logo-url","title","query-value","has-products-on-cart"]),q("div",xa,[v(Q,{disabled:e.isLoading,class:"Provider__filter-btn",color:"accent",dense:"","no-caps":"",outline:""},{default:b(()=>[q("div",ka,[v(te,{class:"Provider__filter-btn-icon",size:"14px",name:"filter_alt"}),Ca]),v(ma,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:b(()=>[v(ta,{style:{"min-width":"100px"}},{default:b(()=>[v(ee,null,{default:b(()=>[v(J,null,{default:b(()=>[wa,v(ae,{prefix:"S/.",max:"999999.99",placeholder:"0.00",min:"0.50",type:"number",step:"0.50",dense:"","model-value":e.maxPriceFilter,"onUpdate:modelValue":n[3]||(n[3]=s=>o.$emit("update:maxPriceFilter",s)),rounded:"",outlined:""},null,8,["model-value"])]),_:1})]),_:1}),v(ee,null,{default:b(()=>[v(J,null,{default:b(()=>[qa,v(ae,{type:"number",placeholder:"0.00",prefix:"S/.",dense:"",step:"0.50",max:(e.maxPriceFilter||.01)-.01,min:"0.01","model-value":e.minPriceFilter,"onUpdate:modelValue":n[4]||(n[4]=s=>o.$emit("update:minPriceFilter",s)),rounded:"",outlined:""},null,8,["max","model-value"])]),_:1})]),_:1}),v(Ft),v(ee,null,{default:b(()=>[v(J,null,{default:b(()=>[v(Q,{color:"accent",rounded:""},{default:b(()=>[Sa]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled"]),e.isLoading?(P(),S(h(Wt),{key:0})):(u=e.products)!=null&&u.length?(P(),S(h(ba),{key:1,cartProducts:e.cartProducts,products:e.products,onOnAddToShoppingCart:n[5]||(n[5]=s=>o.$emit("onAddToShoppingCart",s)),onClickOnProduct:n[6]||(n[6]=s=>o.$emit("clickOnProduct",s))},null,8,["cartProducts","products"])):(P(),$("div",Ta,[q("div",_a,[e.currentQuery?(P(),S(te,{key:0,name:"search"})):W("",!0),q("span",null,R(h(a)),1),q("a",{href:`mailto:${(i=e.provider)==null?void 0:i.b2b_email}`},R((f=e.provider)==null?void 0:f.b2b_email),9,$a)])]))])])}}}),Na=O({__name:"index",async setup(e){let t,a;const o=Le(),{shoppingCart:n,toggleProduct:m}=Mt(),{provider:r,id:c}=([t,a]=qe(()=>Jt()),t=await t,a(),t),{getProductLists:u,query:i,products:f,searchText:s,isLoading:x,maxPriceFilter:l,minPriceFilter:g}=ea(),F=()=>{s.value="",u(c,s.value)};return It({currentRouteParent:o.matched[0].path,message:"Si sales de la p\xE1gina, se perder\xE1 lo que guardaste en el carrito de compras"}),[t,a]=qe(()=>u(c,i.value)),await t,a(),(B,y)=>(P(),S(Ba,{id:h(c),provider:h(r),products:h(f),"is-loading":h(x),"cart-products":h(n),"search-text":h(s),"onUpdate:search-text":y[0]||(y[0]=k=>Y(s)?s.value=k:null),"current-query":h(i),"max-price-filter":h(l),"onUpdate:max-price-filter":y[1]||(y[1]=k=>Y(l)?l.value=k:null),"min-price-filter":h(g),"onUpdate:min-price-filter":y[2]||(y[2]=k=>Y(g)?g.value=k:null),onOnSearch:y[3]||(y[3]=k=>h(u)(h(c),h(s))),onOnAddToShoppingCart:y[4]||(y[4]=k=>h(m)(k)),onOnClear:y[5]||(y[5]=k=>F()),onClickOnProduct:y[6]||(y[6]=k=>B.$router.push({name:"productDetail",params:{provider:h(c),id:k}}))},null,8,["id","provider","products","is-loading","cart-products","search-text","current-query","max-price-filter","min-price-filter"]))}});export{Na as default};

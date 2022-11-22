var U=Object.defineProperty,F=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(t,e,a)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,A=(t,e)=>{for(var a in e||(e={}))V.call(e,a)&&w(t,a,e[a]);if(T)for(var a of T(e))j.call(e,a)&&w(t,a,e[a]);return t},E=(t,e)=>F(t,O(e));import{m as v,f as c,j as p,d as m,k as s,x as h,q as P,Q as x,G as z,a7 as q,N as g,a6 as I,F as G,ab as Y,p as D,aa as J,r as Q,I as K,u as H,H as M,cB as X,ad as B,c as $}from"./index.aa1ba04f.js";import{Q as Z}from"./QImg.4c5d4eab.js";import{_ as tt}from"./BackButton.6cc0f5a2.js";import{D as et}from"./didperu.774c3852.js";import{c as at}from"./confirmBeforeExit.20915c3c.js";import{j as nt}from"./Events.ceea9457.js";import{a as ot}from"./ProvidersActions.73fdc96d.js";/* empty css               */const rt={class:"ShoppingCartHeader"},st={class:"ShoppingCartHeader__container"},it=v({__name:"ShoppingCartHeader",props:{image_url:null},setup(t){return(e,a)=>(c(),p("div",rt,[m(tt,{class:"ShoppingCartHeader__back-btn",label:"Atr\xE1s"}),s("div",st,[m(Z,{class:"ShoppingCartHeader__image",src:t.image_url||h(et)},null,8,["src"])])]))}});const ut={class:"ProductsQuantity"},lt=q(" - "),ct=q("+"),dt=v({__name:"ProductsQuantity",props:{maxAvailable:null,quantity:null},emits:["onChange"],setup(t,{emit:e}){const a=t;let n=0;const o=r=>{clearTimeout(n),n=window.setTimeout(()=>{if(r>a.maxAvailable){g.create({message:`Solo hay ${a.maxAvailable} unidades disponibles de este producto`}),e("onChange",a.maxAvailable);return}else if(r<1){g.create({message:"El valor no puede ser menor a 1"}),e("onChange",1);return}e("onChange",r)},500)};return(r,d)=>(c(),p("div",ut,[m(x,{dense:"",flat:"",rounded:"",disable:t.quantity<=1,onClick:d[0]||(d[0]=l=>r.$emit("onChange",t.quantity-1)),class:"ProductsQuantity__button"},{default:P(()=>[lt]),_:1},8,["disable"]),m(z,{class:"ProductsQuantity__input","bg-color":"primary",color:"secondary",dark:"",dense:"",type:"number",min:"1",max:t.maxAvailable,"model-value":t.quantity,"onUpdate:modelValue":d[1]||(d[1]=l=>o(Number(l)))},null,8,["max","model-value"]),m(x,{flat:"",dense:"",rounded:"",disable:t.quantity>=t.maxAvailable,onClick:d[2]||(d[2]=l=>r.$emit("onChange",t.quantity+1)),class:"ProductsQuantity__button"},{default:P(()=>[ct]),_:1},8,["disable"])]))}});const pt={class:"ProductListItem"},mt={class:"ProductListItem__container"},_t={class:"ProductListItem__leftAlignedContent"},ht={class:"ProductListItem__name"},gt={class:"ProductListItem__price"},vt=v({__name:"ProductListItem",props:{product:null,quantity:null},emits:["onQuantityChange"],setup(t){const e=(a=0,n=0)=>(a*n).toFixed(2);return(a,n)=>(c(),p("li",pt,[s("span",mt,[s("div",_t,[m(h(dt),{"max-available":1/0,onOnChange:n[0]||(n[0]=o=>a.$emit("onQuantityChange",{productId:t.product.id,quantity:o})),quantity:t.quantity},null,8,["quantity"]),s("span",ht,I(t.product.name),1)]),s("span",gt," S/. "+I(e(t.product.base_price_sol,t.quantity)),1)])]))}});const yt={class:"ProductList"},ft=v({__name:"ProductList",props:{cartProducts:null},emits:["onQuantityChange"],setup(t){return(e,a)=>(c(),p("ul",yt,[(c(!0),p(G,null,Y(t.cartProducts,n=>(c(),D(vt,{product:n.product,quantity:n.quantity,key:n.product.id,onOnQuantityChange:a[0]||(a[0]=o=>e.$emit("onQuantityChange",o))},null,8,["product","quantity"]))),128))]))}}),bt={class:"shopping-cart"},$t={class:"shopping-cart__content"},Ct=s("h1",{class:"shopping-cart__title"},"Detalles de la compra",-1),kt={key:0},Pt=s("div",{class:"shopping-cart__separator"},null,-1),xt={class:"shopping-cart__totalContainer"},It=s("h4",{class:"shopping-cart__total"},"Total",-1),qt={class:"shopping-cart__result"},Qt=["disable","href"],Lt=["href"],St={key:1},Nt=s("h2",{class:"shopping-cart__empty-title"}," No hay productos en tu carrito de compras ",-1),Tt=s("p",{class:"shopping-cart__empty-description"}," Agrega productos a tu carrito de compras para poder comprar ",-1),wt=q(" Seguir comprando "),At=v({__name:"ShoppingCart.layout",props:{cartProducts:null,provider:null,total:null,whatsappLink:null,emailLink:null},emits:["onQuantityChange","backToProvider"],setup(t){return(e,a)=>{var n,o;return c(),p("div",bt,[m(it,{image_url:(n=t.provider)==null?void 0:n.logo_url},null,8,["image_url"]),s("div",$t,[Ct,(o=t.cartProducts)!=null&&o.length?(c(),p("div",kt,[m(ft,{onOnQuantityChange:a[0]||(a[0]=r=>e.$emit("onQuantityChange",r)),cartProducts:t.cartProducts},null,8,["cartProducts"]),Pt,s("div",xt,[It,s("p",qt,"S/. "+I(t.total),1)]),s("a",{disable:!t.whatsappLink,class:"shopping-cart__button",target:"_blank",color:"primary",size:"large","no-caps":"",href:t.whatsappLink},"Consultar",8,Qt),t.whatsappLink?J("",!0):(c(),p("a",{key:0,class:"shopping-cart__emailLink",target:"_blank",href:t.emailLink},"El proveedor no tiene numero de WhatsApp. Enviale un correo",8,Lt))])):(c(),p("div",St,[Nt,Tt,m(x,{class:"shopping-cart__button",color:"primary",size:"large","no-caps":"",onClick:a[1]||(a[1]=r=>e.$emit("backToProvider"))},{default:P(()=>[wt]),_:1})]))])])}}}),Et=async t=>{const e=Q(),o={filters:t.filter(r=>r.productId).map(r=>({id:{_eq:r.productId}}))};return await K(nt,o).then(({products:r})=>{e.value=r}).catch(r=>{g.create({message:"Parece que hubo un error, por favor vuelve a intentarlo",type:"negative"})}),{updatedProducts:e}},Bt=async()=>{const t=Q(),a=H().params.provider;return await ot(a).then(n=>{if(t.value=n,!t.value){const o=M();g.create({message:"Tuvimos problemas para encontrar al proveedor",type:"negative"}),o.back()}}),{id:a,provider:t}},Dt=t=>{const e=t==null?void 0:t.map(n=>{const o=Number(n.product.base_price_sol),r=Number(n.quantity);return isNaN(o)||isNaN(r)?(g.create({message:`Ocurri\xF3 un error calculando el precio de ${n.product.name}, por lo que no se ha incluido en la cuenta, por favor intenta removerlo de tu carrito e incluy\xE9ndolo nuevamente.`,color:"negative"}),0):n.product.base_price_sol*n.quantity});return(e==null?void 0:e.reduce((n,o)=>n+o).toFixed(2))||"0"},Ht=({phone:t,message:e})=>`https://wa.me/${t.replaceAll(" ","")}?text=${encodeURIComponent(e)}`,Wt=(t,e)=>{let a=0;const n=`Hola ${e||"Proveedor"}, observ\xE9 su tienda en la aplicaci\xF3n de DID y me encuentro interesado en los siguientes productos:

`;let o=t.reduce((r,{product:d,quantity:l})=>{const{name:y,base_price_sol:C}=d,f=Number(l)*Number(C);return isNaN(f)?`${r}${y} = error calculando el precio para este producto
`:(a+=f,`${r}${y} ${l}x = S/. ${f}
`)},"");return o+=`
-----
`,o+=`
Total: ${a}`,n+o},Rt=({email:t,message:e})=>`mailto:${t}?subject=${encodeURIComponent("Compra en la tienda")}&body=${encodeURIComponent(e)}`,Ut=(t,e)=>{var a;return(a=e.find(n=>n.productId===t))==null?void 0:a.quantity},Ft=(t,e)=>t.map(a=>({quantity:Ut(a.id,e)||1,product:a})),Xt=v({__name:"index",async setup(t){var L,S;let e,a;const n=H(),o=Q(),{shoppingCart:r,editProductQuantity:d}=X(),{provider:l}=([e,a]=B(()=>Bt()),e=await e,a(),e),{updatedProducts:y}=([e,a]=B(()=>Et(r.value)),e=await e,a(),e);((L=y.value)==null?void 0:L.length)&&((S=r.value)==null?void 0:S.length)&&(o.value=Ft(y.value,r.value));const C=({productId:i,newQuantity:u})=>{var N;if(!((N=o.value)!=null&&N.length)){g.create({message:"Ha ocurrido un error, por favor vuelve a intentar",type:"negative"});return}d(i,u);const _=o.value.findIndex(k=>k.product.id===i);if(_>=0){const k=o.value[_];o.value[_]=E(A({},k),{quantity:u})}},f=$(()=>Dt(o.value)),b=$(()=>{var i;if(!!o.value)return Wt(o.value,(i=l.value)==null?void 0:i.commercial_name)}),W=$(()=>{var u;const i=(u=l.value)==null?void 0:u.b2b_phone;if(!(!b.value||!i))return Ht({message:b.value,phone:i})}),R=$(()=>{var u;const i=(u=l.value)==null?void 0:u.b2b_email;if(!(!b.value||!i))return Rt({message:b.value,email:i})});return at({currentRouteParent:n.matched[0].path,message:"Si sales de la p\xE1gina, se perder\xE1 lo que guardaste en el carrito de compras"}),(i,u)=>(c(),D(At,{provider:h(l),cartProducts:o.value,total:h(f),"whatsapp-link":h(W),"email-link":h(R),onOnQuantityChange:u[0]||(u[0]=_=>C({productId:_.productId,newQuantity:_.quantity})),onBackToProvider:u[1]||(u[1]=_=>i.$router.push({name:"providerDetail",params:{provider:h(n).params.provider}}))},null,8,["provider","cartProducts","total","whatsapp-link","email-link"]))}});export{Xt as default};

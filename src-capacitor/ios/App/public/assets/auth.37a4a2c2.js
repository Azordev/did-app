import{P as t,H as r,u as a,N as u}from"./index.e198538d.js";const n=()=>{const e=t.getItem("user");if(!e){t.clear();const o=r(),s=a();u.create({message:"Hemos tenido problemas para localizar tu usuario, por favor inicia sesion nuevamente.",type:"Negative"}),o.push({name:"login",query:{to:s.path}})}return e};export{n as g};

import{Q as o}from"./QImg.4c5d4eab.js";import{_ as i}from"./BackButton.6cc0f5a2.js";/* empty css                */import{m,f as a,j as t,p as l,x as s,aa as n,a6 as c}from"./index.aa1ba04f.js";const B={class:"HeaderWithBackBtn"},r={key:2,class:"HeaderWithBackBtn__text"},k={key:3,class:"HeaderWithBackBtn__text HeaderWithBackBtn__text--right"},H=m({__name:"HeaderWithBackBtn",props:{label:null,labelBack:null,imgBack:null,imgUrl:null,showBackBtn:{type:Boolean},floatRightLabel:null,backBtnToHome:{type:Boolean}},setup(e){return(h,g)=>(a(),t("div",B,[e.showBackBtn?(a(),l(s(i),{key:0,label:e.labelBack,"to-home":e.backBtnToHome,img:e.imgBack},null,8,["label","to-home","img"])):n("",!0),e.imgUrl?(a(),l(o,{key:1,class:"HeaderWithBackBtn__img",src:e.imgUrl},null,8,["src"])):(a(),t("span",r,c(e.label),1)),e.floatRightLabel?(a(),t("span",k,c(e.floatRightLabel),1)):n("",!0)]))}});export{H as _};

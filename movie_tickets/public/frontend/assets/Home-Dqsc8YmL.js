var T=Object.defineProperty,N=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var M=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,m=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&M(e,s,t[s]);if(y)for(var s of y(t))A.call(t,s)&&M(e,s,t[s]);return e},g=(e,t)=>N(e,H(t));var I=(e,t)=>{var s={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&y)for(var a of y(e))t.indexOf(a)<0&&A.call(e,a)&&(s[a]=e[a]);return s};import{h as f,_ as S,c as q,r as R,o as z,a as u,b as C,d as o,w as B,T as D,F as x,e as w,u as E,f as F,g as l,i as L,v as $,t as j,n as V,j as O,k as Y}from"./index-BFWBfxD3.js";import{N as G}from"./NavBar-DOfkfP6D.js";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(h,{slots:d})=>{var c=h,{size:e,strokeWidth:t=2,absoluteStrokeWidth:s,color:a,iconNode:i,name:r,class:_}=c,v=I(c,["size","strokeWidth","absoluteStrokeWidth","color","iconNode","name","class"]);return f("svg",m(g(m({},k),{width:e||k.width,height:e||k.height,stroke:a||k.stroke,"stroke-width":s?Number(t)*24/Number(e):t,class:["lucide",`lucide-${P(r!=null?r:"icon")}`]}),v),[...i.map(p=>f(...p)),...d.default?[d.default()]:[]])};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(e,t)=>(s,{slots:a})=>f(Z,g(m({},s),{iconNode:t,name:e}),a);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=n("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=n("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=n("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=n("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=n("SmileIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=n("TheaterIcon",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=n("TreePalmIcon",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=n("WandIcon",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]),se={class:"slider-container bg-[#0a0a2e] min-h-screen"},ae={class:"relative overflow-hidden"},ce={class:"relative h-[40vh] md:h-[40vh] lg:h-[60vh]"},oe={class:"flex items-center justify-center h-full"},ne=["src","alt"],le={class:"movies-container overflow-x-auto whitespace-nowrap px-4"},ie={class:"flex space-x-4"},re=["onClick"],de=["src","alt"],he={class:"overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300"},pe={class:"text-white text-sm font-bold text-center px-2"},ue={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-6"},ye={class:"genre-content"},me={__name:"Home",setup(e){const t=F(),s=q({doctype:"movie",fields:["name","poster","title"],auto:!0}),a=[{image:"https://www.pinkvilla.com/images/2024-10/1733737418_avatar-the-dark-knight.jpg"},{image:"https://media.wired.com/photos/59de99f39db9cf4266631b87/master/w_2560,c_limit/Movies-TopArt.jpg"},{image:"https://www.cartoonbrew.com/wp-content/uploads/2023/11/2024_features_1.jpg"}],i=R(0),r=()=>i.value=(i.value+1)%a.length;z(()=>setInterval(r,5e3));const _=[{name:"FAMILY",icon:W,class:"bg-blue-500"},{name:"ACTION",icon:K,class:"bg-red-500"},{name:"ADVENTURE",icon:ee,class:"bg-green-500"},{name:"COMEDY",icon:Q,class:"bg-yellow-500"},{name:"DRAMA",icon:X,class:"bg-purple-500"},{name:"ROMANCE",icon:U,class:"bg-pink-500"},{name:"SCI-FI",icon:J,class:"bg-indigo-500"},{name:"FANTASY",icon:te,class:"bg-gray-500"}],v=d=>{t.push(`/movies/${d}`)};return(d,h)=>(l(),u("div",se,[C(G),o("div",ae,[o("div",ce,[C(D,{name:"slide"},{default:B(()=>[(l(),u(x,null,w(a,(c,p)=>L(o("div",{key:p,class:"absolute inset-0 w-full h-full"},[o("div",oe,[o("img",{src:c.image,alt:c.title,class:"w-full h-full object-cover rounded-lg sm:h-[30vh] md:h-[50vh] lg:h-full"},null,8,ne)])]),[[$,i.value===p]])),64))]),_:1})])]),h[0]||(h[0]=o("h2",{class:"text-white text-2xl font-bold my-4 px-4"},"Movies",-1)),o("div",le,[o("div",ie,[(l(!0),u(x,null,w(E(s).data,c=>(l(),u("div",{key:c.name,class:"movie-card relative w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] flex-shrink-0",onClick:p=>v(c.name)},[o("img",{src:c.poster,alt:c.name,class:"w-full h-[250px] md:h-[300px] lg:h-[330px] object-cover rounded-lg"},null,8,de),o("div",he,[o("h3",pe,j(c.title),1)])],8,re))),128))])]),h[1]||(h[1]=o("h2",{class:"text-white text-2xl font-bold my-6 px-6"},"Genres",-1)),o("div",ue,[(l(),u(x,null,w(_,c=>o("div",{key:c.name,class:V(c.class)},[o("div",ye,[(l(),O(Y(c.icon),{class:"w-8 h-10 mb-2"})),o("span",null,j(c.name),1)])],2)),64))])]))}},xe=S(me,[["__scopeId","data-v-4676c511"]]);export{xe as default};

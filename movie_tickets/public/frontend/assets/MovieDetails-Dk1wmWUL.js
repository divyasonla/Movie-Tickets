import{z as F,c as j,A as N,r as L,l as g,u as _,a as r,d as t,t as d,b as k,w as f,F as x,e as v,q as b,i as S,s as O,f as l,p,n as D}from"./index-BaKaz2p8.js";const M={key:0,class:"px-4 md:px-12 lg:px-20"},G={class:"text-yellow-300 font-bold text-[24px] md:text-[32px]"},H={class:"mt-1 flex flex-row items-center justify-between"},J={class:"flex flex-col space-y-3"},P={class:"text-white-600 text-xl font-semibold"},U={class:"flex flex-col space-y-3"},K={class:"text-white-600 text-xl font-semibold"},Q={class:"max-w-full"},W={key:0,class:"mx-12"},X={class:"flex justify-center space-x-4 mt-4"},Y=["src"],Z=["src"],ee=["src"],te={class:"p-2 mt-7 bg-white shadow-2xl rounded mx-auto w-full max-w-screen-md"},se=["src"],oe={class:"w-full flex items-center justify-center mt-7"},le={class:"flex flex-col space-y-3 mt-16"},ae={class:"text-gray-600 text-lg font-normal"},ne={key:1},re={class:"flex flex-col w-full space-y-5 mt-6"},ie={key:2},ce={class:"flex flex-col space-y-4"},ue={class:"flex flex-col space-y-4"},de={class:"space-y-2"},me={class:"text-sm font-bold text-black-400"},fe={class:"flex flex-row space-x-2"},xe={key:3},ve=["onClick"],pe={key:4},_e={class:"flex flex-row mt-6 space-x-2"},he={__name:"MovieDetails",props:{movieName:{type:String,required:!0}},setup($){const C=$,h=F({doctype:"movie",name:C.movieName,onSuccess(i){console.log(i)},auto:!0}),B=j({doctype:"Theater Show",fields:["theater","start_time","name"],auto:!0,transform:i=>{const e={};for(const n of i)e[n.theater]||(e[n.theater]=[]),e[n.theater].push(n);return e}}),z=j({doctype:"Ticket Booking",insert:{onSuccess(){console.log("Booking Created!"),o.value++}}});function V(i,e){const n={};for(const m of i){n[m]=[];for(const s of e)n[m].push([s,"Available"])}return n}const y=N(V(["A","B","C","D","E"],[1,2,3,4,5,6,7])),A=new Date().toISOString().substr(0,10),o=L(0),a=N({numberOfSeats:1,selectedSeats:[],date:A,show:null});function E(i){a.numberOfSeats=i}function R(i,e){if(w.value)return;const n=y[i].find(m=>m[0]===e);n[1]="Selected",a.selectedSeats.push(`${i}${e}`)}const w=g(()=>a.selectedSeats.length===a.numberOfSeats),u=g(()=>h.doc),T=g(()=>{if(o.value===1)return a.numberOfSeats;if(o.value===2)return a.date&&a.show;if(o.value===3)return w.value});function I(){if(o.value!=3){o.value++;return}z.insert.submit({movie:C.movieName,date:a.date,show:a.show,selected_seats:JSON.stringify(a.selectedSeats),number_of_tickets:a.numberOfSeats})}return(i,e)=>{const n=O("Button"),m=O("Input");return!_(h).loading&&_(h).doc?(l(),r("div",M,[t("h1",G,d(u.value.title),1),t("div",H,[t("div",J,[e[4]||(e[4]=t("h2",{class:"mt-11 flex flex-col md:flex-row items-center justify-between gap-6 uppercase"},"Director",-1)),t("p",P,d(u.value.director),1)]),t("div",U,[e[5]||(e[5]=t("h2",{class:"mt-11 flex flex-col md:flex-row items-center justify-between gap-6 uppercase"}," Release Date ",-1)),t("p",K,d(u.value.release_date),1)])]),t("div",Q,[o.value===0?(l(),r("div",W,[t("div",X,[t("img",{src:u.value.img_1,class:"w-1/4 max-w-[150px] h-[120px] object-cover rounded-md"},null,8,Y),t("img",{src:u.value.img_2,class:"w-1/3 max-w-[150px] h-[120px] object-cover rounded-md"},null,8,Z),t("img",{src:u.value.img_3,class:"w-1/3 max-w-[150px] h-[120px] object-cover rounded-md"},null,8,ee)]),t("div",te,[t("img",{src:u.value.poster,alt:"Movie Poster",class:"w-full h-auto max-h-[500px] object-contain rounded-md"},null,8,se)]),t("div",oe,[k(n,{size:"xl",variant:"solid",onClick:e[0]||(e[0]=s=>o.value++)},{default:f(()=>e[6]||(e[6]=[p("Book Tickets")])),_:1})]),t("div",le,[e[7]||(e[7]=t("h2",{class:"text-gray-200 text-base font-bold uppercase"},"Synopsis",-1)),t("p",ae,d(u.value.synopsis),1)])])):o.value===1?(l(),r("div",ne,[e[8]||(e[8]=t("h2",{class:"font-medium text-xl mt-7 text-pink-300"},"How many seats?",-1)),t("div",re,[(l(),r(x,null,v(8,s=>k(n,{size:"lg",variant:s===a.numberOfSeats?"subtle":"pink",class:"shadow-lg",onClick:c=>E(s)},{default:f(()=>[p(d(s),1)]),_:2},1032,["variant","onClick"])),64))])])):o.value===2?(l(),r("div",ie,[t("div",ce,[e[9]||(e[9]=t("h2",{class:"font-medium text-xl mt-7 text-yellow-200"},"Date",-1)),k(m,{class:"text-gray-200 bg-white/30 backdrop-blur-md p-2 rounded-md",type:"date",modelValue:a.date,"onUpdate:modelValue":e[1]||(e[1]=s=>a.date=s)},null,8,["modelValue"])]),t("div",ue,[e[10]||(e[10]=t("h2",{class:"font-medium text-xl mt-7 text-yellow-200"},"Cinema & Show",-1)),t("div",de,[(l(!0),r(x,null,v(Object.keys(_(B).data),s=>(l(),r("div",{key:s.name,class:"bg-white/30 backdrop-blur-md shadow-xl p-4 rounded flex flex-col space-y-4"},[t("h3",me,d(s),1),t("div",fe,[(l(!0),r(x,null,v(_(B).data[s],c=>(l(),S(n,{onClick:q=>a.show=c.name,key:c.name,size:"sm",class:D(c.name===a.show?"bg-[#6666ff] text-white":"bg-transparent border border-[#6666ff] text-[#6666ff]")},{default:f(()=>[p(d(c.start_time),1)]),_:2},1032,["onClick","class"]))),128))])]))),128))])])])):o.value===3?(l(),r("div",xe,[e[11]||(e[11]=t("h2",{class:"font-medium text-xl mt-7 text-yellow-300"},"Select Seats",-1)),t("div",null,[(l(!0),r(x,null,v(Object.keys(y),s=>(l(),r("div",{key:s,class:"flex flex-row"},[(l(!0),r(x,null,v(y[s],c=>(l(),r("span",{onClick:q=>R(s,c[0]),class:D(["w-6 h-8 m-2 rounded-[2px]",[c[1]==="Available"?"bg-blue-300":c[1]==="Selected"?"bg-blue-600":"bg-gray-300",w.value?"cursor-not-allowed":"cursor-pointer"]])},null,10,ve))),256))]))),128))])])):o.value===4?(l(),r("div",pe,e[12]||(e[12]=[t("div",{class:"w-full flex items-center flex-col mt-7"},[t("h1",{class:"text-[110px]"},"🍿"),t("h2",{class:"font-medium text-xl mt-7 text-grey-300"}," Enjoy the movie! ")],-1)]))):b("",!0)]),t("div",_e,[o.value!==0&&o.value!==4?(l(),S(n,{key:0,size:"lg",variant:"subtle",onClick:e[2]||(e[2]=s=>o.value--)},{default:f(()=>e[13]||(e[13]=[p("Go Back")])),_:1})):b("",!0),o.value!==0&&o.value!==4?(l(),S(n,{key:1,disabled:!T.value,size:"lg",variant:"solid",onClick:e[3]||(e[3]=s=>I())},{default:f(()=>e[14]||(e[14]=[p("Next")])),_:1},8,["disabled"])):b("",!0)])])):b("",!0)}}};export{he as default};

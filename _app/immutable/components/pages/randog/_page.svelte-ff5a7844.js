import{S as w,i as x,s as y,k as d,a as I,q as R,l as u,m as v,h as m,c as D,r as E,n as s,H as k,b as q,B as l,I as B,A as g,o as G,v as A,w as M,x as S,f as T,t as U,y as V}from"../../../chunks/index-dc6137a2.js";function C(o){let e,n,t,a,f,r,p,_,h;return{c(){e=d("div"),n=d("div"),t=d("img"),f=I(),r=d("button"),p=R("Get a dog ;)"),this.h()},l(c){e=u(c,"DIV",{class:!0});var i=v(e);n=u(i,"DIV",{id:!0,class:!0});var $=v(n);t=u($,"IMG",{id:!0,class:!0,src:!0,alt:!0}),$.forEach(m),f=D(i),r=u(i,"BUTTON",{id:!0,class:!0});var b=v(r);p=E(b,"Get a dog ;)"),b.forEach(m),i.forEach(m),this.h()},h(){s(t,"id","imageRandom"),s(t,"class","api-dog-img svelte-15wtvmi"),k(t.src,a="")||s(t,"src",a),s(t,"alt","click the button below"),s(n,"id","rand"),s(n,"class","svelte-15wtvmi"),s(r,"id","btn-dog"),s(r,"class","svelte-15wtvmi"),s(e,"class","api-dog svelte-15wtvmi")},m(c,i){q(c,e,i),l(e,n),l(n,t),l(e,f),l(e,r),l(r,p),_||(h=B(r,"click",o[0]),_=!0)},p:g,i:g,o:g,d(c){c&&m(e),_=!1,h()}}}function H(o){let e;async function n(){G(()=>{e=document.getElementById("imageRandom")});const t="https://dog.ceo/api/breeds/image/random";console.log(t),await fetch(t).then(function(a){return a.json()}).then(function(a){e!=null&&(console.log(a),e.src=a.message)}).catch(function(a){console.log(a)})}return n(),[n]}class N extends w{constructor(e){super(),x(this,e,H,C,y,{})}}function O(o){let e,n;return e=new N({}),{c(){A(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){S(e,t,a),n=!0},p:g,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function P(o,e,n){return[!0]}class z extends w{constructor(e){super(),x(this,e,P,O,y,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{z as default};
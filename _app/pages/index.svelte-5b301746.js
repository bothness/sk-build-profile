import{L as Q,M as U,S as V,i as B,s as F,e as y,t as H,c as w,a as b,h as $,d as f,g as v,J as N,j as z,b as T,k as O,m as P,N as G,O as A,P as I,K as R,Q as Y,R as Z,v as x,T as ee,U as te,V as ae,W as se,X as le}from"../chunks/vendor-90dfa8bf.js";/* empty css                    */import{a as C}from"../chunks/paths-c0fc83a9.js";function J(n,e,a){const s=n.slice();return s[14]=e[a],s}function L(n){let e,a=n[14].name+"",s,o;return{c(){e=y("option"),s=H(a),this.h()},l(l){e=w(l,"OPTION",{});var p=b(e);s=$(p,a),p.forEach(f),this.h()},h(){e.__value=o=n[14],e.value=e.__value},m(l,p){v(l,e,p),N(e,s)},p(l,p){p&1&&a!==(a=l[14].name+"")&&z(s,a),p&1&&o!==(o=l[14])&&(e.__value=o,e.value=e.__value)},d(l){l&&f(e)}}}function M(n){let e,a,s;return{c(){e=y("p"),a=y("textarea"),this.h()},l(o){e=w(o,"P",{});var l=b(e);a=w(l,"TEXTAREA",{class:!0}),b(a).forEach(f),l.forEach(f),this.h()},h(){a.value=s="/profile/"+n[2],T(a,"class","svelte-nosqjc")},m(o,l){v(o,e,l),N(e,a)},p(o,l){l&4&&s!==(s="/profile/"+o[2])&&(a.value=s)},d(o){o&&f(e)}}}function ne(n){let e,a,s,o,l,p,h=n[0],r=[];for(let t=0;t<h.length;t+=1)r[t]=L(J(n,h,t));let c=n[2]&&M(n);return{c(){e=y("select");for(let t=0;t<r.length;t+=1)r[t].c();a=O(),c&&c.c(),s=O(),o=y("div"),this.h()},l(t){e=w(t,"SELECT",{});var u=b(e);for(let i=0;i<r.length;i+=1)r[i].l(u);u.forEach(f),a=P(t),c&&c.l(t),s=P(t),o=w(t,"DIV",{id:!0,class:!0}),b(o).forEach(f),this.h()},h(){n[1]===void 0&&G(()=>n[4].call(e)),T(o,"id","profile"),T(o,"class","svelte-nosqjc")},m(t,u){v(t,e,u);for(let i=0;i<r.length;i+=1)r[i].m(e,null);A(e,n[1]),v(t,a,u),c&&c.m(t,u),v(t,s,u),v(t,o,u),l||(p=[I(e,"change",n[4]),I(e,"change",n[5])],l=!0)},p(t,[u]){if(u&1){h=t[0];let i;for(i=0;i<h.length;i+=1){const E=J(t,h,i);r[i]?r[i].p(E,u):(r[i]=L(E),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=h.length}u&3&&A(e,t[1]),t[2]?c?c.p(t,u):(c=M(t),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i:R,o:R,d(t){t&&f(e),Y(r,t),t&&f(a),c&&c.d(t),t&&f(s),t&&f(o),l=!1,Z(p)}}}const oe="https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/csv/lists/places_2021.csv";async function _e({fetch:n}){let a=await(await n(oe)).text(),s=Q(a,U);return s.sort((o,l)=>o.name.localeCompare(l.name)),{props:{places:s}}}async function ie(n){return await(await fetch(`https://raw.githubusercontent.com/ONSvisual/census-data-v2/main/json/place/${n}.json`)).json()}async function re(n){const e=["population","density","agemed","age10yr","ethnicity"];let a=[];return e.forEach(s=>{a.push({key:s,vals:n.data[s].value["2011"]})}),console.log(a),a}function ce(n,e,a){let{places:s}=e,o,l,p,h,r,c,t=s[0],u;function i(_,k){let g=[];return _.forEach(m=>{typeof m=="number"?g.push(le(m,k)):Array.isArray(m)?g.push(i(m,k)):g.push(m)}),g}async function E(_){let k=`PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>
SELECT ?geometry
WHERE {
  <http://statistics.data.gov.uk/id/statistical-geography/${_}/geometry> geosparql:asWKT ?geometry
}
LIMIT 1`,X=(await(await fetch("https://pmd3-production-drafter-onsgeo.publishmydata.com/v1/sparql/live?query="+encodeURIComponent(k))).text()).split(`
`)[1].replaceAll('"',""),K=ae.parse(X),d,S=5e3,j=5;for(;S>=5e3&&j>=2;)d=se(K,{highQuality:!0,tolerance:Math.pow(10,-j)}),d.coordinates=i(d.coordinates,j),S=JSON.stringify(d).length,console.log(d,S),j-=1;return d}async function q(_){l=await ie(_),p=l.name,r=await E(_),c=l.bounds,h=await re(l),a(2,u=`?name=${p}&tabs=${btoa(JSON.stringify(h))}&poly=${btoa(JSON.stringify(r))}&bbox=${btoa(JSON.stringify(c))}`),o?window.open(C+"/profile/"+u,"profile"):o=new ee.Parent("profile",C+"/profile/"+u,{name:"profile",id:"iframe"})}x(()=>q(t.code));function D(){t=te(this),a(1,t),a(0,s)}const W=()=>q(t.code);return n.$$set=_=>{"places"in _&&a(0,s=_.places)},[s,t,u,q,D,W]}class me extends V{constructor(e){super();B(this,e,ce,ne,F,{places:0})}}export{me as default,_e as load};
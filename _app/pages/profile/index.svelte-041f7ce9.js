import{S as H,i as L,s as R,e as D,t as j,k as V,c as I,a as z,h as C,d as v,m as N,b,g as w,H as y,j as q,J as ee,K as le,L as te,q as S,o as B,F as ae,G as ie,f as E,I as fe,n as Z,p as $,D as Te,r as Fe,R as A,X as x,N as se,W as Ge,V as ne,Y as U,Z as J,a5 as re,l as W,Q as O,a6 as Qe,a7 as Xe,a8 as Ye,w as T,x as X,y as F,B as G,v as Ze,a3 as $e,a9 as oe}from"../../chunks/vendor-4aa66b37.js";import{d as he}from"../../chunks/config-7d0ede8f.js";import{p as xe}from"../../chunks/stores-9e0efe31.js";import{a as el}from"../../chunks/paths-c0fc83a9.js";const ll=f=>({}),ue=f=>({});function _e(f){let e,i,l,a;const s=f[7].meta,t=ae(s,f,f[6],ue);return{c(){e=D("h2"),i=j(f[0]),l=V(),t&&t.c(),this.h()},l(r){e=I(r,"H2",{class:!0});var n=z(e);i=C(n,f[0]),n.forEach(v),l=N(r),t&&t.l(r),this.h()},h(){b(e,"class","svelte-4xzjby")},m(r,n){w(r,e,n),y(e,i),w(r,l,n),t&&t.m(r,n),a=!0},p(r,n){(!a||n&1)&&q(i,r[0]),t&&t.p&&(!a||n&64)&&ee(t,s,r,r[6],a?te(s,r[6],n,ll):le(r[6]),ue)},i(r){a||(S(t,r),a=!0)},o(r){B(t,r),a=!1},d(r){r&&v(e),r&&v(l),t&&t.d(r)}}}function tl(f){let e,i,l,a,s=`repeat(${f[1]=="full"?"1fr":"auto-fit, minmax(min("+f[4][f[1]].w+"px, 100%), 1fr))"}`,t=`${f[2]}px`,r,n=f[0]&&_e(f);const h=f[7].default,u=ae(h,f,f[6],null);return{c(){e=D("div"),n&&n.c(),i=V(),l=D("div"),u&&u.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var c=z(e);n&&n.l(c),i=N(c),l=I(c,"DIV",{class:!0});var _=z(l);u&&u.l(_),_.forEach(v),c.forEach(v),this.h()},h(){b(l,"class","tiles-grid margin-bottom svelte-4xzjby"),ie(()=>f[8].call(l)),E(l,"grid-template-columns",s,!1),E(l,"grid-gap",t,!1),b(e,"class","tiles")},m(o,c){w(o,e,c),n&&n.m(e,null),y(e,i),y(e,l),u&&u.m(l,null),a=fe(l,f[8].bind(l)),r=!0},p(o,[c]){o[0]?n?(n.p(o,c),c&1&&S(n,1)):(n=_e(o),n.c(),S(n,1),n.m(e,i)):n&&(Z(),B(n,1,1,()=>{n=null}),$()),u&&u.p&&(!r||c&64)&&ee(u,h,o,o[6],r?te(h,o[6],c,null):le(o[6]),null),c&2&&s!==(s=`repeat(${o[1]=="full"?"1fr":"auto-fit, minmax(min("+o[4][o[1]].w+"px, 100%), 1fr))"}`)&&E(l,"grid-template-columns",s,!1),c&4&&t!==(t=`${o[2]}px`)&&E(l,"grid-gap",t,!1)},i(o){r||(S(n),S(u,o),r=!0)},o(o){B(n),B(u,o),r=!1},d(o){o&&v(e),n&&n.d(),u&&u.d(o),a()}}}function al(f,e,i){let l,{$$slots:a={},$$scope:s}=e,{title:t=null}=e,{colwidth:r="medium"}=e,{gridgap:n=16}=e;const h={narrow:{w:180,c:4},medium:{w:280,c:3},wide:{w:380,c:2},full:{w:"100%",c:1}};let u;const o=Te(h[r].c);Fe("tiles",{cols:o});function c(){u=this.clientWidth,i(3,u)}return f.$$set=_=>{"title"in _&&i(0,t=_.title),"colwidth"in _&&i(1,r=_.colwidth),"gridgap"in _&&i(2,n=_.gridgap),"$$scope"in _&&i(6,s=_.$$scope)},f.$$.update=()=>{f.$$.dirty&14&&i(5,l=r=="full"?1:u?Math.floor((u+n)/(h[r].w+n)):h[r].c),f.$$.dirty&32&&o.set(l)},[t,r,n,u,h,l,s,a,c]}class il extends H{constructor(e){super();L(this,e,al,tl,R,{title:0,colwidth:1,gridgap:2})}}function ce(f,e,i){const l=f.slice();return l[9]=e[i],l}function me(f){let e,i,l;return{c(){e=D("header"),i=D("h3"),l=j(f[2]),this.h()},l(a){e=I(a,"HEADER",{class:!0});var s=z(e);i=I(s,"H3",{class:!0});var t=z(i);l=C(t,f[2]),t.forEach(v),s.forEach(v),this.h()},h(){b(i,"class","margin-top--0 margin-right--0 margin-bottom--0 margin-left--0 svelte-1krn9ab"),b(e,"class","margin-top--1")},m(a,s){w(a,e,s),y(e,i),y(i,l)},p(a,s){s&4&&q(l,a[2])},d(a){a&&v(e)}}}function de(f){let e,i=f[3],l=[];for(let a=0;a<i.length;a+=1)l[a]=ge(ce(f,i,a));return{c(){e=D("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0});var s=z(e);for(let t=0;t<l.length;t+=1)l[t].l(s);s.forEach(v),this.h()},h(){b(e,"class","margin-top--2")},m(a,s){w(a,e,s);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(a,s){if(s&8){i=a[3];let t;for(t=0;t<i.length;t+=1){const r=ce(a,i,t);l[t]?l[t].p(r,s):(l[t]=ge(r),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(a){a&&v(e),A(l,a)}}}function ge(f){let e,i=f[9].label+"",l,a,s,t,r;return{c(){e=D("a"),l=j(i),a=V(),this.h()},l(n){e=I(n,"A",{href:!0,class:!0,"aria-label":!0,"data-gtm-label":!0});var h=z(e);l=C(h,i),a=N(h),h.forEach(v),this.h()},h(){b(e,"href",s=f[9].url),b(e,"class","tile__link"),b(e,"aria-label",t=f[9].label),b(e,"data-gtm-label",r=f[9].label)},m(n,h){w(n,e,h),y(e,l),y(e,a)},p(n,h){h&8&&i!==(i=n[9].label+"")&&q(l,i),h&8&&s!==(s=n[9].url)&&b(e,"href",s),h&8&&t!==(t=n[9].label)&&b(e,"aria-label",t),h&8&&r!==(r=n[9].label)&&b(e,"data-gtm-label",r)},d(n){n&&v(e)}}}function fl(f){let e,i,l,a,s=`span ${f[0]==1?1:f[0]>f[5]?f[5]:f[0]}`,t=`span ${f[1]}`,r,n=f[2]&&me(f);const h=f[8].default,u=ae(h,f,f[7],null);let o=f[3]&&f[3][0]&&de(f);return{c(){e=D("article"),n&&n.c(),i=V(),u&&u.c(),l=V(),o&&o.c(),this.h()},l(c){e=I(c,"ARTICLE",{class:!0});var _=z(e);n&&n.l(_),i=N(_),u&&u.l(_),l=N(_),o&&o.l(_),_.forEach(v),this.h()},h(){b(e,"class",a=""+(x(f[4]?"":"tile tile__content")+" svelte-1krn9ab")),se(e,"blank",f[4]),E(e,"grid-column",s,!1),E(e,"grid-row",t,!1)},m(c,_){w(c,e,_),n&&n.m(e,null),y(e,i),u&&u.m(e,null),y(e,l),o&&o.m(e,null),r=!0},p(c,[_]){c[2]?n?n.p(c,_):(n=me(c),n.c(),n.m(e,i)):n&&(n.d(1),n=null),u&&u.p&&(!r||_&128)&&ee(u,h,c,c[7],r?te(h,c[7],_,null):le(c[7]),null),c[3]&&c[3][0]?o?o.p(c,_):(o=de(c),o.c(),o.m(e,null)):o&&(o.d(1),o=null),(!r||_&16&&a!==(a=""+(x(c[4]?"":"tile tile__content")+" svelte-1krn9ab")))&&b(e,"class",a),_&16&&se(e,"blank",c[4]),_&33&&s!==(s=`span ${c[0]==1?1:c[0]>c[5]?c[5]:c[0]}`)&&E(e,"grid-column",s,!1),_&2&&t!==(t=`span ${c[1]}`)&&E(e,"grid-row",t,!1)},i(c){r||(S(u,c),r=!0)},o(c){B(u,c),r=!1},d(c){c&&v(e),n&&n.d(),u&&u.d(c),o&&o.d()}}}function sl(f,e,i){let l,{$$slots:a={},$$scope:s}=e,{colspan:t=1}=e,{rowspan:r=1}=e,{title:n=null}=e,{links:h=null}=e,{blank:u=!1}=e;const{cols:o}=Ge("tiles");return ne(f,o,c=>i(5,l=c)),f.$$set=c=>{"colspan"in c&&i(0,t=c.colspan),"rowspan"in c&&i(1,r=c.rowspan),"title"in c&&i(2,n=c.title),"links"in c&&i(3,h=c.links),"blank"in c&&i(4,u=c.blank),"$$scope"in c&&i(7,s=c.$$scope)},[t,r,n,h,u,l,o,s,a]}class ve extends H{constructor(e){super();L(this,e,sl,fl,R,{colspan:0,rowspan:1,title:2,links:3,blank:4})}}function be(f,e,i){const l=f.slice();return l[15]=e[i],l}function ke(f){let e,i,l,a,s,t;return{c(){e=U("image"),this.h()},l(r){e=J(r,"image",{"xlink:href":!0,x:!0,y:!0,width:!0,height:!0,filter:!0}),z(e).forEach(v),this.h()},h(){re(e,"xlink:href",i=f[9](f[15].x,f[15].y,f[15].z)),b(e,"x",l=Math.round((f[15].x+f[15].tx)*f[15].k)),b(e,"y",a=Math.round((f[15].y+f[15].ty)*f[15].k)),b(e,"width",s=f[15].k),b(e,"height",t=f[15].k),b(e,"filter","url(#desaturate)")},m(r,n){w(r,e,n)},p(r,n){n&256&&i!==(i=r[9](r[15].x,r[15].y,r[15].z))&&re(e,"xlink:href",i),n&256&&l!==(l=Math.round((r[15].x+r[15].tx)*r[15].k))&&b(e,"x",l),n&256&&a!==(a=Math.round((r[15].y+r[15].ty)*r[15].k))&&b(e,"y",a),n&256&&s!==(s=r[15].k)&&b(e,"width",s),n&256&&t!==(t=r[15].k)&&b(e,"height",t)},d(r){r&&v(e)}}}function pe(f){let e,i,l=f[3]&&we(f);return{c(){l&&l.c(),e=U("path"),this.h()},l(a){l&&l.l(a),e=J(a,"path",{fill:!0,stroke:!0,"stroke-width":!0,d:!0}),z(e).forEach(v),this.h()},h(){b(e,"fill","none"),b(e,"stroke",f[1]),b(e,"stroke-width",f[2]),b(e,"d",i=f[7](f[0]))},m(a,s){l&&l.m(a,s),w(a,e,s)},p(a,s){a[3]?l?l.p(a,s):(l=we(a),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),s&2&&b(e,"stroke",a[1]),s&4&&b(e,"stroke-width",a[2]),s&129&&i!==(i=a[7](a[0]))&&b(e,"d",i)},d(a){l&&l.d(a),a&&v(e)}}}function we(f){let e,i;return{c(){e=U("path"),this.h()},l(l){e=J(l,"path",{fill:!0,stroke:!0,opacity:!0,d:!0}),z(e).forEach(v),this.h()},h(){b(e,"fill",f[1]),b(e,"stroke","none"),b(e,"opacity",f[3]),b(e,"d",i=f[7](f[0]))},m(l,a){w(l,e,a)},p(l,a){a&2&&b(e,"fill",l[1]),a&8&&b(e,"opacity",l[3]),a&129&&i!==(i=l[7](l[0]))&&b(e,"d",i)},d(l){l&&v(e)}}}function nl(f){let e,i,l,a,s,t,r,n=f[8]().map(ye),h=[];for(let o=0;o<n.length;o+=1)h[o]=ke(be(f,n,o));let u=f[0]&&pe(f);return{c(){e=D("div"),i=U("svg"),l=U("filter"),a=U("feColorMatrix");for(let o=0;o<h.length;o+=1)h[o].c();s=W(),u&&u.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var c=z(e);i=J(c,"svg",{viewBox:!0,class:!0});var _=z(i);l=J(_,"filter",{id:!0});var p=z(l);a=J(p,"feColorMatrix",{type:!0,values:!0}),z(a).forEach(v),p.forEach(v);for(let g=0;g<h.length;g+=1)h[g].l(_);s=W(),u&&u.l(_),_.forEach(v),c.forEach(v),this.h()},h(){b(a,"type","saturate"),b(a,"values",f[4]),b(l,"id","desaturate"),b(i,"viewBox",t="0 0 "+f[5]+" "+f[6]),b(i,"class","svelte-am2o7f"),b(e,"class","svg-container svelte-am2o7f"),ie(()=>f[13].call(e))},m(o,c){w(o,e,c),y(e,i),y(i,l),y(l,a);for(let _=0;_<h.length;_+=1)h[_].m(i,null);y(i,s),u&&u.m(i,null),r=fe(e,f[13].bind(e))},p(o,[c]){if(c&16&&b(a,"values",o[4]),c&768){n=o[8]().map(ye);let _;for(_=0;_<n.length;_+=1){const p=be(o,n,_);h[_]?h[_].p(p,c):(h[_]=ke(p),h[_].c(),h[_].m(i,s))}for(;_<h.length;_+=1)h[_].d(1);h.length=n.length}o[0]?u?u.p(o,c):(u=pe(o),u.c(),u.m(i,null)):u&&(u.d(1),u=null),c&96&&t!==(t="0 0 "+o[5]+" "+o[6])&&b(i,"viewBox",t)},i:O,o:O,d(o){o&&v(e),A(h,o),u&&u.d(),r()}}}const ye=([f,e,i],l,{translate:[a,s],scale:t})=>({x:f,y:e,z:i,tx:a,ty:s,k:t});function rl(f,e,i){let l,a,s,t,{geojson:r=null}=e,{bounds:n=[[-9,49],[2,61]]}=e,{color:h="#206095"}=e,{lineWidth:u=2.5}=e,{fillOpacity:o=.1}=e,{saturation:c=.3}=e,_=400,p=400;const g=(k,K,M)=>`http://b.tile.openstreetmap.fr/hot/${M}/${k}/${K}.png`;function m(k,K,M){const P=Ye().fitSize([k,K],M),Y=Math.floor(Math.log2(P.scale()*(2*Math.PI))),Q=Math.pow(2,Y)/(2*Math.PI);return P.center(P.invert([k/2,K/2])),P.scale(Q),P.translate([k/2,K/2]),P}function d(){_=this.clientWidth,p=this.clientHeight,i(5,_),i(6,p)}return f.$$set=k=>{"geojson"in k&&i(0,r=k.geojson),"bounds"in k&&i(10,n=k.bounds),"color"in k&&i(1,h=k.color),"lineWidth"in k&&i(2,u=k.lineWidth),"fillOpacity"in k&&i(3,o=k.fillOpacity),"saturation"in k&&i(4,c=k.saturation)},f.$$.update=()=>{f.$$.dirty&1025&&i(12,l=r||{type:"Polygon",coordinates:[[[n[0][0],n[0][1]],[n[0][0],n[1][1]],[n[1][0],n[1][1]],[n[1][0],n[0][1]],[n[0][0],n[0][1]]]]}),f.$$.dirty&4192&&i(11,a=m(_,p,l)),f.$$.dirty&2144&&i(8,s=Qe().size([_,p]).scale(a.scale()*2*Math.PI).translate(a([0,0])).tileSize(256)),f.$$.dirty&2048&&i(7,t=Xe(a))},[r,h,u,o,c,_,p,t,s,g,n,a,l,d]}class ol extends H{constructor(e){super();L(this,e,rl,nl,R,{geojson:0,bounds:10,color:1,lineWidth:2,fillOpacity:3,saturation:4})}}function Ee(f,e,i){const l=f.slice();return l[14]=e[i],l}function Ke(f,e,i){const l=f.slice();return l[17]=e[i],l[19]=i,l}function ze(f,e,i){const l=f.slice();return l[17]=e[i],l[19]=i,l}function De(f,e,i){const l=f.slice();return l[14]=e[i],l[19]=i,l}function Ie(f){let e,i=f[7],l=[];for(let a=0;a<i.length;a+=1)l[a]=Me(De(f,i,a));return{c(){e=D("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=I(a,"UL",{class:!0});var s=z(e);for(let t=0;t<l.length;t+=1)l[t].l(s);s.forEach(v),this.h()},h(){b(e,"class","legend-block svelte-1ri9pb8")},m(a,s){w(a,e,s);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(a,s){if(s&144){i=a[7];let t;for(t=0;t<i.length;t+=1){const r=De(a,i,t);l[t]?l[t].p(r,s):(l[t]=Me(r),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(a){a&&v(e),A(l,a)}}}function Me(f){let e,i,l,a,s=f[14]+"",t,r,n;return{c(){e=D("li"),i=D("div"),l=V(),a=D("span"),t=j(s),n=V(),this.h()},l(h){e=I(h,"LI",{class:!0});var u=z(e);i=I(u,"DIV",{class:!0}),z(i).forEach(v),l=N(u),a=I(u,"SPAN",{class:!0});var o=z(a);t=C(o,s),o.forEach(v),n=N(u),u.forEach(v),this.h()},h(){b(i,"class","legend-vis "+(f[19]==0?"bar":"marker")+" svelte-1ri9pb8"),E(i,"height","1rem",!1),E(i,"width",f[19]==0?"1rem":f[4]+"px",!1),b(a,"class",r=""+(x(f[19]==0?"bold":"brackets")+" svelte-1ri9pb8")),b(e,"class","svelte-1ri9pb8")},m(h,u){w(h,e,u),y(e,i),y(e,l),y(e,a),y(a,t),y(e,n)},p(h,u){u&16&&E(i,"width",h[19]==0?"1rem":h[4]+"px",!1),u&128&&s!==(s=h[14]+"")&&q(t,s)},d(h){h&&v(e)}}}function Ve(f){let e,i=f[1](f[17].value)+"",l,a,s;return{c(){e=D("span"),l=j(i),a=j(f[2]),this.h()},l(t){e=I(t,"SPAN",{class:!0});var r=z(e);l=C(r,i),a=C(r,f[2]),r.forEach(v),this.h()},h(){b(e,"class",s="label "+(f[19]==0?"bold":"sml brackets")+" svelte-1ri9pb8")},m(t,r){w(t,e,r),y(e,l),y(e,a)},p(t,r){r&34&&i!==(i=t[1](t[17].value)+"")&&q(l,i),r&4&&q(a,t[2])},d(t){t&&v(e)}}}function hl(f){let e,i=`calc(${f[6](f[17][f[0]])}% - ${f[4]/2}px)`,l=`${f[4]}px`;return{c(){e=D("div"),this.h()},l(a){e=I(a,"DIV",{class:!0}),z(e).forEach(v),this.h()},h(){b(e,"class","marker svelte-1ri9pb8"),E(e,"left",i,!1),E(e,"border-left-width",l,!1)},m(a,s){w(a,e,s)},p(a,s){s&113&&i!==(i=`calc(${a[6](a[17][a[0]])}% - ${a[4]/2}px)`)&&E(e,"left",i,!1),s&16&&l!==(l=`${a[4]}px`)&&E(e,"border-left-width",l,!1)},d(a){a&&v(e)}}}function ul(f){let e,i=`${f[6](f[17][f[0]])}%`;return{c(){e=D("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),z(e).forEach(v),this.h()},h(){b(e,"class","bar svelte-1ri9pb8"),E(e,"left","0",!1),E(e,"width",i,!1)},m(l,a){w(l,e,a)},p(l,a){a&97&&i!==(i=`${l[6](l[17][l[0]])}%`)&&E(e,"width",i,!1)},d(l){l&&v(e)}}}function Ne(f){let e;function i(s,t){return s[19]==0?ul:hl}let a=i(f)(f);return{c(){a.c(),e=W()},l(s){a.l(s),e=W()},m(s,t){a.m(s,t),w(s,e,t)},p(s,t){a.p(s,t)},d(s){a.d(s),s&&v(e)}}}function je(f){let e,i=f[14].label+"",l,a,s,t,r,n=`${f[3]}px`,h=f[14].values,u=[];for(let _=0;_<h.length;_+=1)u[_]=Ve(ze(f,h,_));let o=f[14].values,c=[];for(let _=0;_<o.length;_+=1)c[_]=Ne(Ke(f,o,_));return{c(){e=D("div"),l=j(i),a=V();for(let _=0;_<u.length;_+=1)u[_].c();s=V(),t=D("div");for(let _=0;_<c.length;_+=1)c[_].c();r=V(),this.h()},l(_){e=I(_,"DIV",{class:!0});var p=z(e);l=C(p,i),a=N(p);for(let m=0;m<u.length;m+=1)u[m].l(p);p.forEach(v),s=N(_),t=I(_,"DIV",{class:!0});var g=z(t);for(let m=0;m<c.length;m+=1)c[m].l(g);r=N(g),g.forEach(v),this.h()},h(){b(e,"class","label-group svelte-1ri9pb8"),b(t,"class","bar-group svelte-1ri9pb8"),E(t,"height",n,!1)},m(_,p){w(_,e,p),y(e,l),y(e,a);for(let g=0;g<u.length;g+=1)u[g].m(e,null);w(_,s,p),w(_,t,p);for(let g=0;g<c.length;g+=1)c[g].m(t,null);y(t,r)},p(_,p){if(p&32&&i!==(i=_[14].label+"")&&q(l,i),p&38){h=_[14].values;let g;for(g=0;g<h.length;g+=1){const m=ze(_,h,g);u[g]?u[g].p(m,p):(u[g]=Ve(m),u[g].c(),u[g].m(e,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=h.length}if(p&113){o=_[14].values;let g;for(g=0;g<o.length;g+=1){const m=Ke(_,o,g);c[g]?c[g].p(m,p):(c[g]=Ne(m),c[g].c(),c[g].m(t,r))}for(;g<c.length;g+=1)c[g].d(1);c.length=o.length}p&8&&n!==(n=`${_[3]}px`)&&E(t,"height",n,!1)},d(_){_&&v(e),A(u,_),_&&v(s),_&&v(t),A(c,_)}}}function _l(f){let e,i,l=f[7][1]&&Ie(f),a=f[5],s=[];for(let t=0;t<a.length;t+=1)s[t]=je(Ee(f,a,t));return{c(){l&&l.c(),e=V();for(let t=0;t<s.length;t+=1)s[t].c();i=W()},l(t){l&&l.l(t),e=N(t);for(let r=0;r<s.length;r+=1)s[r].l(t);i=W()},m(t,r){l&&l.m(t,r),w(t,e,r);for(let n=0;n<s.length;n+=1)s[n].m(t,r);w(t,i,r)},p(t,[r]){if(t[7][1]?l?l.p(t,r):(l=Ie(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),r&127){a=t[5];let n;for(n=0;n<a.length;n+=1){const h=Ee(t,a,n);s[n]?s[n].p(h,r):(s[n]=je(h),s[n].c(),s[n].m(i.parentNode,i))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},i:O,o:O,d(t){l&&l.d(t),t&&v(e),A(s,t),t&&v(i)}}}function cl(f,e,i){let l,a,s,t,{data:r}=e,{xKey:n="value"}=e,{yKey:h="category"}=e,{zKey:u="group"}=e,{format:o=m=>m}=e,{suffix:c="%"}=e,{barHeight:_=25}=e,{markerWidth:p=3}=e;function g(m,d){let k={};for(const M of m)k[M[d]]||(k[M[d]]={label:M[d],values:[]}),k[M[d]].values.push(M);let K=[];for(const M in k)K.push(k[M]);return K}return f.$$set=m=>{"data"in m&&i(8,r=m.data),"xKey"in m&&i(0,n=m.xKey),"yKey"in m&&i(9,h=m.yKey),"zKey"in m&&i(10,u=m.zKey),"format"in m&&i(1,o=m.format),"suffix"in m&&i(2,c=m.suffix),"barHeight"in m&&i(3,_=m.barHeight),"markerWidth"in m&&i(4,p=m.markerWidth)},f.$$.update=()=>{f.$$.dirty&257&&i(11,l=[0,Math.max(...r.map(m=>m[n]))]),f.$$.dirty&768&&r.map(m=>m[h]).filter((m,d,k)=>k.indexOf(m)===d),f.$$.dirty&1280&&i(7,a=r.map(m=>m[u]).filter((m,d,k)=>k.indexOf(m)===d)),f.$$.dirty&2048&&i(6,s=m=>m/l[1]*100),f.$$.dirty&768&&i(5,t=g(r,h))},[n,o,c,_,p,t,s,a,r,h,u,l]}class ml extends H{constructor(e){super();L(this,e,cl,_l,R,{data:8,xKey:0,yKey:9,zKey:10,format:1,suffix:2,barHeight:3,markerWidth:4})}}function Ce(f,e,i){const l=f.slice();return l[14]=e[i],l[16]=i,l}function Se(f,e,i){const l=f.slice();return l[17]=e[i],l[19]=i,l}function We(f,e,i){const l=f.slice();return l[17]=e[i],l[19]=i,l}function Pe(f,e,i){const l=f.slice();return l[21]=e[i],l[16]=i,l}function qe(f){let e,i=f[6],l=[];for(let a=0;a<i.length;a+=1)l[a]=Be(Pe(f,i,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=W()},l(a){for(let s=0;s<l.length;s+=1)l[s].l(a);e=W()},m(a,s){for(let t=0;t<l.length;t+=1)l[t].m(a,s);w(a,e,s)},p(a,s){if(s&68){i=a[6];let t;for(t=0;t<i.length;t+=1){const r=Pe(a,i,t);l[t]?l[t].p(r,s):(l[t]=Be(r),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(a){A(l,a),a&&v(e)}}}function Be(f){let e,i,l=`${f[16]==0?0:f[2]}px`,a,s,t=f[21]+"",r,n,h;return{c(){e=D("li"),i=D("div"),a=V(),s=D("span"),r=j(t),h=V(),this.h()},l(u){e=I(u,"LI",{class:!0});var o=z(e);i=I(o,"DIV",{class:!0}),z(i).forEach(v),a=N(o),s=I(o,"SPAN",{class:!0});var c=z(s);r=C(c,t),c.forEach(v),h=N(o),o.forEach(v),this.h()},h(){b(i,"class","legend-vis "+(f[16]==0?"bar":"marker-vis")+" svelte-vf344q"),E(i,"border-bottom-width",l,!1),b(s,"class",n=""+(x(f[16]==0?"bold":"brackets")+" svelte-vf344q")),b(e,"class","svelte-vf344q")},m(u,o){w(u,e,o),y(e,i),y(e,a),y(e,s),y(s,r),y(e,h)},p(u,o){o&4&&l!==(l=`${u[16]==0?0:u[2]}px`)&&E(i,"border-bottom-width",l,!1),o&64&&t!==(t=u[21]+"")&&q(r,t)},d(u){u&&v(e)}}}function dl(f){let e,i=f[14].values,l=[];for(let a=0;a<i.length;a+=1)l[a]=Ae(Se(f,i,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=W()},l(a){for(let s=0;s<l.length;s+=1)l[s].l(a);e=W()},m(a,s){for(let t=0;t<l.length;t+=1)l[t].m(a,s);w(a,e,s)},p(a,s){if(s&181){i=a[14].values;let t;for(t=0;t<i.length;t+=1){const r=Se(a,i,t);l[t]?l[t].p(r,s):(l[t]=Ae(r),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(a){A(l,a),a&&v(e)}}}function gl(f){let e,i=f[14].values,l=[];for(let a=0;a<i.length;a+=1)l[a]=Oe(We(f,i,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=W()},l(a){for(let s=0;s<l.length;s+=1)l[s].l(a);e=W()},m(a,s){for(let t=0;t<l.length;t+=1)l[t].m(a,s);w(a,e,s)},p(a,s){if(s&177){i=a[14].values;let t;for(t=0;t<i.length;t+=1){const r=We(a,i,t);l[t]?l[t].p(r,s):(l[t]=Oe(r),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(a){A(l,a),a&&v(e)}}}function Ae(f){let e,i=`calc(${f[5](f[17][f[0]])}% - ${f[2]/2}px)`,l=`${f[19]/f[7].length*100}%`,a=`${1/f[7].length*100}%`,s=`${f[2]}px`;return{c(){e=D("div"),this.h()},l(t){e=I(t,"DIV",{class:!0}),z(e).forEach(v),this.h()},h(){b(e,"class","marker svelte-vf344q"),E(e,"bottom",i,!1),E(e,"height","0px",!1),E(e,"left",l,!1),E(e,"width",a,!1),E(e,"border-bottom-width",s,!1)},m(t,r){w(t,e,r)},p(t,r){r&53&&i!==(i=`calc(${t[5](t[17][t[0]])}% - ${t[2]/2}px)`)&&E(e,"bottom",i,!1),r&128&&l!==(l=`${t[19]/t[7].length*100}%`)&&E(e,"left",l,!1),r&128&&a!==(a=`${1/t[7].length*100}%`)&&E(e,"width",a,!1),r&4&&s!==(s=`${t[2]}px`)&&E(e,"border-bottom-width",s,!1)},d(t){t&&v(e)}}}function Oe(f){let e,i=`${100-f[5](f[17][f[0]])}%`,l=`${f[5](f[17][f[0]])}%`,a=`${f[19]/f[7].length*100}%`,s=`calc(${1/f[7].length*100}% + 0.2px)`;return{c(){e=D("div"),this.h()},l(t){e=I(t,"DIV",{class:!0}),z(e).forEach(v),this.h()},h(){b(e,"class","bar svelte-vf344q"),E(e,"top",i,!1),E(e,"height",l,!1),E(e,"left",a,!1),E(e,"width",s,!1)},m(t,r){w(t,e,r)},p(t,r){r&49&&i!==(i=`${100-t[5](t[17][t[0]])}%`)&&E(e,"top",i,!1),r&49&&l!==(l=`${t[5](t[17][t[0]])}%`)&&E(e,"height",l,!1),r&128&&a!==(a=`${t[19]/t[7].length*100}%`)&&E(e,"left",a,!1),r&128&&s!==(s=`calc(${1/t[7].length*100}% + 0.2px)`)&&E(e,"width",s,!1)},d(t){t&&v(e)}}}function He(f){let e;function i(s,t){return s[16]==0?gl:dl}let a=i(f)(f);return{c(){a.c(),e=W()},l(s){a.l(s),e=W()},m(s,t){a.m(s,t),w(s,e,t)},p(s,t){a.p(s,t)},d(s){a.d(s),s&&v(e)}}}function vl(f){let e,i,l,a=`${f[1]}px`,s,t,r,n=f[3][0]+"",h,u,o,c=f[3][1]+"",_,p=f[6][1]&&qe(f),g=f[4],m=[];for(let d=0;d<g.length;d+=1)m[d]=He(Ce(f,g,d));return{c(){e=D("ul"),p&&p.c(),i=V(),l=D("div");for(let d=0;d<m.length;d+=1)m[d].c();s=V(),t=D("div"),r=D("div"),h=j(n),u=V(),o=D("div"),_=j(c),this.h()},l(d){e=I(d,"UL",{class:!0});var k=z(e);p&&p.l(k),k.forEach(v),i=N(d),l=I(d,"DIV",{class:!0});var K=z(l);for(let Q=0;Q<m.length;Q+=1)m[Q].l(K);K.forEach(v),s=N(d),t=I(d,"DIV",{class:!0});var M=z(t);r=I(M,"DIV",{class:!0});var P=z(r);h=C(P,n),P.forEach(v),u=N(M),o=I(M,"DIV",{class:!0});var Y=z(o);_=C(Y,c),Y.forEach(v),M.forEach(v),this.h()},h(){b(e,"class","legend-block svelte-vf344q"),b(l,"class","bar-group svelte-vf344q"),E(l,"height",a,!1),b(r,"class","svelte-vf344q"),E(r,"left",0,!1),b(o,"class","svelte-vf344q"),E(o,"right",0,!1),b(t,"class","x-scale svelte-vf344q"),E(t,"height","1rem",!1)},m(d,k){w(d,e,k),p&&p.m(e,null),w(d,i,k),w(d,l,k);for(let K=0;K<m.length;K+=1)m[K].m(l,null);w(d,s,k),w(d,t,k),y(t,r),y(r,h),y(t,u),y(t,o),y(o,_)},p(d,[k]){if(d[6][1]?p?p.p(d,k):(p=qe(d),p.c(),p.m(e,null)):p&&(p.d(1),p=null),k&181){g=d[4];let K;for(K=0;K<g.length;K+=1){const M=Ce(d,g,K);m[K]?m[K].p(M,k):(m[K]=He(M),m[K].c(),m[K].m(l,null))}for(;K<m.length;K+=1)m[K].d(1);m.length=g.length}k&2&&a!==(a=`${d[1]}px`)&&E(l,"height",a,!1),k&8&&n!==(n=d[3][0]+"")&&q(h,n),k&8&&c!==(c=d[3][1]+"")&&q(_,c)},i:O,o:O,d(d){d&&v(e),p&&p.d(),d&&v(i),d&&v(l),A(m,d),d&&v(s),d&&v(t)}}}function bl(f,e,i){let l,a,s,t,r,{data:n}=e,{xKey:h="category"}=e,{yKey:u="value"}=e,{zKey:o="group"}=e,{height:c=65}=e,{markerWidth:_=2.5}=e,{minmax:p=["0 years","80 plus"]}=e,{format:g=d=>Math.round(d)}=e;function m(d,k){let K={};for(const P of d)K[P[k]]||(K[P[k]]={label:P[k],values:[]}),K[P[k]].values.push(P);let M=[];for(const P in K)M.push(K[P]);return M}return f.$$set=d=>{"data"in d&&i(8,n=d.data),"xKey"in d&&i(9,h=d.xKey),"yKey"in d&&i(0,u=d.yKey),"zKey"in d&&i(10,o=d.zKey),"height"in d&&i(1,c=d.height),"markerWidth"in d&&i(2,_=d.markerWidth),"minmax"in d&&i(3,p=d.minmax),"format"in d&&i(11,g=d.format)},f.$$.update=()=>{f.$$.dirty&768&&i(7,l=n.map(d=>d[h]).filter((d,k,K)=>K.indexOf(d)===k)),f.$$.dirty&257&&i(12,a=[0,Math.max(...n.map(d=>d[u]))]),f.$$.dirty&1280&&i(6,s=n.map(d=>d[o]).filter((d,k,K)=>K.indexOf(d)===k)),f.$$.dirty&4096&&i(5,t=d=>Math.abs(d/a[1])*100),f.$$.dirty&1280&&i(4,r=m(n,o))},[u,c,_,p,r,t,s,l,n,h,o,g,a]}class kl extends H{constructor(e){super();L(this,e,bl,vl,R,{data:8,xKey:9,yKey:0,zKey:10,height:1,markerWidth:2,minmax:3,format:11})}}function pl(f){let e,i=f[4](f[0][0][f[2]])+"",l,a,s,t,r,n,h,u=f[4](f[0][1][f[2]])+"",o,c,_=f[0][1][f[3]]+"",p;return{c(){e=D("div"),l=j(i),a=V(),s=D("div"),t=j(f[1]),r=V(),n=D("div"),h=D("mark"),o=j(u),c=j(` 
  for `),p=j(_),this.h()},l(g){e=I(g,"DIV",{class:!0});var m=z(e);l=C(m,i),m.forEach(v),a=N(g),s=I(g,"DIV",{class:!0});var d=z(s);t=C(d,f[1]),d.forEach(v),r=N(g),n=I(g,"DIV",{class:!0});var k=z(n);h=I(k,"MARK",{class:!0});var K=z(h);o=C(K,u),K.forEach(v),c=C(k,` 
  for `),p=C(k,_),k.forEach(v),this.h()},h(){b(e,"class","num-big svelte-19zwnt3"),b(s,"class","num-suffix svelte-19zwnt3"),b(h,"class","svelte-19zwnt3"),b(n,"class","num-desc svelte-19zwnt3")},m(g,m){w(g,e,m),y(e,l),w(g,a,m),w(g,s,m),y(s,t),w(g,r,m),w(g,n,m),y(n,h),y(h,o),y(n,c),y(n,p)},p(g,[m]){m&21&&i!==(i=g[4](g[0][0][g[2]])+"")&&q(l,i),m&2&&q(t,g[1]),m&21&&u!==(u=g[4](g[0][1][g[2]])+"")&&q(o,u),m&9&&_!==(_=g[0][1][g[3]]+"")&&q(p,_)},i:O,o:O,d(g){g&&v(e),g&&v(a),g&&v(s),g&&v(r),g&&v(n)}}}function wl(f,e,i){let{data:l}=e,{suffix:a=""}=e,{xKey:s="value"}=e,{zKey:t="group"}=e,{format:r=n=>n}=e;return f.$$set=n=>{"data"in n&&i(0,l=n.data),"suffix"in n&&i(1,a=n.suffix),"xKey"in n&&i(2,s=n.xKey),"zKey"in n&&i(3,t=n.zKey),"format"in n&&i(4,r=n.format)},[l,a,s,t,r]}class yl extends H{constructor(e){super();L(this,e,wl,pl,R,{data:0,suffix:1,xKey:2,zKey:3,format:4})}}function Le(f,e,i){const l=f.slice();return l[6]=e[i],l}function Re(f){let e,i,l,a,s,t,r,n,h,u,o,c,_,p,g;return a=new il({props:{$$slots:{default:[zl]},$$scope:{ctx:f}}}),{c(){e=D("h1"),i=j(f[0]),l=V(),T(a.$$.fragment),s=V(),t=D("span"),r=j("Source: Census 2011 data. Office for National Statistics | "),n=D("a"),h=j("Download the data"),c=j(" | "),_=D("a"),p=j("Build your own profile"),this.h()},l(m){e=I(m,"H1",{class:!0});var d=z(e);i=C(d,f[0]),d.forEach(v),l=N(m),X(a.$$.fragment,m),s=N(m),t=I(m,"SPAN",{class:!0});var k=z(t);r=C(k,"Source: Census 2011 data. Office for National Statistics | "),n=I(k,"A",{href:!0,download:!0});var K=z(n);h=C(K,"Download the data"),K.forEach(v),c=C(k," | "),_=I(k,"A",{href:!0,target:!0});var M=z(_);p=C(M,"Build your own profile"),M.forEach(v),k.forEach(v),this.h()},h(){b(e,"class","svelte-bp85os"),b(n,"href",u=Je(f[1])),b(n,"download",o=""+(f[0]+".csv")),b(_,"href",el),b(_,"target","_blank"),b(t,"class","footnote svelte-bp85os")},m(m,d){w(m,e,d),y(e,i),w(m,l,d),F(a,m,d),w(m,s,d),w(m,t,d),y(t,r),y(t,n),y(n,h),y(t,c),y(t,_),y(_,p),g=!0},p(m,d){(!g||d&1)&&q(i,m[0]);const k={};d&518&&(k.$$scope={dirty:d,ctx:m}),a.$set(k),(!g||d&2&&u!==(u=Je(m[1])))&&b(n,"href",u),(!g||d&1&&o!==(o=""+(m[0]+".csv")))&&b(n,"download",o)},i(m){g||(S(a.$$.fragment,m),g=!0)},o(m){B(a.$$.fragment,m),g=!1},d(m){m&&v(e),m&&v(l),G(a,m),m&&v(s),m&&v(t)}}}function El(f){let e,i,l;return i=new ol({props:{geojson:f[2]}}),{c(){e=D("div"),T(i.$$.fragment),this.h()},l(a){e=I(a,"DIV",{});var s=z(e);X(i.$$.fragment,s),s.forEach(v),this.h()},h(){E(e,"height","230px",!1),E(e,"width","100%",!1)},m(a,s){w(a,e,s),F(i,e,null),l=!0},p(a,s){const t={};s&4&&(t.geojson=a[2]),i.$set(t)},i(a){l||(S(i.$$.fragment,a),l=!0)},o(a){B(i.$$.fragment,a),l=!1},d(a){a&&v(e),G(i)}}}function Kl(f){let e,i,l;var a=f[3][f[6].meta.chart];function s(t){return{props:{data:t[6].data,suffix:t[6].meta.unit,format:oe(t[6].meta.format)}}}return a&&(e=new a(s(f))),{c(){e&&T(e.$$.fragment),i=V()},l(t){e&&X(e.$$.fragment,t),i=N(t)},m(t,r){e&&F(e,t,r),w(t,i,r),l=!0},p(t,r){const n={};if(r&2&&(n.data=t[6].data),r&2&&(n.suffix=t[6].meta.unit),r&2&&(n.format=oe(t[6].meta.format)),a!==(a=t[3][t[6].meta.chart])){if(e){Z();const h=e;B(h.$$.fragment,1,0,()=>{G(h,1)}),$()}a?(e=new a(s(t)),T(e.$$.fragment),S(e.$$.fragment,1),F(e,i.parentNode,i)):e=null}else a&&e.$set(n)},i(t){l||(e&&S(e.$$.fragment,t),l=!0)},o(t){e&&B(e.$$.fragment,t),l=!1},d(t){e&&G(e,t),t&&v(i)}}}function Ue(f){let e,i;return e=new ve({props:{title:f[6].meta.label,$$slots:{default:[Kl]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,a){F(e,l,a),i=!0},p(l,a){const s={};a&2&&(s.title=l[6].meta.label),a&514&&(s.$$scope={dirty:a,ctx:l}),e.$set(s)},i(l){i||(S(e.$$.fragment,l),i=!0)},o(l){B(e.$$.fragment,l),i=!1},d(l){G(e,l)}}}function zl(f){let e,i,l,a;e=new ve({props:{title:"Area map",$$slots:{default:[El]},$$scope:{ctx:f}}});let s=f[1],t=[];for(let n=0;n<s.length;n+=1)t[n]=Ue(Le(f,s,n));const r=n=>B(t[n],1,1,()=>{t[n]=null});return{c(){T(e.$$.fragment),i=V();for(let n=0;n<t.length;n+=1)t[n].c();l=W()},l(n){X(e.$$.fragment,n),i=N(n);for(let h=0;h<t.length;h+=1)t[h].l(n);l=W()},m(n,h){F(e,n,h),w(n,i,h);for(let u=0;u<t.length;u+=1)t[u].m(n,h);w(n,l,h),a=!0},p(n,h){const u={};if(h&516&&(u.$$scope={dirty:h,ctx:n}),e.$set(u),h&10){s=n[1];let o;for(o=0;o<s.length;o+=1){const c=Le(n,s,o);t[o]?(t[o].p(c,h),S(t[o],1)):(t[o]=Ue(c),t[o].c(),S(t[o],1),t[o].m(l.parentNode,l))}for(Z(),o=s.length;o<t.length;o+=1)r(o);$()}},i(n){if(!a){S(e.$$.fragment,n);for(let h=0;h<s.length;h+=1)S(t[h]);a=!0}},o(n){B(e.$$.fragment,n),t=t.filter(Boolean);for(let h=0;h<t.length;h+=1)B(t[h]);a=!1},d(n){G(e,n),n&&v(i),A(t,n),n&&v(l)}}}function Dl(f){let e,i,l=f[0]&&f[1]&&f[2]&&Re(f);return{c(){l&&l.c(),e=W()},l(a){l&&l.l(a),e=W()},m(a,s){l&&l.m(a,s),w(a,e,s),i=!0},p(a,[s]){a[0]&&a[1]&&a[2]?l?(l.p(a,s),s&7&&S(l,1)):(l=Re(a),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(Z(),B(l,1,1,()=>{l=null}),$())},i(a){i||(S(l),i=!0)},o(a){B(l),i=!1},d(a){l&&l.d(a),a&&v(e)}}}function Je(f){let e=`table,category,area,value,unit
`;for(const i of f){let l=i.meta.label,a=i.meta.unit;for(const s of i.data)e+=`"${l}","${s.category}","${s.group}",${s.value},"${a}"
`}return"data:text/csv;charset=utf-8,"+encodeURI(e)}function Il(f,e,i){let l;ne(f,xe,h=>i(4,l=h));const a={BarChart:ml,ProfileChart:kl,NumBlock:yl};let s,t,r;Ze(()=>{let h={},u=new URLSearchParams(l.url.hash.slice(3));for(let o of u.entries())o[0]=="name"?h[o[0]]=atob(o[1]):["tabs","poly"].includes(o[0])&&(h[o[0]]=JSON.parse(atob(o[1])));i(0,s=h.name),i(2,r=h.poly),i(1,t=n(h.tabs,s)),new $e.Child({id:"profile",polling:500})});function n(h,u){let o=[];for(const c of h){let _=he[c.key].rows,p=c.vals,g=[],m="England and Wales";for(let d=0;d<p.length;d++)g.push({group:d%2==0?u:m,category:_[Math.floor(d/2)].label,value:p[d]});o.push({meta:he[c.key],data:g})}return o}return[s,t,r,a]}class Cl extends H{constructor(e){super();L(this,e,Il,Dl,R,{})}}export{Cl as default};

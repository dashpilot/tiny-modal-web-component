function v(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function $(t){return t()}function C(){return Object.create(null)}function a(t){t.forEach($)}function j(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function Q(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function R(t,n){t.appendChild(n)}function U(t,n,e){t.insertBefore(n,e||null)}function N(t){t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function X(){return O(" ")}function Y(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function T(t){return Array.from(t.childNodes)}function tt(t,n,e){t.classList[e?"add":"remove"](n)}function nt(t){const n={};for(const e of t)n[e.name]=e.value;return n}let l;function f(t){l=t}function H(){if(!l)throw new Error("Function called outside component initialization");return l}function et(t){H().$$.on_mount.push(t)}const d=[],L=[],h=[],S=[],z=Promise.resolve();let g=!1;function B(){g||(g=!0,z.then(A))}function b(t){h.push(t)}const y=new Set;let _=0;function A(){const t=l;do{for(;_<d.length;){const n=d[_];_++,f(n),F(n.$$)}for(f(null),d.length=0,_=0;L.length;)L.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];y.has(e)||(y.add(e),e())}h.length=0}while(d.length);for(;S.length;)S.pop()();g=!1,y.clear(),f(t)}function F(t){if(t.fragment!==null){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const P=new Set;function V(t,n){t&&t.i&&(P.delete(t),t.i(n))}function q(t,n,e,r){const{fragment:i,on_mount:m,on_destroy:u,after_update:p}=t.$$;i&&i.m(n,e),r||b(()=>{const s=m.map($).filter(j);u?u.push(...s):a(s),t.$$.on_mount=[]}),p.forEach(b)}function D(t,n){const e=t.$$;e.fragment!==null&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){t.$$.dirty[0]===-1&&(d.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ot(t,n,e,r,i,m,u,p=[-1]){const s=l;f(t);const o=t.$$={fragment:null,ctx:null,props:m,update:v,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:C(),dirty:p,skip_bound:!1,root:n.target||s.$$.root};u&&u(o.root);let k=!1;if(o.ctx=e?e(t,n.props||{},(c,x,...E)=>{const w=E.length?E[0]:x;return o.ctx&&i(o.ctx[c],o.ctx[c]=w)&&(!o.skip_bound&&o.bound[c]&&o.bound[c](w),k&&G(t,c)),x}):[],o.update(),k=!0,a(o.before_update),o.fragment=r?r(o.ctx):!1,n.target){if(n.hydrate){const c=T(n.target);o.fragment&&o.fragment.l(c),c.forEach(N)}else o.fragment&&o.fragment.c();n.intro&&V(t.$$.fragment),q(t,n.target,n.anchor,n.customElement),A()}f(s)}let I;typeof HTMLElement=="function"&&(I=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map($).filter(j);for(const n in this.$$.slotted)this.appendChild(this.$$.slotted[n])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){a(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=v}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const r=e.indexOf(n);r!==-1&&e.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});export{I as S,nt as a,U as b,X as c,Z as d,W as e,A as f,R as g,N as h,ot as i,J as j,Q as k,Y as l,v as n,et as o,K as s,tt as t};
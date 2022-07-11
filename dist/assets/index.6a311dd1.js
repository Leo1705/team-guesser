var re=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var x=(t,e,n)=>e in t?re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))le.call(e,n)&&x(t,n,e[n]);if(C)for(var n of C(e))ue.call(e,n)&&x(t,n,e[n]);return t},k=(t,e)=>ie(t,ce(e));import{g as ge,p as de,s as y,l as me,a as pe,c as he,b as be,d as fe,i as ye,e as ve}from"./vendor.3fb14a9c.js";const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};_e();const E=document.createElement("template");E.innerHTML=`
<style>
    :host {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--text-muted);
        padding: 12px 0;
    }

    :host .brand {
        display: flex;
        justify-content: center;
        flex: 2;
        text-align: center;
    }

    :host .button-group {
        display: flex;
        flex: 1;
        gap: 0.5em;
    }

    :host .button-group.left {
        justify-content: flex-start;
    }

    :host .button-group.right {
        justify-content: flex-end;
    }
</style>
<div class="button-group left">
    <slot name="buttons-left"></slot>
</div>
<div class="brand">
    <slot name="brand"></slot>
</div>
<div class="button-group right">
    <slot name="buttons-right"></slot>
</div>
`;window.customElements.define("game-header",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(E.content.cloneNode(!0))}});const M=document.createElement("template");M.innerHTML=`
    <style>
        ::slotted(*) {
            display: none;
        }

        :host {
            display: block;
            flex: 1;
        }

        :host(:not([loading])) ::slotted(*[active]) {
            display: block;
        }

        :host([loading]) ::slotted([slot="load-spinner"]) {
            display: block;
        }
    </style>
    <slot name="load-spinner"></slot>
    <slot name="screen"></slot>
`;const b="screen-router";window.customElements.define(b,class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(M.content.cloneNode(!0))}static get observedAttributes(){return["open"]}async attributeChangedCallback(t,e,n){if(t==="open"){const o=this.querySelector(e);o&&(o.removeAttribute("active"),o.dispatchEvent(new CustomEvent("inactive")));const s=this.querySelector(n);s.setAttribute("active",""),s.dispatchEvent(new CustomEvent("active"))}}});function je(t){return async e=>{document.querySelector(b).setAttribute("loading",""),await t(e),document.querySelector(b).removeAttribute("loading")}}function i(t){document.querySelector(b).setAttribute("open",t)}const we=`
  <input name="text" type="text"/>
  <ul class="items">

  </ul>
`;class Se extends HTMLElement{constructor(){super();this.innerHTML=we;const e=this.querySelector("input[name=text]");e.placeholder=this.getAttribute("placeholder");const n=this.querySelector("ul");e.addEventListener("input",()=>{var s;const o=(s=e.value)==null?void 0:s.toUpperCase();this.clearOptions(),o&&(this.choices.filter(a=>{var f=a.toUpperCase().indexOf(o.toUpperCase());return f!==-1}).map(a=>this.createOption(a,o)).forEach((a,c)=>{a.setAttribute("tabIndex",c),n.appendChild(a)}),this.value=e.value)}),document.addEventListener("click",()=>{this.clearOptions()})}createOption(e,n){const o=document.createElement("li");o.classList.add("option");var s=e.toUpperCase().indexOf(n.toUpperCase());if(s!==-1)return o.innerHTML+=e.substr(0,s),o.innerHTML+="<strong>"+e.substr(s,n.length)+"</strong>",o.innerHTML+=e.substr(s+n.length),o.addEventListener("click",a=>{a.stopPropagation();const c=this.querySelector("input[name=text]");c.value=e,this.value=c.value,this.clearOptions()}),o}clearOptions(){this.querySelector("ul").replaceChildren([])}}const Le="auto-complete";window.customElements.define(Le,Se);const Ce=`
    <img name="answerImage" />
`;class xe extends HTMLElement{constructor(){super();this.innerHTML=Ce;const e=this.querySelector("img[name=answerImage]");let n=this;new MutationObserver(function(s){s.forEach(a=>{if(a.attributeName.includes("src"))e.src=n.getAttribute("src");else if(a.attributeName.includes("blur")){const c=n.getAttribute("src");ge(c,function(f,d){if(f)return;const p=document.createElement("canvas");p.width=d.width,p.height=d.height;const S=p.getContext("2d");var m=S.createImageData(d.width,d.height);m.data.set(d.data.slice());let L=Number(n.getAttribute("blur"));L>0&&de(m,0,0,m.width,m.height,L),S.putImageData(m,0,0),e.src=p.toDataURL()})}})}).observe(this,{attributes:!0})}}const ke="pixelated-img";window.customElements.define(ke,xe);var I="/assets/arsenal.6692126e.jpg",T="/assets/aston-villa.f5244c93.jpg",$="/assets/barnsley.1b6e1dd9.jpg",D="/assets/birmingham-city.aa65653f.jpg",H="/assets/blackburn-rovers.39a60d61.jpg",O="/assets/blackpool.ef47705d.jpg",U="/assets/bolton-wonderers.90521b08.jpg",N="/assets/bournemouth.b5bbb83a.jpg",B="/assets/bradford city.cca540c3.jpg",R="/assets/brentford.40831016.jpg",P="/assets/brighton-and-hove-albion.f82e6120.jpg",W="/assets/burnley.469a5907.jpg",F="/assets/cardiff-city.5f980d77.jpg",G="/assets/charlton-athletic.f4d1de28.jpg",z="/assets/chelsea.5393250d.jpg",K="/assets/coventry-city.2474aed9.jpg",Q="/assets/crystal-palace.04364dc3.jpg",V="/assets/derby-county.0bf629f4.jpg",X="/assets/everton.138889e6.jpg",Y="/assets/fulham.292c4a85.jpg",Z="/assets/huddersfield-town.71492277.jpg",J="/assets/hull-city.ae48a3ae.jpg",ee="/assets/ipswich-town.a0272c49.jpg",te="/assets/leeds-united.45ac7b5f.jpg",ne="/assets/leicester-city.b828e194.jpg";class se{data(){return{}}onLoad(e){return e}}class Ae{constructor(e,...n){this.name=e,this.models=n}data(){return{}}newState(){return Object.assign({},...this.models.map(e=>e.data()))}async loadObject(){const e=await y.get(this.name)||{},n=this.newState(),o=g(g({},n),e);return this.models.forEach(s=>s.onLoad(o)),o}async saveObject(e){await y.set(this.name,e)}}class qe extends se{constructor(e){super();this.attempts=e}data(){return{wins:new Array(this.attempts).fill(0)}}}function Ee(){var t=new Date;return t.setHours(24,0,0,0),t}function Me(t){var e=new Date().getTime();return{hours:Math.floor((t-e)%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor((t-e)%(1e3*60*60)/(1e3*60)),seconds:Math.floor((t-e)%(1e3*60)/1e3)}}function oe(t){return Math.floor(t/(1e3*60*60*24))}function Ie(){return oe(Date.now())}class Te extends se{constructor(e){super();this.day=Ie()-oe(e)}data(){return{day:this.day}}onLoad(e){return e.day!==this.day?g(g({},e),this.data()):e}random(){return(1103515245*this.day+12345>>>0)/4294967295}}class $e extends Te{data(){return k(g({},super.data()),{guesses:[]})}}const h=["Arsenal","Aston Villa","Barnsley","Birmingham City","Blackburn Rovers","Blackpool","Bolton Wanderers","Bournemouth","Bradford City","Brentford","Brighton and Hove Albion","Burnley","Cardiff City","Charlton Athletic","Chelsea","Coventry City","Crystal Palace","Derby County","Everton","Fulham","Huddersfield Town","Hull City","Ipswich Town","Leeds United","Leicester City","Liverpool","Manchester City","Manchester United","Middlesbrough","Newcastle United","Norwich City","Nottingham Forest","Oldham Athletic","Portsmouth","Queens Park Rangers","Reading","Sheffield United","Sheffield Wednesday","Southampton","Stoke city","Sunderland","Swansea City","Swindon Town","Tottenham Hotspur","Watford","West Bromwich Albion","West Ham United","Wlgan Athletic","Wimbledon","Wolverhampton Wanderers"],ae=5,A=new Ae("daily",new qe(ae),new $e(Date.parse("2022-06-12T12:00:00")));var r={store:null,currentGuess:"",correctAnswer:null,async init(){this.store=await A.loadObject(),this.correctAnswer=h[this.store.day%h.length]},get attempts(){return ae},isSolved(){var t;return((t=this.store.guesses[this.store.guesses.length-1])==null?void 0:t.toUpperCase())===this.getCurrentAnswer().toUpperCase()},isDone(){return this.store.guesses.length>=this.attempts||this.isSolved()},getCurrentAnswerImageFile(){return this.getCurrentAnswer().replace(/[^A-Za-z0-9]/g,"-").replace(/-+/g,"-").replace(/(^-|-$)/g,"").toLowerCase()+".jpg"},getCurrentAnswer(){const t=this.correctAnswer;return t||h[0],t},submit(t){this.store.guesses.push(t),this.isSolved()&&(this.store.wins[this.store.guesses.length-1]+=1),this.save()},async login(){await me()&&document.body.classList.add("isLoggedIn")},async logout(){pe(),document.body.classList.remove("isLoggedIn")},save(){A.saveObject(this.store)}};const De=40,u=document.querySelector("#game-screen");u.addEventListener("active",je(async()=>{u.querySelector("#game-image").setAttribute("src",new URL({"../../../content/images/arsenal.jpg":I,"../../../content/images/aston-villa.jpg":T,"../../../content/images/barnsley.jpg":$,"../../../content/images/birmingham-city.jpg":D,"../../../content/images/blackburn-rovers.jpg":H,"../../../content/images/blackpool.jpg":O,"../../../content/images/bolton-wonderers.jpg":U,"../../../content/images/bournemouth.jpg":N,"../../../content/images/bradford city.jpg":B,"../../../content/images/brentford.jpg":R,"../../../content/images/brighton-and-hove-albion.jpg":P,"../../../content/images/burnley.jpg":W,"../../../content/images/cardiff-city.jpg":F,"../../../content/images/charlton-athletic.jpg":G,"../../../content/images/chelsea.jpg":z,"../../../content/images/coventry-city.jpg":K,"../../../content/images/crystal-palace.jpg":Q,"../../../content/images/derby-county.jpg":V,"../../../content/images/everton.jpg":X,"../../../content/images/fulham.jpg":Y,"../../../content/images/huddersfield-town.jpg":Z,"../../../content/images/hull-city.jpg":J,"../../../content/images/ipswich-town.jpg":ee,"../../../content/images/leeds-united.jpg":te,"../../../content/images/leicester-city.jpg":ne}[`../../../content/images/${r.getCurrentAnswerImageFile()}`],self.location).href);const e=u.querySelector("auto-complete");if(e.choices=h,u.querySelector("form").onsubmit=n=>{var s;n.preventDefault();const o=(s=e.value)==null?void 0:s.trim();!o||(r.submit(o),r.isDone()?i("#results-screen"):(e.value="",q()))},r.isDone()){i("#results-screen");return}q()}));function q(){u.querySelector("#guesses").innerHTML="";const t=r.attempts-r.store.guesses.length;u.querySelector("#game-image").setAttribute("blur",De-7*r.store.guesses.length),u.querySelector("#guessesRemaining").textContent=t+" guesses remaining"}function He(){const t=he(),e=r.isSolved()?"\u2705":"\u274C".join("");be({text:`\u{1F3D9}\uFE0F Daily Landmark #${r.store.day.toString()} ${e} ${t}`})}let v;const l=document.querySelector("#results-screen");l.querySelector("button[name=share]").onclick=He;l.addEventListener("active",()=>{if(!r.isDone()){i("#game-screen");return}l.querySelector("#result-image").setAttribute("src",new URL({"../../../content/images/arsenal.jpg":I,"../../../content/images/aston-villa.jpg":T,"../../../content/images/barnsley.jpg":$,"../../../content/images/birmingham-city.jpg":D,"../../../content/images/blackburn-rovers.jpg":H,"../../../content/images/blackpool.jpg":O,"../../../content/images/bolton-wonderers.jpg":U,"../../../content/images/bournemouth.jpg":N,"../../../content/images/bradford city.jpg":B,"../../../content/images/brentford.jpg":R,"../../../content/images/brighton-and-hove-albion.jpg":P,"../../../content/images/burnley.jpg":W,"../../../content/images/cardiff-city.jpg":F,"../../../content/images/charlton-athletic.jpg":G,"../../../content/images/chelsea.jpg":z,"../../../content/images/coventry-city.jpg":K,"../../../content/images/crystal-palace.jpg":Q,"../../../content/images/derby-county.jpg":V,"../../../content/images/everton.jpg":X,"../../../content/images/fulham.jpg":Y,"../../../content/images/huddersfield-town.jpg":Z,"../../../content/images/hull-city.jpg":J,"../../../content/images/ipswich-town.jpg":ee,"../../../content/images/leeds-united.jpg":te,"../../../content/images/leicester-city.jpg":ne}[`../../../content/images/${r.getCurrentAnswerImageFile()}`],self.location).href),l.querySelector("#resultLine1").textContent=r.getCurrentAnswer(),l.querySelector("#resultLine2").textContent=r.isSolved()?`Got it in ${r.store.guesses.length} guesses!`:"Better luck tomorrow!";const e=Ee();v=setInterval(()=>{const n=Me(e);l.querySelector("#timeLeft").textContent=`${n.hours}h ${n.minutes}m ${n.seconds}s`},1e3)});l.addEventListener("inactive",()=>{v&&clearInterval(v)});function Oe(){i("#game-screen")}const j=document.querySelector("#help-screen");j.querySelector("button[name=back]").onclick=Oe;j.addEventListener("active",()=>{y.set("sawTutorial",!0)});j.querySelector("button[name=freeMode]").addEventListener("click",()=>{fe.track("FreePlaySongClicked",{gameMode:state.gameMode}),state.setMode(Mode.Free),i("#game-screen")});function Ue(){i("#game-screen")}const _=document.querySelector("#stats-screen");_.querySelector("button[name=back]").onclick=Ue;_.addEventListener("active",()=>{const t=r.store.wins.reduce((e,n)=>e+n||0,0);_.querySelector("#winStats").textContent=`You scored ${t} times.`});async function Ne(){await r.login()}function Be(){r.logout()}function Re(){i("#game-screen")}const w=document.querySelector("#settings-screen");w.querySelector("button[name=back]").onclick=Re;w.querySelector("button[name=login]").onclick=Ne;w.querySelector("button[name=logout]").onclick=Be;async function Pe(){r.isDone()?We():Fe()}function We(){i("#results-screen")}function Fe(){i("#game-screen")}function Ge(){i("#help-screen")}function ze(){i("#stats-screen")}function Ke(){i("#settings-screen")}(async function(){await ye({gameId:"01087a65-da16-495f-b624-a7f988442376"}),await r.init(),ve()&&document.body.classList.add("isLoggedIn"),Pe(),document.querySelector("game-header .button[name=help]").onclick=Ge,document.querySelector("game-header .button[name=stats]").onclick=ze,document.querySelector("game-header .button[name=settings]").onclick=Ke})();

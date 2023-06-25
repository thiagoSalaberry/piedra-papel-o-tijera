function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire93c5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire93c5=a),a.register("27Lyk",function(t,n){"use strict";e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>a,e=>a=e);var o,a,r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("gcXAk",function(e,t){e.exports=new URL(a("27Lyk").resolve("fofgm"),import.meta.url).toString()}),a.register("eSpo5",function(e,t){e.exports=new URL(a("27Lyk").resolve("54nAm"),import.meta.url).toString()}),a.register("7YUf1",function(e,t){e.exports=new URL(a("27Lyk").resolve("d3Mza"),import.meta.url).toString()}),a.register("7Cl91",function(e,t){e.exports=new URL(a("27Lyk").resolve("gRpBi"),import.meta.url).toString()}),a.register("e1WEa",function(e,t){e.exports=new URL(a("27Lyk").resolve("3gHsO"),import.meta.url).toString()}),a.register("cQh6Y",function(e,t){e.exports=new URL(a("27Lyk").resolve("9IjMH"),import.meta.url).toString()}),a("27Lyk").register(JSON.parse('{"dZpbI":"index.0bdec500.js","fofgm":"piedra.1e39061a.png","54nAm":"papel.b392cdc3.png","d3Mza":"tijera.82280176.png","gRpBi":"ganaste.9ec6eb71.png","3gHsO":"perdiste.77e2fcdb.png","9IjMH":"empate.9fcb755e.png"}'));const r={piedra:1,tijera:2,papel:3},s={yo:[-1,2],empate:[0],pc:[-2,1]},i={data:{currentGame:{},history:localStorage.getItem("history")},listeners:[],getState(){return this.data},setState(e){this.data=e,this.listeners.forEach(e=>e())},subscribe(e){this.listeners.push(e)},setMove(e){let t=i.getState(),n={1:"piedra",2:"tijera",3:"papel"}[Math.ceil(3*Math.random())];this.setState({...t,currentGame:{myMove:e,pcMove:n,ganador:i.whoWins(e,n)},history:i.pushToHistory({myMove:e,pcMove:n,ganador:i.whoWins(e,n)})})},whoWins(e,t){let n=r[e]-r[t],o=Object.entries(s).find(e=>e[1].includes(n));return o[0]},pushToHistory(e){i.getState();let t=JSON.parse(localStorage.getItem("history"));return t.push(e),localStorage.setItem("history",JSON.stringify(t)),JSON.parse(localStorage.getItem("history"))}},c="/piedra-papel-o-tijera",l=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");0==localStorage.length&&localStorage.setItem("history","[]");let n=i.getState();t.className="welcome-container",t.innerHTML=`
        <custom-text tag="h1" variant="title">Piedra <br>Papel <custom-text class="o">\xf3</custom-text></br> Tijera!</custom-text>
        <custom-button class="button"><custom-text tag="p" variant="button">Empezar</custom-text></custom-button>
        <div class="move-container">
            <piedra-move size="chico" class="piedra"></piedra-move>
            <papel-move size="chico" class="papel"></papel-move>
            <tijera-move size="chico" class="tijera"></tijera-move>
        </div>
    `;let o=document.createElement("style");o.innerHTML=`
        .welcome-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            padding: 0 25px;
        }
        .move-container {
            display: flex;
            gap: 45px;
        }
    `,t.appendChild(o);let a=t.querySelector(".button");return a?.addEventListener("click",()=>{e.goTo("/instruccions"),console.log(`Estado actual en ${location.pathname}:`,n)}),t}},{path:/\/instruccions/,component:function(e){let t=i.getState(),n=document.createElement("div");n.className="instruccions-container";let o=document.createElement("style");n.innerHTML=`
    <custom-text type="p" variant="p">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos!</custom-text>
    <custom-button class="button"><custom-text tag="p" variant="button">\xa1Jugar!</custom-button>
    <div class="move-container">
    <piedra-move size="chico" class="piedra"></piedra-move>
    <papel-move size="chico" class="papel"></papel-move>
    <tijera-move size="chico" class="tijera"></tijera-move>
    </div>
    `,o.innerHTML=`
        .instruccions-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            padding: 100px 25px 0 25px;
        }
        .move-container {
            display: flex;
            gap: 45px;
        }
    `,n.appendChild(o);let a=n.querySelector(".button");return a?.addEventListener("click",()=>{e.goTo("/in-game"),console.log(`Estado actual en ${location.pathname}:`,t)}),n}},{path:/\/in-game/,component:function(e){let t=i.getState(),n=document.createElement("div");n.className="in-game-container",n.innerHTML=`
        <custom-timer>3</custom-timer>
        <div class="move-container">
            <piedra-move class="piedra" size="grande"></piedra-move>
            <papel-move class="papel" size="grande"></papel-move>
            <tijera-move class="tijera" size="grande"></tijera-move>
        </div>
    `;let o=document.createElement("style");o.innerHTML=`
        .in-game-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            height: 100vh;
        }
        .move-container {
            display: flex;
            gap: 1rem;
            position: absolute;
            bottom: -60px;
        }
    `,n.appendChild(o);let a=n.querySelector(".move-container");a.addEventListener("click",e=>{let t=e.target;t.classList.remove("arriba"),i.setMove(t.className),console.log("Este es el juego actual:",i.getState().currentGame)}),a.addEventListener("mouseover",e=>{let t=e.target,n=t.parentElement.children;"move-container"!=t.className&&(t.classList.add("arriba"),Array.from(n).forEach(e=>{e!=t&&e.classList.add("abajo")}),a.addEventListener("mouseout",e=>{"move-container"!=t.class&&(t.classList.remove("arriba"),t.classList.remove("abajo"))}))});let r=3,s=setInterval(()=>{0==r?(0==Object.keys(i.getState().currentGame).length&&window.location.reload(),e.goTo("/picks"),clearInterval(s)):r--},1e3);return console.log(`Estado actual en ${location.pathname}:`,t),n}},{path:/\/picks/,component:function(e){let t=i.getState(),n=t.currentGame,o=n.myMove,a=n.pcMove,r=document.createElement("div");r.innerHTML=`
        <${a}-move class="${a} pc" size="grande"></${a}-move>
        <${o}-move class="${o}" size="grande"></${o}-move>
    `;let s=document.createElement("style");r.className="picks-container",s.innerHTML=`
        .picks-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }
    `,r.appendChild(s);let c=3,l=setInterval(()=>{1==c?(clearInterval(l),e.goTo("/result")):c--},1e3);return console.log(`Estado actual en ${location.pathname}:`,t),r}},{path:/\/result/,component:function(e){let t=i.getState(),n=document.createElement("div");n.className="result-container",n.innerHTML=`
        <custom-result></custom-result>
        <custom-score class="score"></custom-score>
        <custom-button class="button"><custom-text variant="button">Volver a Jugar</custom-text></custom-button>
    `;let o=document.createElement("style");o.innerHTML=`
        .result-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100vh;
        }
    `,n.appendChild(o);let a=n.querySelector(".button");return a?.addEventListener("click",()=>{i.getState().currentGame={},e.goTo("/welcome")}),console.log(`Estado actual en ${location.pathname}:`,t),n}}];function d(){return location.host.includes("github.io")}customElements.define("custom-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.getAttribute("tag"),t=this.getAttribute("variant"),n=document.createElement(e),o=document.createElement("style");o.innerHTML=`
                .title {
                    color: rgba(0, 144, 72, 1);
                    font-weight: 700;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 80px;
                    margin: 0;
                    margin-top: 100px;
                    line-height: 70px;
                }
                .o {
                    color: rgba(145, 204, 175, 1);
                    font-weight: 700;
                    font-family: 'Roboto Mono', monospace;
                }
                .p {
                    font-family: 'Roboto Mono', monospace;
                    font-size: 40px;
                    font-weight: 500;
                    margin: 0;
                    line-height: 40px;
                    text-align: center;
                    margin: 100px 30px 0 30px;
                }
                .button{
                    margin: 0;
                    color: #FFF;
                    font-family: 'Odibee Sans', cursive;
                    font-weight: 400;
                    font-size: 45px;
                }
                .score{
                    color: #000;
                    font-family: 'Odibee Sans', cursive;
                    font-weight: 400;
                    font-size: 45px;
                }
            `,n.className=t,n.innerHTML=this.innerHTML,this.shadow.appendChild(n),this.shadow.appendChild(o)}}),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
                <button class="button"></button>
            `;let e=document.createElement("style");e.innerHTML=`
                .button {
                    background: rgba(0, 108, 252, 1);
                    border: solid 8px rgba(0, 25, 151, 1);
                    border-radius: 4px;
                    color: #FFF;
                    padding: 15px 80px;
                    font-sixe: 45px;
                    font-weight: 
                    width: 100%;
                }
            `,this.shadow.appendChild(e);let t=this.shadow.querySelector(".button");t.innerHTML=this.innerHTML}}),customElements.define("piedra-move",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.getAttribute("size"),t=this.getAttribute("class"),n=a("gcXAk");this.shadow.innerHTML=`
                <img src="${n}" alt="piedra" class="${t}">
            `;let o=this.shadow.querySelector(".piedra"),r=document.createElement("style");r.innerHTML=`
            .${t} {
                position: relative;
                transition: all 0.5s;
            }
            .chico {
                height: 125px;
            }
            .grande {
                height: 230px;
            }
            .arriba:hover {
                transform: translateY(60px);
            }
            .abajo {
                bottom: -30px;
                opacity: 0.5;
            }
            .pc {
                transform: rotate(180deg);
            }
            `,o.classList.add(e),o.appendChild(r)}}),customElements.define("papel-move",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.getAttribute("size"),t=this.getAttribute("class"),n=a("eSpo5");this.shadow.innerHTML=`
                <img src="${n}" alt="papel" class="${t}">
            `;let o=this.shadow.querySelector(".papel"),r=document.createElement("style");r.innerHTML=`
            .${t} {
                position: relative;
                transition: all 0.5s;
            }
            .chico {
                height: 125px;
            }
            .grande {
                height: 230px;
            }
            .arriba:hover {
                transform: translateY(60px);
            }
            .abajo {
                bottom: -30px;
                opacity: 0.5;
            }
            .pc {
                transform: rotate(180deg);
            }
            `,o.classList.add(e),o.appendChild(r)}}),customElements.define("tijera-move",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.getAttribute("size"),t=this.getAttribute("class"),n=a("7YUf1");this.shadow.innerHTML=`
                <img src="${n}" alt="tijera" class="${t}">
            `;let o=this.shadow.querySelector(".tijera"),r=document.createElement("style");r.innerHTML=`
            .${t} {
                position: relative;
                transition: all 0.5s;
            }
            .chico {
                height: 125px;
            }
            .grande {
                height: 230px;
            }
            .arriba:hover {
                transform: translateY(60px);
            }
            .abajo {
                bottom: -30px;
                opacity: 0.5;
            }
            .pc {
                transform: rotate(180deg);
            }
            `,o.classList.add(e),o.appendChild(r)}}),customElements.define("custom-timer",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("div");e.className="container",this.shadow.appendChild(e);let t=document.createElement("style");t.innerHTML=`
                .container {
                    width: 250px;
                    height: 250px;
                    background: none;
                    border-radius: 50%;
                    border: 23px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 100px;
                    font-weight: 700;
                    margin-top: 100px;
                }
            `,this.shadow.appendChild(t);let n=3,o=setInterval(()=>{1==n?(n="Ya!",clearInterval(o),e.textContent=`${n}`):(n--,e.textContent=`${n}`)},1e3);e.textContent=n}}),customElements.define("custom-result",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.winner="",this.url="",this.render(),i.subscribe(()=>{this.render()})}render(){let e;let t=i.getState(),n=t.currentGame;this.winner=n.ganador,"yo"==this.winner?e=a("7Cl91"):"pc"==this.winner?e=a("e1WEa"):"empate"==this.winner&&(e=a("cQh6Y")),this.shadow.innerHTML=`
                <img src="${e}" class="result">
            `}}),customElements.define("custom-score",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("div");e.classList.add("score");let t=document.createElement("style");t.textContent=`
                .score {
                    border: 10px solid #000000;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 15px;
                }
                .text-container {
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    align-self: end;
                }
            `;let n=i.getState(),o=n.history,a=Array.from(o).filter(e=>"yo"==e.ganador).length,r=Array.from(o).filter(e=>"pc"==e.ganador).length,s=Array.from(o).filter(e=>"empate"==e.ganador).length;e.innerHTML=`
                <custom-text variant="score">Score</custom-text>
                <div class="text-container">
                    <custom-text variant="score">Vos:${a}</custom-text>
                    <custom-text variant="score">M\xe1quina:${r}</custom-text>
                    <custom-text variant="score">Empates:${s}</custom-text>
                </div>
            `,this.shadow.innerHTML="",this.shadow.appendChild(e),this.shadow.appendChild(t)}}),console.clear();const p=document.querySelector(".root");!function(e){function t(e){let t=d()?c+e:e;history.pushState({},"",t),n(t)}function n(n){let o=d()?n.replace(c,""):n,a=l.find(e=>e.path.test(o));if(a){let n=a.component({goTo:t});e.firstChild?.remove(),e.appendChild(n)}}"/"==location.pathname?t("/welcome"):n(location.pathname),window.addEventListener("popstate",()=>n(location.pathname))}(p);
//# sourceMappingURL=index.0bdec500.js.map

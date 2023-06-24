import {state} from "../../state";

export function initInstruccionsPage(params) {
    const currentState = state.getState();
    const div = document.createElement("div");
    div.className = "instruccions-container";
    const style = document.createElement("style");
    div.innerHTML = `
    <custom-text type="p" variant="p">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos!</custom-text>
    <custom-button class="button"><custom-text tag="p" variant="button">¡Jugar!</custom-button>
    <div class="move-container">
    <piedra-move size="chico" class="piedra"></piedra-move>
    <papel-move size="chico" class="papel"></papel-move>
    <tijera-move size="chico" class="tijera"></tijera-move>
    </div>
    `;
    style.innerHTML = `
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
    `
    div.appendChild(style);
    const buttolEl = div.querySelector(".button");
    buttolEl?.addEventListener("click", ()=>{
        params.goTo("/in-game")
        console.log(`Estado actual en ${location.pathname}:`,currentState);
    });
    return div;
};
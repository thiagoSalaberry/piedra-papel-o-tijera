import {state} from "../../state";

export function initWelcomePage(params) {
    const div = document.createElement("div");
    if(localStorage.length == 0) {
        localStorage.setItem("history", "[]");
    }
    const currentState = state.getState();
    div.className = "welcome-container"
    div.innerHTML = `
        <custom-text tag="h1" variant="title">Piedra <br>Papel <custom-text class="o">ó</custom-text></br> Tijera!</custom-text>
        <custom-button class="button"><custom-text tag="p" variant="button">Empezar</custom-text></custom-button>
        <div class="move-container">
            <piedra-move size="chico" class="piedra"></piedra-move>
            <papel-move size="chico" class="papel"></papel-move>
            <tijera-move size="chico" class="tijera"></tijera-move>
        </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
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
    `;
    div.appendChild(style);
    const buttolEl = div.querySelector(".button");
    buttolEl?.addEventListener("click", ()=>{
        params.goTo("/instruccions")
        console.log(`Estado actual en ${location.pathname}:`,currentState);
    })
    return div;
}
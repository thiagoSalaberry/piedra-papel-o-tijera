import {state} from "../../state";
export function initResultPage(params) {
    const currentState = state.getState();
    const div = document.createElement("div");
    div.className = "result-container";
    div.innerHTML = `
        <custom-result></custom-result>
        <custom-score class="score"></custom-score>
        <custom-button class="button"><custom-text variant="button">Volver a Jugar</custom-text></custom-button>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
        .result-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100vh;
        }
    `;
    div.appendChild(style);
    const buttolEl = div.querySelector(".button");
    buttolEl?.addEventListener("click", ()=>{
        state.getState().currentGame = {};
        params.goTo("/welcome")
    });
    console.log(`Estado actual en ${location.pathname}:`,currentState);
    return div;
}
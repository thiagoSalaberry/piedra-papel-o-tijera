import {state} from "../../state";
customElements.define(
    "custom-score",
    class extends HTMLElement {
        shadow = this.attachShadow({mode: "open"});
        constructor() {
            super();
            this.render();
        };
        render() {
            const scoreContainer = document.createElement("div");
            scoreContainer.classList.add("score");
            const style = document.createElement("style");
            style.textContent = `
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
            `;
            const currentState = state.getState();
            const currentHistory = currentState.history;
            const misVictorias = Array.from(currentHistory).filter((game:any)=>game.ganador == "yo").length;
            const pcVictorias = Array.from(currentHistory).filter((game:any)=>game.ganador == "pc").length;
            const empates = Array.from(currentHistory).filter((game:any)=>game.ganador == "empate").length;
            scoreContainer.innerHTML = `
                <custom-text variant="score">Score</custom-text>
                <div class="text-container">
                    <custom-text variant="score">Vos:${misVictorias}</custom-text>
                    <custom-text variant="score">Máquina:${pcVictorias}</custom-text>
                    <custom-text variant="score">Empates:${empates}</custom-text>
                </div>
            `;
            this.shadow.innerHTML = "";
            this.shadow.appendChild(scoreContainer);
            this.shadow.appendChild(style);
        };
    }
);
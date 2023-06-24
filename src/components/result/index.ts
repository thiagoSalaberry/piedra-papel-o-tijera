import { state } from "../../state";

customElements.define(
    "custom-result", 
    class extends HTMLElement {
        shadow = this.attachShadow({mode: "open"});
        winner:string = "";
        url:string = "";
        constructor() {
            super();
            this.render();
            state.subscribe(()=>{
                this.render();
            })
        };
        render() {
            const currentState = state.getState();
            const currentGame = currentState.currentGame;
            this.winner = currentGame.ganador;
            let imageURL;
            if(this.winner == "yo") {
                imageURL = require(`url:./ganaste.png`);
            } else if(this.winner == "pc") {
                imageURL = require(`url:./perdiste.png`);
            } else if(this.winner == "empate") {
                imageURL = require(`url:./empate.png`);
            }
            this.shadow.innerHTML = `
                <img src="${imageURL}" class="result">
            `;            
        };
    }
);
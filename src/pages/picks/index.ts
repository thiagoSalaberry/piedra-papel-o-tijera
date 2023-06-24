import {state} from "../../state";
export function initPicksPage(params) {
    const currentState = state.getState();
    const currentGame = currentState.currentGame;
    const myMove = currentGame.myMove;
    const pcMove = currentGame.pcMove;
    const div = document.createElement("div");
    div.innerHTML = `
        <${pcMove}-move class="${pcMove} pc" size="grande"></${pcMove}-move>
        <${myMove}-move class="${myMove}" size="grande"></${myMove}-move>
    `;
    const style = document.createElement("style");
    div.className = "picks-container"
    style.innerHTML = `
        .picks-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }
    `
    div.appendChild(style);
    let counter:any = 3;
    const intervalo = setInterval(()=>{
        if (counter == 1){
            clearInterval(intervalo)
            params.goTo("/result")
        } else {
            counter--;
        }
    },1000);
    console.log(`Estado actual en ${location.pathname}:`,currentState);
    return div;
}
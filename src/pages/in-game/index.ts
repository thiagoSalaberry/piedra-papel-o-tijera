import {state} from "../../state";

export function initInGamePage(params) {
    const currentState = state.getState();
    const div = document.createElement("div");
    div.className = "in-game-container";
    div.innerHTML = `
        <custom-timer>3</custom-timer>
        <div class="move-container">
            <piedra-move class="piedra" size="grande"></piedra-move>
            <papel-move class="papel" size="grande"></papel-move>
            <tijera-move class="tijera" size="grande"></tijera-move>
        </div>
    `;
    const inGameStyle = document.createElement("style");
    inGameStyle.innerHTML = `
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
    `
    div.appendChild(inGameStyle);
    const moveContainer = div.querySelector(".move-container")!;
    moveContainer.addEventListener("click", (e:any)=>{
        const target = e.target;
        target.classList.remove("arriba");
        state.setMove(target.className);
        console.log("Este es el juego actual:", state.getState().currentGame);
    });
    moveContainer.addEventListener("mouseover", (e:any)=>{
        const target = e.target;
        const siblings = target.parentElement.children;
        if(target.className != "move-container") {
            target.classList.add("arriba");
            Array.from(siblings).forEach((child:any)=>{
                if(child != target) {
                    child.classList.add("abajo");
                }
            });
            moveContainer.addEventListener("mouseout", (e:any)=>{
                if(target.class != "move-container") {
                    target.classList.remove("arriba");
                    target.classList.remove("abajo");
                }
            })
        }
    })
    let counter = 3;
    const intervalo = setInterval(()=>{
        if(counter == 0) {
            if(Object.keys(state.getState().currentGame).length == 0) {
                window.location.reload();
            }
            params.goTo("/picks");
            clearInterval(intervalo);
        } else {
            counter--;
        }
    },1000)
    console.log(`Estado actual en ${location.pathname}:`,currentState);
    return div;
}
type Jugada = "piedra" | "papel" | "tijera";
type Game = {myMove: Jugada, pcMove: Jugada, ganador};
const map = {
    piedra: 1,
    tijera: 2,
    papel: 3,
};
const resultados = {
    yo: [-1, 2],
    empate: [0],
    pc: [-2, 1],
};
const state = {
    data: {
        currentGame: {},
        history: localStorage.getItem("history"),
    },
    listeners: [],
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState,
        this.listeners.forEach(listener => listener());
    },
    subscribe(callback) {
        this.listeners.push(callback);
    },
    setMove(move:Jugada) {
        const currentState = state.getState();
        const map = {
            1: "piedra",
            2: "tijera",
            3: "papel",
        };
        const random:number = Math.ceil(Math.random() * 3);
        const pcMove:Jugada = map[random];
        this.setState({
            ...currentState,
            currentGame: {
                myMove: move,
                pcMove: pcMove,
                ganador: state.whoWins(move, pcMove),
            },
            history: state.pushToHistory({myMove: move, pcMove: pcMove, ganador: state.whoWins(move, pcMove)})
        });
    },
    whoWins(myMove:Jugada, pcMove:Jugada) {
        const jugada = map[myMove] - map[pcMove];
        const resultado = Object.entries(resultados).find((r)=> r[1].includes(jugada))!;
        return resultado[0];
    },
    pushToHistory(game:Game) {
        const currentState = state.getState();
        let currentHistory = JSON.parse(localStorage.getItem("history")!) as Array<Game>;
        currentHistory.push(game);
        localStorage.setItem("history", JSON.stringify(currentHistory));
        //Esta función debe devolver un objeto para que el score lo pueda iterar
        return JSON.parse(localStorage.getItem("history")!);
    }
};

export {state};
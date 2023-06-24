import { initWelcomePage as welcome } from "./pages/welcome";
import { initInstruccionsPage as instruccions } from "./pages/instruccions";
import { initInGamePage as inGame } from "./pages/in-game";
import { initPicksPage as picks } from "./pages/picks";
import { initResultPage as result } from "./pages/result";
const routes = [
    {
        path: /\/welcome/,
        component: welcome,
    },
    {
        path: /\/instruccions/,
        component: instruccions,
    },
    {
        path: /\/in-game/,
        component: inGame,
    },
    {
        path: /\/picks/,
        component: picks,
    },
    {
        path: /\/result/,
        component: result,
    }
];

export function initRouter(container:Element) {
    function goTo(path:string) {
        history.pushState({}, "", path);
        handleRoute(path);
    };

    function handleRoute(route:string) {
        const matched = routes.find(r => r.path.test(route));
        if(matched) {            
            const el = matched.component({goTo: goTo});
            container.firstChild?.remove();
            container.appendChild(el);
        };
    };
    if(location.pathname == "/") {
        goTo("/welcome")
    } else {
        handleRoute(location.pathname)
    };
    window.addEventListener("popstate", ()=>handleRoute(location.pathname));
};
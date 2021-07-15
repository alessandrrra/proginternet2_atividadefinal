import inicio from "./views/inicio.js";
import explorar from "./views/explorar.js";
import estante from "./views/estante.js";


function navegarpara(url) {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        { path: "/", view: Bibliostemia },
        { path: "/explorar", view: Explorar},
        { path: "/estante", view: Estante},
    ];

    
    const combinacoes = routes.map(route => {
        return {
            route: route,
            
            combinar: location.pathname === route.path
        };
    });

    
    let combina = combinacoes.find(combinacao => combinacao.combinar)

    if (!combina) {
        combina = {
            route: routes[0],
            combinar: true
        };
    }

    
    const view = new combina.route.view();

    
    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(combina.route.view());

};


window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navegarpara(e.target.href);
        }
    });

    router();
});
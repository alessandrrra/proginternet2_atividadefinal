import viewabstrata from "./viewabstrata.js";

export default class extends viewabstrata {
    constructor() {
        
        super();
        this.setTitle("Bibliostemia");
    }

    getHtml() {
        return `
            <h1>que bom ter você por aqui!</h1>
            <p>
                descubra novos livros e acompanhe o seu ritmo de leitura de forma organizada :)
            </p>
            <p>
                <a href="/explorar" data-link>descubra os mais amados do site</a>.
            </p>
        `;
    }
}
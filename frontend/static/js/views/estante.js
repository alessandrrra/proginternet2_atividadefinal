import viewabstrata from "./viewabstrata";

export default class extends viewabstrata {
    constructor() {
        super();
        this.setTitle("Estante");
    }

    async getHtml() {
        return `
            <h1>sua estante</h1>
            <p>
                veja quais livros estão lhe esperando para serem lidos
            </p>
        `;
    }
}
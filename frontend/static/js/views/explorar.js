import viewabstrata from "./viewabstrata";

export default class extends viewabstrata {
    constructor() {
        super();
        this.setTitle("Explorar");
    }

    async getHtml() {
        return `
            <h1>descubra novas aventuras</h1>
            <p>
                escolha entre livros para rir, refletir, chorar, sonhar, e o que mais encontrar :)
            </p>
        `;
    }
}
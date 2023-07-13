class Medicao {
    private nome: string;
    private unidadeMedida: string;
    private valor: number;

    constructor(nome: string, unidadeMedida: string, valor: number) {
        this.nome = nome;
        this.unidadeMedida = unidadeMedida;
        this.valor = valor;
    }

    getNome(): string {
        return this.nome;
    }
    setNome(nome: string): boolean {
        this.nome = nome;
        return true;
    }

    getUnidadeMedida(): string {
        return this.unidadeMedida;
    }
    setUnidadeMedida(unidadeMedida: string): boolean {
        this.unidadeMedida = unidadeMedida;
        return true;
    }

    getValor(): number {
        return this.valor;
    }
    setValor(valor: number): boolean {
        this.valor = valor;
        return true;
    }
}

export default Medicao;

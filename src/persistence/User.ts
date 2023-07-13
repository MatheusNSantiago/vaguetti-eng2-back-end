export default class User {
    nome: string;
    idade: number;
    cpf: string;
    peso: number;
    altura: number;

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        peso: number,
        altura: number
    ) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.peso = peso;
        this.altura = altura;
    }
}

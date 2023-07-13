import Medicao from './Medicao';

class Registro {
    private idRegistro: string;
    private medicao: Medicao;
    private data: Date;

    constructor(idRegistro: string, medicao: Medicao, data: Date) {
        this.idRegistro = idRegistro;
        this.medicao = medicao;
        this.data = data;
    }

    getIdRegistro(): string {
        return this.idRegistro;
    }
    setIdRegistro(idRegistro: string): boolean {
        this.idRegistro = idRegistro;
        return true;
    }

    getMedicao(): Medicao {
        return this.medicao;
    }
    setMedicao(medicao: Medicao): boolean {
        this.medicao = medicao;
        return true;
    }

    getData(): Date {
        return this.data;
    }
    setData(data: Date): boolean {
        this.data = data;
        return true;
    }
}

export default Registro;

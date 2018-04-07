
export class Denuncia {
  constructor(
    public id?: number,
    public data?: any,
    public farmacia?: string,
    public nome?: string,
    public email?: string,
    public texto?: any,
    public preco?: number,
    public medicamentoId?: number,
    public medicamentoNome?: string
  ) {
  }
}

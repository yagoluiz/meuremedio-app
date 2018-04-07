import {BaseEntity} from './base-entity';

export const enum FaixaEtaria {
  'QUINZE_VINTE',
  'VINTE_TRINTA',
  'TRINTA_QUARENTA',
  'QUARENTA_CINQUENTA',
  'CINQUENTA_SETENTA',
  'MAIOR_QUE_SETENTA'
}

export const enum Sexo {
  'MASCULINO',
  'FEMININO'
}

export class Comentario implements BaseEntity {
  constructor(
    public id?: number,
    public data?: any,
    public nome?: string,
    public email?: string,
    public comentario?: any,
    public faixaEtaria?: FaixaEtaria,
    public sexo?: Sexo,
  ) {
  }
}

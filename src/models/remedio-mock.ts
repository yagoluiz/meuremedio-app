export class RemedioMock {

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }
}

export interface RemedioMock {
  [prop: string]: any;
}

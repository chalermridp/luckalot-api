export interface Car {
  id: string;
  brand: string;
  series: string;
  carClass: CarClass;
}

export enum CarClass {
  ECO = 'ECO',
  MAIN = 'MAIN',
  LUXURY = 'LUXURY',
}

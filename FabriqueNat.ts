
export interface FabriqueNat<T> {
    creerNatAvecValeur(x: number): T;    
    creerZero(): T;
    creerSuccesseur(arg: T): T;
    creerNatAvecRepresentation(repDecimale: string): T;
}
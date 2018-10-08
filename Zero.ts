import { Nat } from "./Nat";
import { FabriqueNat } from './FabriqueNat';
import { NatParInt } from './NatParInt';

export class Zero implements Nat{
    // Attributs //
    public static FAB: FabriqueNat<Nat> = new Zero();

    // Constructeur //
    constructor() {
    }	

    // Méthodes //
    val(): number{
        return 0;
    }    
    estNull(): boolean{
        return false;
    }
    predecesseur(): Nat{
        throw new Error('Zero can\'t have predecesseur.');
    }
    chiffre(x: number): number{
        return 0
    }
    taille(): number{
        return 1;
    }
    creerNatAvecRepresentation(chiffres: string): Nat{
        return Zero.FAB.creerZero();
    }
    creerNatAvecValeur(x: number): Nat{
        return Zero.FAB.creerZero();
    }
    creerZero(): Nat{
        return new Zero();
    }
    creerSuccesseur(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(1);
    }
    zero(): Nat{
        return Zero.FAB.creerZero();
    }
    somme(x: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(x.val());
    }
    un(): Nat{
        return this.creerSuccesseur(this.zero());
    }
    produit(x: Nat): Nat{
        return Zero.FAB.creerZero();
    }
    equals(o: object): boolean{
        return (o instanceof Zero) ?  true : false;
    }
    modulo(arg: Nat): Nat{        
        if(arg.val() == 0)
            throw new Error("Can't modulo by zero");
        return Zero.FAB.creerZero();
    }
    div(arg: Nat): Nat{
        if(arg.val() == 0)
            throw new Error("Can't divide by zero");
        return Zero.FAB.creerZero();
    }
    toString(): string{
        return "0";
    }
}
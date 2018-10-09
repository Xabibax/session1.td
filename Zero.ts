import { Nat } from "./Nat";
import { Succ } from "./Succ";
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
        return NatParInt.FAB.creerNatAvecRepresentation(chiffres);
    }
    creerNatAvecValeur(x: number): Nat{
        return NatParInt.FAB.creerNatAvecValeur(x);
    }
    creerZero(): Nat{
        return new Zero();
    }
    creerSuccesseur(arg: Nat): Nat{
        //return NatParInt.FAB.creerSuccesseur(arg);
        return Succ.FAB.creerSuccesseur(arg);
    }
    zero(): Nat{
        return Zero.FAB.creerZero();
    }
    somme(x: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(x.val());
    }
    un(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(1);
    }
    produit(x: Nat): Nat{
        return Zero.FAB.creerZero();
    }
    equals(o: object): boolean{
        if(!(o instanceof Zero)) 
            return false;
        let n: Nat = o;
		return this.val() === n.val();
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
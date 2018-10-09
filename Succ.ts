import { Nat } from "./Nat";
import { FabriqueNat } from './FabriqueNat';
import { NatParInt } from './NatParInt';
import { Zero } from './Zero';

export class Succ implements Nat{
    // Attributs //
    static FAB: FabriqueNat<Nat> = new Succ(new Zero());
    private _predecesseur: Nat;

    // Constructeur //
    constructor(arg: Nat){
        this._predecesseur = arg;
    }

    // Méthodes //
    val(): number{
        return this._predecesseur.somme(this.un()).val();
    }
    estNull(): boolean{
        return false;
    }
    predecesseur(): Nat{
        return this._predecesseur;
    }
    chiffre(x: number): number{
        return this.un().somme(this._predecesseur).chiffre(x);
    }
    taille(): number{
        return this.un().somme(this._predecesseur).taille();
    }
    creerNatAvecValeur(x: number): Nat{
        return NatParInt.FAB.creerNatAvecValeur(x)
    }
    creerZero(): Nat{
        return Zero.FAB.creerZero()
    }
    creerSuccesseur(arg: Nat): Nat{
        return new Succ(arg);
    }
    creerNatAvecRepresentation(chiffres: string): Nat{
        return NatParInt.FAB.creerNatAvecRepresentation(chiffres)
    }
    zero(): Nat{
        return this.creerZero();
    }
    somme(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val()).somme(arg);           
    }
    un(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(1);
    }
    produit(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val()).produit(arg);        
    }
    equals(o: object): boolean{		
        if(!(o instanceof Succ)) 
            return false;
        let n: Nat = o;
		return this.val() === n.val();
    }
    modulo(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val()).modulo(arg); 

    }
    div(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val()).div(arg); 
    }
    toString(): string{
        return this.val().toString();
    }
}
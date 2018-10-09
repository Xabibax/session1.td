import { Nat } from "./Nat";
import { FabriqueNat } from './FabriqueNat';
import { NatParInt } from './NatParInt';
import { Zero } from './Zero';

export class Succ implements Nat{
    // Attributs //
    static FAB: FabriqueNat<Nat> = new Succ(NatParInt.FAB.creerNatAvecValeur(1));
    private _predecesseur: Nat;

    // Constructeur //
    constructor(arg: Nat){
        this._predecesseur = arg.predecesseur();
    }

    // Méthodes //
    val(): number{
        return this.un().somme(this._predecesseur).val();
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
        return NatParInt.FAB.creerNatAvecValeur(arg.somme(this.un()).val());
    }
    creerNatAvecRepresentation(chiffres: string): Nat{
        return NatParInt.FAB.creerNatAvecRepresentation(chiffres)
    }
    zero(): Nat{
        return this.creerZero();
    }
    somme(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(
            this._predecesseur.val()
        ).somme(arg).somme(this.un())            
    }
    un(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(1);
    }
    produit(arg: Nat): nat{

    }
    equals(o: object): boolean{

    }
    modulo(arg: Nat): Nat{

    }
    div(arg: Nat): Nat{

    }
    toString(): string{
        
    }
}
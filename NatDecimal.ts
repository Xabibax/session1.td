import { FabriqueNat } from "./FabriqueNat";
import { Nat } from "./Nat";
import { FormatNatDecimal } from './FormatNatDecimal';
import { Zero } from './Zero';
import { Succ } from './Succ';
import { NatParInt } from './NatParInt';

export class NatDecimal implements Nat {
	// Attribut //
	public static readonly   FAB: FabriqueNat<Nat> = new NatDecimal("1");
	private static readonly DIX: Nat;

	// Constructeur //
    constructor(private _chiffres: string) {
        if (!parseInt(_chiffres))
            throw new Error("représentation non décimale")
	}
	
	// Méthodes //	
	creerNatAvecValeur(x: number): Nat{
		return NatParInt.FAB.creerNatAvecRepresentation(this._chiffres)
	}
	static nettoyer(StringBuilder){

	}
	creerNatAvecRepresentation(chiffres: string): Nat{
		return new NatDecimal(chiffres);
	}
	creerZero(): Nat{
		return new Zero();
	}
	creerSuccesseur(arg: Nat): Nat{
		return new Succ(arg);
	}   
    chiffre(i: number): number {
        if (i < this.taille())
            return parseInt(this._chiffres.charAt(this.taille() - 1 - i));
        return 0;
    }
    taille(): number {
        return this._chiffres.length;
    }
    toString(): string {
    	return this._chiffres;
    } 
    representationJSON(): FormatNatDecimal {
        return {
            chiffres: this._chiffres
        };
	}   
    val(): number {
		return parseInt(this._chiffres);
	}	
	estNull(): boolean{
		return false;
	}
	predecesseur(): Nat{
		
	}
    equals(x: object): boolean{
		if(!(x instanceof NatParInt)) 
			return false;
        let n: Nat = x;
		return this.val() == n.val();
	}
    somme(x: NatDecimal): NatDecimal {
        const t = this.taille() < x.taille() ? x.taille() : this.taille();
        const rep: string[] = [];
        let retenue = 0;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue !== 0) {
            rep.push("1");
        }
        return new NatDecimal(rep.reverse().join(""));
    } 
	zero(): Nat{
		return new Zero();
	}
	produit(arg: Nat): Nat{
		
	}
	un(): Nat{

	}
	modulo(arg: Nat): Nat{

	}
	div(arg: Nat): Nat{

	}
}
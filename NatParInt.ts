import { FormatNatParInt } from './FormatNatParInt';
import { FabriqueNat } from './FabriqueNat';
import { Nat } from './Nat';
import { Zero } from './Zero';
//import { Succ } from './Succ';

export class NatParInt implements Nat {
    // Attributs //
	public static FAB: FabriqueNat<Nat> = new NatParInt(1);

	// Constructeur //
	constructor(private _val: number) {
        if (_val < 0)
            throw new Error("nombre négatif");
        if (_val !== Math.floor(_val))
            throw new Error("nombre non entier");
	}
    
    // Méthodes //
	creerNatAvecValeur(x: number): Nat{
		return new NatParInt(x);
	}
	creerZero(): Nat{
        return Zero.FAB.creerZero();
	}
	creerSuccesseur(arg: Nat): Nat{
		return new NatParInt(arg.val() + 1);
        //return Succ.FAB.creerSuccesseur(arg);
	}
	creerNatAvecRepresentation(chiffres: string): Nat{
		return new NatParInt(parseInt(chiffres));
	}
    val(): number{
		return this._val;
    }
    estNull(): boolean{
		return false;
	}
	predecesseur(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val() - 1);
    }  	 
    chiffre(i: number): number {
		return (i === 0) ? this.val()%10 : (NatParInt.FAB.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
    }  
    taille(): number {
		return (this.val() < 10) ? 1 : 1 + (NatParInt.FAB.creerNatAvecValeur(this.val() / 10)).taille();
    }   
	zero(): Nat{
        return this.creerZero();
	}
    somme(x: Nat): Nat{
		return NatParInt.FAB.creerNatAvecValeur(this.val() + x.val());
	}
	un(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(1);
	}
	produit(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.val() * arg.val());
	}
	toString(): string {
		return this.val().toString();
	}
	toJSON(): FormatNatParInt {
        return {
            val: this._val
        };
	}
	equals(o: object): boolean{		
        if(!(o instanceof NatParInt)) 
            return false;
        let n: Nat = o;
		return this.val() === n.val();		
	}
	modulo(arg: Nat): Nat{
		return NatParInt.FAB.creerNatAvecValeur(this.val() % arg.val());
	}
	div(arg: Nat): Nat{
		return NatParInt.FAB.creerNatAvecValeur(this.val() / arg.val());
	}
}
// En construction //

import { Nat } from "./Nat";
import { Zero } from './Zero';

export class NatDecimal implements Nat {
	
	private DIX: Nat;

	private chiffres: string;
    
	constructor(rep: string) {
        let min: string = String(0);
		let max: string = String(9);
		for(let i: number = 0; i < rep.length; i++){
			let c: string = rep.charAt(i);
			if(c < min)	throw new Error("Le paramètre passé n'est pas un nombre");
			if(c > max) throw new Error("Le paramètre passé n'est pas un nombre");
		}
		this.chiffres = rep;
    }
	
	creerNatAvecValeur(x: number): Nat{

	}

	static nettoyer(StringBuilder){

	}

	creerNatAvecRepresentation(chiffres: string): Nat{

	}

	creerZero(): Nat{

	}

	creerSuccesseur(arg: Nat): Nat{

	}

    chiffre(i: number): number{
    	if(i < this.taille())
    		return Character.getNumericValue(chiffres.charAt(chiffres.length() -1 -i));
    	return 0;
    }

	taille(): number{
    	return this.chiffres.length;
	}
	    
    toString(): string {
    	return this.chiffres;
    }
    
    val(): number {
		return parseInt(this.chiffres);
	}
	
	estNull(): boolean{
		return false;
	}

	predecesseur(): Nat{

	}

    equals(x: object): boolean{
		/*
		if(!(x instanceof NatParInt)) return false;
        let n: Nat = x;
		return this.getInt() == n.getInt();
		*/
		throw new Error("Méthode en construction");
	}

	somme(x: Nat): Nat {
        let t: number = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep: string = "";
		let retenue: number = 0;
		for(let i: number = 0; i < t; i++){
			let chiffre: number = this.chiffre(i) + x.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep = rep.concat(chiffre.toString());
		}
		rep = retenue == 0 ? rep : rep + "1";
		return new NatDecimal(rep.split('').reverse().join(''))
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
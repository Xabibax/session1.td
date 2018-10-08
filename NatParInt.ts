// En construction //
import { Nat } from './Nat';
import { FabriqueNat } from './FabriqueNat';

export class NatParInt implements Nat {
    // Attributs //
	public static FAB: FabriqueNat<Nat> = new NatParInt(1);
	private _val: number;

    // Constructeur //
	constructor(i: number) {
		if(i < 0)
			throw new Error('The number is negative.');
        this._val = i;
    }	
    
    // Méthodes //
	creerNatAvecValeur(x: number): Nat{
		return new NatParInt(x);
	}
	creerZero(): Nat{
        return NatParInt.FAB.creerNatAvecValeur(0);
	}
	creerSuccesseur(arg: Nat): Nat{
        return NatParInt.FAB.creerNatAvecValeur(this.somme(this.un()).val());
	}
	creerNatAvecRepresentation(chiffres: string): Nat{
		return NatParInt.FAB.creerNatAvecValeur(parseInt(chiffres));
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
		return (i == 0) ? this.val()%10 : (new NatParInt(this.val()/10)).chiffre(i-1);
    }  
    taille(): number {
		return (this.val() < 10) ? 1 : 1 + (new NatParInt(this.val() / 10)).taille();
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
        if(arg.val() > 0)
            return NatParInt.FAB.creerNatAvecValeur(
				this.somme(
					this.produit(
						NatParInt.FAB.creerNatAvecValeur(arg.predecesseur().val())
					)
				).val()
			);
        return this.creerZero();

	}
	toString(): string {
		return this.val().toString();
	}
	equals(o: object): boolean{		
        if(!(o instanceof NatParInt)) 
            return false;
        let n: Nat = o;
		return this.val() == n.val();		
	}
	modulo(arg: Nat): Nat{
		if(arg.val() == 0)
            throw new Error("Can't modulo by zero");
        if(this.val() >= arg.val())
        	return NatParInt.FAB.creerNatAvecValeur(
				NatParInt.FAB.creerNatAvecValeur(this.val() - arg.val()).modulo(
					arg
				).val()
			);
		return NatParInt.FAB.creerNatAvecValeur(this.val());
	}
	div(arg: Nat): Nat{
		if(arg.val() == 0)
				throw new Error("Can't dive by Zero");
        if(this.val() >= arg.val())
            return NatParInt.FAB.creerNatAvecValeur(
				this.un().somme(
					NatParInt.FAB.creerNatAvecValeur(this.val() - arg.val()).div(
						arg)
					).val()
			);
		return this.zero();
	}
}
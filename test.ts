import { Nat } from './Nat';
import { NatParInt } from './NatParInt';
//import { NatDecimal } from './NatDecimal';
import { FabriqueNat } from "./FabriqueNat";

function main() {
    /*
    x: Nat = NatDecimal.FAB.creerUnValeurParRepresentation("75");
    System.out.println("150 ? " + x.somme(x));
    
    x = new NatDecimal("2000000000");
    System.out.println("4000000000 ? " + x.somme(x));
    */
    
    let x: Nat = NatParInt.FAB.creerNatAvecValeur(85);
    console.log("170 ? " + x.somme(x));
    
    /*
    Nat y = new NatDecimal("45");
    System.out.println("130 ? " + x.somme(y));
    
    y = new NatDecimal("55");
    System.out.println("140 ? " + y.somme(x));
    */
    
    try{
        x = NatParInt.FAB.creerNatAvecValeur(2_000_000_000);
        console.log("4_000_000_000 ? " + x.somme(x));
    }
    catch(e){
        console.log("Erreur : dépassement ! Trace :");
        console.log(e.toString());
    }
    test(NatParInt.FAB);
    /*
    test(NatDecimal.FAB);
    */
}

function test(fab: FabriqueNat<Nat>) {
    let x: Nat = fab.creerNatAvecRepresentation("75");
    console.log("150 ? " + x.somme(x));
    
    x = fab.creerNatAvecValeur(2000000000);
    console.log("4000000000 ? " + x.somme(x));
}

main();
import { SemiAnneauUnitaireEuclidien } from "../../hierarchie/SemiAnneauUnitaireEuclidien";
import { FabriqueNat } from "./FabriqueNat";

export interface Nat extends SemiAnneauUnitaireEuclidien<Nat>, FabriqueNat<Nat>{
	estNull(): boolean;
	predecesseur(): Nat;
	chiffre(i: number): number;
	taille(): number;
	val(): number;
}
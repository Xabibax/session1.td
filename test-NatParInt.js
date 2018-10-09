"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
function afficheNat(nombre) {
    return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(nombre).toString();
}
// Test du constructeur //
console.log("Test du constructeur:");
console.log(afficheNat(0));
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(0).val() == 0 ? "OK" : "KO<----");
console.log(afficheNat(1));
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(1).val() == 1 ? "OK" : "KO<----");
console.log(afficheNat(9));
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).val() == 9 ? "OK" : "KO<----");
console.log(afficheNat(10));
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(10).val() == 10 ? "OK" : "KO<----");
// Test de zero //
console.log("Crée un NatParInt 5 mais renvoie 0: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(5).zero().toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(5).zero().val() == 0 ? "OK" : "KO<----");
// Test de un //
console.log("Crée un NatParInt 5 mais renvoie 1: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(5).un().toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(5).un().val() == 1 ? "OK" : "KO<----");
// Test de somme //
console.log("Somme de 3 par 3 = 6: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3).somme(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3).somme(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 6 ? "OK" : "KO<----");
// Test de produit //
console.log("Produit de 3 par 3 = 9: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3).produit(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3).produit(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 9 ? "OK" : "KO<----");
// Test de div //
console.log("Division de 9 par 3 = 3: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).div(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).div(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 3 ? "OK" : "KO<----");
// Test de modulo //
console.log("Modulo de 9 par 3 = 0: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 0 ? "OK" : "KO<----");
console.log("Modulo de 9 par 2 = 1: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(2)).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(2)).val() == 1 ? "OK" : "KO<----");
// Test de equals //
console.log("Test equals 9 - 3 doit retourner False: ");
if (NatParInt_1.NatParInt.FAB.creerNatAvecValeur(9).equals(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)))
    console.log("KO<----");
else
    console.log("OK");
console.log("Test equals 3 - 3 doit retourner True: ");
if (NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3).equals(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)))
    console.log("OK");
else
    console.log("KO<----");
// Test de chiffre //
console.log("Recoit 15 doit retourner 5: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(15).chiffre(0));
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(15).chiffre(0) == 5 ? "OK" : "KO<----");
// Test de taille //
console.log("Recoit 15 doit retourner 2: " + NatParInt_1.NatParInt.FAB.creerNatAvecValeur(15).taille());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(15).taille() == 2 ? "OK" : "KO<----");
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(1).toString());
console.log(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(1).toString() == "1" ? "OK" : "KO<----");

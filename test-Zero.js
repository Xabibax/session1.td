"use strict";
exports.__esModule = true;
var Zero_1 = require("./Zero");
var NatParInt_1 = require("./NatParInt");
function afficheNat(nombre) {
    return Zero_1.Zero.FAB.creerNatAvecValeur(nombre).toString();
}
// Test du constructeur //
console.log("Test du constructeur:");
console.log(afficheNat(0));
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(0).val() == 0 ? "OK" : "KO<----");
console.log(afficheNat(1));
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(1).val() == 0 ? "OK" : "KO<----");
console.log(afficheNat(9));
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(9).val() == 0 ? "OK" : "KO<----");
console.log(afficheNat(10));
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(10).val() == 0 ? "OK" : "KO<----");
// Test de zero //
console.log("Crée un Zero 5 mais renvoie 0: " + Zero_1.Zero.FAB.creerNatAvecValeur(5).zero().toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(5).zero().val() == 0 ? "OK" : "KO<----");
// Test de un //
console.log("Crée un Zero 5 mais renvoie 1: " + Zero_1.Zero.FAB.creerNatAvecValeur(5).un().toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(5).un().val() == 1 ? "OK" : "KO<----");
// Test de somme //
console.log("Somme de 0 par 3 = 3: " + Zero_1.Zero.FAB.creerNatAvecValeur(3).somme(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(3).somme(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 3 ? "OK" : "KO<----");
// Test de produit //
console.log("Produit de 0 par 3 = 0: " + Zero_1.Zero.FAB.creerNatAvecValeur(3).produit(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(3).produit(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 0 ? "OK" : "KO<----");
// Test de div //
console.log("Division de 0 par 3 = 0: " + Zero_1.Zero.FAB.creerNatAvecValeur(9).div(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(9).div(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 0 ? "OK" : "KO<----");
// Test de modulo //
console.log("Modulo de 0 par 3 = ?: " + Zero_1.Zero.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).toString());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(9).modulo(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)).val() == 0 ? "OK" : "KO<----");
// Test de equals //
console.log("Test equals 0 - 3 doit retourner False: ");
if (Zero_1.Zero.FAB.creerNatAvecValeur(0).equals(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(3)))
    console.log("KO<----");
else
    console.log("OK");
console.log("Test equals 0 - 0 doit retourner True: ");
if (Zero_1.Zero.FAB.creerZero().equals(Zero_1.Zero.FAB.creerNatAvecValeur(0)))
    console.log("OK");
else
    console.log("KO<----");
// Test de chiffre //
console.log("Recoit 15 doit retourner 0: " + Zero_1.Zero.FAB.creerNatAvecValeur(15).chiffre(0));
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(15).chiffre(0) == 0 ? "OK" : "KO<----");
// Test de taille //
console.log("Recoit 15 doit retourner 1: " + Zero_1.Zero.FAB.creerNatAvecValeur(15).taille());
console.log(Zero_1.Zero.FAB.creerNatAvecValeur(15).taille() == 1 ? "OK" : "KO<----");

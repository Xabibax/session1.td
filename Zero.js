"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var Zero = /** @class */ (function () {
    // Constructeur //
    function Zero() {
    }
    // Méthodes //
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.estNull = function () {
        return false;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error('Zero can\'t have predecesseur.');
    };
    Zero.prototype.chiffre = function (x) {
        return 0;
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.creerNatAvecRepresentation = function (chiffres) {
        return Zero.FAB.creerZero();
    };
    Zero.prototype.creerNatAvecValeur = function (x) {
        return Zero.FAB.creerZero();
    };
    Zero.prototype.creerZero = function () {
        return new Zero();
    };
    Zero.prototype.creerSuccesseur = function (arg) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(1);
    };
    Zero.prototype.zero = function () {
        return Zero.FAB.creerZero();
    };
    Zero.prototype.somme = function (x) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(x.val());
    };
    Zero.prototype.un = function () {
        return this.creerSuccesseur(this.zero());
    };
    Zero.prototype.produit = function (x) {
        return Zero.FAB.creerZero();
    };
    Zero.prototype.equals = function (o) {
        return (o instanceof Zero) ? true : false;
    };
    Zero.prototype.modulo = function (arg) {
        if (arg.val() == 0)
            throw new Error("Can't modulo by zero");
        return Zero.FAB.creerZero();
    };
    Zero.prototype.div = function (arg) {
        if (arg.val() == 0)
            throw new Error("Can't divide by zero");
        return Zero.FAB.creerZero();
    };
    Zero.prototype.toString = function () {
        return "0";
    };
    // Attributs //
    Zero.FAB = new Zero();
    return Zero;
}());
exports.Zero = Zero;

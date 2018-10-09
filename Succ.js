"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var Zero_1 = require("./Zero");
var Succ = /** @class */ (function () {
    // Constructeur //
    function Succ(arg) {
        this._predecesseur = arg;
    }
    // Méthodes //
    Succ.prototype.val = function () {
        return this._predecesseur.somme(this.un()).val();
    };
    Succ.prototype.estNull = function () {
        return false;
    };
    Succ.prototype.predecesseur = function () {
        return this._predecesseur;
    };
    Succ.prototype.chiffre = function (x) {
        return this.un().somme(this._predecesseur).chiffre(x);
    };
    Succ.prototype.taille = function () {
        return this.un().somme(this._predecesseur).taille();
    };
    Succ.prototype.creerNatAvecValeur = function (x) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(x);
    };
    Succ.prototype.creerZero = function () {
        return Zero_1.Zero.FAB.creerZero();
    };
    Succ.prototype.creerSuccesseur = function (arg) {
        return new Succ(arg);
    };
    Succ.prototype.creerNatAvecRepresentation = function (chiffres) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecRepresentation(chiffres);
    };
    Succ.prototype.zero = function () {
        return this.creerZero();
    };
    Succ.prototype.somme = function (arg) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(this.val()).somme(arg);
    };
    Succ.prototype.un = function () {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(1);
    };
    Succ.prototype.produit = function (arg) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(this.val()).produit(arg);
    };
    Succ.prototype.equals = function (o) {
        if (!(o instanceof Succ))
            return false;
        var n = o;
        return this.val() === n.val();
    };
    Succ.prototype.modulo = function (arg) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(this.val()).modulo(arg);
    };
    Succ.prototype.div = function (arg) {
        return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(this.val()).div(arg);
    };
    Succ.prototype.toString = function () {
        return this.val().toString();
    };
    // Attributs //
    Succ.FAB = new Succ(new Zero_1.Zero());
    return Succ;
}());
exports.Succ = Succ;

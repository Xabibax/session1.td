"use strict";
exports.__esModule = true;
var NatParInt = /** @class */ (function () {
    // Constructeur //
    function NatParInt(i) {
        if (i < 0)
            throw new Error('The number is negative.');
        this._val = i;
    }
    // Méthodes //
    NatParInt.prototype.creerNatAvecValeur = function (x) {
        return new NatParInt(x);
    };
    NatParInt.prototype.creerZero = function () {
        return NatParInt.FAB.creerNatAvecValeur(0);
    };
    NatParInt.prototype.creerSuccesseur = function (arg) {
        return NatParInt.FAB.creerNatAvecValeur(this.somme(this.un()).val());
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (chiffres) {
        return NatParInt.FAB.creerNatAvecValeur(parseInt(chiffres));
    };
    NatParInt.prototype.val = function () {
        return this._val;
    };
    NatParInt.prototype.estNull = function () {
        return false;
    };
    NatParInt.prototype.predecesseur = function () {
        return NatParInt.FAB.creerNatAvecValeur(this.val() - 1);
    };
    NatParInt.prototype.chiffre = function (i) {
        return (i == 0) ? this.val() % 10 : (new NatParInt(this.val() / 10)).chiffre(i - 1);
    };
    NatParInt.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (new NatParInt(this.val() / 10)).taille();
    };
    NatParInt.prototype.zero = function () {
        return this.creerZero();
    };
    NatParInt.prototype.somme = function (x) {
        return NatParInt.FAB.creerNatAvecValeur(this.val() + x.val());
    };
    NatParInt.prototype.un = function () {
        return NatParInt.FAB.creerNatAvecValeur(1);
    };
    NatParInt.prototype.produit = function (arg) {
        if (arg.val() > 0)
            return NatParInt.FAB.creerNatAvecValeur(this.somme(this.produit(NatParInt.FAB.creerNatAvecValeur(arg.predecesseur().val()))).val());
        return this.creerZero();
    };
    NatParInt.prototype.toString = function () {
        return this.val().toString();
    };
    NatParInt.prototype.equals = function (o) {
        if (!(o instanceof NatParInt))
            return false;
        var n = o;
        return this.val() == n.val();
    };
    NatParInt.prototype.modulo = function (arg) {
        if (arg.val() == 0)
            throw new Error("Can't modulo by zero");
        if (this.val() >= arg.val())
            return NatParInt.FAB.creerNatAvecValeur(NatParInt.FAB.creerNatAvecValeur(this.val() - arg.val()).modulo(arg).val());
        return NatParInt.FAB.creerNatAvecValeur(this.val());
    };
    NatParInt.prototype.div = function (arg) {
        if (arg.val() == 0)
            throw new Error("Can't dive by Zero");
        if (this.val() >= arg.val())
            return NatParInt.FAB.creerNatAvecValeur(this.un().somme(NatParInt.FAB.creerNatAvecValeur(this.val() - arg.val()).div(arg)).val());
        return this.zero();
    };
    // Attributs //
    NatParInt.FAB = new NatParInt(1);
    return NatParInt;
}());
exports.NatParInt = NatParInt;

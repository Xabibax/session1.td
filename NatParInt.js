"use strict";
exports.__esModule = true;
var Zero_1 = require("./Zero");
//import { Succ } from './Succ';
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
        return Zero_1.Zero.FAB.creerZero();
    };
    NatParInt.prototype.creerSuccesseur = function (arg) {
        return new NatParInt(arg.val() + 1);
        //return Succ.FAB.creerSuccesseur(arg);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (chiffres) {
        return new NatParInt(parseInt(chiffres));
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
        return (i === 0) ? this.val() % 10 : (NatParInt.FAB.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
    };
    NatParInt.prototype.taille = function () {
        return (this.val() < 10) ? 1 : 1 + (NatParInt.FAB.creerNatAvecValeur(this.val() / 10)).taille();
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
        return NatParInt.FAB.creerNatAvecValeur(this.val() * arg.val());
    };
    NatParInt.prototype.toString = function () {
        return this.val().toString();
    };
    NatParInt.prototype.toJSON = function () {
        return {
            val: this._val
        };
    };
    NatParInt.prototype.equals = function (o) {
        if (!(o instanceof NatParInt))
            return false;
        var n = o;
        return this.val() === n.val();
    };
    NatParInt.prototype.modulo = function (arg) {
        return NatParInt.FAB.creerNatAvecValeur(this.val() % arg.val());
    };
    NatParInt.prototype.div = function (arg) {
        return NatParInt.FAB.creerNatAvecValeur(this.val() / arg.val());
    };
    // Attributs //
    NatParInt.FAB = new NatParInt(1);
    return NatParInt;
}());
exports.NatParInt = NatParInt;

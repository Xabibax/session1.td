"use strict";
// En construction //
exports.__esModule = true;
var Zero_1 = require("./Zero");
var NatDecimal = /** @class */ (function () {
    function NatDecimal(rep) {
        var min = String(0);
        var max = String(9);
        for (var i = 0; i < rep.length; i++) {
            var c = rep.charAt(i);
            if (c < min)
                throw new Error("Le paramètre passé n'est pas un nombre");
            if (c > max)
                throw new Error("Le paramètre passé n'est pas un nombre");
        }
        this.chiffres = rep;
    }
    NatDecimal.prototype.creerNatAvecValeur = function (x) {
    };
    NatDecimal.nettoyer = function (StringBuilder) {
    };
    NatDecimal.prototype.creerNatAvecRepresentation = function (chiffres) {
    };
    NatDecimal.prototype.creerZero = function () {
    };
    NatDecimal.prototype.creerSuccesseur = function (arg) {
    };
    NatDecimal.prototype.chiffre = function (i) {
        if (i < this.taille())
            return Character.getNumericValue(chiffres.charAt(chiffres.length() - 1 - i));
        return 0;
    };
    NatDecimal.prototype.taille = function () {
        return this.chiffres.length;
    };
    NatDecimal.prototype.toString = function () {
        return this.chiffres;
    };
    NatDecimal.prototype.val = function () {
        return parseInt(this.chiffres);
    };
    NatDecimal.prototype.estNull = function () {
        return false;
    };
    NatDecimal.prototype.predecesseur = function () {
    };
    NatDecimal.prototype.equals = function (x) {
        /*
        if(!(x instanceof NatParInt)) return false;
        let n: Nat = x;
        return this.getInt() == n.getInt();
        */
        throw new Error("Méthode en construction");
    };
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep = "";
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep = rep.concat(chiffre.toString());
        }
        rep = retenue == 0 ? rep : rep + "1";
        return new NatDecimal(rep.split('').reverse().join(''));
    };
    NatDecimal.prototype.zero = function () {
        return new Zero_1.Zero();
    };
    NatDecimal.prototype.produit = function (arg) {
    };
    NatDecimal.prototype.un = function () {
    };
    NatDecimal.prototype.modulo = function (arg) {
    };
    NatDecimal.prototype.div = function (arg) {
    };
    return NatDecimal;
}());
exports.NatDecimal = NatDecimal;

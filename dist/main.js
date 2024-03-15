"use strict";

var _Cliente = require("./Cliente.js");
var _Impuestos = require("./Impuestos.js");
var c1 = new _Cliente.Cliente("Juan");
var imp1 = new _Impuestos.Impuestos(10000, 1000);
var impuesto = c1.calcularImpuesto(imp1.montoBrutoAnual, imp1.deducciones);
console.log(impuesto);
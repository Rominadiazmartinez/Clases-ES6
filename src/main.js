import { Cliente } from "./Cliente.js";
import { Impuestos } from "./Impuestos.js";

let c1 = new Cliente("Juan")
let imp1 = new Impuestos(10000, 1000)
let impuesto = c1.calcularImpuesto(imp1.montoBrutoAnual, imp1.deducciones)

console.log(impuesto) 

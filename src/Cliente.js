export class Cliente{
    constructor( nombre ){
        this._nombre = nombre
    }

    //Get Cliente
    get nombre(){
        return this._nombre
    }

    // Set Cliente
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }  

    //Calcular Impuesto
    calcularImpuesto(montoBrutoAnual, deducciones){
        
        let impuesto = (montoBrutoAnual - deducciones) * 21/100
        return `El impuesto total de ${this._nombre}, se calcula 
        considerando su monto bruto anual de $${montoBrutoAnual} y 
        sus deducciones de $${deducciones}. 
        Como resultado el impuesto a pagar es de: $${impuesto}.`
    }
}





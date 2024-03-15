export class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }

    //get monto Bruto Anual
    get montoBrutoAnual(){
        return this._montoBrutoAnual
    }

    //set Monto Bruto Anual
    set montoBrutoAnual(nuevoMontoBrutoAnual){
        this._montoBrutoAnual = nuevoMontoBrutoAnual
    }

    //get deducciones
    get deducciones(){
        return this._deducciones
    }

    //set deducciones
    set deducciones(nuevoDeducciones){
        this._deducciones = nuevoDeducciones
    }
}



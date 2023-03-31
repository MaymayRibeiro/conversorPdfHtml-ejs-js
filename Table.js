//essa tabela receberá os dados processados
class Table {

    constructor(arr){
        this.header = arr[0]; // salvar o primeiro elemento
        arr.shift(); //remove o primeiro elemento
        this.rows = arr; // salva todos os outros elementos 
    }

    /*Campos Virtuais = são atributos que podemos colocar na nossa classe,
    só que na verdade eles são métodos que retornam dados dinamicamente*/
    get RowCount(){  //contador de linhas
        return this.rows.length;
    }

    get ColumnCount(){  //contador de colunas
        return this.header.length;
    }
}

module.exports = Table;
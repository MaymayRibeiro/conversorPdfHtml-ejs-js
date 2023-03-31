class Processor{
    static Process(data){  //Por ser estático consigo utilizar direto pela classe
        var a = data.split("\r\n");  //dividir uma string em partes. Parâmetro dividir por linha
        var rows = [];
        a.forEach(row=>{
            var arr = row.split(",");  //returnar um array
            rows.push(arr);    //add algum dado dentro de um array
        });

        return rows;

    }
}

module.exports = Processor; 
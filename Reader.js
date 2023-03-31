const fs = require ("fs");
const util = require ("util"); //módulo do Node.js

//classe de leitor
class Reader{

    constructor(){ //salvamos no atributo da nossa classe uma versão de promisify da função abaixo 
        this.Reader = util.promisify(fs.readFile);
    }

    async read(filepath){
        try{
            return await this.Reader(filepath,"utf8") //retorna um dado em string
        }catch(err){
            return undefined;
        }
    }
}

module.exports = Reader;

 /* read(filepath){  //caminho que vai ser lido     **função callback**
        fs.readFile(filepath, "utf-8", (err,data)=>{
            if(err){
                console.log(err);
            }else{
               console.log(data);
           }
        })
    } */
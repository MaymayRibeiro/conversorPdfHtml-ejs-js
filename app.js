var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require ("./Table");
var HtmlParser = require ("./HtmlParser");
var Writer = require ("./Writer");
var PDFWriter = require ("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
     var dados = await leitor.read("./users.csv");  
     var dadosProcessados = Processor.Process(dados);

     var usuarios = new Table(dadosProcessados);

    // usuarios.rows.push([]); //adicionar uma nova linha a tabela

     var html = await HtmlParser.Parse(usuarios); //vai retornar uma string - gerar um html

     escritor.write(Date.now() + ".html",html); //nomear arquivo dinamicamente ao criar html
     PDFWriter.WritePDF(Date.now() + ".PDF", html); //nomear arquivo dinamicamente ao criar pdf 
    
}

main();
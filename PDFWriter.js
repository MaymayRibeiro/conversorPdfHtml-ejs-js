var pdf = require ("html-pdf");

class PDFWriter{
    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err) => {}); //criar arquivo em pdf
        //essa função precisa de callback
    }
}

module.exports = PDFWriter;
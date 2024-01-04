function doGet (){
    return HtmlService.createTemplateFromFile('web').evaluate()
    .setTitle('Agenda de Google Apps Scritp');
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
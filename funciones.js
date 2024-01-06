function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate()
    .setTitle('Agenda de Google Apps Scritp');
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1UQ-KmwczgYkh4yzbsnFCN3jFrjRQ6gTPiIU88H24bEg').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}
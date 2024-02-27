const HOJA = SpreadsheetApp.openById('1UQ-KmwczgYkh4yzbsnFCN3jFrjRQ6gTPiIU88H24bEg').getActiveSheet();

function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate()
    .setTitle('Agenda de Google Apps Scritp');
}

function doPost(datos){
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate()
    .setTitle('Agenda de Google Apps Scritp');
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    
    return HOJA.getDataRange().getValues();
   
}

function insertarContacto(nombre,apellido,correo,telf){

    HOJA.appendRow([nombre,apellido,correo,telf]);

}
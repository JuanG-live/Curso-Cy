describe('Interaccion con el navegador', ()=>{
    it('Probando la transferencia de un archivo', ()=> {
        cy.visit('https://galiclerc.github.io/test-pages/pages/drag-file.html');
        const dataTransfer = new DataTransfer();

        //Archivo no está en la carpeta del proyecto -> se pone la ruta absoluta
        cy.get('#dropArea').selectFile("C:\\Users\\juanm\\Downloads\\Sin título.png", {action: 'drag-drop'})
        //Archivo si está en la carpeta del proyecto -> se pone la ruta relativa
        cy.get('#dropArea').selectFile('./cypress/fixtures/example.json',{action: 'drag-drop'})
    })

})
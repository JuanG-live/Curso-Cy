describe('Interacciones con el navegador', ()=>{
    it('Drag and drop', ()=>{
        cy.visit('https://galiclerc.github.io/test-pages/pages/drag-drop.html');
        // Creo una instancia
        const dataTransfer = new DataTransfer();

        cy.get('#Item1').trigger('dragstart', {dataTransfer});
        cy.get('#destino').trigger('drop', {dataTransfer});
        cy.wait(2000);
        cy.get('#Item2').trigger('dragstart', {dataTransfer});
        cy.get('#destino').trigger('drop', {dataTransfer});
        cy.wait(2000);
        cy.get('#Item3').trigger('dragstart', {dataTransfer});
        cy.get('#destino').trigger('drop', {dataTransfer});
    })
})
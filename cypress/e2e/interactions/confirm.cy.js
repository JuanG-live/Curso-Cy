describe('Interacciones con el navegador', () => {
    [true, false].forEach((respuesta) => {
        it(`Probando el confirm con respuesta: ${respuesta ? 'Aceptar' : 'Cancelar'}`, () => {
            cy.visit('https://galiclerc.github.io/test-pages/pages/confirm.html#');
            
            cy.on('window:confirm', (texto) => {
                expect(texto).to.be.equal('Esto es un Confirm');
                return respuesta; // Simula "Aceptar" o "Cancelar"
            });

            cy.get('#btn').click();

            // Verificamos el mensaje que aparece según la respuesta
            const expectedText = respuesta 
                ? 'Hiciste click en aceptar' 
                : 'Hiciste click en cancelar';

            cy.get('#confirm').should('have.text', expectedText);
        });
    });
});

describe('Interacciones con el navegador', ()=>{
    it('Probando el alert', ()=>{
        cy.visit('https://galiclerc.github.io/test-pages/pages/prompt.html');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Juan');
            //En cypress. cy.stub() es un comando que devuelve un valor (el stub, en este caso devolverá Juan) de forma sincrónica, en lugar de devolver un objeto encadebnable tipo Promise.
        })
        cy.get('#btn').click();
        cy.get('#aviso').should('have.text','Hola Juan! que bueno que estés aquí!');
    })
})
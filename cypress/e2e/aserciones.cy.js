/// <reference types="cypress" />

describe('Aserciones en Sauce Demo', ()=> {
    beforeEach('Iniciar la pagina', ()=> {
        cy.visit('/');
    })
    it('Verificar el título de la página', () => {
        cy.visit('/');
        cy.get('.login_logo')
            .should('have.text', 'Swag Labs'); // Aserción de texto
    });
    it('Verificar que el botón de login existe y está visible', () => {
        cy.get('[data-test="login-button"]')
        .should('exist')
        .should('be.visible');
    })
    it('Verificar el placeholder del campo de usuario', () => {
        cy.get('[data-test="username"]')
        .should('have.attr','placeholder','Username');
    })
    it('Verificar el Password del campo de contraseña', ()=> {
        cy.get('[data-test="password"]')
        .should('have.attr','placeholder','Password'); 
    })
    it('Inicio correcto de sesión', ()=>{
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html'); // Verifica la URL
        cy.get('.title').should('have.text', 'Products'); // Verifica el título
    })
})

/// <reference types="cypress" />

describe("the-saucedemo-login", () => {
    beforeEach('Ingresar a la página', () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it("login ok", () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');

        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', 'Products'); //Verifica que entraste
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.get('[data-test="login-button"]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })
})
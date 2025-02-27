/// <reference types="cypress" />

describe("the-internet-herokuapp-login", ()=>{
    beforeEach('Ingresar a la página', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it("login ok", ()=>{
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('#login > button > i').click()
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#flash').should('be.visible');
        cy.visit('https://the-internet.herokuapp.com/login');
        /* ==== End Cypress Studio ==== */
    })
})
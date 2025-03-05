/// <reference types="cypress" />

describe('SauceDemo', () => {
    beforeEach('Inicie la pagina', function() {
        cy.visit('/');
        cy.fixture('sauceCredenciales').then((datos) => {
            this.data = datos;
        });
    })

    it("Login users ok", function()  {
            cy.escribir('[data-test="username"]', this.data.standardUser);
            cy.escribir('[data-test="password"]', this.data.passwordOk);
            cy.hacer_click('[data-test="login-button"]');
            cy.asertion_text('.title', 'Products'); //Verifico que ingresó
            cy.logout();
    })

    it("Login blocked user", function() {
        cy.escribir('[data-test="username"]', this.data.lockedUser);
        cy.escribir('[data-test="password"]', this.data.passwordOk);
        cy.hacer_click('[data-test="login-button"]');
        cy.asertion_text('[data-test="error"', 'Epic sadface: Sorry, this user has been locked out.');
    })

    it("Login users error", function() {
        cy.escribir('[data-test="username"]', this.data.errorUser);
        cy.escribir('[data-test="password"]', this.data.errorPassword);
        cy.hacer_click('[data-test="login-button"]');
        cy.asertion_text('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service');
    })
})
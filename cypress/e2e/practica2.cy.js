/// <reference types="cypress" />

describe('Sauce demo', ()=> {
    beforeEach('Ingresar a la pagina', function (){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('sauceCredenciales').then((datos)=>{
            this.data=datos
        }) 
    })
    it("login users ok", function(){
        cy.get('[data-test="username"]').type(this.data.standardUser);
        cy.get('[data-test="password"').type(this.data.passwordOk)
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('have.text', 'Products');
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"').click();
        cy.get('[data-test="login-button"]').should('be.visible');
    })
    it("login blocked user", function(){
        cy.get('[data-test="username"').type(this.data.lockedUser);
        cy.get('[data-test="password"]').type(this.data.passwordOk);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })
    it("login error user", function(){
        cy.get('[data-test="username"').type(this.data.errorUser)
        cy.get('[data-test="password"').type(this.data.passwordOk)
        cy.get('[data-test="login-button"').click();
        cy.get('[data-test="error"').should('have.text','Epic sadface: Username and password do not match any user in this service');
    })
    it("login error password", function(){
        cy.get('[data-test="username"').type(this.data.standardUser)
        cy.get('[data-test="password"').type(this.data.errorPassword)
        cy.get('[data-test="login-button"').click();
        cy.get('[data-test="error"').should('have.text','Epic sadface: Username and password do not match any user in this service');
    })
})
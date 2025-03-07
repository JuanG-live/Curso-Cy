/// <reference types="cypress" />

describe('SauceDemo', ()=> {
    beforeEach('Inicie la página', function(){
        cy.visit('/'),
        cy.fixture('sauceCredenciales').then((datos) =>{
            this.data = datos;
        })
        cy.fixture('../fixtures/DOM/loginElements.json').then((data) =>{
            this.element = data;
        })
        cy.fixture('../fixtures/DOM/messageError.json').then((data) => {
            this.msg= data;
        })
    })
    it("Login users ok", function()  {
        cy.escribir(this.element.login.username, this.data.standardUser);
        cy.escribir(this.element.login.password, this.data.passwordOk);
        cy.hacer_click(this.element.login.btnLogin);
        cy.asertion_text('.title', 'Products'); //Verifico que ingresó
        cy.logout();
})

it("Login blocked user", function() {
    cy.escribir(this.element.login.username, this.data.lockedUser);
    cy.escribir(this.element.login.password, this.data.passwordOk);
    cy.hacer_click(this.element.login.btnLogin);
    cy.asertion_text(this.element.login.errorMsg, this.msg.msg.lockedUser);
})

it("Login users error", function() {
    cy.escribir(this.element.login.username, this.data.errorUser);
    cy.escribir(this.element.login.password , this.data.errorPassword);
    cy.hacer_click(this.element.login.btnLogin);
    cy.asertion_text(this.element.login.errorMsg, this.msg.msg.invalid);
})
})


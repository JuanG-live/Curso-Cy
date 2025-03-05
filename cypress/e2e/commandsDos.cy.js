/// <reference types="cypress" />

describe('SauceDemo', () => {
    beforeEach('Iniciar la pagina', function (){
        cy.visit('/');
        cy.fixture('sauceCredenciales').then((dato) => {
            this.data = dato;
        })
    })

    it('Login user Correcto', () => {
        cy.loginOK();
        cy.asertion_loginOK();
    })

    it('Login user error', () => {
        cy.login_incorrecto();
        cy.asertion_loginError();
    })
    
    it('logout correcto', ()=>{
        cy.logout();
    })
})


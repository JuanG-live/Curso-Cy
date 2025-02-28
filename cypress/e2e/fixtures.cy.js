/// <reference types="cypress" />

describe('SauceDemo', () => {
    let usersOk;
    let usersError;
    let userLocked;
    beforeEach('Traer datos', () => {
        cy.fixture('users_ok').then((data) => {
            usersOk = data;
        })
        cy.fixture('users_error').then((data) => {
            usersError = data;
        })
        cy.fixture('user_locked').then((data) => {
            userLocked = data;
        })
    })
    beforeEach('Inicie la pagina', () => {
        cy.visit('https://www.saucedemo.com/')
    })

    it("Login users ok", () => {
        usersOk.forEach(data => {
            cy.get('[data-test="username"]').type(data.username);
            cy.get('[data-test="password"]').type(data.password);
            cy.get('[data-test="login-button"]').click();
            cy.get('.title').should('have.text', 'Products'); //Verifico que ingresó
            cy.get('#react-burger-menu-btn').click();
            cy.get('[data-test="logout-sidebar-link"]').click();
            cy.get('[data-test="login-button"]').should('be.visible');
        })
    })

    it("Login blocked user", ()=>{
        cy.get('[data-test="username"').type(userLocked.username);
        cy.get('[data-test="password"').type(userLocked.password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"').should('have.text','Epic sadface: Sorry, this user has been locked out.');
    })

    it("Login users error", ()=>{
        usersError.forEach(data =>{
            cy.get('[data-test="username"').type(data.username);
            cy.get('[data-test="password"').type(data.password);
            cy.get('[data-test="login-button"').click();
            cy.get('[data-test="error"').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
        })
    })
})
Cypress.Commands.add('loginOK', () => {
    cy.get("[data-test='username']").type('standard_user');
    cy.get("[data-test='password']").type('secret_sauce');
    cy.get("[data-test='login-button']").click();
})

Cypress.Commands.add('asertion_loginOK', ()=>{
    cy.get('.title').should('have.text', 'Products');
})

Cypress.Commands.add('login_incorrecto', ()=> {
    cy.get("[data-test='username']").type('error_user')
    cy.get("[data-test='password']").type('123');
    cy.get("[data-test='login-button']").click();
})

Cypress.Commands.add('asertion_loginError', () =>{
    cy.get("[data-test='error']").should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})

Cypress.Commands.add('logout', () =>{
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.get('[data-test="login-button"]').should('be.visible');
})

Cypress.Commands.add('loginSession', ()=> {
    cy.session('Login', () => {
        cy.visit('/');
        cy.loginOK();
    })
})


    Cypress.Commands.add('escribir', (selector, dato)=> {
        cy.get(selector).clear().type(dato);
    })

    Cypress.Commands.add('hacer_click', (selector)=>{
        cy.get(selector).click();
    })

    Cypress.Commands.add('asertion_text', (selector, texto)=>{
        cy.get(selector).should('have.text',texto);
    })

    Cypress.Commands.add('logout', () =>{
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.get('[data-test="login-button"]').should('be.visible');
    })
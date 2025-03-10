/// <reference types="cypress" />
import 'cypress-real-events';


describe('The Internet herokuapp', ()=>{
    it.only('hovers visible', ()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers');

        cy.get('.figure').each(($el, index)=>{
            cy.wrap($el).find("img").realHover();
            cy.wrap($el).find('.figcaption > h5')
                .should("be.visible")
                .and("contain",`name: user${index + 1}` );
        })
    })
    /** it('hover not visible', () =>{
        cy.visit('https://the-internet.herokuapp.com/hovers');

        cy.get('.figure').each(($el, index) => {
            cy.wrap($el).find("img").realHover();
            cy.wrap($el).find("img").trigger("mouseout") // Saco el mouse de la imagen
            cy.wrap($el).find('.figcaption > h5')
              .should("not.be.visible");  // Verifico que el texto desaparezca     

        })
    })
        **/
})
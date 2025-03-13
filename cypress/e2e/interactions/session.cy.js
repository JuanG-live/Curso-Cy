describe('Suacedemo', ()=> {
    beforeEach(() => {
        cy.loginSession();
    })
    it('Verificar la url', ()=> {
        cy.inventoryAccess()
        cy.url().should('contain', '/inventory.html')
    })

    it('Verificar el titulo', ()=> {
        cy.inventoryAccess()
        cy.title().should('eq', 'Swag Labs');
    })

    it('Verificación de elección de Sauce Labs Backpack', ()=>{
        cy.inventoryAccess()
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').click()
        cy.url('').should('contain', '/inventory-item.html?id=4')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Backpack')
        cy.get('[data-test="item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings()')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$29.99')
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')       
    })
    it('Verificación de elección de Sauce Labs Bike Light', ()=>{
        cy.inventoryAccess()
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bike Light').click()
        cy.url().should('contain', '/inventory-item.html?id=0')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Bike Light')
        cy.get('[data-test="item-sauce-labs-bike-light-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', 'A red light isn\'t the desired state')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$9.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    })
    it('Verificación de elección de Sauce Labs Bolt T-Shirt', ()=>{
        cy.inventoryAccess()
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt').click()
        cy.url().should('contain', '/inventory-item.html?id=1')
        cy.asertion_text('[data-test="inventory-item-name"]', 'Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="item-sauce-labs-bolt-t-shirt-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-desc"]').should('contain', 'Get your testing superhero')
        cy.get('[data-test="inventory-item-price"]').should('contain', '$15.99')
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.get('[data-test="remove"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')    
    })
})
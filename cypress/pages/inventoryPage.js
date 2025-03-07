class inventoryPage {
    elements = {
        menu: ()=>cy.get("#react-burger-menu-btn"),
        logout: ()=>cy.get("[data-test='logout-sidebar-link']"),
        page_title:()=>cy.get('[data-test=".tilte"]'),
        icon_cart:()=>cy.get('[data-test="shopping-cart-link"]'),
        icon_add:()=>cy.get('[data-test="shopping-cart-badge"]'),
        productUno:{
            img: ()=>cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]'),
            prod_title: ()=> cy.get('[data-test="inventory-item-name"]'),
            price:()=> ('[data-test="inventory-item-price"]'),
            btn_add:()=>('[data-test]="add-to-cart-sauce-labs-backpack"]'),
            btn_remove:()=>('[data-test="remove-sauce-labs-backpack"]')
        },
    }
    abrirMenu(){
        this.elements.menu().click()
    }
    logout(){
        this.elements.logout().click()
    }
    verTitulo(){
        this.elements.page_title().should('have.text', 'Products')
    }
    verificarImagen(){
        this.elements.productUno.img().click();
    }
    verificarTitulo(texto){
        this.elements.productUno.prod_title().should('have.text',texto);
    }
    verificarPrecio(dato){
        this.elements.productUno.price().should('have.text',dato);
    }
}

export default new inventoryPage();
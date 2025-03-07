import homePage from "../pages/homePage";
import inventoryPage from "../pages/inventoryPage";
/// <reference types="cypress" />

describe('SauceDemo', () => {
    let usersOk;
    before(() => {
        cy.visit('/');
        cy.fixture('/users_ok.json').then((data) =>
            usersOk = data);
    })
    it('Login OK', () => {
        usersOk.forEach(user => {
            homePage.typeUsername(user.username)
            homePage.typePassword(user.password)
            homePage.clickLoginButon();
            inventoryPage.abrirMenu();
            inventoryPage.logout();
        })
    })
    it.only('Login POM OK', ()=>{
        usersOk.forEach(user => {
            cy.loginOKPOM(user.username, user.password);
        })
    })
})
    
import homePage from "../pages/homePage";
import inventoryPage from "../pages/inventoryPage";

Cypress.Commands.add('loginOKPOM', (username, password) => {
    homePage.typeUsername(username)
    homePage.typePassword(password)
    homePage.clickLoginButon();
    inventoryPage.abrirMenu();
    inventoryPage.logout();
})
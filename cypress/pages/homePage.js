class homePage {
    elements = {
        usernameInput: ()=>cy.get("[data-test='username']"),
        passwordInput: ()=>cy.get("[data-test='password']"),
        loginButton: ()=>cy.get("[data-test='login-button']"),
        errorMSG: ()=>cy.get("[data-test='error']")
    }
    typeUsername(username) {
        this.elements.usernameInput().type(username); 
    }
    typePassword(password) {
        this.elements.passwordInput().type(password);
    }
    clickLoginButon() {
        this.elements.loginButton().click();
    }
    AssertionError(errorMsg) {
        this.elements.errorMSG().should('have.text', errorMsg);
    }
}

export default new homePage();

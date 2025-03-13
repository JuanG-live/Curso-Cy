describe('Interacciones con el navegador', () => {

    it('probando el descargar archivo', () => {
        cy.visit('https://httpd.apache.org/download.cgi')
        cy.get('#apcontents > ul:nth-child(11) > li:nth-child(1) > p > a:nth-child(1)').click()
    })
})
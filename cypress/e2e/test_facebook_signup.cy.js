describe('Valdiate facebook login failed', () => {

    it('Validate Facebook log in failure', () => {
        cy.visit('https://www.facebook.com/r.php?locale=en_GB&display=page')
        cy.xpath('//*[contains(text(),"Create new account")]').click()
        
    })
})
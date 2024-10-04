describe('Valdiate facebook login failed', () => {

    it('Validate Facebook log in failure', () => {
        cy.visit('https://en-gb.facebook.com/.')
        cy.get('#email').type('ABC@xyz.com')
        cy.get('#pass').type('ABC@xyz.com')
        cy.xpath('//button[@name="login"]').click()
        
    })
})
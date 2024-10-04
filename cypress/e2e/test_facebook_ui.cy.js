describe('Valdiate facebook Logo', () => {

    it('Validate Facebook logo', () => {
        cy.visit('https://en-gb.facebook.com/.')
        cy.get('img.fb_logo').should('be.visible')
        cy.get('h2').should('have.text','Facebook helps you connect and share with the people in your life.')
    })
})
describe('Validate Dropdown', () => {

    it('Drodown', () => {
      cy.visit('https://www.bstackdemo.com/')
      cy.get('select').select('Highest to lowest')
    })

    it('Valdiate dropdown', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('select').invoke('val').should('eq','')
      })
  })

export function getProductPrice(Products,ProductPrice){
    cy.xpath(`//div[text()="${Products}"]/following::div[@class="inventory_item_price"][1]`).should('have.text',ProductPriceS)
    
}
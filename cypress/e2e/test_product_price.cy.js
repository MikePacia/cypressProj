import { getProductPrice } from "../Utils/productPage";
import { Login } from "../Utils/LoginPage";

describe('Validate successful login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        Login('standard_user','secret_sauce')
    })

    it('Login success', () => {
        
       getProductPrice('Sauce Labs Backpack','$29.99')
       getProductPrice('Sauce Labs Bike Light','$9.99')
       getProductPrice('Sauce Labs Bolt T-Shirt','$15.99')
    })


})
import { Login, validateError} from "../Utils/LoginPage.js";

describe('Validate successful login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })
    it('Login success', () => {
        cy.login('standard_user','secret_sauce');
        // Login('standard_user','secret_sauce')
        cy.get('div.product_label').contains('Products')
    })


    it('Login failed', () => {
        Login('standard_user','secret_sauce22')
        validateError("Epic sadface: Username and password do not match any user in this service")
      })
      it('Login locked', () => {
        Login('locked_out_user','secret_sauce')
        validateError("Epic sadface: Sorry, this user has been locked out.")
      })  

  })
// Locators
const userName_element = '#user-name'
const userPassword_element = '#password'
const loginButton_element = '#login-button'
const errorMessage_element = 'h3'


export function Login (Username,Password){
    cy.get(userName_element).type(Username)
    cy.get(userPassword_element).type(Password)
    cy.get(loginButton_element).click()
}
export function validateError(Message){
    cy.get(errorMessage_element).contains(Message)
}
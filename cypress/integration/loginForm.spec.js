beforeEach(() => {
  cy.visit('../index.html')
})
  
it('successfully logs in', () => {
  const email = Cypress.env('userEmail')
  const password = Cypress.env('userPassword')

  cy.dataTest('email-field').type(email)
  cy.dataTest('password-field').type(password, { log: false })
  cy.dataTest('login-button').click()

  cy.contains('You\'re now logged in!').should('be.visible')
})
  
Cypress.Commands.add('dataTest', value => {
  return cy.get(`[data-test="${value}"]`)
})

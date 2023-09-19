beforeEach(() => {
  cy.visit('./index.html')
})
  
it('successfully logs in', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  cy.dataTest('email-field').type(email)
  cy.dataTest('password-field').type(password, { log: false })
  cy.dataTest('login-button').click()

  cy.contains('You\'re now logged in!').should('be.visible')
})
  
Cypress.Commands.add('dataTest', value => {
  return cy.get(`[data-test="${value}"]`)
})

describe('Newsletter Subscribe Form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Scenario: The user should be able to subscribe to the newsletter', () => {
    cy.getByData("email-input").type("john.doe@email.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist")
      .contains("Success: john.doe@email.com has been successfully subscribed")
  })

  it('Scenario: The user should NOT be able to subscribe to the newsletter with invalid email', () => {
    cy.getByData("email-input").type("john")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it('Scenario: The user should NOT be able to subscribe twice to the newsletter', () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
    
    cy.getByData("server-error-message")
      .should("exist")
      .contains("Error: john@example.com already exists. Please use a different email address.")
  })

})
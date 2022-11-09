/// <reference types="cypress" />

//Adding syntactic sugar for getting elements by data-test
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})
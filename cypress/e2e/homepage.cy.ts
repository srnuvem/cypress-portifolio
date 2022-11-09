import { forEach } from "lodash"

describe('Homepage Integrity', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero section", () => {
    it('Scenario: Heading1 should contain the correct title', () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")

    })

    it('Scenario: Feature list should contain the correct text ', () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")

    })

  })

  context("Courses section", () => {

    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })

  context("Course: Testing Your First Next.js Application Section", () => {
    [{
      description: "Scenario: APP INSTALL AND OVERVIEW Link should redirect to the correct pathname",
      position: 0,
      pathname: "/testing-your-first-application/app-install-and-overview"
    }, {
      description: "Scenario: INSTALLING CYPRESS AND WRITING OUR FIRST TEST Link should redirect to the correct pathname",
      position: 1,
      pathname: "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    },
    {
      description: "Scenario: SETTING UP DATA BEFORE EACH TEST Link should redirect to the correct pathname",
      position: 2,
      pathname: "/testing-your-first-application/setting-up-data-before-each-test"
    }, {
      description: "Scenario: Get started Link should redirect to the correct pathname",
      position: 3,
      pathname: "/testing-your-first-application"
    },].forEach(scenario => {
      it(scenario.description, () => {
        cy.getByData('course-0').find('a').eq(scenario.position).click()
        cy.location("pathname").should("eq", scenario.pathname)
      })
    })
  })
})
/// <reference types="Cypress" />

describe('visibility or Invisibility related', ()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('have.string','Practice Page')
    })
    it('TC01 -- Text box is visible',()=>{
        cy.get("#displayed-text").should('be.visible')
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible')
    })
    
})
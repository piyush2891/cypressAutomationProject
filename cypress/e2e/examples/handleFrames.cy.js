/// <reference types="Cypress" />
import 'cypress-iframe'
describe('Learn how to handle Frames',()=>{
    it('TC01-- FrameHandle',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        cy.frameLoaded("#courses-iframe")
        //cy.iframe().contains('Job Support').click()
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //cy.iframe().find("h1[class*='text-white']").should('have.class')
        
    })
})
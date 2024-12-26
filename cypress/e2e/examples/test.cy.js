/// <reference types="Cypress" />
describe('open website', ()=>{
    it('first test', ()=>{
        cy.visit("https://google.com/")
        cy.get("div[class='k1zIA rSk4se']").should('be.visible')
    })
    
})
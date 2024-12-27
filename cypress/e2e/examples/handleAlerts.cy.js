/// <reference types="Cypress" />

describe('Handling alerts in cypress',()=>{
    beforeEach('This will be handled before every TC',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it('TC01-- Switch to alert',()=>{
        cy.get("#name").type('piyush')
        cy.get('[id="alertbtn"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eql("Hello piyush, share this practice page and share your knowledge")
        })
    })    

    it('TC02-- Confirm alert',()=>{
        cy.get("#name").type('piyush')
        cy.get("#confirmbtn").click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal("Hello piyush, Are you sure you want to confirm?")
        })
    
    })
    it('TC03-- Parent child window',()=>{
        cy.get("[id='opentab']").invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.contains("Contact").click()
            cy.get(".col-md-4 div[class='logo']").should('be.visible')
        })
    })
})
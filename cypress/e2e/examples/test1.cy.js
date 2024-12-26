/// <reference types="Cypress" />
describe('open website', ()=>{
    it('first test', ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("div[class='brand greenLogo']").should('be.visible')
        cy.get("input[type='search']").type('ca')
        cy.get("div[id='root'] div[class='product']").should('have.length',4)
        cy.get("div[id='root'] div[class='products']").find('.product').should('have.length',4)
        cy.get("div[id='root'] div[class='products']").find('.product').eq(2).contains("ADD TO CART").click()
        cy.get("div[id='root'] div[class='products']").find('.product').each(($el, index, $list)=>{
            const vegName = $el.find("h4[class='product-name']").text()
            if(vegName.includes('Cashews')){
                cy.wrap($el).find("button").click()
            }
        })
        cy.get("div[class='brand greenLogo']").then((logo)=>{
            cy.log(logo.text())

        })
    })
    
})
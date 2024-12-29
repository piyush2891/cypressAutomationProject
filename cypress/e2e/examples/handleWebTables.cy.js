/// <reference types="Cypress" />


describe('Handling web tables & hidden elements in cypress',()=>{
    beforeEach('This will be handled before every TC',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    
    it('TC01-- Handling webtable',()=>{
        cy.get("tr td:nth-child(2)").each(($el, index, $list)=>{
            const validText = $el.text()
            if(validText.includes('simple Python Language'))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    const productPrice = price.text()
                    expect(productPrice).to.equal('25')
                })
            }
        })


    })

    it('TC02-- Handling webtable',()=>{
        cy.get("[class='mouse-hover-content']").invoke('show')
        cy.get("a[href='#top']").click({force: true})
        cy.url().should('include','#top')

    })


})    
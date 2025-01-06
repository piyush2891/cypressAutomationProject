/// <reference types="Cypress" />
import fixture from '../../fixtures/example.json'
describe('Handling e2e workflow',()=>{

    beforeEach(function () {
        cy.fixture('example').as('data')
    })

    
    
    
    it('TC01-- Full e2e workflow',function () {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/country")
        /*cy.fixture('example.json').as('data'){
            this.data = data;
        })*/
        const productName1 = this.data.productName1;
        const productName2 = this.data.productName2;
        cy.get("#username").type(this.data.username)
        cy.get("#password").type(this.data.password)
        cy.get(':nth-child(1) > .checkmark').click()
        //cy.get("#usertype").check("cy.get(':nth-child(1) > .checkmark')").should('be.checked')
        cy.get("#terms").check().should('be.checked')
        cy.get("#signInBtn").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get(".col-lg-3.col-md-6.mb-3").each(($el, index, $list)=>{
            cy.log($el.text())
            cy.get(".col-lg-3.col-md-6.mb-3").should('have.length',4)
        })
        cy.get("app-card").filter(`:contains('${productName1}')`)
        .then(($element)=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
            
        })
        cy.get("app-card").filter(`:contains('${productName2}')`)
        .then(($element)=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
            
        })
        //cy.contains(" Checkout ( 2 )").click()
        cy.contains('a','Checkout').click()
        let sum =0;
        cy.get("tr td:nth-child(4) strong").each(($el,index, $list)=>{
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount;
        }).then(()=>{
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button','Checkout').click()
        cy.get("#country").type("in")
        cy.wait(5000)
        cy.get("div[class='suggestions'] ul li a").each(($el,index,$list)=>{
            if($el.text()==="India"){
                
                cy.wrap($el).click()
            }
        })
        cy.get("#checkbox2").click({force: true})
        cy.get("input[value='Purchase']").click()
        cy.contains("Success!").should('be.visible')
        
    })

})
/// <reference types="Cypress" />
import fixture from '../../fixtures/example.json'
import HomePage from '../../support/pageClasses/HomePage'
import ProductPage from '../../support/pageClasses/ProductPage'
import CartPage from '../../support/pageClasses/cartPage'
import ConfirmationPage from '../../support/pageClasses/ConfirmationPage'

describe('Handling e2e workflow',()=>{

    beforeEach(function () {
        cy.fixture('example').then(function(data){
            this.data = data;
        })
        this.homePage = new HomePage()

    })

    
    
    
    it('TC01-- Full e2e workflow',function () {
        //cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/country")
        /*cy.fixture('example.json').as('data'){
            this.data = data;
        })*/
        const productName1 = this.data.productName1;
        const productName2 = this.data.productName2;
        this.homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/#/country")
        const productPage = this.homePage.login(this.data.username, this.data.password)
        productPage.pageValidation()
        productPage.getCardCount().should('have.length',4)
        productPage.selectFirstProduct(this.data.productName1)
        productPage.selectSecondProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then((sum)=>{
            expect(sum).to.be.lessThan(200000);
        })
        const confirmationPage = cartPage.checkOutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('be.visible')



        
        /**
        //cy.get("#usertype").check("cy.get(':nth-child(1) > .checkmark')").should('be.checked')
        cy.get("#terms").check().should('be.checked')
        
        
        cy.get(".col-lg-3.col-md-6.mb-3").each(($el, index, $list)=>{
            cy.log($el.text())
            cy.get(".col-lg-3.col-md-6.mb-3").should('have.length',4)
        })
                
        /*cy.get("app-card").filter(`:contains('${productName2}')`)
        .then(($element)=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
            
        })*/
        //cy.contains(" Checkout ( 2 )").click()
        
        /*let sum =0;
        cy.get("tr td:nth-child(4) strong").each(($el,index, $list)=>{
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount;
        }).then(()=>{
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button','Checkout').click()
       
        cy.get("#checkbox2").click({force: true})
        cy.get("input[value='Purchase']").click()
        cy.contains("Success!").should('be.visible')
        **/
        
    })

})
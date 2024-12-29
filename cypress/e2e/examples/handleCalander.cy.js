/// <reference types="Cypress" />
import 'cypress-iframe'
describe('Learn how to handle Calanders',()=>{
    it('TC01-- Calanders',()=>{
        let desired_date = "28";
        let desired_month = "10";
        let desired_year = "2029";
        let current_year = "2024";
        let desired_list = [desired_month, desired_date, desired_year];
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get("[class='react-date-picker__inputGroup']").click()
        cy.get("span[class*='react-calendar']").click()
        cy.get("span[class*='react-calendar']").click()
        cy.contains('button',desired_year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(desired_month)-1).click()
        cy.contains('abbr',desired_date).click()
        cy.get("input[class*='react-date-picker__inputGroup__input']").each(($el,index,$list)=>{
            cy.wrap($el).invoke('val').should('eq',desired_list[index]);

            
        })


    
        
    })
})
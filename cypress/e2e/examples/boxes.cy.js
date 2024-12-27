/// <reference types="Cypress" />



describe('Boxes related cases',()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('have.string','Practice Page')
    })

    it('TC01-- Handle checkboxes',()=>{
        cy.get("#checkBoxOption1").check().should('have.value','option1')
        cy.get("#checkBoxOption1").uncheck()
        //cy.contains("Checkbox Example").should('have.')
        cy.get("div[class='right-align'] input[type='checkbox']").check(['option2','option3'])

    })
    it('TC02-- Static dropdown',()=>{
        cy.get("#dropdown-class-example").select('option2').should('have.value','option2')
        cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
        cy.get("#dropdown-class-example").select('Select')
    })
    it('TC03-- Dynamic Dropdown',()=>{
        cy.get("div[class='cen-left-align'] #autocomplete").type("chi")
        cy.get(".ui-menu-item").each(($el, index, $list)=>{
            cy.log($el.text())
            if($el.text()==='China'){
                cy.wrap($el).click()
            }
        })
        cy.get("#autocomplete").should('have.value','China')
    })
    
        

    
})

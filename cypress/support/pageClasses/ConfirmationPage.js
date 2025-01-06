class ConfirmationPage {

    submitFormDetails(){

        //cy.contains('button','Checkout').click()
        cy.get("#country").type("in")
        cy.wait(5000)
        cy.get("div[class='suggestions'] ul li a").each(($el,index,$list)=>{
            if($el.text()==="India"){
                
                cy.wrap($el).click()
            }
        })
        cy.get("#checkbox2").click({force: true})
        cy.get("input[value='Purchase']").click()

    }
    getAlertMessage(){
        return cy.contains("Success!")
    }

}
export default ConfirmationPage;
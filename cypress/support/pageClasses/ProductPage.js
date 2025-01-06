import CartPage from '../../support/pageClasses/CartPage'
class ProductPage {

    pageValidation() {
        cy.contains("Shop Name").should('be.visible')

    }

    getCardCount() {
        return cy.get('app-card')

    }

    selectFirstProduct(productName1) {
        cy.get("app-card").filter(`:contains('${productName1}')`)
        .then(($element)=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
            
        })


    }

    selectSecondProduct() {
        cy.get("app-card").eq(1).contains('button','Add').click()
    }


    goToCart() {
        cy.contains('a','Checkout').click()
        return new CartPage()
    }

}

export default ProductPage;
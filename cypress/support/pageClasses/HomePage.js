import ProductPage from './ProductPage'

class HomePage {

    goTo(url) {
        cy.visit(url)
    }

    login(username, password) {
        cy.get("#username").type(username)
        cy.get("#password").type(password)
        cy.get(':nth-child(1) > .checkmark').click()
        cy.get("#signInBtn").click()
        //const productPage = new ProductPage()
        

        return new ProductPage()  //directly returning the object of ProductPage
    }
}
export default HomePage;
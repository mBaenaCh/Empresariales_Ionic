describe('My First Cypress Test', () => {
    it('Search item', () => {
        //AAA PATERN
        cy.visit('http://localhost:8100') //ARRAGE 
        cy.get('#search') // search bar class
            .type("ipad {enter}")
        cy.url().should('include','/search')//ASSERT revisamos la uri que contenga lo que queremos
    })

    it('Search Product Jumbo', () => {
        //AAA PATERN
        cy.visit('http://localhost:8100') //ARRAGE 
        cy.get('#search') // search bar class
            .type("teclado {enter}")
        cy.contains('Teclado').click()
        cy.url().should('include','MCO')//ASSERT revisamos la uri que contenga lo que queremos
    })
})
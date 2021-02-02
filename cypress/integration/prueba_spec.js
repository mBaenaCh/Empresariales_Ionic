const { createPropertySignature } = require("typescript")

describe('Searching test ', () => {
    it('Search for galaxy buds and look for the results', () => {
        //AAA PATERN
        cy.visit('/') //ARRAGE 
        cy.get('#search') // search bar class
            .type("galaxy buds {enter}")
        //cy.wait(8000)
        cy.url().should('include','/search/galaxy%20buds')//ASSERT revisamos la uri que contenga lo que queremos
    })
    
    it('Search for galaxy buds and look for one of the items of the search', () => {
        //AAA PATERN
        cy.visit('/') //ARRAGE 
        cy.get('#search') // search bar class
            .type("teclado {enter}")
        cy.contains('Teclado').click()
        cy.url().should('include','MCO')//ASSERT revisamos la uri que contenga lo que queremos
    })

    it('Opens up the modal for the list of items and the it closes', () =>{
        cy.visit('/')
        cy.get('.car-icon').click()
        cy.get('.dismiss').click()
    })
})

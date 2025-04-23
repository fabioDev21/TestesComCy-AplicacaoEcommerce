describe('Pagina inicial Advantage Shopping', () => {
  
  beforeEach(() => {
    cy.visit('https://www.advantageonlineshopping.com/#/')
  })
  
  it('Realize a busca de um produto', () => {
    
    cy.get('#search > a')
      .click()

    cy.wait(5500) // Necessario para aguardar o carregamento da API da tela inicial

    cy.get('#autoComplete')
      .type('tablet')
      .should('have.value','tablet')
    
    cy.get('.top6Products > [href="#/product/16"]')
      .click()
  
    cy.url()
      .should('contain','product')

    cy.contains('TABLET')

  })
})
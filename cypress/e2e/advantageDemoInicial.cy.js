describe('Pagina inicial Advantage Shopping', () => {
  
  beforeEach(() => {
    cy.visit('https://www.advantageonlineshopping.com/#/')
  })
  
  it('Realize a busca de um produto', () => {
    
    cy.get('#search > a')
      .click()

    cy.get('#autoComplete')
      .type("tablet", {force: true})
    
  })
})
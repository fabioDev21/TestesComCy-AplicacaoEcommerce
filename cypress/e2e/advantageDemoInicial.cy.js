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
  it(('Incluir produto no carrinho'), () => {

    cy.get('#search > a')
      .click()

    cy.wait(5500) // Necessario para aguardar o carregamento da API da tela inicial

    cy.get('#autoComplete')
      .type('laptop')
      .should('have.value','laptop')
    
    cy.get('[href="#/product/7"]')
      .click()
  
    cy.url()
      .should('contain','product')

    cy.contains('LAPTOP')

    cy.get('.fixedBtn > .roboto-medium')
      .click()

    cy.get('#shoppingCartLink')
      .trigger('mouseover')

    cy.contains('CHECKOUT')

    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp')
      .click()

    cy.contains('ORDER PAYMENT')
  })


})
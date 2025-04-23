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

    cy.wait(5000)

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

  })
  it(('Validar os produtos incluidos no carrinho na tela de pagamento'), () => {
    cy.get('#search > a')
      .click()

    cy.wait(5000)

    cy.get('#autoComplete')
      .type('headphone')
      .should('have.value','headphone')
    
    cy.contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')
      .click()

    cy.wait(6000)

    cy.contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')

    cy.url()
      .should('contain','product')

    cy.get('#lengthAllImages > :nth-child(2) > img')
      .click()

    // Necessario para guardar o atrbiuto src da imagem e usar para assercao depois da execucao

    let srcSegundaImg
    let srcImgCheckout

    cy.get('#mainImg')
      .invoke('attr', 'src')
      .then((src) => {
        srcSegundaImg = src
      })

    cy.get('.fixedBtn > .roboto-medium')
      .click()

    cy.get('#shoppingCartLink')
      .trigger('mouseover')

    cy.contains('CHECKOUT')
      .click()
    
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(1) > a > .imageUrl')
      .invoke('attr', 'src')
      .then((src) => {
        srcImgCheckout = src
      })
    
    expect(srcSegundaImg).to.equal(srcImgCheckout)

    cy.contains('ORDER PAYMENT')
  })

})
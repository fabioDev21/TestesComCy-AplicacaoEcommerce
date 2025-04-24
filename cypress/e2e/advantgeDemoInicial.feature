Feature: Testes pagina inicial Advantage Demo

    Scenario: Realizar a busca de um produto
    Given que o cliente esteja na pagina inicial
    When ele digitar o nome ou tipo do produto
    Then o sistema deve mostrar os resultados obtidos para o item pesquisado

    Scenario: Incluir item no carrinho
    Given que o cliente esteja na pagina inicial
    When ele selecionar uma das opcoes de produto disponiveis
    And selecionar o produto que deseja
    Then ele podera adicionar o item no carrinho

    Scenario: Validar os produtos incluidos no carrinho na tela de pagamento
    Given que o cliente esteja na pagina inicial
    And conectado a sua conta
    When ele acessar a pagina do carrinho
    And clicar na opcao checkout
    Then podera validar os itens atraves da imagem do produto
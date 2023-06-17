# Funcionalidade: Criar Usuário

## Cenário: Criar um novo usuário com sucesso
Dado que usuário informa um login válido e cria uma senha  
Quando o usuário é criado com os seguintes detalhes:  
| Nome       | Senha      |  
Então o usuário é criado com sucesso  
E o sistema exibe uma mensagem de criação de usuário realizada  

## Cenário: Usuário cria um login vazio ou inválido
Dado que o usuário informa um login com campos vazios ou caracteres inválidos  
Quando há uma solicitação para criar o usuário  
Então o sistema retorna um erro informando que o login é inválido  
E dá a opção de digitar novamente  

# Funcionalidade: Realizar Login

## Cenário: Usuário faz o login com sucesso
Dado que o funcionário quer fazer login no sistema  
Quando o funcionário informar seu nome de login "<nome_de_usuario>" e sua senha "<senha>"  
Então o sistema deve autenticar o funcionário com sucesso  

## Cenário: Usuário insere a senha errada
Dado que o funcionário tente fazer login no sistema  
Quando o funcionário informar seu nome de login "<nome_de_login>" e sua senha "<senha>"  
Então o sistema deve exibir uma mensagem de erro de login por senha inválida  

# Funcionalidade: Adicionar jóia ao estoque

## Cenário: Funcionário consegue incluir novas jóias 
Dado que o funcionário está logado no sistema  
Quando o funcionário selecionar a opção de adicionar jóia ao estoque  
E o sistema solicitar as informações da nova jóia  
E o funcionário preencher as informações da jóia corretamente com nome "<nome_da_joia>", tipo "<tipo_da_joia>", valor "<valor_da_joia>" e quantidade "<quantidade_da_joia>"  
Então o sistema deve registrar a nova joia no estoque  

## Cenário: Funcionário digita alguma informação errada
Quando o funcionário selecionar a opção de adicionar jóia  
E o sistema solicitar as informações da nova jóia  
E o funcionário preencher as informações da jóia incorretamente com nome "<nome_da_joia>", preço "<preco_da_joia>" e quantidade "<quantidade_da_joia>"  
Então o sistema deve exibir uma mensagem de erro de preenchimento  
E permitir que o funcionário adicione novamente as informações  

## Cenário: Funcionário deixa o campo vazio e tenta adicionar ao estoque
Quando o funcionário seleciona a opção de adicionar jóia  
E o sistema solicitar as informações da nova jóia  
E o funcionário preencher as informações e deixar algum(ns) ou todos os campos vazios  
Então o sistema deve exibir uma mensagem de erro de preenchimento  
E permitir que o funcionário tente novamente ou cancele a operação  

# Funcionalidade: Vender Jóias

## Cenário: Existem jóias suficientes no estoque
Dado que o funcionário está logado no sistema  
Quando o funcionário selecionar a opção de registrar nova venda  
E o sistema exibir a lista de jóias disponíveis  
E o funcionário selecionar as jóias vendidas e informar a quantidade de cada uma  
Então o sistema deve verificar o estoque das jóias selecionadas  
E se houver estoque suficiente, o sistema deve registrar a venda e atualizar o estoque das jóias vendidas  

## Cenário: Não existem jóias suficientes no estoque
Dado que o funcionário tenha restá logado no sistema  
Quando o funcionário selecionar a opção de registrar venda  
E o sistema exibir a lista de pjóias disponíveis  
E o funcionário selecionar as jóias vendidas e informar a quantidade de cada uma  
Então o sistema deve verificar o estoque das jóias selecionadas  
E se não houver estoque suficiente, o sistema deve exibir uma mensagem de erro de estoque insuficiente  


# Funcionalidade: Cancelar Compra

## Cenário: A compra foi encontrada com sucesso
Dado que o funcionário está logado no sistema  
Quando o funcionário selecionar a opção "cancelar compra"  
E o sistema exibir um campo de pesquisa por cliente ou ID da compra  
E o funcionário inserir o nome do cliente ou o ID da compra corretamente e encontrá-la  
E o funcionário selecionar a opção "cancelar esta compra"  
Então o sistema deve solicitar novamente a senha do funcionário  
E se a senha estiver correta  
Então o sistema deve cancelar a compra, atualizando o estoque  

## Cenário: A compra não foi encontrada
Dado que o funcionário está logado no sistema  
Quando o funcionário selecionar a opção "cancelar compra"  
E o sistema exibir um campo de pesquisa por cliente ou ID da compra  
E o funcionário inserir o nome do cliente ou o ID da compra incorretamente  
Então o sistema deve exibir uma mensagem de erro  
E permitir que o funcionário tente novamente ou cancele a operação  

## Cenário: A senha do funcionário está incorreta
Dado que o funcionário está logado no sistema  
Quando o funcionário selecionar a opção "cancelar compra"  
E o sistema exibir um campo de pesquisa por cliente ou ID da compra  
E o funcionário inserir o nome do cliente ou o ID da compra corretamente e encontrá-la  
E o funcionário selecionar a opção "cancelar esta compra"  
Então o sistema deve solicitar novamente a senha do funcionário  
E se a senha estiver incorreta  
Então o sistema deve exibir uma mensagem de erro  
E permitir que o funcionário tente novamente ou cancele a operação  
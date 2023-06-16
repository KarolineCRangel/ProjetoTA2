# Use Cases

## Criar Usuário

### Fluxo Principal
- receber dados de login e senha do usuário.
- gerar um ID para o usuário.
- encriptar a senha do usuário.
- criar um novo usuário.
- retornar que o usuário foi criado com sucesso.

### Fluxo Alternativo - Login Inválido
- receber um usuário inválido (campo vazio ou com caracteres inválidos).
- retornar um erro informando que o usuário é inválido e não pode ser criado.
- limpar campos e permitir que o usuário tente novamente.


## Realizar Login

### Fluxo Principal:
- O funcionário insere seu nome de login e senha.
- O sistema verifica as informações de login e senha.
- Se as informações forem válidas, o sistema autentica o o funcionário.

### Fluxo Alternativo:
- Se as informações de login do funcionário forem inválidas, o sistema exibe uma mensagem de erro.


## Adicionar Jóia ao estoque

### Fluxo Principal:
- O funcionário realiza o login no sistema.
- O funcionário seleciona "adicionar joia ao estoque".
- O sistema solicita as informações da nova jóia (nome, tipo, quantidade).
- O funcionário insere as informações da jóia.
- O sistema adiciona a nova jóia ao estoque.

### Fluxo Alternativo:
- O sistema exibe uma mensagem de erro, caso hajam campos em branco ou informações inválidas.
- o sistema limpa os campos e dá a opção do funcionário digitar novamente ou cancelar a adição ao estoque.


## Vender Jóias

### Fluxo Principal:
- O funcionário realiza o login no sistema.
- O funcionário seleciona "nova venda".
- O sistema exibe uma lista das jóias cadastradas.
- O funcionário insere a(s) jóia(s) vendida(s) e informa a quantidade.
- O sistema verifica se há estoque suficiente das jóias selecionadas.
- Se a jóia estiver no estoque, o sistema soma o total da venda, o meio de pagamento, registra a venda, gera uma nota de compra e atualiza o estoque.

### Fluxo Alternativo:
- bSe na jóia não estiver no estoque, o sistema exibe uma mensagem de erro.


## Cancelar compra

### Fluxo Principal:
- O funcionário realiza o login no sistema.
- O funcionário seleciona "cancelamento".
- O sistema exibe um campo para inserir o ID da compra ou o nome do cliente.
- O funcionário insere o nome do Cliente ou o ID da compra.
- O sistema verificaas compras realizadas pelo cliente em questão.
- Se o funcionário digitou o nome do cliente, o sistema exibe uma lista das compras do mesmo, o funcionário seleciona a compra e o sistema exibe as informações da compra, dando a opção de cancelamento.
- Se o funcionário digitou o ID da compra, o sistema exibe as informações da compra, dando a opção de cancelamento.

### Fluxo Alternativo:
- Se o cliente não for cadastrado, o sistema exibe uma mensagem de erro.
- Se a compra não estiver registrada, o sistema exibe uma mensagem de erro.


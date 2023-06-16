# Use Cases

## Criar Usuário

### Fluxo Principal
1. receber dados de login e senha do usuário.
2. gerar um ID para o usuário.
3. encriptar a senha do usuário.
4. criar um novo usuário.
5. retornar que o usuário foi criado com sucesso.

### Fluxo Alternativo - Login Inválido
1. receber um usuário inválido (campo vazio ou com caracteres inválidos).
2. retornar um erro informando que o usuário é inválido e não pode ser criado.
3. limpar campos e permitir que o usuário tente novamente.


## Realizar Login

### Fluxo Principal:
1. O funcionário insere seu nome de login e senha.
2. O sistema verifica as informações de login e senha.
3. Se as informações forem válidas, o sistema autentica o o funcionário.

### Fluxo Alternativo:
1. Se as informações de login do funcionário forem inválidas, o sistema exibe uma mensagem de erro.


## Adicionar Jóia ao estoque

### Fluxo Principal:
1. O funcionário realiza o login no sistema.
2. O funcionário seleciona "adicionar joia ao estoque".
3. O sistema solicita as informações da nova jóia (nome, tipo, quantidade).
4. O funcionário insere as informações da jóia.
5. O sistema adiciona a nova jóia ao estoque.

### Fluxo Alternativo:
1. O sistema exibe uma mensagem de erro, caso hajam campos em branco ou informações inválidas.
2. o sistema limpa os campos e dá a opção do funcionário digitar novamente ou cancelar a adição ao estoque.


## Vender Jóias

### Fluxo Principal:
1. O funcionário realiza o login no sistema.
2. O funcionário seleciona "nova venda".
3. O sistema exibe uma lista das jóias cadastradas.
4. O funcionário insere a(s) jóia(s) vendida(s) e informa a quantidade.
5. O sistema verifica se há estoque suficiente das jóias selecionadas.
6. Se a jóia estiver no estoque, o sistema soma o total da venda, o meio de pagamento, registra a venda, gera uma nota de compra e atualiza o estoque.

### Fluxo Alternativo:
Se na jóia não estiver no estoque, o sistema exibe uma mensagem de erro.


## Cancelar compra

### Fluxo Principal:
1. O funcionário realiza o login no sistema.
2. O funcionário seleciona "cancelamento".
3. O sistema exibe um campo para inserir o ID da compra ou o nome do cliente.
4. O funcionário insere o nome do Cliente ou o ID da compra.
5. O sistema verificaas compras realizadas pelo cliente em questão.
6. Se o funcionário digitou o nome do cliente, o sistema exibe uma lista das compras do mesmo, o funcionário seleciona a compra e o sistema exibe as informações da compra, dando a opção de cancelamento.
7. Se o funcionário digitou o ID da compra, o sistema exibe as informações da compra, dando a opção de cancelamento.

### Fluxo Alternativo:
Se o cliente não for cadastrado, o sistema exibe uma mensagem de erro.
Se a compra não estiver registrada, o sistema exibe uma mensagem de erro.


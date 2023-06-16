# Projeto de Tópicos Avançados 2

## Projeto
Um sistema onde é possível realizar vendas de jóias, verificação de estoque e cancelamento de compras.

## Entidades
Todas as entidades estenderão da classe Entity que possui um id único gerado pelo pacote UUID.

### Entidades
- Atributos:
  - id (string): Identificador único.

### Usuario
- Atributos:
  - login (string): Login do usuário.
  - password (string): Senha do usuário (com hash).

### Joia
- Atributos:
  - nome (string): Nome da jóia.
  - tipo (string): Tipo da jóia.

### Cliente
- Atributos:
  - nome (string): Nome do cliente.
  - CPF (string): CPF do cliente.
  - email (string): Email do cliente.
  - telefone (string): telefone do cliente.

### Venda
- Atributos:
  - usuario (Usuario): Funcionário que realiza o venda.
  - cliente (Cliente): Cliente que realizou a compra.
  - joia (Joia): jóia comprada.
  - data_compra (date): Data da venda.
  - valor_total (number): Valor pago na compra.
  - forma_pagamento (string): Forma de pagamento do cliente.

### Estoque
- Atributos:
  - joia (Joia): jóia em estoque.
  - quantidade (string): Quantidade de determinada jóia em estoque.
  - valor (double): Valor da jóia.

### Cancelamento
- Atributos:
  - usuario (Usuario): Funcionário que cancelou a compra.
  - venda (Venda): Venda a ser cancelada.
  - data_cancelamento (date): Data do cancelamento.
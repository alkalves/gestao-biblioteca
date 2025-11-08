📋 Lista de User Stories – Sistema de Gestão de Biblioteca

1️⃣ Funcionalidade: Registro de Bibliotecário

User Story:
Como bibliotecário,
eu quero me registrar no sistema,
para que eu possa acessar e gerenciar o acervo da biblioteca com segurança.

Regras de Negócio:
- Não pode haver duplicidade de e-mail entre bibliotecários.
- Todos os campos obrigatórios (nome, e-mail, senha) devem ser validados.


2️⃣ Funcionalidade: Login de Bibliotecário

User Story:
Como bibliotecário,
eu quero fazer login no sistema,
para que eu possa acessar as funcionalidades restritas da biblioteca.

Regras de Negócio:
- O login só é permitido com e-mail e senha válidos.
- O sistema deve gerar um token JWT após autenticação bem-sucedida.


3️⃣ Funcionalidade: Registro de Autor

User Story:
Como bibliotecário autenticado,
eu quero cadastrar autores,
para que eu possa associá-los aos livros do acervo.

Regras de Negócio:
- Somente usuários autenticados podem registrar autores.
- Não pode haver autores duplicados (mesmo nome e nacionalidade).
- Campos obrigatórios: nome e nacionalidade.


4️⃣ Funcionalidade: Registro de Livro

User Story:
Como bibliotecário autenticado,
eu quero registrar livros,
para que eu possa manter o acervo atualizado e organizado.

Regras de Negócio:
- Somente usuários autenticados podem cadastrar livros.
- Todo livro deve estar associado a um autor válido.
- Campos obrigatórios: título, ano de publicação, autor e gênero.

5️⃣ Funcionalidade: Registro de Leitor

User Story:
Como bibliotecário autenticado,
eu quero cadastrar leitores,
para que eu possa controlar quem realiza empréstimos de livros.

Regras de Negócio:
- Somente usuários autenticados podem cadastrar leitores.
- Não pode haver duplicidade de e-mail entre leitores.
- Campos obrigatórios: nome, cpf, e-mail e telefone.


6️⃣ Funcionalidade: Registro de Empréstimo de Livro

User Story:
Como bibliotecário autenticado,
eu quero registrar empréstimos de livros para leitores,
para que eu possa controlar os livros emprestados, seus prazos de devolução e valores cobrados.

Regras de Negócio:
- Um livro só pode ser emprestado se estiver disponível.
- O empréstimo deve registrar obrigatoriamente: livro emprestado, leitor, data de empréstimo, prazo de devolução, valor do empréstimo, valor de multa diária.
- Ao emprestar um livro, ele deverá ficar como indisponível.
- Ao registrar a devolução, o status do livro deveria voltar para disponível, o empréstimo deve ser marcado como "devolvido", e a data de devolução e valor pago deverão ser registrados.
- Se o livro for devolvido após o prazo de devolução definido no empréstimo do livro, o sistema deve:
Calcular o número de dias de atraso.
Calcular o valor total devido como: valor total = valor do empréstimo + (dias de atraso × valor da multa diária).
Armazenar o valor total devido no registro do empréstimo.